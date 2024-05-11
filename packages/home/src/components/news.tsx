import PostItem from "./post-item";

const {
  blogPosts,
} = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

export function News() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3
              className="h3 font-uncut-sans aos-init aos-animate"
              data-aos="fade-up"
            >
              Refreshing news from community
            </h3>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              {posts.map((post) => (
                <PostItem key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
