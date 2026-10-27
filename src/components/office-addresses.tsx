import { site } from "@/lib/site";

export function OfficeAddresses() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {site.offices.map((office) => (
        <div key={office.label}>
          <p className="kicker">{office.label}</p>
          <address className="mt-3 text-sm leading-relaxed text-muted not-italic">
            {office.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      ))}
    </div>
  );
}
