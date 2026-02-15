import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import welhamCrest from "@/assets/welham-school-crest.png";
import welmunCrest from "@/assets/welmun-crest.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Addressals", to: "/addressals" },
  { label: "Registration", to: "/registration" },
  
  { label: "Committees", to: "/committees" },
  { label: "Conference Details", to: "/conference-details" },
  { label: "Photo Gallery", to: "/gallery" },
  
];

const crestFilter = "brightness(0) saturate(100%) invert(75%) sepia(40%) saturate(500%) hue-rotate(10deg) brightness(95%)";

const Navbar = memo(() => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full px-[5%] lg:px-[8%] py-3 flex justify-between items-center bg-background/95 z-[100]">
      {/* Welham school logo — left */}
      <Link to="/" className="cursor-none shrink-0">
        <img
          src={welhamCrest}
          alt="Welham Boys' School"
          className="h-16 w-16 object-contain"
        />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-7 flex-wrap list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className={`relative text-primary no-underline cursor-none text-sm after:content-[''] after:absolute after:h-[2px] after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === link.to ? "after:w-full" : "after:w-0"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* WELMUN crest — right (desktop) */}
      <img
        src={welmunCrest}
        alt="WELMUN Crest"
        className="hidden lg:block h-16 w-16 object-contain shrink-0"
        style={{ filter: crestFilter }}
      />

      {/* Hamburger button */}
      <button
        className="lg:hidden text-primary cursor-none z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile/Tablet menu overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-background z-[105] flex flex-col items-center justify-center gap-5 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={`font-display text-xl sm:text-2xl cursor-none transition-colors no-underline ${
              location.pathname === link.to
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
