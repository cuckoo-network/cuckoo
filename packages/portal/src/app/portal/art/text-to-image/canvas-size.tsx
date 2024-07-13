import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { textToImageSizes } from "@/app/portal/art/text-to-image/hooks/use-text-to-image";

export function CanvasSize() {
  const choices = Object.keys(textToImageSizes);
  return (
    <Select
      name={"canvasSize"}
      defaultValue={choices[Math.floor(Math.random() * choices.length)]}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {choices.map((sizeKey) => (
            <SelectItem key={sizeKey} value={sizeKey}>
              {sizeKey} ({textToImageSizes[sizeKey].width}x
              {textToImageSizes[sizeKey].height})
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
