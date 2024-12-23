import PostTags from "./post-tags";
import React from "react";
import Link from "@docusaurus/Link";

export default function PostItem({ ...props }) {
  return (
    <article className="flex flex-col h-full" data-aos="fade-up">
      <header>
        <Link href={props.metadata.permalink} className="block mb-6">
          <figure
            style={{ width: "100%", height: 198, margin: 0 }}
            className="relative h-0 pb-9/16 overflow-hidden rounded-sm"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
              src={props.metadata.frontMatter.image}
              width={151}
              height={176}
              alt={props.title}
            />
          </figure>
        </Link>
        {props.metadata.tags && (
          <div className="mb-3">
            <PostTags tags={props.metadata.tags} />
          </div>
        )}
        <h3 className="h4 mb-2">
          <Link
            href={props.metadata.permalink}
            className="hover:text-gray-100 transition duration-150 ease-in-out text-white"
          >
            {props.metadata.title}
          </Link>
        </h3>
      </header>
      <p className="text-md text-gray-400 grow">{props.metadata.description}</p>
      <footer className="flex items-center mt-4">
        <Link href={props.metadata.authors[0].url}>
          <img
            className="rounded-full shrink-0 mr-4"
            src={props.metadata.authors[0]?.imageURL}
            width={40}
            height={40}
            alt={props.metadata.authors[0]?.name}
          />
        </Link>
        <div className="font-medium">
          <Link
            href={props.metadata.authors[0]?.url}
            className="text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
          >
            {props.metadata.authors[0]?.name}
          </Link>
          <span className="text-gray-700"> - </span>
          <span className="text-gray-500">{props.metadata.date.slice(0, 10)}</span>
        </div>
      </footer>
    </article>
  );
}
