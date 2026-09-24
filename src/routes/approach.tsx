import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { process, requirements, site } from "@/lib/site";

export const Route = createFileRoute("/approach")({ component: ApproachPage });

const approachCommitments = [
  {
    title: "A defined engineering scope",
    copy: "We align the technical tasks, expected outputs and review points with your requirements.",
  },
  {
    title: "Coordinated execution",
    copy: "When a project needs additional engineering or manufacturing capabilities, we coordinate specialized technical partners for the defined scope.",
  },
] as const;

function ApproachPage() {
  return (
    <main>
      <PageHero
        kicker="Approach"
        title="From requirement to prototype."
        image="/images/design-process.jpg"
      >
        {site.name} begins with your application and project objectives, then develops the concept,
        design and engineering documentation needed to support prototype development.
      </PageHero>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker">A practical process</p>
            <h2 className="mt-4 max-w-2xl font-display text-title">
              Seven steps connect the brief to practical development.
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

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Requirement understanding</p>
            <h2 className="mt-4 font-display text-title font-medium">
              The right solution starts with the right inputs.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {requirements.map((requirement) => (
                <li key={requirement} className="border-t border-line pt-3 text-sm text-muted">
                  {requirement}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="kicker kicker-ink">What to expect</p>
            <h2 className="mt-4 max-w-2xl font-display text-title">
              One engineering interface, aligned with your project.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {approachCommitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <article className="h-full rounded-xl bg-white/55 p-6 shadow-[var(--shadow-paper)] sm:p-7">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.copy}</p>
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
            className="inline-flex h-12 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Contact {site.name}
          </Link>
        </div>
      </section>
    </main>
  );
}
