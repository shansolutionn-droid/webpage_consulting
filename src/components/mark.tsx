import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-7", className)} aria-hidden="true">
      <rect width="32" height="32" rx="7" className="fill-paper" />
      <path
        className="fill-ink"
        d="M16 6.4 24.2 26h-3.4l-1.6-4.1h-6.4L11.2 26H7.8L16 6.4zm-3.1 12.3h6.2L16 12.2l-3.1 6.5z"
      />
    </svg>
  );
}
