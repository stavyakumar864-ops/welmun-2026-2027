import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Committees", to: "/committees" },
  { label: "Schedule", to: "/schedule" },
  { label: "Registration", to: "/registration" },
  { label: "Gallery", to: "/gallery" },
  { label: "Conference Details", to: "/conference-details" },
];

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/welmun.official/", label: "Instagram" },
  { Icon: Facebook, href: "https://www.facebook.com/WelhamBoys/", label: "Facebook" },
  { Icon: Linkedin, href: "https://in.linkedin.com/school/welham-boys-school/", label: "LinkedIn" },
  { Icon: Youtube, href: "https://www.youtube.com/channel/UCQ_6roDP5aOZ99QdrjGVsHA", label: "YouTube" },
];

const ContactBanner = () => {
  return (
    <section className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-background px-6 md:px-16 py-10 md:py-14">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/4 -left-1/4 w-[55vw] h-[55vw] rounded-full opacity-25 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(40 60% 60% / 0.5), transparent 70%)",
            animation: "ambient-drift-a 20s ease-in-out infinite alternate",
          }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[55vw] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(210 70% 55% / 0.5), transparent 70%)",
            animation: "ambient-drift-b 24s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Top — big call to action */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <span className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-4">
          Get in touch
        </span>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary tracking-wide leading-none uppercase">
          CONTACT US
        </h2>
        <div className="gold-divider mx-auto" />
        <p className="text-muted-foreground max-w-xl text-sm md:text-base italic mt-2 mb-8">
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 border border-blue-accent/60 rounded-full text-blue-accent font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors duration-300 cursor-none"
        >
          Contact Us <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Footer body */}
      <div className="relative z-10 mt-12 pt-8 border-t border-blue-accent/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <p className="font-display text-xl text-primary uppercase tracking-[3px]">
              WELMUN 2026
            </p>
            <p className="text-muted-foreground text-sm italic">
              Welham Boys' School Model United Nations · 12th Edition
            </p>
            <p className="text-muted-foreground text-sm">
              28 – 30 July 2026 · Dehradun, India
            </p>
            <div className="flex gap-3 pt-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary/80 hover:text-blue-accent hover:border-blue-accent/60 transition-colors cursor-none"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground">Explore</p>
            <ul className="space-y-1.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary/80 hover:text-blue-accent transition-colors cursor-none"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground">Reach Us</p>
            <a
              href="mailto:welmun@welhamboys.org"
              className="flex items-start gap-2 text-sm text-primary/80 hover:text-blue-accent transition-colors cursor-none"
            >
              <Mail className="w-3.5 h-3.5 mt-1 shrink-0" />
              <span>welmun@welhamboys.org</span>
            </a>
            <a
              href="tel:+916204027206"
              className="flex items-start gap-2 text-sm text-primary/80 hover:text-blue-accent transition-colors cursor-none"
            >
              <Phone className="w-3.5 h-3.5 mt-1 shrink-0" />
              <span>+91 6204027206</span>
            </a>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 mt-1 shrink-0" />
              <span>
                5, Circular Road, Dalanwala
                <br />
                Dehradun – 248001
              </span>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-5 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[2px] uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} Welham Boys' School · All rights reserved</p>
          <p className="italic font-display normal-case tracking-wider">'Ordo ab Chao' — Order out of Chaos</p>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
