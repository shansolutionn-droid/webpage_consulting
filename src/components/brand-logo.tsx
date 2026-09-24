import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#eaf1f6] via-[#dce7ee] to-[#cedde7]",
        "h-16 w-24 sm:h-[72px] sm:w-[108px]",
        className,
      )}
    >
      <img
        src="/shansolution-india-logo.jpeg"
        alt="ShanSolution India"
        decoding="async"
        fetchPriority="high"
        className="size-full object-contain mix-blend-multiply"
      />
    </span>
  );
}
