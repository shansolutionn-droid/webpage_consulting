import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { sectors, services } from "@/lib/site";

export const Route = createFileRoute("/sectors")({ component: SectorsPage });

function SectorsPage() {
  return (
    <main>
      <PageHero kicker="Sectors" title="Engineering for demanding environments.">
        Electrical and mechanical systems shape how critical facilities perform. AXIA's consulting
        can be scoped to the technical questions in your sector.
      </PageHero>
      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-ink/10 px-0 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <article className="flex h-full flex-col bg-paper p-8 sm:p-10">
                <p className="kicker kicker-ink">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 font-display text-3xl font-medium">{s.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{s.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="kicker">Related capabilities</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.slug}
                to="/services"
                hash={service.slug}
                className="rounded-xl bg-surface px-5 py-5 shadow-[var(--shadow-border)] transition-[box-shadow] hover:shadow-[var(--shadow-border-hover)]"
              >
                <p className="text-xs text-muted">{service.kicker}</p>
                <p className="mt-1 font-display text-xl">{service.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
