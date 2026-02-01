// Course Data
const courseModules = [
  {
    id: 1,
    level: 'Beginner',
    title: 'Introduction to AI & Prompts',
    description: 'Understanding what AI is and how prompts work',
    content: `
      <h3 class="text-xl font-semibold mb-4">What is Artificial Intelligence?</h3>
      <p class="mb-4">Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. Modern AI models like ChatGPT, Claude, and GPT-4 use machine learning to understand and generate human-like text.</p>
      
      <h3 class="text-xl font-semibold mb-4">What is a Prompt?</h3>
      <p class="mb-4">A prompt is the instruction or question you give to an AI model. The quality of your prompt directly affects the quality of the AI's response.</p>
      
      <h3 class="text-xl font-semibold mb-4">Why Prompt Engineering Matters</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Get more accurate and useful responses</li>
        <li>Save time by getting what you need on the first try</li>
        <li>Unlock advanced AI capabilities</li>
        <li>Create better content, code, and solutions</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="font-semibold mb-2">Key Takeaway:</p>
        <p>Think of prompts as a conversation with an intelligent assistant. The clearer your instructions, the better the results.</p>
      </div>
    `,
    exercise: {
      prompt: 'Write a simple prompt asking an AI to explain quantum computing to a 10-year-old.',
      hint: 'Be specific about the audience and complexity level you want.'
    }
  },
  {
    id: 2,
    level: 'Beginner',
    title: 'Basic Prompt Structure',
    description: 'Learn the fundamental components of effective prompts',
    content: `
      <h3 class="text-xl font-semibold mb-4">The Three Core Elements</h3>
      <p class="mb-4">Every effective prompt contains:</p>
      
      <div class="space-y-4 mb-6">
        <div class="border-l-4 border-blue-600 pl-4">
          <h4 class="font-semibold">1. Context</h4>
          <p class="text-gray-700">Background information the AI needs to understand your request</p>
          <p class="text-sm text-gray-600 italic">Example: "You are a professional chef with 20 years of experience..."</p>
        </div>
        
        <div class="border-l-4 border-blue-600 pl-4">
          <h4 class="font-semibold">2. Task</h4>
          <p class="text-gray-700">What you want the AI to do</p>
          <p class="text-sm text-gray-600 italic">Example: "Create a 7-day meal plan..."</p>
        </div>
        
        <div class="border-l-4 border-blue-600 pl-4">
          <h4 class="font-semibold">3. Format</h4>
          <p class="text-gray-700">How you want the response structured</p>
          <p class="text-sm text-gray-600 italic">Example: "Present this as a table with breakfast, lunch, and dinner..."</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Example: Basic vs. Structured Prompt</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-red-50 p-4 rounded-lg">
          <p class="font-semibold text-red-800 mb-2">❌ Basic:</p>
          <p class="text-sm">"Tell me about marketing"</p>
        </div>
        <div class="bg-green-50 p-4 rounded-lg">
          <p class="font-semibold text-green-800 mb-2">✅ Structured:</p>
          <p class="text-sm">"As a marketing expert, explain the top 3 digital marketing strategies for small businesses in 2026. Format as bullet points with brief explanations."</p>
        </div>
      </div>
    `,
    exercise: {
      prompt: 'Create a structured prompt asking an AI to write a product description for eco-friendly water bottles. Include context, task, and format.',
      hint: 'Define the role, specify what you want, and state how you want it presented.'
    }
  },
  {
    id: 3,
    level: 'Beginner',
    title: 'Being Specific & Clear',
    description: 'The power of precision in prompt crafting',
    content: `
      <h3 class="text-xl font-semibold mb-4">Specificity = Quality</h3>
      <p class="mb-4">The more specific your prompt, the more targeted and useful the AI's response will be.</p>
      
      <h3 class="text-xl font-semibold mb-4">What to Specify:</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Audience:</strong> Who is this for? (beginners, experts, children, professionals)</li>
        <li><strong>Tone:</strong> How should it sound? (formal, casual, humorous, technical)</li>
        <li><strong>Length:</strong> How long should the response be? (brief, detailed, 500 words, 3 paragraphs)</li>
        <li><strong>Style:</strong> What style to use? (academic, conversational, persuasive)</li>
        <li><strong>Constraints:</strong> What to avoid or include? (no jargon, include examples)</li>
      </ul>
      
      <div class="bg-yellow-50 p-4 rounded-lg mb-4">
        <p class="font-semibold mb-2">⚡ Pro Tip:</p>
        <p>Use numbers and measurable criteria when possible. Instead of "write a short article", say "write a 300-word article".</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Examples:</h3>
      <div class="space-y-3">
        <div class="bg-gray-50 p-4 rounded">
          <p class="text-sm font-semibold mb-1">Vague:</p>
          <p class="text-sm mb-2">"Write about exercise"</p>
          <p class="text-sm font-semibold mb-1">Specific:</p>
          <p class="text-sm">"Write a 400-word beginner's guide to starting a home workout routine. Use an encouraging tone, include 5 essential exercises with brief descriptions, and avoid gym equipment."</p>
        </div>
      </div>
    `,
    exercise: {
      prompt: 'Improve this vague prompt: "Tell me about healthy eating" - Make it specific by defining audience, length, tone, and what to include.',
      hint: 'Add at least 4 specific parameters: who it\'s for, how long, what style, and what topics to cover.'
    }
  },
  {
    id: 4,
    level: 'Beginner',
    title: 'Using Examples',
    description: 'Show the AI what you want with concrete examples',
    content: `
      <h3 class="text-xl font-semibold mb-4">The Power of Examples</h3>
      <p class="mb-4">One of the most effective techniques is showing the AI exactly what you want through examples. This is called "few-shot prompting".</p>
      
      <h3 class="text-xl font-semibold mb-4">Example Template:</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
        <p class="mb-2">Task: [What you want]</p>
        <p class="mb-2">Example 1: [Your example]</p>
        <p class="mb-2">Example 2: [Your example]</p>
        <p>Now do this for: [Your actual request]</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Real Example:</h3>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p class="mb-2">"Convert these product names to catchy taglines:</p>
        <p class="mb-1">EcoBottle → "Hydration with a conscience"</p>
        <p class="mb-1">SmartDesk → "Your workspace, elevated"</p>
        <p class="mb-2">Now create a tagline for: RunFast Athletic Shoes"</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">When to Use Examples:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>When you need a specific format or style</li>
        <li>For creative tasks with a particular tone</li>
        <li>When previous attempts were close but not quite right</li>
        <li>To maintain consistency across multiple outputs</li>
      </ul>
    `,
    exercise: {
      prompt: 'Create a prompt that uses 2 examples to teach the AI how to convert technical jargon into simple language. Then ask it to convert "API endpoint authentication".',
      hint: 'Show 2 examples of jargon → simple language, then ask for the conversion of the technical term.'
    }
  },
  {
    id: 5,
    level: 'Intermediate',
    title: 'Role-Based Prompting',
    description: 'Leverage AI personas for better specialized responses',
    content: `
      <h3 class="text-xl font-semibold mb-4">Assigning Roles to AI</h3>
      <p class="mb-4">By asking the AI to assume a specific role or persona, you can get responses tailored to that expertise level and perspective.</p>
      
      <h3 class="text-xl font-semibold mb-4">Role Prompting Formula:</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
        You are a [specific role] with [qualifications/experience].
        <br>Your task is to [specific task].
        <br>Consider [relevant factors].
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Examples of Effective Roles:</h3>
      <div class="grid md:grid-cols-2 gap-3 mb-4">
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold text-sm">Senior Software Engineer</p>
          <p class="text-xs text-gray-700">For code reviews, architecture decisions</p>
        </div>
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold text-sm">Marketing Strategist</p>
          <p class="text-xs text-gray-700">For campaign ideas, brand messaging</p>
        </div>
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold text-sm">Financial Advisor</p>
          <p class="text-xs text-gray-700">For budgeting, investment guidance</p>
        </div>
        <div class="bg-blue-50 p-3 rounded">
          <p class="font-semibold text-sm">Education Specialist</p>
          <p class="text-xs text-gray-700">For lesson plans, learning strategies</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Complete Example:</h3>
      <div class="bg-green-50 p-4 rounded-lg">
        <p class="text-sm">"You are a certified nutritionist with 15 years of experience in plant-based diets. Create a 5-day meal plan for a vegan athlete training for a marathon. Include macronutrient breakdowns and consider high protein needs."</p>
      </div>
    `,
    exercise: {
      prompt: 'Create a role-based prompt where the AI is a UX designer reviewing a mobile app. Ask them to identify 3 usability issues with a food delivery app checkout process.',
      hint: 'Define the role with expertise, state the task clearly, and specify what you want analyzed.'
    }
  },
  {
    id: 6,
    level: 'Intermediate',
    title: 'Chain of Thought',
    description: 'Get better reasoning by asking AI to show its work',
    content: `
      <h3 class="text-xl font-semibold mb-4">What is Chain of Thought?</h3>
      <p class="mb-4">Chain of Thought (CoT) prompting asks the AI to break down its reasoning step-by-step, leading to more accurate and transparent results.</p>
      
      <h3 class="text-xl font-semibold mb-4">Key Phrases to Trigger CoT:</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>"Let's think step by step"</li>
        <li>"Explain your reasoning"</li>
        <li>"Show your work"</li>
        <li>"Break this down into steps"</li>
        <li>"What's your thought process?"</li>
      </ul>
      
      <h3 class="text-xl font-semibold mb-4">When to Use CoT:</h3>
      <div class="space-y-3 mb-4">
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Complex Problem Solving</p>
          <p class="text-sm text-gray-700">Math problems, logic puzzles, strategic planning</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Decision Making</p>
          <p class="text-sm text-gray-700">Comparing options, weighing pros and cons</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Debugging & Analysis</p>
          <p class="text-sm text-gray-700">Finding errors, diagnosing issues</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Example:</h3>
      <div class="bg-blue-50 p-4 rounded-lg">
        <p class="font-semibold mb-2">Without CoT:</p>
        <p class="text-sm mb-3">"Should I launch my product in summer or winter?"</p>
        <p class="font-semibold mb-2">With CoT:</p>
        <p class="text-sm">"I'm deciding whether to launch my outdoor fitness product in summer or winter. Let's think step by step: consider market demand, competition, seasonality, and budget. Explain your reasoning for each factor and then provide a recommendation."</p>
      </div>
    `,
    exercise: {
      prompt: 'Create a Chain of Thought prompt asking the AI to help decide which programming language to learn first as a beginner. Include step-by-step reasoning request.',
      hint: 'Ask the AI to consider multiple factors step-by-step: career goals, learning curve, job market, etc.'
    }
  },
  {
    id: 7,
    level: 'Intermediate',
    title: 'Iterative Refinement',
    description: 'Improve responses through guided follow-ups',
    content: `
      <h3 class="text-xl font-semibold mb-4">The Refinement Process</h3>
      <p class="mb-4">Rarely will you get the perfect response on the first try. Iterative refinement means building on previous responses to get exactly what you need.</p>
      
      <h3 class="text-xl font-semibold mb-4">Refinement Strategies:</h3>
      <div class="space-y-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">1. Ask for Variations</p>
          <p class="text-sm">"Give me 3 different versions of this"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">2. Request Adjustments</p>
          <p class="text-sm">"Make it more formal" / "Shorten this to 100 words"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">3. Add Constraints</p>
          <p class="text-sm">"Good, but also include examples from 2025"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <p class="font-semibold mb-2">4. Focus on Specific Parts</p>
          <p class="text-sm">"Expand the second paragraph with more details"</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Example Conversation:</h3>
      <div class="space-y-2">
        <div class="bg-blue-50 p-3 rounded">
          <p class="text-xs font-semibold mb-1">Prompt 1:</p>
          <p class="text-sm">"Write a welcome email for new customers"</p>
        </div>
        <div class="bg-green-50 p-3 rounded">
          <p class="text-xs font-semibold mb-1">Prompt 2:</p>
          <p class="text-sm">"Make it friendlier and add a discount code"</p>
        </div>
        <div class="bg-green-50 p-3 rounded">
          <p class="text-xs font-semibold mb-1">Prompt 3:</p>
          <p class="text-sm">"Perfect, now create a subject line that will increase open rates"</p>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg mt-4">
        <p class="font-semibold mb-2">💡 Pro Tip:</p>
        <p class="text-sm">Use phrases like "based on that", "building on this", or "keep everything but change..." to maintain context while refining.</p>
      </div>
    `,
    exercise: {
      prompt: 'Write an initial prompt for a blog post intro, then write 2 follow-up refinement prompts that would improve it (make it more engaging, add a hook, adjust length, etc.).',
      hint: 'First prompt: basic request. Second: one specific improvement. Third: another specific refinement.'
    }
  },
  {
    id: 8,
    level: 'Intermediate',
    title: 'Constraints & Boundaries',
    description: 'Guide AI output by defining what NOT to do',
    content: `
      <h3 class="text-xl font-semibold mb-4">The Power of Constraints</h3>
      <p class="mb-4">Sometimes the best way to get what you want is to clearly define what you DON'T want. Constraints help focus the AI's creative space.</p>
      
      <h3 class="text-xl font-semibold mb-4">Types of Constraints:</h3>
      <div class="space-y-3 mb-6">
        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold">Content Constraints</p>
          <p class="text-sm text-gray-700">"Avoid technical jargon", "Don't mention competitors"</p>
        </div>
        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold">Length Constraints</p>
          <p class="text-sm text-gray-700">"Maximum 200 words", "No more than 5 bullet points"</p>
        </div>
        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold">Style Constraints</p>
          <p class="text-sm text-gray-700">"No emojis", "Avoid clichés", "Don't use exclamation marks"</p>
        </div>
        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold">Topic Constraints</p>
          <p class="text-sm text-gray-700">"Focus only on 2025-2026 data", "Exclude medical advice"</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Example with Constraints:</h3>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p class="text-sm">"Write a product announcement for our new wireless headphones. Target tech-savvy millennials. Keep it under 150 words. Use a conversational tone but avoid slang. Don't mention price or compare to competitors. Focus only on noise-cancellation and battery life features."</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Positive vs. Negative Framing:</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-green-50 p-4 rounded">
          <p class="font-semibold text-green-800 mb-2">✅ Positive:</p>
          <p class="text-sm">"Include only verified statistics from 2025"</p>
        </div>
        <div class="bg-red-50 p-4 rounded">
          <p class="font-semibold text-red-800 mb-2">⛔ Negative:</p>
          <p class="text-sm">"Don't use old data or unverified claims"</p>
        </div>
      </div>
      <p class="text-sm text-gray-600 mt-2">Both work, but combining them is most effective!</p>
    `,
    exercise: {
      prompt: 'Create a prompt for writing a company culture blog post. Include at least 4 different types of constraints (content, length, style, and topic).',
      hint: 'Specify what to include AND what to avoid. Mix positive instructions with negative boundaries.'
    }
  },
  {
    id: 9,
    level: 'Advanced',
    title: 'Multi-Step Instructions',
    description: 'Complex workflows with sequential tasks',
    content: `
      <h3 class="text-xl font-semibold mb-4">Breaking Down Complex Tasks</h3>
      <p class="mb-4">For complex projects, you can give the AI a series of steps to follow in sequence. This ensures thorough, structured output.</p>
      
      <h3 class="text-xl font-semibold mb-4">Multi-Step Template:</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm">
        <p>Step 1: [First task]</p>
        <p>Step 2: [Second task]</p>
        <p>Step 3: [Third task]</p>
        <p>Step 4: [Final task]</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Real Example:</h3>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p class="text-sm mb-2">"Help me create a content marketing strategy:</p>
        <p class="text-sm mb-1">Step 1: Identify 3 target audience personas with demographics</p>
        <p class="text-sm mb-1">Step 2: For each persona, list 5 pain points</p>
        <p class="text-sm mb-1">Step 3: Generate 10 blog post topics addressing these pain points</p>
        <p class="text-sm">Step 4: Create a 3-month content calendar distributing these topics"</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Advanced Techniques:</h3>
      <ul class="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Conditional Steps:</strong> "If X, then do Y, otherwise do Z"</li>
        <li><strong>Numbered Lists:</strong> Use clear numbering for easy reference</li>
        <li><strong>Sub-steps:</strong> Break complex steps into 1a, 1b, 1c</li>
        <li><strong>Dependencies:</strong> "After completing step 2, use that data for step 3"</li>
      </ul>
      
      <div class="bg-yellow-50 p-4 rounded-lg">
        <p class="font-semibold mb-2">⚡ Pro Tip:</p>
        <p class="text-sm">For very complex tasks, ask the AI to complete each step one at a time, reviewing and refining before moving to the next.</p>
      </div>
    `,
    exercise: {
      prompt: 'Create a multi-step prompt (at least 4 steps) for planning a product launch. Each step should build on the previous one.',
      hint: 'Think: research → strategy → tactics → timeline. Make each step specific and actionable.'
    }
  },
  {
    id: 10,
    level: 'Advanced',
    title: 'Output Formatting',
    description: 'Control exactly how responses are structured',
    content: `
      <h3 class="text-xl font-semibold mb-4">Structured Output Formats</h3>
      <p class="mb-4">You can specify exactly how you want the AI to format its response - tables, JSON, markdown, bullet points, and more.</p>
      
      <h3 class="text-xl font-semibold mb-4">Common Format Types:</h3>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded">
          <p class="font-semibold mb-2">📊 Tables</p>
          <p class="text-xs">"Format as a markdown table with columns: Name, Price, Features"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded">
          <p class="font-semibold mb-2">📝 Bullet Points</p>
          <p class="text-xs">"Present as hierarchical bullet points with main points and sub-points"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded">
          <p class="font-semibold mb-2">💾 JSON</p>
          <p class="text-xs">"Return as valid JSON with fields: title, description, tags"</p>
        </div>
        <div class="bg-gray-50 p-4 rounded">
          <p class="font-semibold mb-2">📧 Email Format</p>
          <p class="text-xs">"Format as a professional email with subject, greeting, body, signature"</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Example: JSON Output</h3>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p class="text-sm mb-2">"Create 3 product ideas for eco-friendly office supplies. Format as JSON array with fields: name, description, target_price, sustainability_feature."</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Template Formats:</h3>
      <div class="bg-gray-50 p-4 rounded-lg mb-4">
        <p class="text-sm mb-2">You can provide a template:</p>
        <p class="text-xs font-mono mb-2">"Use this format:</p>
        <p class="text-xs font-mono mb-2">## [Title]</p>
        <p class="text-xs font-mono mb-2">**Summary:** [Brief overview]</p>
        <p class="text-xs font-mono">**Key Points:** [Numbered list]"</p>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg">
        <p class="font-semibold mb-2">💡 Advanced:</p>
        <p class="text-sm">Combine formats: "Create a table, then below it add 3 key insights as bullet points, followed by a brief summary paragraph."</p>
      </div>
    `,
    exercise: {
      prompt: 'Create a prompt that asks for a competitive analysis of 3 smartphone brands, formatted as a comparison table followed by a JSON summary of the winner and reasoning.',
      hint: 'Specify the table columns, what data to include, and the exact JSON structure you want.'
    }
  },
  {
    id: 11,
    level: 'Advanced',
    title: 'Context Management',
    description: 'Maintaining and leveraging conversation context',
    content: `
      <h3 class="text-xl font-semibold mb-4">Understanding Context Windows</h3>
      <p class="mb-4">AI models maintain context from your conversation, but this context has limits. Managing it effectively is crucial for complex, multi-turn interactions.</p>
      
      <h3 class="text-xl font-semibold mb-4">Context Best Practices:</h3>
      <div class="space-y-3 mb-6">
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Explicit References</p>
          <p class="text-sm text-gray-700">"Using the marketing strategy from earlier..." or "Building on the code you just wrote..."</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Summarize When Needed</p>
          <p class="text-sm text-gray-700">"To recap: we're building a fitness app for seniors with these 5 features..."</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Reset When Switching Topics</p>
          <p class="text-sm text-gray-700">"New topic: Let's now focus on..." or "Forget the previous task, here's something different..."</p>
        </div>
        <div class="border-l-4 border-blue-600 pl-4">
          <p class="font-semibold">Reference Specific Items</p>
          <p class="text-sm text-gray-700">"In option 2 you mentioned..." or "Take the third example and..."</p>
        </div>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Long Conversation Strategy:</h3>
      <div class="bg-blue-50 p-4 rounded-lg mb-4">
        <p class="text-sm mb-2"><strong>Instead of:</strong> "Make it better"</p>
        <p class="text-sm"><strong>Say:</strong> "Make the product description you wrote 3 messages ago more concise, keeping the key benefits you listed in bullet points."</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">When to Start Fresh:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>When switching to a completely different project</li>
        <li>If responses become inconsistent or confused</li>
        <li>After many back-and-forth refinements</li>
        <li>When context window limits are reached</li>
      </ul>
      
      <div class="bg-yellow-50 p-4 rounded-lg mt-4">
        <p class="font-semibold mb-2">⚡ Pro Tip:</p>
        <p class="text-sm">For large projects, periodically ask the AI to summarize what's been established so far. This helps maintain clarity.</p>
      </div>
    `,
    exercise: {
      prompt: 'Write a prompt that references hypothetical previous conversation context (assume you\'ve been discussing a website redesign project) and asks for a specific refinement while maintaining that context.',
      hint: 'Explicitly mention what was discussed before, reference specific elements, then ask for a targeted change.'
    }
  },
  {
    id: 12,
    level: 'Advanced',
    title: 'Mastery: Combining Techniques',
    description: 'Synthesize all techniques into expert-level prompts',
    content: `
      <h3 class="text-xl font-semibold mb-4">The Complete Prompt Framework</h3>
      <p class="mb-4">Expert prompt engineers combine multiple techniques into comprehensive, powerful prompts that yield exceptional results.</p>
      
      <h3 class="text-xl font-semibold mb-4">Master Prompt Checklist:</h3>
      <div class="space-y-2 mb-6">
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Role:</strong> Defined expertise/persona</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Context:</strong> Relevant background information</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Task:</strong> Clear, specific objective</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Examples:</strong> Demonstrations when helpful</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Constraints:</strong> Boundaries and limitations</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Format:</strong> Output structure specified</span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" class="mt-1" disabled>
          <span class="text-sm">✅ <strong>Tone:</strong> Style and voice defined</span>
        </label>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Expert-Level Example:</h3>
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg mb-4 border-2 border-blue-200">
        <p class="text-sm font-semibold mb-3">🎯 Master Prompt:</p>
        <p class="text-sm mb-3">"You are a senior product manager at a successful SaaS company with expertise in user onboarding and retention.</p>
        <p class="text-sm mb-3">Context: We're launching a project management tool for remote teams. Our beta users reported confusion during initial setup.</p>
        <p class="text-sm mb-3">Task: Design a 4-step onboarding flow that guides new users from signup to their first completed task.</p>
        <p class="text-sm mb-3">Requirements:
        - Each step should take less than 2 minutes
        - Include progressive disclosure (don't overwhelm users)
        - Add one "aha moment" that demonstrates value
        - Consider mobile and desktop experiences</p>
        <p class="text-sm mb-3">Constraints:
        - No video tutorials (we lack resources)
        - Must work without email verification (privacy concerns)
        - Avoid jargon or technical terms</p>
        <p class="text-sm">Format: Present as a numbered list with step name, description, user action, and success metric for each step. Then provide a brief rationale for your design choices."</p>
      </div>
      
      <h3 class="text-xl font-semibold mb-4">Your Journey Complete</h3>
      <p class="mb-4">You now have the tools to craft professional-grade prompts for any scenario. The key is practice and iteration.</p>
      
      <div class="bg-green-50 p-4 rounded-lg">
        <p class="font-semibold mb-2">🎓 Final Wisdom:</p>
        <p class="text-sm">The best prompt engineers are curious experimenters. Test variations, learn from results, and continuously refine your approach.</p>
      </div>
    `,
    exercise: {
      prompt: 'Create a master-level prompt that combines at least 5 different techniques from this course. The topic is your choice - showcase your full skillset!',
      hint: 'Include: role, context, multi-step task, constraints, examples or CoT reasoning, and format specification. Make it comprehensive!'
    }
  }
];

