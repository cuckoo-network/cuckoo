import React from "react";
import clsx from "clsx";
import PostTags from "@site/src/components/home/post-tags";
import PostItem from "@site/src/components/home/post-item";
import Link from "@docusaurus/Link";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import type { Props } from "@theme/BlogListPage";
import BlogListPageStructuredData from "@theme/BlogListPage/StructuredData";
import Layout from "@theme/Layout";
import { useAos } from "@site/src/hooks/use-aos";

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;

  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  // items: { content: BlogPost, metadata: BlogPostMetadata }[]
  // We'll treat items[0] as featured, others as the list
  const featuredPost = items[0];
  const posts = items.slice(1);
  const title = metadata.blogTitle || "Blogs";

  useAos();

  return (
    <Layout
      title={title}
      description={
        "Announcements, best practices and success stories for achieving your goals with Beancount.io."
      }
    >
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-30 md:pb-10">
            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1 text-5xl" data-aos="fade-up">
                {title}
              </h1>
            </div>
            {/* Featured article */}
            {featuredPost && (
              <div className="pb-12 md:pb-20">
                <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                  <Link
                    href={featuredPost.content.metadata.permalink}
                    className="relative block group"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <div
                      className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                      aria-hidden="true"
                    ></div>
                    {featuredPost.content.metadata.frontMatter?.image && (
                      <figure
                        style={{ width: "100%", margin: 0 }}
                        className="sm:h-44 md:h-48 lg:h-60 xl:h-68 relative h-0 pb-9/16 overflow-hidden rounded-sm"
                      >
                        <img
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          src={featuredPost.content.metadata.frontMatter.image}
                          width={151}
                          height={176}
                          alt={featuredPost.content.metadata.title}
                        />
                      </figure>
                    )}
                  </Link>
                  <div data-aos="fade-left" data-aos-delay="200">
                    <header>
                      <h3 className="h4 mb-2">
                        <Link
                          href={featuredPost.content.metadata.permalink}
                          className="dark:hover:text-gray-100 hover:text-gray-400 transition duration-150 ease-in-out dark:text-white"
                        >
                          {featuredPost.content.metadata.title}
                        </Link>
                      </h3>

                      <div className="mb-3">
                        {featuredPost.content.metadata.tags &&
                          featuredPost.content.metadata.tags.length > 0 && (
                            <div className="mb-3">
                              <PostTags
                                tags={featuredPost.content.metadata.tags}
                              />
                            </div>
                          )}
                      </div>
                      <h3 className="h3 text-2xl lg:text-3xl mb-2">
                        <a
                          href={featuredPost.content.metadata.permalink}
                          className="hover:text-gray-100 transition duration-150 ease-in-out"
                        >
                          {featuredPost.content.title}
                        </a>
                      </h3>
                    </header>
                    <p className="text-lg text-gray-400 grow">
                      {featuredPost.content.metadata.description}
                    </p>
                    <footer className="flex items-center mt-4">
                      {featuredPost.content.metadata.authors?.[0]?.imageURL && (
                        <a href={featuredPost.content.metadata.authors[0]?.url}>
                          <img
                            className="rounded-full shrink-0 mr-4"
                            src={
                              featuredPost.content.metadata.authors[0]?.imageURL
                            }
                            width={40}
                            height={40}
                            alt={featuredPost.content.metadata.authors[0]?.name}
                          />
                        </a>
                      )}
                      <div>
                        <a
                          href={featuredPost.content.metadata.authors?.[0]?.url}
                          className="font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
                        >
                          {featuredPost.content.metadata.authors?.[0]?.name}
                        </a>
                        <span className="text-gray-700"> - </span>
                        <span className="text-gray-500">
                          {featuredPost.content.metadata.formattedDate ||
                            featuredPost.content.metadata.date?.slice(0, 10)}
                        </span>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
            )}
            {/* Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">
              <h4
                className="h4 pb-6 mb-10 border-b border-gray-700"
                data-aos="fade-up"
              >
                Latest articles
              </h4>
              <div className="grid gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-8 items lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 items-start">
                {posts.map((post, postIndex) => (
                  <PostItem key={postIndex} metadata={post.content.metadata} />
                ))}
              </div>
            </div>
          </div>
          <div className="my-12">
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
