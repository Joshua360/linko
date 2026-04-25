import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertTriangle,
  Check,
  MessageSquare,
  ShieldCheck,
  Send,
  Phone,
  Heart,
} from "lucide-react";
import resourcesImage from "@/assets/resources-listen.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Link to Life Care LLC" },
      {
        name: "description",
        content:
          "Submit a complaint, share feedback, and learn about our commitment to accountability. Link to Life Care LLC is committed to dignity, safety, and respect.",
      },
      { property: "og:title", content: "Resources — Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "Complaints, feedback, and support information for clients, families, staff, and community partners.",
      },
      { property: "og:image", content: resourcesImage },
      { name: "twitter:image", content: resourcesImage },
    ],
  }),
  component: ResourcesPage,
});

const complaintAbout = [
  "Quality of services",
  "Staff conduct",
  "Communication concerns",
  "Scheduling or service coordination",
  "Safety concerns",
  "Respect, dignity, or fairness",
  "Any experience that did not meet expectations",
];

const feedbackAbout = [
  "Positive service experiences",
  "Suggestions for improvement",
  "Staff recognition",
  "Communication",
  "Program quality",
  "Community partnerships",
  "General comments",
];

const accountability = [
  "Review the information carefully",
  "Follow up when contact information is provided",
  "Address concerns in a fair and respectful manner",
  "Use feedback to improve service quality",
  "Protect the dignity and privacy of everyone involved",
];

type Mode = "complaint" | "feedback";

function ResourcesPage() {
  const [mode, setMode] = useState<Mode>("complaint");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Resources
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Complaints, feedback, and support information.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              We are committed to providing high-quality, respectful, and
              person-centered services. Your voice helps us improve and continue
              providing care that reflects dignity, safety, and respect.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={resourcesImage}
                alt="An open notebook, pen, and warm cup beside a small green plant by a sunlit window"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY NOTICE */}
      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-10">
        <div className="rounded-[1.75rem] border border-accent/40 bg-accent/10 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-medium tracking-tight">
                Need immediate help?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                If this is a medical, mental health, or safety emergency, please
                call <span className="font-semibold">911</span> immediately. If
                you are in crisis, contact local emergency services or a crisis
                support line in your area.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Please do not use the complaint or feedback form for urgent
                emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Share a complaint
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We take concerns seriously. If you have a concern about services,
              staff conduct, communication, safety, or any part of your
              experience, we encourage you to submit a complaint. Complaints
              are reviewed with care, confidentiality, and fairness.
            </p>
            <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
              {complaintAbout.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setMode("complaint");
                setSubmitted(false);
                document.getElementById("resource-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:translate-y-[-1px]"
            >
              Submit a Complaint
            </button>
          </article>

          <article className="rounded-[2rem] border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </span>
              <h2 className="font-display text-2xl font-medium tracking-tight">
                Give feedback
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We welcome feedback from clients, families, caregivers, case
              managers, community partners, and staff. Whether your experience
              was positive or you have suggestions for improvement, we want to
              hear from you.
            </p>
            <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
              {feedbackAbout.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setMode("feedback");
                setSubmitted(false);
                document.getElementById("resource-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-primary-soft/40"
            >
              Give Feedback
            </button>
          </article>
        </div>
      </section>

      {/* ACCOUNTABILITY */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Accountability
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Our commitment to listening, responding, and improving.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              We handle complaints and feedback with professionalism, respect,
              and confidentiality. When a concern is submitted, we aim to:
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-3">
              {accountability.map((a) => (
                <li
                  key={a}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="resource-form" className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {mode === "complaint" ? "Submit a complaint" : "Share feedback"}
            </h2>
            <div className="inline-flex rounded-full border border-border bg-background p-1 text-xs font-medium">
              <button
                type="button"
                onClick={() => {
                  setMode("complaint");
                  setSubmitted(false);
                }}
                className={`rounded-full px-4 py-2 transition ${
                  mode === "complaint"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Complaint
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("feedback");
                  setSubmitted(false);
                }}
                className={`rounded-full px-4 py-2 transition ${
                  mode === "feedback"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Feedback
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            All submissions are handled with confidentiality and respect.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-2xl border border-primary/30 bg-primary-soft/50 p-6 text-foreground">
              <h3 className="font-display text-lg font-medium">Thank you</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your submission has been received. If you provided contact
                information, a member of our team will follow up.
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
                <Field label="Email address" name="email" type="email" />
                <SelectField
                  label="I am a"
                  name="role"
                  options={[
                    "Client",
                    "Family member",
                    "Staff member",
                    "Partner",
                    "Community member",
                  ]}
                />
              </div>

              {mode === "complaint" ? (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Date of concern" name="date" type="date" />
                    <SelectField
                      label="Type of concern"
                      name="concernType"
                      options={[
                        "Quality of services",
                        "Staff conduct",
                        "Communication",
                        "Scheduling / coordination",
                        "Safety",
                        "Respect / dignity",
                        "Other",
                      ]}
                    />
                  </div>
                  <Field
                    label="Name of staff member involved (if applicable)"
                    name="staffName"
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Description of complaint <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Please describe the concern in as much detail as you are comfortable sharing…"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Desired resolution
                    </label>
                    <textarea
                      name="resolution"
                      rows={3}
                      className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="What outcome would you like to see?"
                    />
                  </div>
                </>
              ) : (
                <>
                  <SelectField
                    label="Type of feedback"
                    name="feedbackType"
                    options={[
                      "Positive experience",
                      "Suggestion for improvement",
                      "Staff recognition",
                      "Communication",
                      "Program quality",
                      "General comment",
                    ]}
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="We would love to hear about your experience…"
                    />
                  </div>
                </>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="May we contact you for follow-up?"
                  name="followUp"
                  options={["Yes", "No"]}
                />
                <SelectField
                  label="Preferred contact method"
                  name="contactMethod"
                  options={["Phone", "Email", "Either"]}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:translate-y-[-1px]"
              >
                {mode === "complaint" ? "Submit Complaint" : "Send Feedback"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CLOSING */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.5rem] border border-border bg-secondary/60 p-10 sm:p-14">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <Heart className="h-3.5 w-3.5" />
                We are here to listen
              </span>
              <h2 className="mt-3 text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Your concerns, ideas, and experiences matter.
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-sm text-muted-foreground">
                Thank you for helping Link to Life Care LLC maintain high
                standards of care, accountability, and community service.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground lg:col-span-4 lg:justify-end">
              <Phone className="h-4 w-4 text-primary" />
              <span>For emergencies, please call 911.</span>
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
