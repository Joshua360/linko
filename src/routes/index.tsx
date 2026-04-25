import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  Home,
  Users,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import heroImage from "@/assets/hero-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Link to Life Care LLC — Support for Stability & Independence" },
      {
        name: "description",
        content:
          "Compassionate, person-centered services for individuals experiencing homelessness and people with developmental or physical disabilities in King, Snohomish, and Pierce County.",
      },
      { property: "og:title", content: "Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "Compassionate support for stability, independence, and community inclusion across Washington State.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const counties = ["King County", "Snohomish County", "Pierce County"];

const focusPoints = [
  {
    icon: HeartHandshake,
    title: "Person-Centered Care",
    body: "Every plan begins with the person — their story, strengths, culture, and goals.",
  },
  {
    icon: Home,
    title: "Pathways to Stability",
    body: "Support that helps clients move toward safe housing and lasting independence.",
  },
  {
    icon: Users,
    title: "Community Inclusion",
    body: "Building meaningful connections, routines, and confidence in the community.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-warm">
        <div className="bg-grain">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Serving Washington State
              </span>
              <h1 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]">
                Compassionate support for{" "}
                <em className="font-display italic text-primary">stability,</em>{" "}
                independence, and community inclusion.
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Link to Life Care LLC provides person-centered support services
                for individuals experiencing homelessness and people living with
                developmental or physical disabilities — culturally responsive,
                trauma-informed, and built around dignity.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:translate-y-[-1px]"
                >
                  Request Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/60 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-soft/40"
                >
                  Make a Referral
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden />
              <div className="absolute -bottom-10 -right-6 h-52 w-52 rounded-full bg-primary/15 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
                <img
                  src={heroImage}
                  alt="Hands gently linked together symbolizing community support"
                  width={1536}
                  height={1280}
                  className="h-[28rem] w-full object-cover lg:h-[34rem]"
                />
              </div>
              <div className="absolute -bottom-6 left-6 max-w-[14rem] rounded-2xl border border-border bg-background/95 p-4 shadow-soft backdrop-blur">
                <p className="font-display text-sm leading-snug text-foreground">
                  “Every person deserves the chance to live safely and be part of their community.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="font-display text-base font-medium text-foreground sm:text-lg">
              Supporting individuals across Washington communities
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {counties.map((c) => (
              <span
                key={c}
                className="rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOCUS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Focus
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              Care that respects every person's goals, culture, and journey.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              We believe every person deserves the opportunity to live safely,
              participate in their community, and receive support that meets
              them where they are.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {focusPoints.map(({ icon: Icon, title, body }) => (
              <article
                key={title}
                className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
            <article className="rounded-3xl border border-primary/30 bg-primary p-7 text-primary-foreground sm:col-span-2">
              <ShieldCheck className="h-6 w-6" />
              <h3 className="mt-4 font-display text-xl font-medium">
                Trauma-informed and culturally responsive
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-foreground/85">
                Our team partners with clients, families, case managers, and
                community organizations to coordinate consistent, ethical, and
                accountable services.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-secondary/60 p-10 sm:p-14">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Need support or want to make a referral?
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-base text-muted-foreground">
                Contact us today to learn how Link to Life Care LLC can help you,
                a loved one, or a client move toward stability.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:translate-y-[-1px]"
              >
                Request Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-primary-soft/40"
              >
                Make a Referral
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
