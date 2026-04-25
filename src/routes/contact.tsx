import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Phone, Check, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Link to Life Care LLC" },
      {
        name: "description",
        content:
          "Contact Link to Life Care LLC for service inquiries, referrals, and partnership opportunities in King, Snohomish, and Pierce County, Washington.",
      },
      { property: "og:title", content: "Contact Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "We welcome inquiries from individuals, families, case managers, agencies, and community partners.",
      },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  "Service inquiries",
  "Referrals",
  "Partnership opportunities",
  "Housing support questions",
  "Developmental disability services",
  "Community inclusion services",
  "Case coordination support",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="gradient-warm">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contact
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Get in touch with Link to Life Care LLC.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We welcome inquiries from individuals, families, case managers,
              social workers, agencies, and community partners. Whether you are
              seeking services, making a referral, or exploring partnership
              opportunities — we are here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* SIDEBAR */}
          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Contact us for
              </h2>
              <ul className="mt-5 space-y-2.5">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-primary/30 bg-primary p-8 text-primary-foreground">
              <h2 className="font-display text-2xl font-medium tracking-tight text-primary-foreground">
                Service Area
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                Link to Life Care LLC serves communities throughout Washington
                State.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {["King County", "Snohomish County", "Pierce County", "Washington State"].map(
                  (c) => (
                    <li key={c} className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 text-primary-foreground/80" />
                      <span>{c}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border bg-secondary/50 p-8">
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Other ways to reach us
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">Available by request</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Use the form to send us a message</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A member of our team will respond as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-primary-soft/50 p-6 text-foreground">
                  <h3 className="font-display text-lg font-medium">Thank you</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your message has been received. We will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-8 grid gap-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field label="Phone number" name="phone" type="tel" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email address" name="email" type="email" required />
                    <Field label="County" name="county" placeholder="King / Snohomish / Pierce" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label="Seeking services for"
                      name="seekingFor"
                      options={["Myself", "Someone else", "A client / case", "Other"]}
                    />
                    <Field label="Organization (if applicable)" name="organization" />
                  </div>
                  <SelectField
                    label="Reason for contacting us"
                    name="reason"
                    options={[
                      "Service inquiry",
                      "Referral",
                      "Partnership",
                      "Housing support",
                      "Developmental disability services",
                      "Other",
                    ]}
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us a little about how we can help…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:translate-y-[-1px]"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by Link to Life Care LLC
                    regarding your inquiry.
                  </p>
                </form>
              )}
            </div>

            <div className="mt-8 rounded-[2rem] border border-border bg-secondary/50 p-8 sm:p-10">
              <h3 className="font-display text-xl font-medium tracking-tight">
                Take the first step
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Toward stability, independence, and community connection. Contact
                Link to Life Care LLC today to learn more about our services or
                to make a referral.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full appearance-none rounded-full border border-input bg-background px-5 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
