import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { principles, process } from "@/lib/site";

export const Route = createFileRoute("/approach")({ component: ApproachPage });

function ApproachPage() {
  return (
    <main>
      <PageHero kicker="Approach" title="Start with the question that matters.">
        As a new consultancy, AXIA is building a focused practice around careful analysis, useful
        deliverables, and direct collaboration with project teams.
      </PageHero>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker">A practical process</p>
            <h2 className="mt-4 max-w-2xl font-display text-title">
              From an open question to a clear next step.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.n} delay={i * 70}>
                <article className="h-full border-t border-line pt-5">
                  <p className="font-display text-4xl text-steel/60">{step.n}</p>
                  <h3 className="mt-4 font-display text-2xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker kicker-ink">What to expect</p>
            <h2 className="mt-4 max-w-2xl font-display text-title">
              A working relationship built on clarity.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60}>
                <article className="h-full rounded-xl bg-white/55 p-7 shadow-[var(--shadow-paper)]">
                  <h3 className="font-display text-2xl">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-3xl">
            Have a project question or scope to discuss?
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-paper px-5 text-sm font-semibold text-ink"
          >
            Contact AXIA
          </Link>
        </div>
      </section>
    </main>
  );
}
