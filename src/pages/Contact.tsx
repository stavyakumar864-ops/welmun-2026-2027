import { useState, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import AmbientGlow from "@/components/AmbientGlow";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  ExternalLink,
  Loader2,
  User2,
  Crown,
} from "lucide-react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdPpfT4pNf9llR0nNsoMwrBp_WtALr-xSj1Mk7coWs516WqXw/formResponse";

const RATE_LIMIT_MS = 30_000;

const PEOPLE = [
  {
    role: "Conference Director",
    name: "Ms. Kiran Tripathi",
    phone: "+91 7409809908",
    email: "kirantripathi@welhamboys.org",
    icon: Crown,
  },
  {
    role: "Secretary-General",
    name: "Ahan Sparsh",
    phone: "+91 6204027206",
    email: "welmun@welhamboys.org",
    icon: User2,
  },
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

const inputBase =
  "w-full bg-secondary/30 border border-primary/20 text-foreground rounded-lg px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-accent focus:bg-secondary/50 transition-colors cursor-none";

const Contact = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const lastSubmitRef = useRef<number>(0);

  const validate = (f: FormState): FormErrors => {
    const errs: FormErrors = {};
    if (!f.firstName.trim()) errs.firstName = "Required";
    if (!f.lastName.trim()) errs.lastName = "Required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!f.email.trim()) errs.email = "Required";
    else if (!emailRegex.test(f.email)) errs.email = "Enter a valid email";
    if (!f.message.trim()) errs.message = "Required";
    else if (f.message.trim().length < 10) errs.message = "At least 10 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      setCooldown(true);
      return;
    }
    lastSubmitRef.current = now;
    setCooldown(true);
    setTimeout(() => setCooldown(false), RATE_LIMIT_MS);

    setSubmitting(true);
    const formData = new FormData();
    formData.append("entry.1905276668", form.firstName);
    formData.append("entry.1158082062", form.lastName);
    formData.append("entry.1791935519", form.email);
    formData.append("entry.499414577", form.message);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).finally(() => {
      setSubmitting(false);
      setSubmitted(true);
    });
  };

  const reset = () => {
    setForm({ firstName: "", lastName: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  return (
    <PageLayout>
      <AmbientGlow />
      {/* Hero */}
      <motion.div
        className="flex flex-col items-center text-center mb-14"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-display italic text-blue-accent text-xs md:text-sm tracking-[5px] uppercase mb-3">
          Get in touch
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-primary tracking-wide">
          Contact Us
        </h1>
        <div className="gold-divider mx-auto" />
        <p className="text-muted-foreground max-w-2xl text-sm md:text-base mt-1 italic">
          Reach the people behind WELMUN, or send us a message directly.
        </p>
      </motion.div>

      {/* People cards */}
      <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 md:mb-20 justify-items-center">
        {PEOPLE.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.role}
              className="group w-full max-w-sm flex flex-col items-center text-center p-6 rounded-xl border border-primary/15 bg-secondary/25 backdrop-blur-sm hover:border-blue-accent/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-accent/15 flex items-center justify-center text-blue-accent mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground">
                  {p.role}
                </span>
              </div>
              <h3 className="font-display text-lg text-primary mb-4">{p.name}</h3>
              <div className="space-y-2 text-sm flex flex-col items-center">
                {p.phone && (
                  <a
                    href={`tel:${p.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-blue-accent transition-colors cursor-none"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>{p.phone}</span>
                  </a>
                )}
                <a
                  href={`mailto:${p.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-blue-accent transition-colors cursor-none break-all"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.email}</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Form + Map */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
        {/* Form */}
        <motion.div
          className="rounded-2xl border border-primary/15 bg-secondary/25 backdrop-blur-sm p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-1">
            <Send className="w-5 h-5 text-blue-accent" />
            <h2 className="font-display text-xl md:text-2xl text-primary tracking-wide">
              Send us a message
            </h2>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm mb-6">
            We typically respond within 48 hours.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="flex flex-col items-center text-center py-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                  <Check className="w-7 h-7" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-xl text-primary mb-1">
                  Message sent
                </h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                  Thanks for reaching out. We'll be in touch soon.
                </p>
                <button
                  onClick={reset}
                  className="px-6 py-2 text-sm border border-blue-accent/60 text-blue-accent rounded-full hover:bg-blue-accent hover:text-blue-accent-foreground transition-colors cursor-none font-display tracking-[2px] uppercase"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="First name"
                    error={errors.firstName}
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                    autoComplete="given-name"
                  />
                  <Field
                    label="Last name"
                    error={errors.lastName}
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                    autoComplete="family-name"
                  />
                </div>
                <Field
                  label="Email"
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  autoComplete="email"
                  placeholder="you@example.com"
                />
                <Field
                  label="Message"
                  error={errors.message}
                  value={form.message}
                  onChange={(v) => update("message", v)}
                  textarea
                  placeholder="Tell us what's on your mind…"
                />

                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting || cooldown}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-accent text-blue-accent-foreground hover:bg-blue-accent/90 transition-all cursor-none font-display tracking-[2px] uppercase text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending
                      </>
                    ) : cooldown ? (
                      "Please wait…"
                    ) : (
                      <>
                        Send Message <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                    All fields required
                  </span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Map + address */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/15 bg-secondary/25 group">
            <div className="aspect-[4/3] w-full">
              <iframe
                title="Welham Boys' School Location"
                src="https://maps.google.com/maps?q=Welham+Boys+School+Dehradun&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href="https://maps.app.goo.gl/T9LFVLQLBteNxTXs5"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 text-primary text-[11px] tracking-wider uppercase hover:bg-blue-accent hover:text-blue-accent-foreground hover:border-transparent transition-colors cursor-none shadow-lg"
            >
              Open in Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-secondary/25 backdrop-blur-sm p-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-accent/15 flex items-center justify-center text-blue-accent shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground">
                  Our Address
                </span>
                <p className="font-display text-base md:text-lg text-primary mt-1">
                  Welham Boys' School
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-0.5">
                  5, Circular Road, Dalanwala
                  <br />
                  Dehradun – 248001, Uttarakhand
                </p>
                <a
                  href="tel:+917409809908"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-blue-accent transition-colors cursor-none mt-3"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 7409809908
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  autoComplete?: string;
}

const Field = ({
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea,
  placeholder,
  autoComplete,
}: FieldProps) => (
  <div>
    <div className="flex items-baseline justify-between mb-1.5">
      <label className="text-muted-foreground text-xs tracking-[2px] uppercase">
        {label}
      </label>
      {error && (
        <span className="text-[10px] text-red-400 tracking-wider uppercase">
          {error}
        </span>
      )}
    </div>
    {textarea ? (
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${inputBase} resize-none ${
          error ? "border-red-400/60 focus:border-red-400" : ""
        }`}
      />
    ) : (
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`${inputBase} ${
          error ? "border-red-400/60 focus:border-red-400" : ""
        }`}
      />
    )}
  </div>
);

export default Contact;
