import { Link, useLocation } from "react-router-dom";

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

  return (
    <nav className="fixed w-full px-[8%] py-5 flex justify-between items-center bg-background/95 backdrop-blur-sm z-[100]">
      <Link to="/" className="font-display text-2xl font-bold text-primary cursor-none no-underline">
        WELMUN
      </Link>
      <ul className="hidden md:flex gap-7 flex-wrap list-none">
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
    </nav>
  );
};

export default Navbar;
