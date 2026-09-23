import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg text-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-2xl tracking-tight">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.blurb}</p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-fg/85 hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-fg/85 hover:text-fg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker">Get in touch</p>
          <p className="mt-4 text-sm">
            <a href={`mailto:${site.email}`} className="hover:text-steel">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
