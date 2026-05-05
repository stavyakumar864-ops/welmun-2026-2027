import PageLayout from "@/components/PageLayout";
import {
  Download,
  Phone,
  User,
  Coffee,
  Utensils,
  Sparkles,
  Camera,
  Music,
  PartyPopper,
  ClipboardList,
  Mic,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PDF_URL = "/docs/WELMUN-Conference_Schedule.docx";

type EventKind =
  | "registration"
  | "ceremony"
  | "session"
  | "tea"
  | "lunch"
  | "photo"
  | "performance"
  | "social"
  | "dinner";

const classify = (event: string): EventKind => {
  const e = event.toLowerCase();
  if (e.includes("registration")) return "registration";
  if (e.includes("ceremony")) return "ceremony";
  if (e.includes("session")) return "session";
  if (e.includes("tea")) return "tea";
  if (e.includes("lunch")) return "lunch";
  if (e.includes("photograph")) return "photo";
  if (e.includes("band") || e.includes("performance")) return "performance";
  if (e.includes("dance")) return "social";
  if (e.includes("dinner")) return "dinner";
  return "session";
};

const KIND_META: Record<EventKind, { icon: typeof Coffee; tint: string; label: string }> = {
  registration: { icon: ClipboardList, tint: "hsl(var(--blue-accent))", label: "Check-in" },
  ceremony:     { icon: Gavel,         tint: "hsl(var(--blue-accent))", label: "Ceremony" },
  session:      { icon: Mic,           tint: "hsl(var(--primary))",     label: "Committee" },
  tea:          { icon: Coffee,        tint: "hsl(var(--muted-foreground))", label: "Break" },
  lunch:        { icon: Utensils,      tint: "hsl(var(--muted-foreground))", label: "Meal" },
  photo:        { icon: Camera,        tint: "hsl(var(--muted-foreground))", label: "Photo" },
  performance:  { icon: Music,         tint: "hsl(var(--blue-accent))", label: "Performance" },
  social:       { icon: PartyPopper,   tint: "hsl(var(--blue-accent))", label: "Social" },
  dinner:       { icon: Sparkles,      tint: "hsl(var(--blue-accent))", label: "Special" },
};

const day1 = [
  { time: "8:00 AM – 9:30 AM", event: "Registration", venue: "Riverside" },
  { time: "10:00 AM – 11:30 AM", event: "Opening Ceremony", venue: "Activity Centre" },
  { time: "11:30 AM – 11:45 AM", event: "Conference Photograph", venue: "Theatron" },
  { time: "11:45 AM – 12:00 PM", event: "Tea Break", venue: "Academic Block" },
  { time: "12:00 PM – 1:00 PM", event: "Committee Session 1", venue: "Academic Block" },
  { time: "1:00 PM – 1:30 PM", event: "Lunch", venue: "Bethany" },
  { time: "1:30 PM – 4:30 PM", event: "Committee Session 2", venue: "Academic Block" },
  { time: "4:30 PM – 5:00 PM", event: "Tea Break", venue: "Academic Block" },
  { time: "5:00 PM – 7:00 PM", event: "Committee Session 3", venue: "Academic Block" },
  { time: "7:30 PM – 9:00 PM", event: "Principal's Dinner", venue: "Activity Centre" },
];

const day2 = [
  { time: "10:00 AM – 11:00 AM", event: "Committee Session 4", venue: "Academic Block" },
  { time: "11:15 AM – 11:30 AM", event: "Tea Break", venue: "Academic Block" },
  { time: "11:30 AM – 1:00 PM", event: "Committee Session 5", venue: "Academic Block" },
  { time: "1:00 PM – 1:30 PM", event: "Lunch", venue: "Bethany" },
  { time: "1:30 PM – 4:30 PM", event: "Committee Session 6", venue: "Academic Block" },
  { time: "4:30 PM – 5:00 PM", event: "Tea Break", venue: "Academic Block" },
  { time: "5:30 PM – 6:00 PM", event: "School Band Performance", venue: "Activity Centre" },
  { time: "6:00 PM – 8:30 PM", event: "Delegate Dance & Dinner", venue: "Activity Centre" },
];

const day3 = [
  { time: "10:00 AM – 11:00 AM", event: "Committee Session 7", venue: "Academic Block" },
  { time: "11:00 AM – 11:30 AM", event: "Tea Break", venue: "Academic Block" },
  { time: "11:30 AM – 1:00 PM", event: "Committee Session 8", venue: "Academic Block" },
  { time: "1:00 PM – 1:30 PM", event: "Lunch", venue: "Bethany" },
  { time: "2:00 PM – 4:00 PM", event: "Closing Ceremony", venue: "Activity Centre" },
];

const days = [
  { num: "01", day: "Tuesday", date: "July 28, 2026", rows: day1 },
  { num: "02", day: "Wednesday", date: "July 29, 2026", rows: day2 },
  { num: "03", day: "Thursday", date: "July 30, 2026", rows: day3 },
];

const Schedule = () => {
  return (
    <PageLayout backgroundImage="/images/schedule-bg.png">
      <motion.h1
        className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-wide text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Conference Schedule
      </motion.h1>
      <div className="gold-divider mx-auto" />
      <p className="text-muted-foreground text-center max-w-2xl text-sm md:text-base mb-12 mt-2">
        Three days of debate, deliberation, and celebration at Welham Boys' School.
      </p>

      <div className="w-full max-w-4xl mx-auto space-y-16">
        {days.map((day, dayIdx) => (
          <motion.section
            key={day.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Day header */}
            <div className="flex items-baseline gap-4 md:gap-6 mb-6">
              <span className="font-display text-5xl md:text-7xl text-blue-accent/70 leading-none">
                {day.num}
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl text-primary leading-tight">
                  {day.day}
                </h2>
                <p className="text-muted-foreground text-sm tracking-wider uppercase">
                  {day.date}
                </p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent self-end mb-3" />
            </div>

            {/* Timeline rows */}
            <div className="relative pl-4 md:pl-6 space-y-2 border-l border-primary/15">
              {day.rows.map((row, j) => {
                const kind = classify(row.event);
                const meta = KIND_META[kind];
                const Icon = meta.icon;
                const isHighlight = ["session", "ceremony", "social"].includes(kind);

                return (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: j * 0.04, ease: "easeOut" }}
                    className={`relative grid grid-cols-[auto_1fr] md:grid-cols-[160px_1fr_auto] gap-3 md:gap-6 items-center px-4 md:px-5 py-3 rounded-lg border transition-colors ${
                      isHighlight
                        ? "border-blue-accent/25 bg-secondary/40 hover:bg-secondary/60"
                        : "border-primary/10 bg-secondary/15 hover:bg-secondary/30"
                    }`}
                  >
                    {/* Timeline dot */}
                    <span
                      className="absolute -left-[1.4rem] md:-left-[1.65rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{ background: meta.tint }}
                    />

                    {/* Time */}
                    <span className="text-muted-foreground text-xs md:text-sm whitespace-nowrap font-medium tracking-wide row-span-2 md:row-auto">
                      {row.time}
                    </span>

                    {/* Event */}
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="shrink-0 w-8 h-8 rounded-md flex items-center justify-center"
                        style={{ background: `${meta.tint.replace("hsl(", "hsla(").replace(")", ", 0.12)")}` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: meta.tint }} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-foreground text-sm md:text-base font-medium leading-tight truncate">
                          {row.event}
                        </p>
                        <p className="text-muted-foreground text-xs md:hidden">{row.venue}</p>
                      </div>
                    </div>

                    {/* Venue (desktop) */}
                    <span className="hidden md:inline text-muted-foreground text-xs tracking-wide uppercase whitespace-nowrap">
                      {row.venue}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {dayIdx < days.length - 1 && (
              <div
                className="w-24 h-px mx-auto mt-12"
                style={{ background: "linear-gradient(to right, transparent, hsl(var(--primary) / 0.4), transparent)" }}
              />
            )}
          </motion.section>
        ))}
      </div>

      {/* Logistics contacts */}
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <h2 className="font-display text-xl md:text-2xl text-primary mb-2 text-center tracking-wide">
          On-Ground Coordination
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm text-center mb-6 tracking-wider uppercase">
          For schedule, travel, and logistics queries
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { role: "Conference Director", name: "Ms. Kiran Tripathi", phone: "+91 7409809908" },
            { role: "Journey & Accommodation", name: "Mr. Rajesh Nautiyal", phone: "+91 8171033339" },
            { role: "Head of Activities", name: "Mr. Rajeev Bhatia", phone: "+91 8755909040" },
            { role: "E.A. to the Principal", name: null, phone: "+91 8979052222" },
            { role: "Vice-Principal", name: null, phone: "+91 8755909037" },
          ].map((c) => (
            <div
              key={c.role}
              className="flex items-start gap-3 p-4 rounded-lg border border-primary/15 bg-secondary/25 hover:border-blue-accent/30 transition-colors w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
            >
              <User className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="font-display text-xs text-primary tracking-wider uppercase">{c.role}</p>
                {c.name && <p className="text-sm text-foreground mt-0.5">{c.name}</p>}
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="text-xs text-muted-foreground hover:text-blue-accent flex items-center gap-1 mt-1 transition-colors cursor-none"
                >
                  <Phone className="w-3 h-3" /> {c.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-8 flex justify-center">
        <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-blue-accent/60 text-blue-accent hover:bg-blue-accent hover:text-blue-accent-foreground gap-2 rounded-full px-6 cursor-none"
          >
            <Download className="w-4 h-4" />
            Download Full Schedule
          </Button>
        </a>
      </div>
    </PageLayout>
  );
};

export default Schedule;
