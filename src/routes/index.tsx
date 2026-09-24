import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HeroCanvas } from "@/components/hero-canvas";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, SplitWords } from "@/components/reveal";
import { industries, process, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative isolate min-h-dvh overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="A 3D mechanical component with a finite element analysis stress visualization"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/72" />
        <div className="veil absolute inset-0" />
        <HeroCanvas />
        <div className="scan-line scan-wash pointer-events-none absolute inset-x-0 top-0 h-24" />

        <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="kicker" style={{ animation: "fade-up 700ms var(--ease-out) both" }}>
            {site.blurb}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-display font-medium text-fg">
            <SplitWords text="Turning engineering requirements into practical solutions." />
          </h1>
          <p
            className="mt-6 max-w-xl text-lead text-fg/75"
            style={{ animation: "fade-up 800ms 280ms var(--ease-out) both" }}
          >
            We specialize in managing the interface between engineering customers and specialized
            execution partners, guiding projects from requirements through concepts, detailed
            design, engineering analysis, and prototype support.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            style={{ animation: "fade-up 800ms 380ms var(--ease-out) both" }}
          >
            <MagneticButton to="/contact">Share your brief</MagneticButton>
            <MagneticButton to="/approach" variant="ghost">
              How we work
            </MagneticButton>
          </div>
          <div className="hero-rule mt-12 h-px w-full max-w-xs bg-fg/25" />
        </div>
      </section>

      <section className="border-b border-line bg-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="kicker">What we do</p>
            <h2 className="mt-4 font-display text-title font-medium">
              Engineering design and development, shaped to the requirement.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <p className="text-lead text-muted">
              We work with engineering companies to understand technical requirements, develop
              concepts, create 3D and 2D designs, analyse designs where required, and support
              prototype development. Specialized partners can support the defined scope.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker kicker-ink">What we do</p>
            <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
              From concept development to prototype support.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 50}>
                <Link
                  to="/services"
                  hash={svc.slug}
                  className="group flex h-full flex-col bg-paper p-6 transition-colors duration-200 hover:bg-fg sm:p-7"
                >
                  <p className="kicker kicker-ink">{svc.kicker}</p>
                  <h3 className="mt-3 font-display text-2xl font-medium">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{svc.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-ink/70">
                    {svc.points.slice(0, 2).map((point) => (
                      <li key={point} className="border-t border-ink/10 pt-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold">
                    Details
                    <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="kicker">Our engineering process</p>
              <h2 className="mt-4 font-display text-title font-medium">
                A clear path from requirement to prototype.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link to="/approach" className="text-sm font-semibold text-brand hover:text-fg">
                Explore our approach →
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 45}>
                <article className="h-full rounded-lg border border-line bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
                  <p className="kicker">{step.n}</p>
                  <h3 className="mt-4 font-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="kicker">Industries</p>
            <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
              Engineering support across industrial sectors.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {industries.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 35}>
                <div className="min-h-28 border-t border-line py-4" role="listitem">
                  <h3 className="font-display text-xl font-medium">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{industry.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 sm:py-24 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker kicker-ink">Next</p>
            <h2 className="mt-4 max-w-xl font-display text-title font-medium">
              Tell us your engineering requirement and the outcome you need.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 hover:bg-brand-strong active:scale-[0.96]"
            >
              Contact ShanSolution India
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
