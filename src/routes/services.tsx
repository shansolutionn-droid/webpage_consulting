import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Product development, from scratch to solution."
        image="/images/product-development.jpg"
      >
        ShanSolution India provides end-to-end product development support, 2D CAD drawing creation,
        3D modelling, and FEA validation. Choose the support that fits your project stage.
      </PageHero>
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-6xl divide-y divide-ink/10 px-5 sm:px-8">
          {services.map((svc, i) => (
            <article key={svc.slug} id={svc.slug} className="scroll-mt-24 py-14 sm:py-16">
              <Reveal>
                <div className="grid gap-8 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <p className="kicker kicker-ink">
                      {String(i + 1).padStart(2, "0")} · {svc.kicker}
                    </p>
                    <h2 className="mt-3 font-display text-title font-medium">{svc.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-ink/65">{svc.summary}</p>
                  </div>
                  <ul className="grid gap-3 md:col-span-6 md:col-start-7">
                    {svc.points.map((point) => (
                      <li
                        key={point}
                        className="border-b border-ink/10 pb-3 text-sm leading-relaxed text-ink/80 last:border-0"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-bg">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-md font-display text-2xl text-fg">
            Not sure which service fits? Tell us about the product and where you are in development.
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
