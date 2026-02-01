# Dan AI - Prompt Engineering Mastery

A comprehensive interactive course platform teaching AI prompt engineering from beginner to professional level, with blockchain-verified NFT certificates minted using $NODE tokens.

## Features

- **12 Comprehensive Modules**: Progressive curriculum covering prompt fundamentals to advanced techniques
- **Interactive Exercises**: Hands-on practice challenges for each lesson
- **Progress Tracking**: Local storage persistence of course completion
- **Blockchain Certificates**: Mint NFT certificates on-chain upon course completion
- **$NODE Token Integration**: 50 $NODE token minting fee for certificates
- **Web3 Wallet Support**: MetaMask and other Web3 wallet integration

## Course Curriculum

### Beginner Level
1. Introduction to AI & Prompts
2. Basic Prompt Structure
3. Being Specific & Clear
4. Using Examples

### Intermediate Level
5. Role-Based Prompting
6. Chain of Thought
7. Iterative Refinement
8. Constraints & Boundaries

### Advanced Level
9. Multi-Step Instructions
10. Output Formatting
11. Context Management
12. Mastery: Combining Techniques

## Tech Stack

**Frontend:**
- Vanilla JavaScript
- HTML5
- Tailwind CSS (CDN)
- Ethers.js (Web3 integration)

**Backend:**
- Node.js
- Express.js
- SQLite (database)
- Ethers.js (blockchain interaction)

## Development

### Frontend
The frontend runs on port 8080 and is accessible via browser.

Open `index.html` in a browser or use a local server:
```bash
# Using Python
python -m http.server 8080

# Using Node.js http-server
npx http-server -p 8080
```

### Backend
The backend runs on port 3000.

```bash
cd backend
npm install
npm start
```

Server will be available at:
- Local: http://localhost:3000
- API endpoints:
  - GET /api/health
  - POST /api/mint-certificate
  - GET /api/certificates/:walletAddress
  - GET /api/verify/:tokenId
  - GET /api/stats

## Environment Variables

Create a `.env` file in the `/backend` directory:

```bash
# Blockchain Configuration
RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=your_wallet_private_key_here

# Contract Addresses
CERTIFICATE_CONTRACT_ADDRESS=0x742d35Cc6634C0532925a3b844Bc454e4438f44e
NODE_TOKEN_ADDRESS=0x1234567890123456789012345678901234567890

# Server Configuration
PORT=3000
DEMO_MODE=true
```

## Demo Mode

By default, the application runs in **DEMO MODE** which simulates blockchain transactions without requiring actual crypto assets. This allows you to test the full flow without:
- Real $NODE tokens
- Gas fees
- Deployed smart contracts
- Blockchain network connection

Set `DEMO_MODE=false` in `.env` for production blockchain integration.

## Blockchain Integration

### Smart Contract Requirements

The platform expects two contracts:

1. **Certificate NFT Contract**
   - Function: `mintCertificate(address to, string courseName, string completionDate)`
   - Charges 50 $NODE tokens as minting fee
   - Returns unique token ID

2. **$NODE Token Contract**
   - Standard ERC20 token
   - Users must approve contract to spend tokens before minting

### Minting Flow

1. User completes all 12 course modules
2. User connects Web3 wallet (MetaMask)
3. User approves $NODE token spending (if not already approved)
4. User clicks "Mint Certificate"
5. Backend verifies completion and processes minting
6. NFT certificate minted to user's wallet
7. Certificate record saved to database

## Database Schema

**certificates table:**
```sql
CREATE TABLE certificates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wallet_address TEXT NOT NULL,
  course_name TEXT NOT NULL,
  completion_date TEXT NOT NULL,
  transaction_hash TEXT,
  token_id INTEGER,
  minted_at TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## API Endpoints

### POST /api/mint-certificate
Mint a new certificate NFT
```json
{
  "walletAddress": "0x...",
  "completionDate": "2026-02-01T00:00:00.000Z",
  "courseName": "Dan AI: Prompt Engineering Mastery"
}
```

### GET /api/certificates/:walletAddress
Get all certificates for a wallet address

### GET /api/verify/:tokenId
Verify a certificate by token ID

### GET /api/stats
Get platform statistics (total certificates, unique learners)

## Security Considerations

- Never commit `.env` file or private keys
- Use environment variables for sensitive data
- Validate all user inputs on backend
- Implement rate limiting for API endpoints
- Use HTTPS in production
- Implement proper authentication for admin endpoints

## Deployment

**Frontend**: Deploy static files to any hosting service (Vercel, Netlify, GitHub Pages)

**Backend**: Deploy to Node.js hosting (Heroku, Railway, DigitalOcean)

Ensure:
- Environment variables are set correctly
- CORS is configured for your frontend domain
- Database is backed up regularly
- Smart contracts are deployed and verified

## Theme

Clean Light - Professional white background with blue accents (#2563eb primary, #f8fafc background, clean typography)

## License

MIT