// State Management
let state = {
  currentLessonIndex: 0,
  completedLessons: new Set(),
  walletAddress: null,
  provider: null,
  signer: null,
  exerciseCompleted: false
};

// DOM Elements
const welcomeSection = document.getElementById('welcomeSection');
const progressSection = document.getElementById('progressSection');
const lessonContent = document.getElementById('lessonContent');
const certificateSection = document.getElementById('certificateSection');
const moduleList = document.getElementById('moduleList');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const connectWalletBtn = document.getElementById('connectWalletBtn');
const startCourseBtn = document.getElementById('startCourseBtn');
const prevLessonBtn = document.getElementById('prevLessonBtn');
const nextLessonBtn = document.getElementById('nextLessonBtn');
const mintCertificateBtn = document.getElementById('mintCertificateBtn');

// Initialize
function init() {
  loadProgress();
  renderModuleList();
  setupEventListeners();
}

// Load progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem('courseProgress');
  if (saved) {
    const data = JSON.parse(saved);
    state.completedLessons = new Set(data.completedLessons || []);
    state.currentLessonIndex = data.currentLessonIndex || 0;
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('courseProgress', JSON.stringify({
    completedLessons: Array.from(state.completedLessons),
    currentLessonIndex: state.currentLessonIndex
  }));
}

