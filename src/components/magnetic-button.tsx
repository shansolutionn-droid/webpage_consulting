import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type To = "/" | "/approach" | "/services" | "/capabilities" | "/about" | "/contact";

export function MagneticButton({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: To;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "inline-flex h-12 items-center gap-2 rounded-md px-5 pr-4 text-sm font-semibold tracking-tight transition-[transform,background-color,box-shadow,color] duration-200 ease-out",
        variant === "solid" && "bg-brand text-white hover:bg-brand-strong",
        variant === "ghost" &&
          "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="size-4" strokeWidth={1.75} />
    </Link>
  );
}
