import { Button } from "@/components/ui/button";
import { useInteractWithPost } from "@/app/portal/art/post-details/hooks/use-interact-with-post";

export const DeleteButton = ({
  isAdmin,
  postId,
}: {
  isAdmin?: boolean | null;
  postId?: string;
}) => {
  const { interactWithPost, interactWithPostLoading } = useInteractWithPost();

  if (!isAdmin || !postId) {
    return <></>;
  }

  return (
    <Button
      isLoading={interactWithPostLoading}
      variant={"destructive"}
      onClick={async () => {
        await interactWithPost({
          variables: {
            data: {
              postId: postId,
            },
          },
        });
        if (typeof window !== "undefined") {
          window.location.replace("/portal/art/");
        }
      }}
    >
      Delete
    </Button>
  );
};
