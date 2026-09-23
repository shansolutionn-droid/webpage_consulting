import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-md bg-transparent px-3.5 py-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-steel/40",
        className,
      )}
      {...props}
    />
  );
}
