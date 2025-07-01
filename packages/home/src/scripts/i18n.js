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
          let fileExists = false;
          let isSameContent = false;
          try {
            await fs.access(targetPath);
            fileExists = true;
            // Compare file contents
            const [sourceContent, targetContent] = await Promise.all([
              fs.readFile(sourcePath, 'utf8'),
              fs.readFile(targetPath, 'utf8')
            ]);
            isSameContent = sourceContent === targetContent;
            if (!isSameContent) {
              console.log(`File target: ${targetPath} already exists in locale: ${locale}, assuming already translated and skipping copy and translation...`);
              continue;
            } else {
              console.log(`File target: ${targetPath} has the same content as source: ${sourcePath}, will proceed to translation.`);
            }
          } catch {
            // File doesn't exist, copy it and translate
            await fs.copyFile(sourcePath, targetPath);
            console.log(`Copied source: ${sourcePath} to target: ${targetPath}`);
          }

          // Translate the file with retry logic
          let translated = false;
          let lastError = null;
          for (let attempt = 1; attempt <= 2; attempt++) {
            try {
              console.log(`Translating target: ${targetPath} to locale: ${locale} (attempt ${attempt})...`);
              await translateFile(targetPath, locale);
              console.log(`Successfully translated target: ${targetPath} to locale: ${locale}`);
              translated = true;
              break;
            } catch (error) {
              lastError = error;
              console.error(`Translation attempt ${attempt} failed for target: ${targetPath} to locale: ${locale}:`, error.message);
            }
          }
          if (!translated) {
            // Delete the untranslated file
            try {
              await fs.unlink(targetPath);
              console.error(`Failed to translate target: ${targetPath} to locale: ${locale} after 2 attempts. Deleted untranslated file.`);
            } catch (deleteError) {
              console.error(`Also failed to delete untranslated file target: ${targetPath}:`, deleteError.message);
            }
          }
        } catch (error) {
          console.error(`Error processing target: ${targetPath} for locale: ${locale}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error("Error in syncAndTranslateBlogs:", error.message);
  }
}

// Execute the sync and translation process
syncAndTranslateBlogs();
