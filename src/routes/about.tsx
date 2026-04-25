import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Compass, Users, Shield, Leaf, HandHeart, Handshake } from "lucide-react";
import aboutImage from "@/assets/about-care.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Link to Life Care LLC" },
      {
        name: "description",
        content:
          "Learn about Link to Life Care LLC — a Washington-based provider delivering compassionate, person-centered support to individuals experiencing homelessness and people with disabilities.",
      },
      { property: "og:title", content: "About Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "Our mission, vision, and approach to supporting stability, independence, and community inclusion.",
      },
      { property: "og:image", content: aboutImage },
      { name: "twitter:image", content: aboutImage },
    ],
  }),
  component: AboutPage,
});

const approach = [
  { icon: Heart, label: "Dignity and respect" },
  { icon: Users, label: "Person-centered care" },
  { icon: Leaf, label: "Cultural responsiveness" },
  { icon: Shield, label: "Trauma-informed support" },
  { icon: Compass, label: "Community integration" },
  { icon: HandHeart, label: "Ethical, accountable service" },
  { icon: Handshake, label: "Collaboration with partners" },
];

function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About Us
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              A Washington-based community service provider built on care.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Link to Life Care LLC is dedicated to supporting individuals
              experiencing homelessness and those living with developmental or
              physical disabilities. We deliver compassionate, structured,
              person-centered services that help clients achieve stability,
              independence, and meaningful community inclusion.
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              Every individual has unique needs, strengths, and goals. That's why
              we focus on personalized support, respectful care, and practical
              services that help clients take positive steps toward a better
              quality of life.
            </p>
          </div>
          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={aboutImage}
                alt="Caregiver and client smiling together in a sunlit kitchen"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-card p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Mission
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight">
              Empowering people to achieve stability and full participation.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
              To empower individuals experiencing homelessness and people living
              with disabilities to achieve stability, independence, and full
              participation in their communities through compassionate,
              trauma-informed, and culturally responsive services.
            </p>
          </article>
          <article className="rounded-[2rem] border border-primary/30 bg-primary p-10 text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
              Our Vision
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-primary-foreground">
              Stronger communities where everyone can thrive.
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-primary-foreground/85">
              To build stronger communities where every individual — regardless
              of housing status or ability — has access to safe living
              environments, meaningful support, and opportunities to thrive.
            </p>
          </article>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Approach
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Every service is delivered with intention and care.
            </h2>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-base font-medium text-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Who We Work With
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Coordinated support, built through partnership.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              We collaborate with clients, families, case managers, social
              workers, public agencies, and community organizations to
              coordinate services and connect individuals with the support they
              need.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end">
            {[
              "Clients",
              "Families",
              "Case managers",
              "Social workers",
              "Public agencies",
              "Community partners",
              "DDA programs",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:translate-y-[-1px]"
          >
            Explore our services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-medium text-foreground hover:bg-primary-soft/40"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
