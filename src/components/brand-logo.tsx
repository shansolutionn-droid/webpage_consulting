import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src="/shansolution-india-logo.jpeg"
      alt="ShanSolution India"
      decoding="async"
      fetchPriority="high"
      className={cn("h-16 w-24 object-contain sm:h-[72px] sm:w-[108px]", className)}
    />
  );
}