// Render module list sidebar
function renderModuleList() {
  moduleList.innerHTML = courseModules.map((module, index) => {
    const isCompleted = state.completedLessons.has(module.id);
    const isCurrent = index === state.currentLessonIndex;
    
    return `
      <button 
        class="module-item w-full text-left p-4 rounded-xl transition-all ${
          isCurrent ? 'module-active shadow-lg scale-105' : 'glass-dark hover:bg-purple-50 border border-purple-200'
        }" 
        data-index="${index}"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="text-xs font-bold ${isCurrent ? 'text-white' : 'text-purple-600'} mb-1">${module.level}</div>
            <div class="text-sm font-semibold ${isCurrent ? 'text-white' : 'text-gray-900'}">${module.title}</div>
          </div>
          ${isCompleted ? '<span class="text-green-500 text-xl">✓</span>' : ''}
        </div>
      </button>
    `;
  }).join('');

  // Add click handlers
  document.querySelectorAll('.module-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.dataset.index);
      loadLesson(index);
    });
  });
}

// Load and display a lesson
function loadLesson(index) {
  state.currentLessonIndex = index;
  state.exerciseCompleted = false;
  const lesson = courseModules[index];
  
  // Show lesson, hide others
  welcomeSection.classList.add('hidden');
  progressSection.classList.remove('hidden');
  lessonContent.classList.remove('hidden');
  certificateSection.classList.add('hidden');
  
  // Update content
  document.getElementById('lessonLevel').textContent = lesson.level;
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonDescription').textContent = lesson.description;
  document.getElementById('lessonBody').innerHTML = lesson.content;
  
  // Setup exercise
  const exerciseSection = document.getElementById('exerciseSection');
  if (lesson.exercise) {
    exerciseSection.classList.remove('hidden');
    document.getElementById('exercisePrompt').textContent = lesson.exercise.prompt;
    document.getElementById('exerciseAnswer').value = '';
    document.getElementById('exerciseFeedback').classList.add('hidden');
  } else {
    exerciseSection.classList.add('hidden');
  }
  
  // Update navigation buttons
  prevLessonBtn.disabled = index === 0;
  nextLessonBtn.disabled = false;
  
  // Update progress
  updateProgress();
  renderModuleList();
  saveProgress();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update progress bar
function updateProgress() {
  const progress = (state.completedLessons.size / courseModules.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}% Complete`;
}

// Submit exercise
function submitExercise() {
  const answer = document.getElementById('exerciseAnswer').value.trim();
  const feedback = document.getElementById('exerciseFeedback');
  
  if (!answer) {
    feedback.innerHTML = '<div class="bg-red-50 border border-red-200 text-red-800 p-3 rounded text-sm">Please write your prompt before submitting.</div>';
    feedback.classList.remove('hidden');
    return;
  }
  
  // Simple validation - check if answer has reasonable length
  if (answer.length < 20) {
    feedback.innerHTML = '<div class="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded text-sm">Your prompt seems a bit short. Try adding more details and context!</div>';
    feedback.classList.remove('hidden');
    return;
  }
  
  // Mark as completed
  state.exerciseCompleted = true;
  const currentLesson = courseModules[state.currentLessonIndex];
  state.completedLessons.add(currentLesson.id);
  
  feedback.innerHTML = `
    <div class="bg-green-50 border border-green-200 text-green-800 p-3 rounded text-sm">
      <p class="font-semibold mb-2">✅ Great work!</p>
      <p>Hint: ${currentLesson.exercise.hint}</p>
    </div>
  `;
  feedback.classList.remove('hidden');
  
  updateProgress();
  renderModuleList();
  saveProgress();
}

// Navigate to next lesson
function nextLesson() {
  if (state.currentLessonIndex < courseModules.length - 1) {
    loadLesson(state.currentLessonIndex + 1);
  } else {
    // Course complete - show certificate
    showCertificate();
  }
}

// Navigate to previous lesson
function prevLesson() {
  if (state.currentLessonIndex > 0) {
    loadLesson(state.currentLessonIndex - 1);
  }
}

// Show certificate section
function showCertificate() {
  welcomeSection.classList.add('hidden');
  lessonContent.classList.add('hidden');
  certificateSection.classList.remove('hidden');
  
  const date = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  document.getElementById('completionDate').textContent = date;
  
  updateWalletStatus();
}

// Connect Web3 wallet
async function connectWallet() {
  try {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask or another Web3 wallet to mint your certificate!');
      return;
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    
    state.provider = provider;
    state.signer = signer;
    state.walletAddress = address;
    
    connectWalletBtn.textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;
    connectWalletBtn.classList.remove('btn-gradient');
    connectWalletBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    
    updateWalletStatus();
  } catch (error) {
    console.error('Wallet connection error:', error);
    alert('Failed to connect wallet. Please try again.');
  }
}

// Update wallet status on certificate page
function updateWalletStatus() {
  const walletStatus = document.getElementById('walletStatus');
  
  if (state.walletAddress) {
    walletStatus.innerHTML = `<span class="text-green-600 font-semibold">✓ Wallet Connected: ${state.walletAddress.slice(0, 6)}...${state.walletAddress.slice(-4)}</span>`;
    mintCertificateBtn.disabled = false;
  } else {
    walletStatus.innerHTML = '<span class="text-gray-600">Please connect your wallet to mint your certificate</span>';
    mintCertificateBtn.disabled = true;
  }
}

// Mint certificate NFT
async function mintCertificate() {
  if (!state.walletAddress) {
    alert('Please connect your wallet first!');
    return;
  }
  
  const mintStatus = document.getElementById('mintStatus');
  mintStatus.innerHTML = '<div class="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded text-sm">Processing transaction...</div>';
  mintStatus.classList.remove('hidden');
  mintCertificateBtn.disabled = true;
  
  try {
    // Call backend API to mint certificate
    const response = await fetch('http://localhost:3000/api/mint-certificate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        walletAddress: state.walletAddress,
        completionDate: new Date().toISOString(),
        courseName: 'Dan AI: Prompt Engineering Mastery'
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      mintStatus.innerHTML = `
        <div class="bg-green-50 border border-green-200 text-green-800 p-4 rounded">
          <p class="font-semibold mb-2">🎉 Certificate Minted Successfully!</p>
          <p class="text-sm mb-2">Transaction: <a href="https://etherscan.io/tx/${data.transactionHash}" target="_blank" class="text-blue-600 underline">${data.transactionHash.slice(0, 10)}...</a></p>
          <p class="text-sm">Token ID: #${data.tokenId}</p>
        </div>
      `;
    } else {
      throw new Error(data.error || 'Minting failed');
    }
  } catch (error) {
    console.error('Minting error:', error);
    mintStatus.innerHTML = `
      <div class="bg-red-50 border border-red-200 text-red-800 p-3 rounded text-sm">
        <p class="font-semibold mb-1">Minting Failed</p>
        <p>${error.message}</p>
        <p class="mt-2 text-xs">Note: This is a demo. In production, ensure you have 10 $NODE tokens and sufficient gas fees.</p>
      </div>
    `;
    mintCertificateBtn.disabled = false;
  }
}

// Event Listeners
function setupEventListeners() {
  connectWalletBtn.addEventListener('click', connectWallet);
  startCourseBtn.addEventListener('click', () => loadLesson(0));
  prevLessonBtn.addEventListener('click', prevLesson);
  nextLessonBtn.addEventListener('click', nextLesson);
  document.getElementById('submitExerciseBtn').addEventListener('click', submitExercise);
  mintCertificateBtn.addEventListener('click', mintCertificate);
}

// Start app
init();