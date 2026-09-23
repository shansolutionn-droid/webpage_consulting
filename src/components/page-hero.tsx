import type { ReactNode } from "react";
import { SplitWords } from "@/components/reveal";

export function PageHero({
  kicker,
  title,
  children,
  image,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-bg pt-28 pb-14 sm:pt-32 sm:pb-20">
      {image && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img src={image} alt="" className="size-full object-cover object-right opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <p className="kicker">{kicker}</p>
        <h1 className="mt-4 max-w-4xl font-display text-display font-medium text-fg">
          <SplitWords text={title} />
        </h1>
        {children ? <p className="mt-6 max-w-2xl text-lead text-muted">{children}</p> : null}
        <div className="hero-rule mt-10 h-px w-24 bg-steel/70" />
      </div>
    </section>
  );
}
