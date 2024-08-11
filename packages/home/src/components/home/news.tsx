import PostItem from "./post-item";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

const {
  blogPosts,
} = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json");

export function News({tag}: {tag?: string}) {
  let filtered = blogPosts;
  if (tag) {
    filtered = filtered.filter(it => it.metadata.tags.some(t => t.label === tag));
  }
  const posts = filtered.slice(0, 3);

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
              <Translate
                description="Title for the news section"
              >
                Refreshing news from the community
              </Translate>
            </h3>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-8 items lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 items-start">
              {posts.map((post) => (
                <PostItem key={post.id} {...post} />
              ))}
            </div>
          </div>

          <Link className="float-right hover:text-white" href={tag ? `/blog/tags/${slugify(tag)}` : "/blogs/"}>
            <Translate
              description="Read more link text"
            >
              Read more
            </Translate>
            <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
