import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { capabilities } from "@/lib/site";

export const Route = createFileRoute("/capabilities")({ component: CapabilitiesPage });

function CapabilitiesPage() {
  return (
    <main>
      <PageHero
        kicker="CAD & FEA"
        title="3D design, 2D drawings, and engineering analysis."
        image="/images/cad-drawings.jpg"
      >
        Detailed models and drawings carry the selected concept into engineering review. Where
        required, FEA and calculations help evaluate the design under defined conditions.
      </PageHero>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl divide-y divide-ink/10 px-5 sm:px-8">
          {capabilities.map((capability, i) => (
            <article
              key={capability.slug}
              id={capability.slug}
              className="scroll-mt-24 py-14 sm:py-16"
            >
              <Reveal>
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <p className="kicker kicker-ink">
                      {String(i + 1).padStart(2, "0")} · {capability.kicker}
                    </p>
                    <h2 className="mt-3 font-display text-title font-medium">{capability.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink/65">{capability.summary}</p>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <ul className="grid gap-3">
                      {capability.points.map((point) => (
                        <li
                          key={point}
                          className="border-b border-ink/10 pb-3 text-sm leading-relaxed text-ink/80 last:border-0"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-l-2 border-brand pl-4 text-sm leading-relaxed text-ink/80">
                      <strong>Outcome:</strong> {capability.outcome}
                    </p>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="kicker">FEA approach</p>
            <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
              Use analysis to improve the design.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Define loads, build the model, apply constraints, analyse, evaluate results, and use
              the findings to identify potential improvements.
            </p>
          </Reveal>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Define loads",
              "Build model",
              "Apply constraints",
              "Analyse",
              "Evaluate results",
              "Improve design",
            ].map((step, i) => (
              <li
                key={step}
                className="rounded-lg border border-line bg-bg p-5 text-sm font-medium"
              >
                <span className="mr-3 text-steel">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-md font-display text-2xl text-fg">
            Have a CAD or FEA requirement to discuss?
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Share your brief
          </Link>
        </div>
      </section>
    </main>
  );
}
