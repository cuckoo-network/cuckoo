import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

if (!process.env.ANTHROPIC_API_KEY) {
  throw new Error('ANTHROPIC_API_KEY environment variable is required');
}

const anthropic = axios.create({
  baseURL: 'https://api.anthropic.com',
  headers: {
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'content-type': 'application/json',
    'anthropic-version': '2023-06-01'
  },
});

async function fetchRecentTweets(): Promise<string> {
  try {
    const response = await axios.get('https://rss.app/feeds/v1.1/LrBaPC6NCwuLugDU.json');
    return JSON.stringify(response.data.items.map(it => it.content_text));
  } catch (error) {
    console.error('Error fetching recent tweets:', error.message);
    return '';
  }
}

async function getResearchTopic(): Promise<void> {
  const recentTweets = await fetchRecentTweets();
  const prompt = `
I'm Lark Birdy. I am a founder and CEO of Cuckoo Network.

Cuckoo Network enables builders to launch an Agent through an L2 and a GPU DePIN in 2 minutes.

- Create stunning AI art and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.
- Token tick is $CAI

You're a world-class Chief Marketing Officer, think of the heyday of Bitcoin Magazine, Polygon, Ripple, or of Solana, Sui, Binance or Coinbase today.

Cuckoo Network is a Decentralized AI Creative Platform for Creators & Builders, where people can create stunning AI art, chat with characters, and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.

I recently hired you to help me take Cuckoo Network's marketing to the next level. I want to maintain the voice and style of Cuckoo Network, but sharpen the writing and analysis to make it the best tech blog in the world, something that smart, successful people read to learn what's happening at the frontier in tech.

Find a interesting AI-related research topic for our blog among what the tweets mentioned below:

\`\`\`
${recentTweets}
\`\`\`

For your response

- Return a research topic, nothing more, not including any additional text.
- [no prose]
- Don't wrap response with \`\`\` code block.

`;

  try {
    const response = await anthropic.post('/v1/messages', {
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: prompt
      }],
      temperature: 0.7
    });

    const researchTopic = response.data.content[0].text;
    const outputPath = path.join(__dirname, 'research-topic.log');
    fs.writeFileSync(outputPath, researchTopic);
    console.log('Research topic has been saved to:', outputPath);
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    console.error('Error generating research topic:', error.message);
    process.exit(1);
  }
}

getResearchTopic();
