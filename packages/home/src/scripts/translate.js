const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs").promises;
const path = require("path");

// Configuration constants
const CHUNK_SIZE_THRESHOLD = 10_000; // Characters threshold for chunking
const MAX_PARALLEL_REQUESTS = 3; // Limit parallel API requests

// Function to read, translate, and write file content
async function translateFile(filePath, locale) {
  try {
    // Read the file content
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log("File content read successfully.");

    // Call the Gemini API to translate the content
    const translatedContent = await translateText(fileContent, locale);

    // Write the translated content back to the file
    await fs.writeFile(filePath, translatedContent, "utf-8");
    console.log("File content translated and written back successfully.");
  } catch (error) {
    console.error("Error processing the file:", error.message);
  }
}

// Function to send content to Gemini and get translation
async function translateText(text, locale) {
  const geminiApiKey = process.env.GEMINI_API_KEY;

  if (!geminiApiKey) {
    throw new Error("Missing GEMINI_API_KEY in environment variables");
  }

  // If the text is large, split it into chunks and process in parallel
  if (text.length > CHUNK_SIZE_THRESHOLD) {
    console.log(
      `Text is large (${text.length} chars). Processing in chunks...`,
    );
    return await translateLargeText(text, locale);
  }

  // For smaller texts, use the standard translation process
  return await translateSingleChunk(text, locale);
}

// Configuration for retry mechanism
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000; // 2 seconds initial delay, will increase with backoff

// Helper function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to translate a single chunk of text with retry logic
async function translateSingleChunk(text, locale) {
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(geminiApiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-preview-05-20",
  });

  const prompt =
    "[no prose]\n" +
    "Do not wrap response with code block.\n\n" +
    "I want you to act as a SaaS copywriter, Web3 expert, and professional website translator. Please translate the following text into " +
    locale +
    ". Ensure proper spacing between symbols and text in the translated content.\n\n" +
    "- **For JSON files**: Only translate the 'message' field. Keep the keys and descriptions unchanged. Do not include \"copyright\" entry in the result.\n" +
    "- **For Markdown files**: Translate the entire file but only modify metadata when necessary.\n" +
    "  - for the field image: https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=\n" +
    "    - you should use the translated title as the value of the image param.\n" +
    "    - you should not translate ar, fa languages\n" +
    '  - the image field\'s value should be wrapped with ""\n' +
    "  - don't translate authors field\n\n" +
    "  - do not add ``` before and after the frontmatter\n" +
    "Below is the content to translate:\n\n" +
    "```\n" +
    text +
    "\n" +
    "```";

  let retries = 0;
  let lastError;

  while (retries <= MAX_RETRIES) {
    try {
      // If this is a retry, log it and wait before trying again
      if (retries > 0) {
        console.log(
          `Retry attempt ${retries}/${MAX_RETRIES} for translation...`,
        );
        await delay(RETRY_DELAY_MS * Math.pow(2, retries - 1)); // Exponential backoff
      }

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.3,
        },
      });
      const response = result.response;

      if (
        response &&
        response.candidates &&
        response.candidates.length > 0 &&
        response.candidates[0].content &&
        response.candidates[0].content.parts &&
        response.candidates[0].content.parts.length > 0
      ) {
        const translatedText =
          response.candidates[0].content.parts[0].text.trim();

        // If this was a retry, log success
        if (retries > 0) {
          console.log(
            `Successfully translated after ${retries} ${retries === 1 ? "retry" : "retries"}`,
          );
        }

        return translatedText;
      } else {
        const errorMsg = "Unexpected response structure from Gemini API";
        console.error(errorMsg + ":", JSON.stringify(response, null, 2));
        lastError = new Error(errorMsg);
        retries++;
      }
    } catch (error) {
      // Determine if the error is retryable (network errors, rate limits, etc.)
      const isRetryable =
        error.message.includes("ECONNRESET") ||
        error.message.includes("ETIMEDOUT") ||
        error.message.includes("429") || // Too Many Requests
        error.message.includes("500") || // Internal Server Error
        error.message.includes("503") || // Service Unavailable
        error.message.includes("504") || // Gateway Timeout
        error.message.includes("network") ||
        error.message.includes("timeout");

      console.error(
        `Error during Gemini API request (attempt ${retries + 1}/${MAX_RETRIES + 1}):`,
        error.message,
      );

      lastError = error;

      // Only retry if the error is retryable
      if (isRetryable && retries < MAX_RETRIES) {
        retries++;
      } else {
        // If error is not retryable or we've exhausted retries, throw the error
        throw new Error(
          `Failed to translate text with Gemini after ${retries} ${retries === 1 ? "retry" : "retries"}: ${error.message}`,
        );
      }
    }
  }

  // If we've exhausted all retries
  throw new Error(
    `Failed to translate text with Gemini after ${MAX_RETRIES} retries: ${lastError.message}`,
  );
}

