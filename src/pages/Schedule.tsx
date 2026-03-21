import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const PDF_URL = "https://www.welhammun.org/_files/ugd/9bbbe8_6219df9038704fdcb163b0ce688182a2.pdf";

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
  { label: "Day 1 — Wednesday, July 28, 2026", rows: day1 },
  { label: "Day 2 — Thursday, July 29, 2026", rows: day2 },
  { label: "Day 3 — Friday, July 30, 2026", rows: day3 },
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

      <div className="mt-12 mb-8">
        <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-blue-accent text-blue-accent hover:bg-blue-accent/10 gap-2">
            <Download className="w-4 h-4" />
            Download Schedule (PDF)
          </Button>
        </a>
      </div>
    </PageLayout>
  );
};

export default Schedule;
