import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Calendar,
  Users,
  CreditCard,
  FileText,
  HelpCircle,
  Download,
  Hotel,
  Camera,
} from "lucide-react";

const sections = [
  { id: "overview", label: "Overview", icon: Calendar, path: "/registration" },
  { id: "eligibility", label: "Eligibility", icon: Users, path: "/registration/eligibility" },
  { id: "process", label: "Process", icon: FileText, path: "/registration/process" },
  { id: "fees", label: "Fees & Payment", icon: CreditCard, path: "/registration/fees" },
  { id: "hotels", label: "Hotels", icon: Hotel, path: "/registration/hotels" },
  { id: "downloads", label: "Downloads", icon: Download, path: "/registration/downloads" },
  { id: "kamera", label: "Kamera Obscura", icon: Camera, path: "/registration/kamera-obscura" },
  { id: "faqs", label: "FAQs", icon: HelpCircle, path: "/registration/faqs" },
];

const Registration = () => {
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <PageLayout backgroundImage="/images/registration-bg.png">
      <div ref={headerRef} className="reveal-section flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display text-5xl md:text-7xl text-primary tracking-[8px] uppercase text-center"
        >
          Registration
        </motion.h1>
        <div className="gold-divider" />
        <p className="text-muted-foreground text-lg text-center max-w-2xl">
          Everything you need to know to register for WELMUN 2025.
        </p>
      </div>

      <div className="w-full max-w-7xl flex gap-10">
        {/* Main Content */}
        <div className="flex-1">
          <Outlet />
        </div>

        {/* Right Side Nav */}
        <nav className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-28 space-y-1 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-primary/20">
            <p className="font-display text-xs text-primary/60 uppercase tracking-[3px] mb-4">Sections</p>
            {sections.map(({ id, label, icon: Icon, path }) => (
              <button
                key={id}
                onClick={() => navigate(path)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-none text-left ${
                  isActive(path)
                    ? "bg-primary/15 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="font-display text-xs tracking-wider">{label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </PageLayout>
  );
};

export default Registration;
