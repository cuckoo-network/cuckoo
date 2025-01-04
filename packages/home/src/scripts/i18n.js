const fs = require("fs").promises;
const path = require("path");
const { translateFile } = require("./translate");

const BLOG_DIR = path.resolve(__dirname, "../../blog");
const I18N_DIR = path.resolve(__dirname, "../../i18n");
const SUPPORTED_LOCALES = [
  "ko",
  "ja",
  "id",
  "zh",
  "vi",
  "hi",
  "ru",
  "ar",
  "es",
  "fa",
  "fr",
  "pt",
  "th",
  "tr",
]

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function syncAndTranslateBlogs() {
  try {
    // Get all markdown files from the blog directory
    const blogFiles = await fs.readdir(BLOG_DIR);
    const markdownFiles = blogFiles.filter(file => file.endsWith(".md"));

    // Process each locale
    for (const locale of SUPPORTED_LOCALES) {
      console.log(`\nProcessing locale: ${locale}`);

      // Construct the target directory path for this locale
      const targetDir = path.join(
        I18N_DIR,
        locale,
        "docusaurus-plugin-content-blog"
      );

      // Ensure the target directory exists
      await ensureDirectoryExists(targetDir);

      // Process each markdown file
      for (const file of markdownFiles) {
        const sourcePath = path.join(BLOG_DIR, file);
        const targetPath = path.join(targetDir, file);

        try {
          // Check if the file exists in the target directory
          try {
            await fs.access(targetPath);
            console.log(`File ${file} already exists in ${locale}, skipping copy and translation...`);
            continue;
          } catch {
            // File doesn't exist, copy it
            await fs.copyFile(sourcePath, targetPath);
            console.log(`Copied ${file} to ${locale} directory`);
          }

          // Translate the file
          console.log(`Translating ${file} to ${locale}...`);
          await translateFile(targetPath, locale);
          console.log(`Successfully translated ${file} to ${locale}`);
        } catch (error) {
          console.error(`Error processing ${file} for ${locale}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error("Error in syncAndTranslateBlogs:", error.message);
  }
}

// Execute the sync and translation process
syncAndTranslateBlogs();
