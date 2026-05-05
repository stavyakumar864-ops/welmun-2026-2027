import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import {
  Download,
  FileText,
  Camera,
  Mail,
  Calendar,
  ClipboardSignature,
  Send,
  CheckCircle2,
  Hotel,
} from "lucide-react";

interface DocItem {
  title: string;
  desc: string;
  file: string;
  icon: typeof FileText;
}

const welmunDocs: DocItem[] = [
  { title: "Invitation Letter", desc: "Official invitation from the Principal of Welham Boys' School.", file: "/docs/WELMUN-Invite.docx", icon: Mail },
  { title: "Delegate Information", desc: "Delegates, teacher escorts, and committee preferences.", file: "/docs/WELMUN-Delegate_Information.docx", icon: FileText },
  { title: "Indemnity Form", desc: "Consent form to be signed and sealed by the Principal.", file: "/docs/WELMUN-Indemnity_Form.docx", icon: ClipboardSignature },
  { title: "Hotel Tariff", desc: "Partner hotels with rates and contact details.", file: "/docs/WELMUN-Hotel_Tariff.pdf", icon: Hotel },
];

const kameraDocs: DocItem[] = [
  { title: "Kamera Obscura Invite", desc: "Official invitation for Kamera Obscura 9.0.", file: "/docs/Kamera_Obscura_Invite_2026.pdf", icon: Mail },
  { title: "Kamera Obscura Guidelines", desc: "Photography & Movie Making competition guidelines.", file: "/docs/Kamera_Obscura_Guidelines_2026.pdf", icon: FileText },
];

const STEPS = [
  {
    n: "01",
    title: "Review the Invite",
    body: "Read the invitation letter and conference policy carefully with your faculty advisor.",
  },
  {
    n: "02",
    title: "Submit the Forms",
    body: "Fill out the Delegate Information and Indemnity Forms and send them via email.",
  },
  {
    n: "03",
    title: "Confirm Allocations",
    body: "We respond with country/portfolio allocations and accommodation details.",
  },
  {
    n: "04",
    title: "Travel to Dehradun",
    body: "Arrive on the morning of 28 July 2026. Registration begins at 8:00 AM.",
  },
];

const KEY_DATES = [
  { label: "Registration Opens", value: "Available now" },
  { label: "Registration Deadline", value: "25 April 2026" },
  { label: "Travel Details Due", value: "10 July 2026" },
  { label: "Conference Dates", value: "28–30 July 2026" },
];

const DocCard = ({ doc, i }: { doc: DocItem; i: number }) => {
  const Icon = doc.icon;
  return (
    <motion.a
      href={doc.file}
      download
      className="group flex items-center gap-4 p-4 md:p-5 rounded-xl border border-primary/15 bg-secondary/20 hover:border-blue-accent/40 hover:bg-secondary/40 transition-all cursor-none"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
    >
      <div className="w-10 h-10 rounded-lg bg-blue-accent/12 flex items-center justify-center text-blue-accent group-hover:bg-blue-accent group-hover:text-blue-accent-foreground transition-colors shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-sm md:text-base text-primary group-hover:text-blue-accent transition-colors leading-tight">
          {doc.title}
        </h3>
        <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{doc.desc}</p>
      </div>
      <Download className="w-4 h-4 text-primary/40 group-hover:text-blue-accent transition-colors shrink-0" />
    </motion.a>
  );
};

const SectionDivider = ({ label, icon: Icon }: { label: string; icon?: typeof Download }) => (
  <div className="flex items-center gap-4 mb-6">
    <h2 className="font-display text-xl md:text-2xl text-primary tracking-wide whitespace-nowrap flex items-center gap-3">
      {Icon && <Icon className="w-5 h-5" />} {label}
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
  </div>
);

const Registration = () => {
  return (
    <PageLayout backgroundImage="/images/registration-bg.png">
      {/* Hero */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-3">
          Join WELMUN 2026
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-primary tracking-wide">
          Registration
        </h1>
        <div className="gold-divider mx-auto" />
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base italic mt-2">
          Four steps from interest to delegate.
        </p>
      </motion.div>

      {/* How to Register — 4 steps */}
      <motion.section
        className="w-full max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionDivider label="How to Register" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative p-5 md:p-6 rounded-xl border border-primary/15 bg-secondary/20 hover:border-blue-accent/40 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="font-display text-3xl md:text-4xl text-blue-accent/50 leading-none block mb-3">
                {step.n}
              </span>
              <h3 className="font-display text-base md:text-lg text-primary mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Dates */}
      <motion.section
        className="w-full max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionDivider label="Key Dates" icon={Calendar} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {KEY_DATES.map((d, i) => (
            <motion.div
              key={d.label}
              className="p-4 rounded-xl border border-primary/15 bg-secondary/25 backdrop-blur-sm flex items-start gap-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
            >
              <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-[10px] tracking-[2px] uppercase text-muted-foreground">{d.label}</p>
                <p className="font-display text-sm md:text-base text-primary mt-0.5 leading-tight">{d.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WELMUN Forms */}
      <motion.section
        className="w-full max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionDivider label="WELMUN Forms" icon={Download} />
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {welmunDocs.map((doc, i) => (
            <DocCard key={doc.title} doc={doc} i={i} />
          ))}
        </div>
      </motion.section>

      {/* Kamera Obscura Forms */}
      <motion.section
        className="w-full max-w-5xl mx-auto mt-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <SectionDivider label="Kamera Obscura" icon={Camera} />
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {kameraDocs.map((doc, i) => (
            <DocCard key={doc.title} doc={doc} i={i} />
          ))}
        </div>
      </motion.section>

      {/* Submit CTA */}
      <motion.section
        className="w-full max-w-3xl mx-auto mt-20 mb-8 p-8 md:p-10 rounded-2xl border border-blue-accent/25 bg-secondary/30 backdrop-blur-sm text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Send className="w-8 h-8 text-blue-accent mx-auto mb-4" />
        <h3 className="font-display text-xl md:text-2xl text-primary mb-2 tracking-wide">
          Send Completed Forms To
        </h3>
        <a
          href="mailto:welmun@welhamboys.org"
          className="font-display text-lg md:text-xl text-blue-accent hover:underline cursor-none inline-block mt-1"
        >
          welmun@welhamboys.org
        </a>
        <p className="text-muted-foreground text-xs md:text-sm mt-4 italic">
          For any questions, reach out to the same email and we'll get back to you.
        </p>
      </motion.section>
    </PageLayout>
  );
};

export default Registration;
