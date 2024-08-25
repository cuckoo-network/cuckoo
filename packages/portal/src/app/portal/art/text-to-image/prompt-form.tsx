import React, { useRef, useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp, Dices, Sparkles } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import serialize from "form-serialize";
import {
  getKeyBySize,
  ICanvasSize,
  sizeChoices,
  textToImageSizes,
} from "@/app/portal/art/text-to-image/hooks/use-text-to-image";
import { TextToImageHistoryItem } from "@/gql/graphql";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRandomPrompt } from "@/app/portal/art/text-to-image/hooks/use-random-prompt";

interface PromptFormProps {
  onSubmit: (params: {
    highPriority: boolean;
    negativePrompt: string;
    prompt: string;
    canvasSize: ICanvasSize;
  }) => void;
  loading: boolean;
  ttih?: TextToImageHistoryItem;
}

const prompts = {
  a: {
    prompt:
      "(masterpiece), best quality, beautiful eyes, perfect face, portrait, cyberpunk",
    negativePrompt:
      "lowres, (bad), text, error, fewer, extra, missing, worst quality, jpeg artifacts, low quality, watermark, unfinished, displeasing, oldest, early, chromatic aberration, signature, extra digits, artistic error, username, scan, [abstract]",
  },
};

const defaultPrompt = prompts.a;

export const PromptForm: React.FC<PromptFormProps> = ({
  onSubmit,
  loading,
  ttih,
}) => {
  const { randomPromptData, randomPromptRefetch, randomPromptLoading } =
    useRandomPrompt();

  const formRef = useRef<HTMLFormElement>(null);
  const [negativePrompt, setNegativePrompt] = useState(
    ttih?.negativePrompt || defaultPrompt.negativePrompt,
  );
  const [prompt, setPrompt] = useState(ttih?.prompt || defaultPrompt.prompt);
  const [canvasSize, setCanvasSize] = useState<string>(
    Object.keys(textToImageSizes)[0],
  );

  useEffect(() => {
    if (ttih) {
      setNegativePrompt(ttih.negativePrompt || defaultPrompt.negativePrompt);
      setPrompt(ttih.prompt || defaultPrompt.prompt);
      setCanvasSize(getKeyBySize(ttih));
    } else {
      setNegativePrompt(
        randomPromptData?.randomPrompt.negativePrompt ||
          defaultPrompt.negativePrompt,
      );
      setPrompt(randomPromptData?.randomPrompt.prompt || defaultPrompt.prompt);
    }
  }, [randomPromptData, ttih]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const obj = serialize(formRef.current!, { hash: true }) as any;
    onSubmit({
      prompt: obj.prompt as string,
      negativePrompt: negativePrompt,
      highPriority: obj.highPriority === "on",
      canvasSize: canvasSize,
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
          <Button
            isLoading={randomPromptLoading}
            size={"icon"}
            variant={"secondary"}
            onClick={async (e) => {
              e.preventDefault();
              await randomPromptRefetch();
            }}
          >
            <Dices />
          </Button>
        </label>
        <Textarea
          id="prompt"
          name="prompt"
          className="m-1"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 my-4">
        <label
          htmlFor="canvasSize"
          className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Canvas Size
        </label>
        <Select
          name={"canvasSize"}
          value={canvasSize}
          defaultValue={canvasSize}
          onValueChange={(value) => setCanvasSize(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sizeChoices.map((sizeKey) => (
                <SelectItem key={sizeKey} value={sizeKey}>
                  {sizeKey} ({textToImageSizes[sizeKey].width}x
                  {textToImageSizes[sizeKey].height})
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2 my-4">
        <Checkbox id="highPriority" name="highPriority" />
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
          variant="ghost"
          className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-md"
        >
          {!loading && <Sparkles className={"mr-1"} size={18} />}
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
                name="negativePrompt"
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
