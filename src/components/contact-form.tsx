import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().min(2).max(80),
  message: z.string().trim().min(20, "A little more detail helps us reply well").max(2000),
});

type ContactInput = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [draftReady, setDraftReady] = useState(false);
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "Not sure yet",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit((values) => {
    const subject = `${values.service} enquiry from ${values.name}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "Not provided"}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Service: ${values.service}`,
      "",
      "Brief:",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  });

  const err = (key: keyof ContactInput) => form.formState.errors[key]?.message;

  return (
    <>
      {draftReady && (
        <div
          className="mb-6 rounded-xl bg-surface px-6 py-5 text-sm leading-relaxed text-muted shadow-[var(--shadow-border)]"
          role="status"
        >
          Your email app should have opened with the brief filled in. Press Send there to deliver
          it. If it did not open, email{" "}
          <a className="text-fg underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </div>
      )}

      <form onSubmit={onSubmit} className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="contact-name" label="Name" error={err("name")}>
            <Input
              id="contact-name"
              aria-invalid={Boolean(err("name"))}
              aria-describedby="contact-name-error"
              {...form.register("name")}
              autoComplete="name"
            />
          </Field>
          <Field id="contact-email" label="Email address" error={err("email")}>
            <Input
              id="contact-email"
              type="email"
              aria-invalid={Boolean(err("email"))}
              aria-describedby="contact-email-error"
              {...form.register("email")}
              autoComplete="email"
            />
          </Field>
          <Field id="contact-company" label="Company" error={err("company")}>
            <Input
              id="contact-company"
              aria-invalid={Boolean(err("company"))}
              aria-describedby="contact-company-error"
              {...form.register("company")}
              autoComplete="organization"
            />
          </Field>
          <Field id="contact-phone" label="Phone" error={err("phone")}>
            <Input
              id="contact-phone"
              aria-invalid={Boolean(err("phone"))}
              aria-describedby="contact-phone-error"
              {...form.register("phone")}
              autoComplete="tel"
            />
          </Field>
        </div>
        <Field id="contact-service" label="What do you need?" error={err("service")}>
          <select
            id="contact-service"
            aria-invalid={Boolean(err("service"))}
            aria-describedby="contact-service-error"
            {...form.register("service")}
            className="h-11 w-full rounded-md bg-transparent px-3.5 text-sm text-fg shadow-[var(--shadow-border)] outline-none focus-visible:ring-2 focus-visible:ring-steel/40"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-surface text-fg">
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field id="contact-message" label="Your project brief" error={err("message")}>
          <Textarea
            id="contact-message"
            aria-invalid={Boolean(err("message"))}
            aria-describedby="contact-message-error"
            {...form.register("message")}
            placeholder="Application, functional requirements, loads or constraints, project stage, timeline, and the support needed."
          />
        </Field>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <p className="max-w-xs text-xs text-muted">
            Your email app opens with the brief filled in. Review it and press Send to contact
            ShanSolution India.
          </p>
          <Button type="submit">Open email draft</Button>
        </div>
      </form>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      <span
        id={`${id}-error`}
        aria-live="polite"
        className={cn("min-h-4 text-xs text-danger", !error && "invisible")}
      >
        {error ?? " "}
      </span>
    </div>
  );
}
