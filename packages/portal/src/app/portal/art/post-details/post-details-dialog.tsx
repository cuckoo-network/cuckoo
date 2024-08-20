import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

  useEffect(() => {
    if (open) {
      window.history.pushState(null, "", `/portal/art/${post.id}`);
    } else {
      window.history.pushState(null, "", `/portal/art/`);
    }
  }, [open, post.id, router]);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <PostDetailsContent post={post} loading={false} />
      </DialogContent>
    </Dialog>
  );
}
