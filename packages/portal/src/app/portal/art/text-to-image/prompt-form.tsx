import React, { useRef, useState } from "react";
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
import { CanvasSize } from "@/app/portal/art/text-to-image/canvas-size";
import serialize from "form-serialize";
import { ICanvasSize } from "@/app/portal/art/text-to-image/hooks/use-text-to-image";

interface PromptFormProps {
  onSubmit: (params: {
    highPriority: boolean;
    negativePrompt: string;
    prompt: string;
    canvasSize: ICanvasSize;
  }) => void;
  loading: boolean;
}

const prompts = {
  a: {
    prompt: "(masterpiece), best quality, expressive eyes, perfect face",
    negativePrompt:
      "lowres, (bad), text, error, fewer, extra, missing, worst quality, jpeg artifacts, low quality, watermark, unfinished, displeasing, oldest, early, chromatic aberration, signature, extra digits, artistic error, username, scan, [abstract]",
  },
};

const defaultPrompt = prompts.a;

export const PromptForm: React.FC<PromptFormProps> = ({
  onSubmit,
  loading,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    const obj = serialize(formRef.current!, { hash: true });
    event.preventDefault();
    onSubmit({
      prompt: obj.prompt as string,
      negativePrompt: obj.negativePrompt as string,
      highPriority: obj.highPriority === "on",
      canvasSize: obj.canvasSize as ICanvasSize,
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
          name="prompt"
          className="m-1"
          defaultValue={defaultPrompt.prompt}
        />
      </div>

      <div className="flex items-center gap-2 my-4">
        <label
          htmlFor="canvasSize"
          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Canvas Size
        </label>
        <CanvasSize />
      </div>

      <div className="flex items-center gap-2 my-4">
        <Checkbox id="highPriority" name={"highPriority"} />
        <label
          htmlFor="highPriority"
          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          High Priority
        </label>
      </div>

      <div>
        <Button
          type="submit"
          disabled={loading}
          isLoading={loading}
          className="px-4 py-2 bg-pink-600 text-white rounded-md"
        >
          {loading ? "Generating..." : "Generate"}
        </Button>
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
                name={"negativePrompt"}
                defaultValue={defaultPrompt.negativePrompt}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </form>
  );
};
