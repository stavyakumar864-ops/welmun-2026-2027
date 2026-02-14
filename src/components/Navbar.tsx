import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Addressals", to: "/addressals" },
  { label: "Registration", to: "/registration" },
  { label: "Schedule", to: "/schedule" },
  { label: "Committees", to: "/committees" },
  { label: "Conference Details", to: "/conference-details" },
  { label: "Photo Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full px-[5%] lg:px-[8%] py-5 flex justify-between items-center bg-background/95 backdrop-blur-sm z-[100]">
      <Link to="/" className="font-display text-2xl font-bold text-primary cursor-none no-underline">
        WELMUN
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

      {/* Hamburger button */}
      <button
        className="lg:hidden text-primary cursor-none z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile/Tablet menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-background/98 backdrop-blur-md z-[105] flex flex-col items-center justify-center gap-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-2xl cursor-none transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
