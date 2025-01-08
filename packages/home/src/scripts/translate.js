const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// Function to read, translate, and write file content
async function translateFile(filePath, locale) {
  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log("File content read successfully.");

    // Call the OpenAI API to translate the content
    const translatedContent = await translateText(fileContent, locale);

    // Write the translated content back to the file
    await fs.writeFile(filePath, translatedContent, "utf-8");
    console.log("File content translated and written back successfully.");
  } catch (error) {
    console.error("Error processing the file:", error.message);
  }
}

// Function to send content to OpenAI and get translation
async function translateText(text, locale) {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    throw new Error("Missing OpenAI API key in environment variables");
  }

  try {
    // OpenAI API call for text translation
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o", // You can change the model if required
        messages: [
          {
            role: "user",
            content: `[no prose]
Do not wrap response with code block.

I want you to act as a SaaS copywriter, Web3 expert, and professional website translator. Please translate the following text into ${locale}. Ensure proper spacing between symbols and text in the translated content.

- **For JSON files**: Only translate the 'message' field. Keep the keys and descriptions unchanged. Do not include "copyright" entry in the result.
- **For Markdown files**: Translate the entire file but only modify metadata when necessary.
  - for the field image: https://web-dash-v2.onrender.com/api/og-cuckoo-network?title= you should use the translated title as the value of the image param.
  - the image field's value should be wrapped with "
  - don't translate authors field

Below is the content to translate:

\`\`\`
${text}
\`\`\`
`,
          },
        ],
        max_tokens: 16384, // Adjust based on your need
        temperature: 0.3,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          "Content-Type": "application/json",
        },
      },
    );
    const translatedText = response.data.choices[0].message.content.trim();
    return translatedText;
  } catch (error) {
    console.error(
      "Error during OpenAI API request:",
      error.response ? error.response.data : error.message,
    );
    throw new Error("Failed to translate text.");
  }
}

function stripCodeBlockTags(str) {
  return str
    .replace(/```[^\n]*\n?/g, "") // Matches any opening ``` followed by optional language identifier
    .replace(/```/g, "") // Matches closing ```
    .trim();
}

// Export the translateFile function for reuse
module.exports = {
  translateFile,
  stripCodeBlockTags,
};

// Only execute the translation if this file is run directly
if (require.main === module) {
  // Ensure the file path and locale are passed as arguments
  const filePath = process.argv[2];
  const locale = process.argv[3];

  if (!filePath || !locale) {
    console.error(
      "Please provide the path to the file and the locale as arguments.",
    );
    process.exit(1);
  }

  // Resolve the file path relative to the current working directory
  const resolvedFilePath = path.resolve(filePath);

  // Execute the translation process
  translateFile(resolvedFilePath, locale);
}
