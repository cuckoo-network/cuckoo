import * as React from "react";
import { cn } from "@/lib/utils";
import { Input, InputProps } from "./input";

interface InputWithUnitProps extends InputProps {
  unit: string;
}

const InputWithUnit = React.forwardRef<HTMLInputElement, InputWithUnitProps>(
  ({ className, type, unit, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <Input
          type={type}
          className={cn("pr-16", className)} // Ensure padding on the right for the unit
          ref={ref}
          {...props}
        />
        <span className="absolute right-3 text-sm text-muted-foreground">
          {unit}
        </span>
      </div>
    );
  },
);

InputWithUnit.displayName = "InputWithUnit";

export { InputWithUnit };
