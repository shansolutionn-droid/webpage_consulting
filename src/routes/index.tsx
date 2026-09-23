import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HeroCanvas } from "@/components/hero-canvas";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal, SplitWords } from "@/components/reveal";
import { principles, process, sectors, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative isolate min-h-dvh overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Switchgear hall in a modern industrial plant"
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
            <SplitWords text="Engineering advice you can act on." />
          </h1>
          <p
            className="mt-6 max-w-xl text-lead text-fg/75"
            style={{ animation: "fade-up 800ms 280ms var(--ease-out) both" }}
          >
            AXIA is a new consulting practice helping project teams make clear decisions about
            electrical and mechanical systems.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-3"
            style={{ animation: "fade-up 800ms 380ms var(--ease-out) both" }}
          >
            <MagneticButton to="/contact">Talk to an engineer</MagneticButton>
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
            <p className="kicker">A focused practice</p>
            <h2 className="mt-4 font-display text-title font-medium">
              Practical engineering for complex decisions.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <p className="text-lead text-muted">
              We help define the problem, assess technical options, and give project teams a clear
              basis for their next decision. Engagements are scoped to the project and the support
              it needs.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 border-t border-line sm:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="border-line px-5 py-8 sm:px-8 sm:py-10 [&:nth-child(odd)]:border-r sm:[&:not(:last-child)]:border-r"
            >
              <p className="font-display text-2xl font-medium text-fg">{principle.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{principle.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker kicker-ink">What we do</p>
            <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
              Electrical and mechanical expertise, connected.
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
              <p className="kicker">Sectors</p>
              <h2 className="mt-4 font-display text-title font-medium">
                Technical support for demanding environments.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link to="/sectors" className="text-sm font-semibold text-steel hover:text-fg">
                Explore sectors →
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={i * 50}>
                <article className="h-full rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-7">
                  <p className="kicker">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-2xl font-medium">{sector.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{sector.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker">How we work</p>
            <h2 className="mt-4 font-display text-title font-medium">
              A clear process, from question to next step.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 70} className="relative">
                <p className="font-display text-4xl text-steel/50">{step.n}</p>
                <h3 className="mt-4 font-display text-2xl font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="overflow-hidden bg-bg py-10">
        <div className="marquee-track flex w-max gap-12 px-8 text-sm tracking-[0.22em] text-muted uppercase">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex gap-12">
              {sectors.map((sector) => (
                <span key={`${copy}-${sector.slug}`} className="flex items-center gap-12">
                  {sector.title}
                  <span className="current-dot inline-block size-1.5 rounded-full bg-steel" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 sm:py-24 md:flex-row md:items-end">
          <Reveal>
            <p className="kicker kicker-ink">Next</p>
            <h2 className="mt-4 max-w-xl font-display text-title font-medium">
              Send the problem. We will tell you if we are the right desk.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-paper transition-transform duration-150 hover:bg-bg active:scale-[0.96]"
            >
              Start a brief
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
