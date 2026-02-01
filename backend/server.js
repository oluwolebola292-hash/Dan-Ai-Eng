const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { ethers } = require('ethers');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    initDatabase();
  }
});

// Create tables
function initDatabase() {
  db.run(`
    CREATE TABLE IF NOT EXISTS certificates (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      wallet_address TEXT NOT NULL,
      course_name TEXT NOT NULL,
      completion_date TEXT NOT NULL,
      transaction_hash TEXT,
      token_id INTEGER,
      minted_at TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Table creation error:', err);
    } else {
      console.log('Certificates table ready');
    }
  });
}

// Smart Contract Configuration (Demo - Replace with actual deployed contract)
const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'; // Example address
const NODE_TOKEN_ADDRESS = '0x1234567890123456789012345678901234567890'; // Example $NODE token address

// Simplified ABI for certificate NFT
const CERTIFICATE_ABI = [
  "function mintCertificate(address to, string memory courseName, string memory completionDate) public returns (uint256)",
  "function totalSupply() public view returns (uint256)"
];

// Simplified ABI for ERC20 token (NODE)
const ERC20_ABI = [
  "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
  "function balanceOf(address account) public view returns (uint256)",
  "function allowance(address owner, address spender) public view returns (uint256)"
];

// Demo mode flag - set to true for development without actual blockchain
const DEMO_MODE = true;

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Dan AI Course API is running',
    demoMode: DEMO_MODE
  });
});

// Get all certificates for a wallet
app.get('/api/certificates/:walletAddress', (req, res) => {
  const { walletAddress } = req.params;
  
  db.all(
    'SELECT * FROM certificates WHERE wallet_address = ? ORDER BY created_at DESC',
    [walletAddress.toLowerCase()],
    (err, rows) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ certificates: rows });
    }
  );
});

// Mint certificate NFT
app.post('/api/mint-certificate', async (req, res) => {
  const { walletAddress, completionDate, courseName } = req.body;
  
  if (!walletAddress || !completionDate || !courseName) {
    return res.status(400).json({ 
      error: 'Missing required fields: walletAddress, completionDate, courseName' 
    });
  }
  
  try {
    if (DEMO_MODE) {
      // Demo mode - simulate successful minting
      const mockTxHash = '0x' + Math.random().toString(16).substring(2, 66);
      const mockTokenId = Math.floor(Math.random() * 10000) + 1;
      
      // Save to database
      db.run(
        `INSERT INTO certificates (wallet_address, course_name, completion_date, transaction_hash, token_id, minted_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          walletAddress.toLowerCase(),
          courseName,
          completionDate,
          mockTxHash,
          mockTokenId,
          new Date().toISOString()
        ],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Database error' });
          }
          
          res.json({
            success: true,
            transactionHash: mockTxHash,
            tokenId: mockTokenId,
            message: 'Certificate minted successfully (DEMO MODE)',
            certificateId: this.lastID
          });
        }
      );
    } else {
      // Production mode - actual blockchain interaction
      
      // Connect to blockchain (requires RPC URL and private key in production)
      const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL || 'http://localhost:8545');
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
      
      // Initialize contracts
      const certificateContract = new ethers.Contract(CONTRACT_ADDRESS, CERTIFICATE_ABI, wallet);
      const nodeToken = new ethers.Contract(NODE_TOKEN_ADDRESS, ERC20_ABI, wallet);
      
      // Check $NODE token balance
      const mintingFee = ethers.utils.parseUnits('50', 18); // 50 NODE tokens
      const balance = await nodeToken.balanceOf(walletAddress);
      
      if (balance.lt(mintingFee)) {
        return res.status(400).json({ 
          error: 'Insufficient $NODE token balance. Required: 50 NODE' 
        });
      }
      
      // Check allowance
      const allowance = await nodeToken.allowance(walletAddress, CONTRACT_ADDRESS);
      if (allowance.lt(mintingFee)) {
        return res.status(400).json({ 
          error: 'Please approve the contract to spend 50 $NODE tokens first' 
        });
      }
      
      // Mint certificate
      const tx = await certificateContract.mintCertificate(
        walletAddress,
        courseName,
        completionDate
      );
      
      const receipt = await tx.wait();
      const tokenId = await certificateContract.totalSupply();
      
      // Save to database
      db.run(
        `INSERT INTO certificates (wallet_address, course_name, completion_date, transaction_hash, token_id, minted_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          walletAddress.toLowerCase(),
          courseName,
          completionDate,
          receipt.transactionHash,
          tokenId.toString(),
          new Date().toISOString()
        ],
        function(err) {
          if (err) {
            console.error('Database save error:', err);
            // Transaction succeeded but DB failed - log for manual recovery
          }
          
          res.json({
            success: true,
            transactionHash: receipt.transactionHash,
            tokenId: tokenId.toString(),
            message: 'Certificate minted successfully',
            certificateId: this.lastID
          });
        }
      );
    }
  } catch (error) {
    console.error('Minting error:', error);
    res.status(500).json({ 
      error: 'Failed to mint certificate',
      details: error.message 
    });
  }
});

// Get certificate stats
app.get('/api/stats', (req, res) => {
  db.get(
    'SELECT COUNT(*) as total_certificates, COUNT(DISTINCT wallet_address) as unique_learners FROM certificates',
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(row);
    }
  );
});

// Verify certificate
app.get('/api/verify/:tokenId', (req, res) => {
  const { tokenId } = req.params;
  
  db.get(
    'SELECT * FROM certificates WHERE token_id = ?',
    [tokenId],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      if (!row) {
        return res.status(404).json({ 
          verified: false, 
          message: 'Certificate not found' 
        });
      }
      
      res.json({
        verified: true,
        certificate: {
          walletAddress: row.wallet_address,
          courseName: row.course_name,
          completionDate: row.completion_date,
          mintedAt: row.minted_at,
          transactionHash: row.transaction_hash
        }
      });
    }
  );
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Demo mode: ${DEMO_MODE}`);
  if (DEMO_MODE) {
    console.log('⚠️  Running in DEMO mode - no actual blockchain transactions');
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('Database connection closed');
    }
    process.exit(0);
  });
});