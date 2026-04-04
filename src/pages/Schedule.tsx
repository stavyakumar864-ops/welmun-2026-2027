import PageLayout from "@/components/PageLayout";
import { Download, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const PDF_URL = "/docs/WELMUN-Conference_Schedule.docx";

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
  { label: "Day 1 — Tuesday, July 28, 2026", rows: day1 },
  { label: "Day 2 — Wednesday, July 29, 2026", rows: day2 },
  { label: "Day 3 — Thursday, July 30, 2026", rows: day3 },
];

const Schedule = () => {
  const ref = useStaggerReveal<HTMLDivElement>(200);

  return (
    <PageLayout backgroundImage="/images/schedule-bg.png">
      <h1 className="font-display text-5xl text-primary mb-4">Conference Schedule</h1>
      <div className="gold-divider" />

      <div ref={ref} className="mt-12 w-full max-w-4xl mx-auto space-y-12">
        {days.map((day, i) => (
          <div key={day.label} data-reveal={i}>
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 text-center">
              {day.label}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-primary/30">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-primary/20">
                    <th className="px-4 py-3 text-primary font-display text-sm uppercase tracking-wider">Time</th>
                    <th className="px-4 py-3 text-primary font-display text-sm uppercase tracking-wider">Event</th>
                    <th className="px-4 py-3 text-primary font-display text-sm uppercase tracking-wider">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {day.rows.map((row, j) => (
                    <tr
                      key={j}
                      className={`border-t border-primary/10 ${
                        j % 2 === 0 ? "bg-secondary/30" : "bg-secondary/10"
                      } hover:bg-primary/10 transition-colors`}
                    >
                      <td className="px-4 py-3 text-muted-foreground text-sm whitespace-nowrap">{row.time}</td>
                      <td className="px-4 py-3 text-foreground font-medium text-sm">{row.event}</td>
                      <td className="px-4 py-3 text-muted-foreground text-sm">{row.venue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Details */}
      <div className="mt-16 w-full max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 text-center">Contact Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { role: "Conference Director", name: "Ms. Kiran Tripathi", phone: "+91 7409809908" },
            { role: "Journey & Accommodation In-charge", name: "Mr. Rajesh Nautiyal", phone: "+91 8171033339" },
            { role: "Head of Activities", name: "Mr. Rajeev Bhatia", phone: "+91 8755909040" },
          ].map((c) => (
            <div key={c.role} className="flex items-start gap-3 p-4 rounded-lg border border-primary/20 bg-secondary/30">
              <User className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-xs text-primary tracking-wider">{c.role}</p>
                <p className="text-sm text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3" /> {c.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto">
          {[
            { role: "E.A. to the Principal", phone: "+91 8979052222" },
            { role: "Vice-Principal", name: "Ms. A. Bakshi", phone: "+91 8755909037" },
          ].map((c) => (
            <div key={c.role} className="flex items-start gap-3 p-4 rounded-lg border border-primary/20 bg-secondary/30">
              <User className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-xs text-primary tracking-wider">{c.role}</p>
                {c.name && <p className="text-sm text-foreground">{c.name}</p>}
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3" /> {c.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 mb-8">
        <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-blue-accent text-blue-accent hover:bg-blue-accent/10 gap-2">
            <Download className="w-4 h-4" />
            Download Schedule
          </Button>
        </a>
      </div>
    </PageLayout>
  );
};

export default Schedule;
