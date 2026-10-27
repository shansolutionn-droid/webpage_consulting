import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/brand-logo";
import { OfficeAddresses } from "@/components/office-addresses";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg text-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <BrandLogo className="h-28 w-42 sm:h-32 sm:w-48" />
          <div className="mt-6">
            <OfficeAddresses />
          </div>
        </div>
        <div className="lg:col-span-2">
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
        <div className="lg:col-span-4">
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
