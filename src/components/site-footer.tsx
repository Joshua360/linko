import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary text-secondary-foreground [&_a]:text-secondary-foreground/80 [&_a:hover]:text-accent">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                <path
                  d="M9 12a3 3 0 0 1 3-3h3a3 3 0 1 1 0 6h-1m-2 0H9a3 3 0 1 1 0-6h1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Link to Life Care LLC
            </span>
          </div>
          <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-white">
            Person-centered support for individuals experiencing homelessness and
            people living with developmental or physical disabilities across
            Washington State.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/apply" className="text-muted-foreground hover:text-primary">Apply With Us</Link></li>
            <li><Link to="/resources" className="text-muted-foreground hover:text-primary">Resources</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Make a Referral</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>King · Snohomish · Pierce County, WA</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span >Available by request</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <Link to="/contact" className="hover:text-primary">Send us a message</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Link to Life Care LLC. All rights reserved.</p>
          <p>Compassionate · Trauma-informed · Person-centered</p>
        </div>
      </div>
    </footer>
  );
}
