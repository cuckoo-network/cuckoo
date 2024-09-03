import { formatDate } from "@/lib/format-date";
import Image from "next/image";
import { SocialPost } from "@/gql/graphql";
import { useUser } from "@/containers/authentication/hooks/use-user";
import { ShareToTwitter } from "@/app/portal/art/post-details/share-to-twitter";
import { DeleteButton } from "@/app/portal/art/post-details/delete-button";
import { Button } from "@/components/ui/button";

export const PostDetailsContent = ({
  post,
  loading,
}: {
  post?: SocialPost;
  loading: boolean;
}) => {
  const { dataUser } = useUser();

  if (loading) {
    return <></>;
  }

  return (
    <div className="relative grid w-full min-w-0 grid-cols-1 gap-4 break-words px-4 md:grid-cols-2 md:gap-8 false">
      <div className="flex justify-between md:hidden">
        <div>
          <div className="relative flex items-center text-primaryText">
            <img
              alt="profile"
              src={post?.profile.profilePhoto.url}
              className="h-10 w-10 shrink-0 rounded-full border-none object-cover align-middle"
            />
            <div className="ml-2 h-10">
              <h1 className="word-break-words line-clamp-1 break-words text-base font-bold">
                {post?.profile.name}{" "}
              </h1>
              <p className="text-xs text-secondaryText">
                {post ? formatDate(post.createdAt) : ""}
              </p>
            </div>
          </div>
        </div>
        <button className="hidden ml-6 h-10 items-center justify-center gap-1 rounded-xl px-3 font-bold text-darkText bg-primaryBtn">
          Follow
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="relative overflow-hidden rounded-md">
          <div
            className="image-gallery image-gallery-using-mouse"
            aria-live="polite"
          >
            <div className="image-gallery-content bottom">
              <div className="image-gallery-slide-wrapper bottom">
                <div className="image-gallery-slides">
                  <div
                    aria-label="Go to Slide 1"
                    tabIndex={-1}
                    className="image-gallery-slide  center "
                    role="button"
                    style={{
                      display: "inherit",
                      transform: "translate3d(0%, 0px, 0px)",
                      transition: "none",
                    }}
                  >
                    {post?.photoMedia?.at(0)?.width ? (
                      <Image
                        src={post?.photoMedia?.at(0)?.url || ""}
                        width={post?.photoMedia?.at(0)?.width || 0}
                        height={post?.photoMedia?.at(0)?.height || 0}
                        alt="post image"
                        className="image-gallery-image"
                      />
                    ) : (
                      <img
                        src={post?.photoMedia?.at(0)?.url}
                        alt="post image"
                        className="image-gallery-image"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hidden mb-6 items-center justify-between gap-4 md:flex">
          <div>
            <div className="relative flex items-center text-primaryText">
              <img
                alt=""
                src={post?.profile.profilePhoto.url}
                className="h-10 w-10 shrink-0 rounded-full border-none object-cover align-middle shadow-xl"
              />
              <div className="ml-4 h-10">
                <h1 className="word-break-words line-clamp-1 break-words text-base font-bold">
                  {post?.profile.name}{" "}
                </h1>
                <p className="text-xs text-secondaryText">
                  {post ? formatDate(post.createdAt) : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden items-center gap-3">
            <div
              className="relative flex cursor-pointer items-center justify-center space-x-1 leading-tight"
              data-headlessui-state=""
            >
              <button
                id="headlessui-menu-button-:rrf:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <div className="h-6 w-6 text-primaryText hover:text-violet-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <button className="hidden h-11 items-center gap-1 rounded-xl px-3 font-bold text-darkText bg-primaryBtn">
              Follow
            </button>
          </div>
        </div>
        <div className="mb-4 w-full leading-relaxed text-primaryText">
          <div className="mb-6 flex items-center justify-between">
            <div className="hidden h-10 w-10 items-center justify-center rounded-md bg-tertiaryBg md:hidden">
              <div
                className="relative flex cursor-pointer items-center justify-center space-x-1 leading-tight"
                data-headlessui-state=""
              >
                <button
                  id="headlessui-menu-button-:rrg:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <div className="h-6 w-6 text-primaryText hover:text-violet-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex gap-3 hidden">
              <button className="flex h-10 w-10 items-center justify-center rounded-md bg-tertiaryBg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </button>
              <div className="flex h-10 cursor-pointer select-none items-center gap-1 rounded-md bg-tertiaryBg px-3 text-primaryText">
                <p className="text-sm font-medium leading-3">0</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  width={18}
                  height={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
              <div className="flex h-10 cursor-pointer select-none items-center gap-1 rounded-md bg-tertiaryBg px-3 text-primaryText">
                <p className="text-sm font-medium leading-3 false">793</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="mb-3 font-bold">{post?.title}</h1>
          <div className="mb-3 whitespace-pre-wrap text-sm leading-snug text-secondaryText md:mb-6">
            <div className="line-clamp-5 mb-1.5 whitespace-pre-line">
              {post?.description}
            </div>
          </div>

          <div className={"flex flex-row gap-2"}>
            <ShareToTwitter post={post} />

            {post?.textToImageHistoryItemId && (
              <Button
                variant="secondary"
                className="bg-pink-600 hover:bg-pink-700 text-white"
                href={`/portal/art/text-to-image?id=${post?.textToImageHistoryItemId}`}
              >
                Create a similar one
              </Button>
            )}
          </div>

          {dataUser?.user.isAdmin && (
            <div className={"flex flex-row gap-2 mt-12"}>
              <DeleteButton
                isAdmin={dataUser?.user.isAdmin}
                postId={post?.id}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
