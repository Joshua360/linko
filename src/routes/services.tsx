import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  GraduationCap,
  Home,
  ClipboardList,
  Car,
  HeartHandshake,
  ArrowRight,
  Check,
} from "lucide-react";
import servicesImage from "@/assets/services-community.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Link to Life Care LLC" },
      {
        name: "description",
        content:
          "Community inclusion, life skills training, housing navigation, case management, transportation, and developmental disability support across King, Snohomish, and Pierce County, WA.",
      },
      { property: "og:title", content: "Services — Link to Life Care LLC" },
      {
        property: "og:description",
        content:
          "Non-medical, person-centered services designed to help each client move toward independence.",
      },
      { property: "og:image", content: servicesImage },
      { name: "twitter:image", content: servicesImage },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Users,
    title: "Community Inclusion Services",
    intro:
      "We support clients in becoming more active and connected members of their communities.",
    items: [
      "Participating in community activities",
      "Building social and communication skills",
      "Accessing local programs and resources",
      "Developing confidence in public and community settings",
      "Creating meaningful routines and connections",
    ],
  },
  {
    icon: GraduationCap,
    title: "Life Skills Training",
    intro:
      "Practical daily living skills that support independence and long-term success.",
    items: [
      "Personal hygiene and self-care",
      "Budgeting and money management",
      "Meal planning and household routines",
      "Communication and decision-making",
      "Time management",
      "Independent living preparation",
      "Healthy daily habits",
    ],
  },
  {
    icon: Home,
    title: "Housing Navigation & Stabilization",
    intro:
      "Helping individuals experiencing homelessness or housing instability work toward safe, stable living arrangements.",
    items: [
      "Connecting clients to housing resources",
      "Assistance with housing applications",
      "Help gathering required documents",
      "Referrals to community programs",
      "Stabilization planning",
      "Ongoing support after housing placement",
    ],
  },
  {
    icon: ClipboardList,
    title: "Case Management & Service Coordination",
    intro:
      "Organized, consistent, and goal-focused support coordinated across providers.",
    items: [
      "Working with case managers and social workers",
      "Coordinating referrals and community resources",
      "Supporting service planning",
      "Monitoring client progress",
      "Advocating for client needs",
      "Helping clients stay connected to services",
    ],
  },
  {
    icon: Car,
    title: "Non-Medical Transportation Assistance",
    intro:
      "Transportation coordination so clients can access important appointments and community programs.",
    items: [
      "Case management appointments",
      "Community activities",
      "Housing-related appointments",
      "Social service visits",
      "Resource connection meetings",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Developmental Disability Support",
    intro:
      "Supportive services for adults with developmental disabilities, including DDA-eligible individuals.",
    items: [
      "Independence",
      "Self-determination",
      "Community participation",
      "Daily living skills",
      "Personal growth",
      "Improved quality of life",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pt-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Services
            </span>
            <h1 className="mt-4 text-balance font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Supportive services that help clients live with stability and purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Our services are non-medical, person-centered, and focused on
              helping each client build daily living skills, access community
              resources, and move toward independence.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={servicesImage}
                alt="A small group of diverse adults walking together in a sunlit park"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, intro, items }) => (
            <article
              key={title}
              className="group flex flex-col rounded-[2rem] border border-border bg-card p-8 transition-all hover:-translate-y-0.5 hover:shadow-soft sm:p-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-medium leading-tight tracking-tight text-foreground">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {intro}
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2.5 border-t border-border pt-6">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2.5rem] border border-border bg-secondary/60 p-10 sm:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <h2 className="text-balance font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Ready to connect a client with the right support?
            </h2>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft hover:translate-y-[-1px]"
              >
                Make a Referral
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:bg-primary-soft/40"
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
