import { useState, memo, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import elephantLogo from "@/assets/welham-elephant.png";
import hdLogo from "@/assets/hd-white.png";

const navLinks = [
  { label: "Home", short: "Home", to: "/" },
  { label: "Addressals", short: "Addressals", to: "/addressals" },
  { label: "Registration", short: "Register", to: "/registration" },
  { label: "Schedule", short: "Schedule", to: "/schedule" },
  { label: "Committees", short: "Committees", to: "/committees" },
  { label: "Conference Details", short: "Conference", to: "/conference-details" },
  { label: "Photo Gallery", short: "Gallery", to: "/gallery" },
  { label: "Contact Us", short: "Contact", to: "/contact" },
];

const Navbar = memo(() => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const firstFocusRef = useRef<HTMLAnchorElement>(null);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Body scroll lock + Escape key + initial focus
  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    // Focus first menu link for keyboard accessibility
    const t = setTimeout(() => firstFocusRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 flex items-center bg-background/85 backdrop-blur-lg z-[100] border-b border-primary/10 shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5 cursor-none shrink-0 group min-w-0"
          aria-label="WELMUN home"
        >
          <img
            src={elephantLogo}
            alt=""
            className="h-8 sm:h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base sm:text-lg md:text-xl font-bold text-primary tracking-[2px] sm:tracking-[3px] no-underline">
              WELMUN
            </span>
            <span className="font-display text-[8px] sm:text-[10px] text-blue-accent tracking-[3px] sm:tracking-[4px] mt-0.5">
              2026
            </span>
          </div>
        </Link>

        {/* Center: desktop nav */}
        <ul className="hidden xl:flex flex-1 justify-center items-center gap-7 2xl:gap-9 list-none mx-6">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`relative whitespace-nowrap no-underline cursor-none font-display text-[12px] tracking-[2.5px] uppercase transition-colors duration-200 py-1 after:content-[''] after:absolute after:h-[2px] after:bg-blue-accent after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:transition-all after:duration-300 ${
                    active
                      ? "text-blue-accent after:w-full"
                      : "text-primary/80 hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.short}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: WELMUN circular logo + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
          <img
            src={hdLogo}
            alt="WELMUN Logo"
            className="h-12 sm:h-14 md:h-[3.75rem] w-auto shrink-0"
          />
          <button
            className="xl:hidden text-primary cursor-none p-2 -mr-1 rounded-md hover:bg-primary/5 active:bg-primary/10 transition-colors relative z-[110]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="block w-6 h-6 relative">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[104] bg-background/60 backdrop-blur-sm xl:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed top-0 right-0 bottom-0 z-[105] w-[85vw] max-w-sm bg-background border-l border-primary/15 shadow-2xl xl:hidden transform transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10 shrink-0">
          <div className="flex items-center gap-2">
            <img src={elephantLogo} alt="" className="h-8 w-auto" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold text-primary tracking-[2px]">
                WELMUN
              </span>
              <span className="font-display text-[9px] text-blue-accent tracking-[3px] mt-0.5">
                2026
              </span>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 -mr-1 rounded-md text-primary hover:bg-primary/5 cursor-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <span className="px-3 font-display italic text-blue-accent text-[10px] tracking-[4px] uppercase">
            Navigation
          </span>
          <ul className="mt-3 space-y-1 list-none">
            {navLinks.map((link, i) => {
              const active = location.pathname === link.to;
              return (
                <li key={link.label}>
                  <Link
                    ref={i === 0 ? firstFocusRef : undefined}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-lg font-display text-base tracking-[2px] uppercase no-underline cursor-none transition-colors ${
                      active
                        ? "bg-blue-accent/15 text-blue-accent"
                        : "text-primary/85 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-accent" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-primary/10 shrink-0">
          <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mb-1">
            Get in touch
          </p>
          <a
            href="mailto:welmun@welhamboys.org"
            className="text-sm text-primary hover:text-blue-accent transition-colors cursor-none break-all"
          >
            welmun@welhamboys.org
          </a>
        </div>
      </aside>
    </>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
