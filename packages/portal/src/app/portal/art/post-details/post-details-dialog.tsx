import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useEffect, useState } from "react";
import { SocialPost } from "@/gql/graphql";
import { useRouter } from "next/navigation";
import { PostDetailsContent } from "@/app/portal/art/post-details/post-details-content";

export function PostDetailsDialog({
  children,
  post,
}: {
  children: ReactNode;
  post: SocialPost;
}) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (open) {
          window.history.pushState(null, "", `/portal/art/${post.id}`);
        } else {
          window.history.pushState(null, "", `/portal/art/`);
        }
      }}
    >
      <DialogTitle></DialogTitle>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <PostDetailsContent post={post} loading={false} />
      </DialogContent>
    </Dialog>
  );
}
