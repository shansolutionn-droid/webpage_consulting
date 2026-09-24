import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { principles, site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About ShanSolution India"
        title="Engineering support for product design and development."
        image="/images/product-development.jpg"
      >
        {site.name} provides product development support from the initial idea through CAD work and
        FEA validation. Engagements can cover the full development journey or a specific task.
      </PageHero>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker kicker-ink">How we support your work</p>
            <h2 className="mt-4 font-display text-title font-medium">
              Support that follows the product brief.
            </h2>
          </Reveal>
          <Reveal className="space-y-5 text-sm leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
            <p>
              We begin by understanding the product, its requirements, and the engineering outputs
              your team needs.
            </p>
            <p>
              Support can start with product development from scratch or focus on 2D drawing
              creation, 3D modelling, or FEA validation for a defined stage of work.
            </p>
            <p>
              The scope and expected outputs are agreed around the project requirements before work
              begins.
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
            Have a product idea or design task to discuss?
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
