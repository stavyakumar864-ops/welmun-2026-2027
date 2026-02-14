import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import welhamLogo from "@/assets/welham-logo.png";
import welmunLogo from "@/assets/welmun-logo.png";

const ContactBanner = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-between overflow-hidden bg-background px-8 md:px-16 py-12"
    >
      {/* Top — Logos + Contact Us title + button */}
      <div className="flex flex-col items-center pt-8">
        <div className="flex items-center gap-8 md:gap-16">
          <img src={welhamLogo} alt="Welham Boys' School" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
          <h2 className="font-display text-5xl md:text-7xl lg:text-9xl text-primary tracking-wide leading-none uppercase">
            Contact Us
          </h2>
          <img src={welmunLogo} alt="WELMUN" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
        </div>
        <Link
          to="/contact"
          className="mt-8 px-10 py-3 border border-primary/60 rounded-full text-primary font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-none"
        >
          Contact Us
        </Link>
      </div>

      {/* Bottom — Footer-style info */}
      <div className="mt-auto pt-12 border-t border-primary/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-1">
            <p className="font-display text-lg text-primary uppercase tracking-wider">Welham Boys' School</p>
            <p className="text-muted-foreground">5, Circular Road Dalanwala</p>
            <p className="text-muted-foreground">Dehradun – 248001</p>
            <p className="text-muted-foreground">Tel: 0135-2657120</p>
            <a href="mailto:secretarygeneral@welhamboys.org" className="text-primary hover:underline cursor-none">
              secretarygeneral@welhamboys.org
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