// Function to handle large text by splitting into chunks and processing in parallel
async function translateLargeText(text, locale) {
  // Split the text into chunks based on paragraphs or sections
  const chunks = splitTextIntoChunks(text);
  console.log(`Split text into ${chunks.length} chunks`);

  // Process chunks in batches to avoid too many parallel requests
  const results = [];
  for (let i = 0; i < chunks.length; i += MAX_PARALLEL_REQUESTS) {
    const batch = chunks.slice(i, i + MAX_PARALLEL_REQUESTS);
    console.log(
      `Processing batch ${Math.floor(i / MAX_PARALLEL_REQUESTS) + 1} of ${Math.ceil(chunks.length / MAX_PARALLEL_REQUESTS)}`,
    );

    // Process this batch in parallel
    const batchResults = await Promise.all(
      batch.map((chunk, index) => {
        console.log(`Translating chunk ${i + index + 1}/${chunks.length}`);
        return translateSingleChunk(chunk, locale);
      }),
    );

    results.push(...batchResults);
  }

  // Combine the translated chunks
  return results.join("\n\n");
}

// Function to split text into manageable chunks
function splitTextIntoChunks(text) {
  // First try to split by markdown headings
  if (text.includes("#")) {
    // This regex matches markdown headings (# Heading, ## Heading, etc.)
    const headingRegex = /^(#{1,6}\s+.*$)/gm;
    const sections = text.split(headingRegex);

    // Recombine the headings with their content
    const chunks = [];
    let currentChunk = "";

    for (let i = 0; i < sections.length; i++) {
      // If this is a heading and not the first item
      if (sections[i].match(/^#{1,6}\s+.*$/m) && i > 0) {
        // Save the previous chunk if it's not empty
        if (currentChunk.trim()) {
          chunks.push(currentChunk.trim());
        }
        currentChunk = sections[i];
      } else {
        currentChunk += sections[i];
      }

      // If the current chunk is getting too large, split it
      if (currentChunk.length > CHUNK_SIZE_THRESHOLD * 1.5) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
    }

    // Add the last chunk if it's not empty
    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    // If we found chunks, return them
    if (chunks.length > 1) {
      return chunks;
    }
  }

  // If we couldn't split by headings or only got one chunk, try paragraphs
  const paragraphs = text.split(/\n\s*\n/);

  // Combine paragraphs into chunks of reasonable size
  const chunks = [];
  let currentChunk = "";

  for (const paragraph of paragraphs) {
    // If adding this paragraph would make the chunk too large
    if (currentChunk.length + paragraph.length > CHUNK_SIZE_THRESHOLD) {
      // Save the current chunk if it's not empty
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
      }
      currentChunk = paragraph;
    } else {
      // Add the paragraph to the current chunk
      currentChunk += (currentChunk ? "\n\n" : "") + paragraph;
    }
  }

  // Add the last chunk if it's not empty
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  // If we still only have one chunk, force split by size
  if (chunks.length <= 1 && text.length > CHUNK_SIZE_THRESHOLD) {
    return forceSplitBySize(text, CHUNK_SIZE_THRESHOLD);
  }

  return chunks;
}

// Function to force split text by size when other methods don't work
function forceSplitBySize(text, chunkSize) {
  const chunks = [];
  let currentPosition = 0;

  while (currentPosition < text.length) {
    // Find a good breaking point (newline or space) near the chunk size
    let breakPoint = Math.min(currentPosition + chunkSize, text.length);

    // If we're not at the end, try to find a natural break point
    if (breakPoint < text.length) {
      // Look for a newline before the break point
      const newlineIndex = text.lastIndexOf("\n", breakPoint);
      if (newlineIndex > currentPosition && newlineIndex > breakPoint - 200) {
        breakPoint = newlineIndex + 1; // Include the newline
      } else {
        // If no good newline, look for a space
        const spaceIndex = text.lastIndexOf(" ", breakPoint);
        if (spaceIndex > currentPosition && spaceIndex > breakPoint - 50) {
          breakPoint = spaceIndex + 1; // Include the space
        }
      }
    }

    // Extract the chunk and add to the list
    chunks.push(text.substring(currentPosition, breakPoint).trim());
    currentPosition = breakPoint;
  }

  return chunks;
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
