import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Send,
  Heart,
  Users,
  Building2,
  HandshakeIcon,
  Sparkles,
  MapPin,
  Briefcase,
} from "lucide-react";
import applyImage from "@/assets/apply-team.jpg";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply With Us — Link to Life Care LLC" },
      {
        name: "description",
        content:
          "Join Link to Life Care LLC. Opportunities for compassionate candidates and partnerships with employers, staffing agencies, and community organizations across King, Snohomish, and Pierce County, WA.",
      },
      { property: "og:title", content: "Apply With Us — Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "Meaningful work in person-centered, trauma-informed care. We welcome candidates and partner organizations.",
      },
      { property: "og:image", content: applyImage },
      { name: "twitter:image", content: applyImage },
    ],
  }),
  component: ApplyPage,
});

const workAreas = [
  "Community inclusion support",
  "Life skills coaching",
  "Housing navigation support",
  "Case coordination assistance",
  "Non-medical transportation support",
  "Direct support for individuals with developmental disabilities",
  "Client advocacy and resource connection",
];

const lookFor = [
  "Compassionate and respectful",
  "Reliable and professional",
  "Patient and trauma-informed",
  "Culturally aware and inclusive",
  "Strong communicators",
  "Able to work with individuals from diverse backgrounds",
  "Committed to client dignity, safety, and independence",
];

const partnerships = [
  "Staffing support inquiries",
  "Workforce collaboration",
  "Referral partnerships",
  "Community-based service partnerships",
  "Support staff placement discussions",
  "Employer and agency collaboration",
];

const whyWork = [
  {
    icon: Heart,
    title: "Meaningful Work",
    body: "Be part of services that help individuals move toward stability, independence, and community connection.",
  },
  {
    icon: Sparkles,
    title: "Person-Centered Mission",
    body: "Our work is guided by dignity, respect, compassion, and client choice.",
  },
  {
    icon: MapPin,
    title: "Community Impact",
    body: "We serve individuals and families across King, Snohomish, and Pierce County.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    body: "We work alongside families, case managers, social workers, agencies, and community partners.",
  },
];

function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Apply With Us
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Join our mission of stability, independence, and community.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Link to Life Care LLC welcomes compassionate individuals,
              employers, staffing partners, and community organizations
              interested in working with us. Whether you are a candidate seeking
              meaningful work or an organization seeking qualified support
              staff — we invite you to connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply-form"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:translate-y-[-1px]"
              >
                Apply Now
              </a>
              <a
                href="#partner"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-primary-soft/40"
              >
                Partner With Us
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={applyImage}
                alt="A small team of caregivers collaborating around a sunlit table"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CANDIDATES */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              For Candidates
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Make a difference in your community.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              Are you compassionate, dependable, and passionate about helping
              others? We are looking for service-minded individuals who want to
              support vulnerable community members in building stability,
              independence, and confidence.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              We welcome candidates committed to respectful care, ethical
              service, and meaningful community impact.
            </p>
          </div>

          <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Possible areas of work
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {workAreas.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Heart className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  What we look for
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {lookFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partner" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                For Employers & Partners
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Partner with Link to Life Care LLC.
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
                We welcome inquiries from employers, staffing agencies, workforce
                partners, and community organizations seeking qualified support
                staff or collaboration opportunities.
              </p>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                We are open to partnerships that strengthen service delivery,
                improve workforce access, and expand high-quality support for
                individuals and families across our communities.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <HandshakeIcon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    Partnership opportunities
                  </h3>
                </div>
                <ul className="mt-6 grid gap-2.5 border-t border-border pt-6 sm:grid-cols-2">
                  {partnerships.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:translate-y-[-1px]"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why work with us
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Care that means something — for clients and for the people who serve them.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyWork.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-12">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Building2 className="h-5 w-5" />
            </span>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Application & inquiry form
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Share your experience, availability, and interest. A member of our
            team will respond as soon as possible.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-primary/30 bg-primary-soft/50 p-6 text-foreground">
              <h3 className="font-display text-lg font-medium">Thank you</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your application has been received. We will be in touch shortly.
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
                  label="I am applying as"
                  name="applyType"
                  options={["Candidate", "Employer / Staffing Partner", "Community Organization", "Other"]}
                />
                <Field
                  label="Position or service area of interest"
                  name="positionInterest"
                  placeholder="e.g. Direct support, housing navigation"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Work experience" name="experience" placeholder="Years and relevant roles" />
                <Field label="Availability" name="availability" placeholder="Days / hours available" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground" htmlFor="resume">
                  Resume upload
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 block w-full rounded-2xl border border-dashed border-input bg-background px-4 py-3 text-sm text-foreground file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground"
                />
                <p className="mt-1 text-xs text-muted-foreground">PDF or Word document, optional.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your interest in working with our clients…"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:translate-y-[-1px]"
              >
                Submit Application
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted by Link to Life Care LLC
                regarding your application or inquiry.
              </p>
            </form>
          )}
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
