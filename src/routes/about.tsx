import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { principles, site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker={`About ${site.name}`}
        title="A new consultancy. Focused on the engineering."
      >
        AXIA is an early-stage engineering consultancy for electrical and mechanical systems. We
        help project teams make clear technical decisions and move forward with confidence.
      </PageHero>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker kicker-ink">Why AXIA</p>
            <h2 className="mt-4 font-display text-title font-medium">
              Thoughtful engineering, scaled to the problem.
            </h2>
          </Reveal>
          <Reveal className="space-y-5 text-sm leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
            <p>
              We are building AXIA as a focused consulting practice: clear advice, practical scope,
              and direct communication from the first conversation.
            </p>
            <p>
              Work can begin with a design question, an independent review, or a system that is not
              performing as expected. We agree the scope around the information available and the
              decision your team needs to make.
            </p>
            <p>
              We work with owners and project teams to make technical choices easier to understand,
              evaluate, and act on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="kicker">How we work</p>
            <h2 className="mt-4 max-w-2xl font-display text-title">
              A few principles guide every engagement.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 60}>
                <article className="h-full rounded-xl bg-surface p-7 shadow-[var(--shadow-border)]">
                  <p className="kicker">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-2xl">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-3xl">
            Have a technical question to work through?
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-ink px-5 text-sm font-semibold text-paper"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
