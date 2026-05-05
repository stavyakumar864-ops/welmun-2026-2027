import { useState, memo } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 px-4 lg:px-6 py-2.5 flex items-center bg-background/85 backdrop-blur-lg z-[100] border-b border-primary/10 shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
      {/* Left: brand */}
      <Link to="/" className="flex items-center gap-2.5 cursor-none shrink-0 group">
        <img
          src={elephantLogo}
          alt="Welham Logo"
          className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg md:text-xl font-bold text-primary tracking-[3px] no-underline">
            WELMUN
          </span>
          <span className="font-display text-[9px] md:text-[10px] text-blue-accent tracking-[4px] mt-0.5">
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

      {/* Right: HD logo + hamburger */}
      <div className="flex items-center gap-3 shrink-0 ml-auto">
        <button
          className="xl:hidden text-primary cursor-none z-[110] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <img src={hdLogo} alt="WELMUN Logo" className="h-[3.75rem] w-auto" />
      </div>

      {/* Mobile/Tablet menu overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-background/98 backdrop-blur-md z-[105] flex flex-col items-center justify-center gap-5 xl:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-xl sm:text-2xl tracking-[3px] uppercase cursor-none transition-colors no-underline ${
                active
                  ? "text-blue-accent"
                  : "text-primary/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
