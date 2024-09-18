const fs = require("fs");
const langPosts = {
  ja: require("../../.docusaurus/docusaurus-plugin-content-blog/default/ja-blog-archive-e5c.json"),
  en: require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json"),
  vi: require("../../.docusaurus/docusaurus-plugin-content-blog/default/vi-blog-archive-827.json"),
  zh: require("../../.docusaurus/docusaurus-plugin-content-blog/default/zh-blog-archive-8d7.json"),
  ru: require("../../.docusaurus/docusaurus-plugin-content-blog/default/ru-blog-archive-6e1.json"),
  ar: require("../../.docusaurus/docusaurus-plugin-content-blog/default/ar-blog-archive-a89.json"),
  es: require("../../.docusaurus/docusaurus-plugin-content-blog/default/es-blog-archive-4d8.json"),
  fa: require("../../.docusaurus/docusaurus-plugin-content-blog/default/fa-blog-archive-2d7.json"),
  fr: require("../../.docusaurus/docusaurus-plugin-content-blog/default/fr-blog-archive-c6a.json"),
  hi: require("../../.docusaurus/docusaurus-plugin-content-blog/default/hi-blog-archive-096.json"),
  id: require("../../.docusaurus/docusaurus-plugin-content-blog/default/id-blog-archive-8fd.json"),
  ko: require("../../.docusaurus/docusaurus-plugin-content-blog/default/ko-blog-archive-ca4.json"),
  pt: require("../../.docusaurus/docusaurus-plugin-content-blog/default/pt-blog-archive-b3e.json"),
  th: require("../../.docusaurus/docusaurus-plugin-content-blog/default/th-blog-archive-5f6.json"),
  tr: require("../../.docusaurus/docusaurus-plugin-content-blog/default/tr-blog-archive-52b.json"),
};

for (const key of Object.keys(langPosts)) {
  const posts = langPosts[key].blogPosts;
  const updatedPosts = posts.map((p) => ({ ...p, content: "" }));
  fs.writeFileSync(
    `${__dirname}/../pages/blogs/${key}.json`,
    JSON.stringify(updatedPosts),
  );
}
