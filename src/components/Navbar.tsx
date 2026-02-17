import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import elephantLogo from "@/assets/welham-elephant.png";
import hdLogo from "@/assets/hd-white.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Addressals", to: "/addressals" },
  { label: "Registration", to: "/registration" },
  
  { label: "Schedule", to: "/schedule" },
  { label: "Committees", to: "/committees" },
  { label: "Conference Details", to: "/conference-details" },
  { label: "Photo Gallery", to: "/gallery" },
  
];

const Navbar = memo(() => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full pl-2 pr-2 lg:pl-4 lg:pr-4 py-3 flex justify-between items-center bg-background/95 z-[100]">
      <div className="flex items-center gap-3">
        <Link to="/" className="cursor-none">
          <img src={elephantLogo} alt="Welham Logo" className="h-14 w-auto" />
        </Link>
        <Link to="/" className="font-display text-2xl font-bold text-primary cursor-none no-underline">
          WELMUN
        </Link>
      </div>

      {/* Desktop nav */}
      <ul className="hidden lg:flex gap-7 flex-wrap list-none mx-auto">
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

      <div className="flex items-center gap-3">
        {/* Hamburger button */}
        <button
          className="lg:hidden text-primary cursor-none z-[110]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <img src={hdLogo} alt="HD Logo" className="h-14 w-auto" />
      </div>

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
