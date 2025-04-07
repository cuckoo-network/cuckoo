import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

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

async function getResearchTopic(): Promise<string> {
  // Get existing blog post titles to avoid duplicates
  const blogDir = path.join(process.cwd(), 'blog');
  const existingPosts = fs.readdirSync(blogDir).map(filename => {
    // Extract the title from the filename (remove date and extension, replace hyphens with spaces)
    const match = filename.match(/^\d{4}-\d{2}-\d{2}-(.*)\.md$/);
    return match ? match[1].replace(/-/g, ' ') : '';
  }).filter(title => title !== '');
  
  const recentTweets = await fetchRecentTweets();
  const prompt = `
I'm Lark Birdy. I am a founder and CEO of Cuckoo Network.

Cuckoo Network enables builders to launch an Agent through an L2 and a GPU DePIN in 2 minutes.

- Create stunning AI art and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.
- Token tick is $CAI

You're a world-class Chief Marketing Officer, think of the heyday of Bitcoin Magazine, Polygon, Ripple, or of Solana, Sui, Binance or Coinbase today.

Cuckoo Network is a Decentralized AI Creative Platform for Creators & Builders, where people can create stunning AI art, chat with characters, and fuel Gen AI apps with your GPU or CPU on Cuckoo Chain. Share, generate, and unlock the power of decentralized AI.

I recently hired you to help me take Cuckoo Network's marketing to the next level. I want to maintain the voice and style of Cuckoo Network, but sharpen the writing and analysis to make it the best tech blog in the world, something that smart, successful people read to learn what's happening at the frontier in tech.

Find an interesting AI-related research topic for our blog among what the feeds mentioned below.

\`\`\`
${recentTweets}
\`\`\`

IMPORTANT: Please avoid suggesting any of these topics that we've already covered in our blog:
${existingPosts.map(post => `- ${post}`).join('\n')}

For your response:
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
    return researchTopic;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    console.error('Error generating research topic:', error.message);
    process.exit(1);
  }
}

async function generateBlogPost(topic: string): Promise<string> {
  try {
    const response = await axios.post('http://localhost:8000/v1/chat/completions', {
      model: 'local-model', // This is just a placeholder, the actual model is already tuned
      messages: [{
        role: 'user',
        content: topic
      }],
      temperature: 0.7
    });
    
    let content = response.data.choices[0].message.content;
    
    // Replace any instances of utm_source=openai with utm_source=cuckoo.network
    content = content.replace(/utm_source=openai/g, 'utm_source=cuckoo.network');
    
    return content;
  } catch (error) {
    console.error('Error generating blog post:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
    }
    process.exit(1);
  }
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

async function createBlogPost(topic: string, content: string): Promise<string> {
  const date = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const slugifiedTitle = slugify(topic);
  const fileName = `${date}-${slugifiedTitle}.md`;
  const filePath = path.join(process.cwd(), 'blog', fileName);
  
  // Write the content to the file
  fs.writeFileSync(filePath, content);
  console.log(`Blog post created at: ${filePath}`);
  
  return filePath;
}

async function applyFrontMatter(filePath: string): Promise<void> {
  try {
    const scriptPath = path.join(process.cwd(), 'src/scripts/prepend-front-matter.js');
    const command = `node ${scriptPath} ${filePath}`;
    
    console.log('Applying front matter...');
    execSync(command, { stdio: 'inherit' });
    console.log('Front matter applied successfully');
  } catch (error) {
    console.error('Error applying front matter:', error.message);
    process.exit(1);
  }
}

async function createGitBranchAndPR(filePath: string, topic: string): Promise<void> {
  try {
    const branchName = `blog/post-${slugify(topic)}`;
    
    // Create and checkout a new branch
    execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
    console.log(`Created and checked out branch: ${branchName}`);
    
    // Add the file to git
    execSync(`git add ${filePath}`, { stdio: 'inherit' });
    
    // Commit the changes
    execSync(`git commit -m "Add blog post: ${topic}"`, { stdio: 'inherit' });
    console.log('Changes committed');
    
    // Push the branch to GitHub
    execSync(`git push -u origin ${branchName}`, { stdio: 'inherit' });
    console.log('Branch pushed to GitHub');
    
    // Create a PR using GitHub CLI
    execSync(`gh pr create --title "New Blog Post: ${topic}" --body "This PR adds a new blog post about ${topic}."`, { stdio: 'inherit' });
    console.log('Pull request created successfully');
  } catch (error) {
    console.error('Error in Git/GitHub operations:', error.message);
    process.exit(1);
  }
}

async function main(): Promise<void> {
  try {
    // Step 1: Get research topic
    console.log('Getting research topic...');
    const topic = await getResearchTopic();
    console.log(`Research topic: ${topic}`);
    
    // Step 2: Generate blog post content
    console.log('Generating blog post...');
    const blogContent = await generateBlogPost(topic);
    
    // Step 3: Create the blog post file
    console.log('Creating blog post file...');
    const filePath = await createBlogPost(topic, blogContent);
    
    // Step 4: Apply front matter
    await applyFrontMatter(filePath);
    
    // Step 5: Create Git branch and PR
    await createGitBranchAndPR(filePath, topic);
    
    console.log('Process completed successfully!');
  } catch (error) {
    console.error('Error in main process:', error.message);
    process.exit(1);
  }
}

main();
