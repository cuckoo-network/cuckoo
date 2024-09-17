const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

// Function to read, translate, and write file content
async function translateFile(filePath) {
  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, 'utf-8');
    console.log('File content read successfully.');

    // Call the OpenAI API to translate the content
    const translatedContent = await translateText(fileContent);

    // Write the translated content back to the file
    await fs.writeFile(filePath, translatedContent, 'utf-8');
    console.log('File content translated and written back successfully.');
  } catch (error) {
    console.error('Error processing the file:', error.message);
  }
}

// Function to send content to OpenAI and get translation
async function translateText(text) {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    throw new Error('Missing OpenAI API key in environment variables');
  }

  try {
    // OpenAI API call for text translation
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o-mini',  // You can change the model if required
        messages: [{
          role: "user",
          content: `[no prose]
Translate the following text to th. If it is a json, translate the message field only, keep the key and description as they were. If the content is a markdown file, translate the entire file while keeping the metadata translated only when necessary. \n\n\`\`\`${text}\`\`\``,
        }],
        max_tokens: 16384,  // Adjust based on your need
        temperature: 0.3,
        stream: false,
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const translatedText = stripJSONTags(response.data.choices[0].message.content.trim());
    return translatedText;

  } catch (error) {
    console.error('Error during OpenAI API request:', error.response ? error.response.data : error.message);
    throw new Error('Failed to translate text.');
  }
}

// Ensure the file path is passed as an argument
const filePath = process.argv[2];
if (!filePath) {
  console.error('Please provide the path to the file as an argument.');
  process.exit(1);
}

// Resolve the file path relative to the current working directory
const resolvedFilePath = path.resolve(filePath);

// Execute the translation process
translateFile(resolvedFilePath);

function stripJSONTags(str) {
  return str
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}
