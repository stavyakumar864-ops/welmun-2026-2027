import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import {
  Download,
  Shield,
  Scale,
  BookOpen,
  Calendar,
  MapPin,
  Award,
  Users,
} from "lucide-react";

const QUICK_FACTS = [
  { icon: Award, label: "Edition", value: "12th" },
  { icon: Calendar, label: "Dates", value: "28–30 July 2026" },
  { icon: MapPin, label: "Venue", value: "Welham Boys' School" },
  { icon: Users, label: "Format", value: "UNA-USA Rules" },
];

interface DocItem {
  title: string;
  description: string;
  url: string;
  icon: typeof Shield;
}

const downloads: DocItem[] = [
  {
    title: "Conference Policy",
    description: "Discipline, dress code, electronics policy, awards, and more.",
    url: "/docs/conference-policy.pdf",
    icon: Shield,
  },
  {
    title: "Charter of the United Nations",
    description: "Full text of the UN Charter & Statute of the International Court of Justice.",
    url: "/docs/uncharter.pdf",
    icon: Scale,
  },
  {
    title: "Rules of Procedure",
    description: "Complete UNA-USA Rules of Procedure for all committees.",
    url: "/docs/rop.pdf",
    icon: BookOpen,
  },
];

const ConferenceDetails = () => {
  return (
    <PageLayout backgroundImage="/images/conference-bg.jpg">
      {/* Hero */}
      <motion.div
        className="flex flex-col items-center text-center mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-3">
          The 12th Welham Model United Nations
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-primary tracking-wide">
          Conference Details
        </h1>
        <div className="gold-divider mx-auto" />
      </motion.div>

      {/* Quick Facts */}
      <motion.div
        className="w-full max-w-5xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      >
        {QUICK_FACTS.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.label}
              className="flex flex-col items-start p-5 rounded-xl border border-primary/15 bg-secondary/25 backdrop-blur-sm hover:border-blue-accent/40 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: "easeOut" }}
            >
              <div className="w-9 h-9 rounded-lg bg-blue-accent/15 flex items-center justify-center text-blue-accent mb-3">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-muted-foreground text-[11px] tracking-[3px] uppercase">
                {f.label}
              </span>
              <span className="font-display text-base md:text-lg text-primary leading-tight mt-1">
                {f.value}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Downloads */}
      <div className="w-full max-w-5xl mx-auto mt-20">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-display text-xl md:text-2xl text-primary tracking-wide whitespace-nowrap flex items-center gap-3">
            <Download className="w-5 h-5" /> Important Downloads
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        <div className="grid gap-3 md:gap-4 md:grid-cols-3">
          {downloads.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-primary/15 bg-secondary/20 hover:border-blue-accent/40 hover:bg-secondary/40 transition-all cursor-none"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-accent/12 flex items-center justify-center text-blue-accent group-hover:bg-blue-accent group-hover:text-blue-accent-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <Download className="w-4 h-4 text-primary/40 group-hover:text-blue-accent transition-colors" />
                </div>
                <h3 className="font-display text-base text-primary mb-1.5 group-hover:text-blue-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default ConferenceDetails;
