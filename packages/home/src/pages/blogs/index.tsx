import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import PostItem from "@site/src/components/home/post-item";
import { useAos } from "@site/src/hooks/use-aos";
import PostTags from "@site/src/components/home/post-tags";
import React from "react";

export default function Blog() {
  const {i18n: {currentLocale}} = useDocusaurusContext();

  const allPosts = require(`./${currentLocale}.json`);

  const featuredPost = allPosts[0];
  const posts = (allPosts).slice(1);

  useAos();

  const title = "Cuckoo Network Blogs";

  return (
    <Layout
      title={title}
      description={"Announcements, best practices and success stories for achieving your goals with Cuckoo Network."}
    >
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-30 md:pb-10">
            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1 text-5xl" data-aos="fade-up">
                {title}
              </h1>
            </div>

            {/*  Featured article */}
            <div className="pb-12 md:pb-20">
              <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                <Link
                  href={featuredPost.metadata.permalink}
                  className="relative block group"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div
                    className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                    aria-hidden="true"
                  ></div>
                  {featuredPost.metadata.frontMatter.image && (
                    <figure
                      style={{ width: "100%", margin: 0 }}
                      className="sm:h-44 md:h-48 lg:h-60 xl:h-68 relative h-0 pb-9/16 overflow-hidden rounded-sm"
                    >
                      <img
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                        src={featuredPost.metadata.frontMatter.image}
                        width={151}
                        height={176}
                        alt={featuredPost.title}
                      />
                    </figure>
                  )}
                </Link>
                <div data-aos="fade-left" data-aos-delay="200">
                  <header>
                    <div className="mb-3">
                      {featuredPost.metadata.tags && (
                        <div className="mb-3">
                          <PostTags tags={featuredPost.metadata.tags} />
                        </div>
                      )}
                    </div>
                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                      <Link
                        href={featuredPost.metadata.permalink}
                        className="hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {featuredPost.title}
                      </Link>
                    </h3>
                  </header>
                  <p className="text-lg text-gray-400 grow">
                    {featuredPost.metadata.description}
                  </p>
                  <footer className="flex items-center mt-4">
                    <Link href={featuredPost.metadata.authors[0].url}>
                      <img
                        className="rounded-full shrink-0 mr-4"
                        src={featuredPost.metadata.authors[0].imageURL}
                        width={40}
                        height={40}
                        alt={featuredPost.metadata.authors[0].name}
                      />
                    </Link>
                    <div>
                      <Link
                        href="#"
                        className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {featuredPost.metadata.authors[0].name}
                      </Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">{featuredPost.metadata.date.slice(0, 10)}</span>
                    </div>
                  </footer>
                </div>
              </article>
            </div>

            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">
              {/*  Section title */}
              <h4
                className="h4 pb-6 mb-10 border-b border-gray-700"
                data-aos="fade-up"
              >
                Latest articles
              </h4>

              {/*  Articles container */}
              <div className="grid gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-8 items lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8 items-start">
                {posts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <iframe
            src="https://cuckoonetwork.substack.com/embed"
            width={"100%"}
            height={320}
            style={{ border: "0px solid #EEE", background: "#111827" }}
            frameBorder={0}
            scrolling="no"
          />
        </div>
      </section>
    </Layout>
  );
}
