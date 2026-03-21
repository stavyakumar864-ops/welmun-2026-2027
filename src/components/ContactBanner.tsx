import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
const ContactBanner = () => {
  return (
    <section
      className="w-full h-full flex flex-col justify-between overflow-hidden bg-background px-8 md:px-16 py-12"
    >
      {/* Top — Contact Us title + button centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary tracking-wide leading-none uppercase">
          Contact Us
        </h2>
        <Link
          to="/contact"
          className="mt-8 px-10 py-3 border border-blue-accent/60 rounded-full text-blue-accent font-display text-sm md:text-base tracking-[4px] uppercase hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors duration-300 cursor-none"
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
            <p className="text-muted-foreground">Tel: +91-6204027206</p>
            <a href="mailto:secretarygeneral@welhamboys.org" className="text-blue-accent hover:underline cursor-none">
              secretarygeneral@welhamboys.org
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <a href="https://www.instagram.com/welhamboysschool/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/WelhamBoys/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://in.linkedin.com/school/welham-boys-school/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/channel/UCQ_6roDP5aOZ99QdrjGVsHA" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors cursor-none">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
