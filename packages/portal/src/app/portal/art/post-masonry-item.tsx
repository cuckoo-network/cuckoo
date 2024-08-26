import { SocialPost } from "@/gql/graphql";
import useMobileDevice from "@/lib/is-mobile-screen-width";
import Link from "next/link";
import Image from "next/image";
import { PostDetailsDialog } from "@/app/portal/art/post-details/post-details-dialog";
import React from "react";

export function PostMasonryItem(props: { photo: any; post: SocialPost }) {
  const isMobile = useMobileDevice();

  if (isMobile) {
    return (
      <Link href={`/portal/art/${props.post.id}/`}>
        <div className={"mb-8"}>
          {props.photo?.width && props.photo?.height ? (
            <Image
              className={"rounded-lg"}
              alt={props.post.title || ""}
              width={props.photo.width}
              height={props.photo.height}
              src={props.photo?.url}
            />
          ) : (
            <img
              className="h-auto max-w-full rounded-lg"
              src={props.photo?.url}
              alt=""
            />
          )}
          <div className="break-word w-full text-white no-underline font-bold mt-3 mb-2 mx-3">
            {props.post.title}
          </div>

          <div className="flex max-w-[calc(100%-65px)] items-center gap-1 text-muted-foreground text-sm mx-3">
            <Image
              className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-4 sm:w-4"
              width={24}
              height={24}
              alt={props.post.profile.name}
              src={props.post.profile.profilePhoto.url}
            />

            {props.post.profile.name}
          </div>

          <a
            href={`/portal/art/${props.post.id}`}
            className="hidden-link"
            aria-hidden="true"
          >
            Hidden Link
          </a>
        </div>
      </Link>
    );
  }

  return (
    <PostDetailsDialog post={props.post}>
      <div className={"mb-8"}>
        {props.photo?.width && props.photo?.height ? (
          <Image
            className={"rounded-lg"}
            alt={props.post.title || ""}
            width={props.photo.width}
            height={props.photo.height}
            src={props.photo?.url}
          />
        ) : (
          <img
            className="h-auto max-w-full rounded-lg"
            src={props.photo?.url}
            alt=""
          />
        )}
        <div className="break-word w-full text-white no-underline font-bold mt-3 mb-2 mx-3">
          {props.post.title}
        </div>

        <div className="flex max-w-[calc(100%-65px)] items-center gap-1 text-muted-foreground text-sm mx-3">
          <Image
            className="h-6 w-6 shrink-0 rounded-full object-cover sm:h-4 sm:w-4"
            width={24}
            height={24}
            alt={props.post.profile.name}
            src={props.post.profile.profilePhoto.url}
          />

          {props.post.profile.name}
        </div>

        <a
          href={`/portal/art/${props.post.id}`}
          className="hidden-link"
          aria-hidden="true"
        >
          Hidden Link
        </a>
      </div>
    </PostDetailsDialog>
  );
}
