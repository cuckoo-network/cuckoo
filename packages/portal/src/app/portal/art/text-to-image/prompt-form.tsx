import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface PromptFormProps {
  onSubmit: (params: any) => void;
  loading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({
  onSubmit,
  loading,
}) => {
  const [prompt, setPrompt] = useState(
    "(masterpiece), best quality, expressive eyes, perfect face",
  );
  const [negativePrompt, setNegativePrompt] = useState(
    "nsfw, lowres, (bad), text, error, fewer, extra, missing, worst quality, jpeg artifacts, low quality, watermark, unfinished, displeasing, oldest, early, chromatic aberration, signature, extra digits, artistic error, username, scan, [abstract]",
  );
  const [highPriority, setHighPriority] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ prompt, negativePrompt, highPriority });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="prompt" className="font-bold flex items-center gap-2">
          Prompt{" "}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="link" className="p-0">
                <CircleHelp className={"w-4"} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              Text that will be used to create an image.
            </PopoverContent>
          </Popover>
        </label>
        <Textarea
          id="prompt"
          className="m-1"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 my-4">
        <Checkbox id="highPriority" />
        <label
          htmlFor="highPriority"
          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          High Priority
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-pink-600 text-white rounded-md"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            <label
              htmlFor="negativePrompt"
              className="font-bold cursor-pointer flex items-center gap-2"
            >
              Negative Prompt{" "}
              <Popover>
                <PopoverTrigger
                  asChild
                  onClick={(event) => event.stopPropagation()}
                >
                  <Button variant="link" className="p-0">
                    <CircleHelp className={"w-4"} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  Can be used to attempt to exclude things from your images.
                </PopoverContent>
              </Popover>
            </label>
          </AccordionTrigger>
          <AccordionContent>
            <div className="m-1">
              <Textarea
                id="negativePrompt"
                value={negativePrompt}
                onChange={(e) => setNegativePrompt(e.target.value)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  );
};
