import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md bg-transparent px-3.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 placeholder:text-muted/70 focus-visible:shadow-[var(--shadow-border-hover)] focus-visible:ring-2 focus-visible:ring-steel/40",
        className,
      )}
      {...props}
    />
  );
}
