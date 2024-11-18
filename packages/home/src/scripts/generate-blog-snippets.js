const fs = require("fs");
const langPosts = {
  en: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/blog-archive-f05.json"),
  ru: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/ru-blog-archive-5aa.json"),
  vi: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/vi-blog-archive-e94.json"),
  zh: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/zh-blog-archive-310.json"),
  ar: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/ar-blog-archive-627.json"),
  es: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/es-blog-archive-ea1.json"),
  fa: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/fa-blog-archive-c37.json"),
  fr: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/fr-blog-archive-881.json"),
  hi: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/hi-blog-archive-8e6.json"),
  id: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/id-blog-archive-ff7.json"),
  ja: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/ja-blog-archive-b9d.json"),
  ko: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/ko-blog-archive-6e0.json"),
  pt: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/pt-blog-archive-8f1.json"),
  th: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/th-blog-archive-ac3.json"),
  tr: require("../../.docusaurus/docusaurus-plugin-content-blog/default/p/tr-blog-archive-f64.json"),
};

for (const key of Object.keys(langPosts)) {
  const posts = langPosts[key].archive.blogPosts;
  const updatedPosts = posts.map((p) => ({ ...p, content: "" }));
  fs.writeFileSync(
    `${__dirname}/../pages/blogs/${key}.json`,
    JSON.stringify(updatedPosts),
  );
}
