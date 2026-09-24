import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Share your engineering requirement."
        image="/images/hero.jpg"
      >
        Tell us the application, operating conditions, constraints, timeline and support you need.
        We are based in {site.location}.
      </PageHero>
      <section className="bg-bg">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
            <div>
              <p className="kicker">Email</p>
              <p className="mt-3 text-sm">
                <a href={`mailto:${site.email}`} className="hover:text-steel">
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <p className="kicker">Location</p>
              <p className="mt-3 text-sm text-muted">{site.location}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
