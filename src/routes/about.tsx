import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { reasons, site } from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About ShanSolution India"
        title="Engineering requirements, practical solutions."
        image="/images/product-development.jpg"
      >
        {site.name} is an engineering design and development company focused on transforming
        customer requirements into engineered mechanical solutions.
      </PageHero>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker kicker-ink">What we do</p>
            <h2 className="mt-4 font-display text-title font-medium">
              Understand. Develop. Validate. Prototype.
            </h2>
          </Reveal>
          <Reveal className="space-y-5 text-sm leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
            <p>
              We work with engineering companies to understand technical requirements, develop
              concepts, create detailed 3D and 2D designs, and perform FEA and engineering analysis
              where required.
            </p>
            <p>
              We also support prototype development. When a project needs additional engineering or
              manufacturing capabilities, we coordinate specialized technical partners to execute
              the defined scope.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="kicker">Why ShanSolution India</p>
            <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
              Engineering work connected to practical execution.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 50}>
                <article className="h-full rounded-xl border border-line bg-surface p-6 sm:p-7">
                  <p className="kicker">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 font-display text-2xl font-medium">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{reason.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-3xl">
            Have an engineering requirement to discuss?
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
