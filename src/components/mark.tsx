import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={cn("size-7", className)} aria-hidden="true">
      <rect width="32" height="32" rx="7" className="fill-paper" />
      <path
        className="fill-ink"
        d="M22.2 10.1h-8.1c-2.1 0-3.1.6-3.1 1.8 0 1 .8 1.5 3.1 2l4.6 1c3.9.9 5.5 2.5 5.5 5.2 0 3.3-2.7 5.3-7.3 5.3H9.8v-3.1h7.3c2.4 0 3.5-.6 3.5-1.9 0-1-.8-1.6-3.2-2.1l-4.5-1c-3.9-.8-5.6-2.4-5.6-5.2 0-3.2 2.6-5.1 6.9-5.1h8v3.1z"
      />
    </svg>
  );
}
