import { SocialPost } from "@/gql/graphql";
import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import * as React from "react";

export const ShareToTwitter = ({ post }: { post?: SocialPost }) => {
  if (!post) {
    return null;
  }

  return (
    <Button
      className="twitter-share-button"
      variant="secondary"
      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title} - ${post.description} https://cuckoo.network/portal/art/${post.id}`)}`}
      data-size="large"
    >
      <Twitter className="mr-2 h-4 w-4" />
      Tweet
    </Button>
  );
};
