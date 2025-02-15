const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// Function to read, translate, and write file content
async function addFrontMatterToFile(filePath) {
  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log("File content read successfully.");

    // Extract file name without extension to use as id and slug
    const fileName = path.parse(filePath).name;

    // Call the OpenAI API to translate the content
    const processedContent = await updateText(fileContent, fileName);

    // Write the translated content back to the file
    await fs.writeFile(filePath, processedContent, "utf-8");
    console.log("File content translated and written back successfully.");
  } catch (error) {
    console.error("Error processing the file:", error.message);
  }
}

// Function to send content to OpenAI and get translation
async function updateText(text, fileName) {
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

I'm an advisor at Cuckoo Network, a pioneering platform dedicated to decentralizing AI through blockchain technology and GPU mining. Our blog explores the frontier where AI, blockchain, and decentralized computing converge. I've brought you on as a world-class editor—think the intellectual rigor of Alchemy's web3 analysis, the technical depth of Anthropic's AI research blog, or the strategic insights of a16z's Future—to help elevate our writing to the highest standard.

We want to maintain our blog's distinctive voice and style while sharpening the clarity, depth, and analytical rigor of every post. We aim to become the authoritative publication that developers, miners, AI researchers, and web3 enthusiasts trust to understand the future of decentralized AI infrastructure, blockchain technology, and the innovative solutions shaping this emerging ecosystem.

As our Managing Editor, you'll challenge everything: technical accuracy, architectural decisions, economic models, governance structures, and the freshness of our insights. If similar analyses exist in the AI or blockchain space, encourage us to surpass them. Make sure our pieces remain approachable to a broad technical audience while delivering nuanced, evidence-based evaluations that demonstrate the transformative potential of decentralized AI.

Ultimately, our mission is to broaden understanding of decentralized AI, inspire developers and miners to join our ecosystem, and position Cuckoo Network as the definitive voice in decentralized AI infrastructure. We want to showcase how our unique approach—combining GPU mining, blockchain technology, and AI model serving—creates value for all participants while democratizing access to AI computation.

I'm excited to collaborate with you to establish Cuckoo Network's blog as the go-to resource for understanding the intersection of AI, blockchain, and decentralized computing.

I want you to create or update the front matter for the article following the docusaurus-style example, in order to improve SEO and make it more reader-friendly. And then return the full article.

- the description field should be engaging and summarizing the article and optimizing for SEO. Avoid using jargon like "unleash", "explore", "discover", "This article summarizes", etc.
- image field should be https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=:title, where title is the title of the article. If there is no such image in the content of the blog, add insert it to be after the first paragraph of the article. Title field's content should be wrapped with ""

the front matter example:
\`\`\`
---
title:
tags: []
keywords: []
authors: [lark]
description:
image:
---
\`\`\`

The article you are going to prepend or update the front matter:
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

// Ensure the file path is passed as arguments
const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide the path to the file.");
  process.exit(1);
}

// Resolve the file path relative to the current working directory
const resolvedFilePath = path.resolve(filePath);

// Execute the translation process
addFrontMatterToFile(resolvedFilePath);
