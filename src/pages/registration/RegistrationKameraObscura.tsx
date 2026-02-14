import { Camera, Video, CheckCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationKameraObscura = () => (
  <section className="space-y-8">
    <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
      <Camera className="w-7 h-7" /> Kamera Obscura 8.0
    </h2>

    <Card className="bg-secondary/30 border-primary/20">
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          As part of the World Art Day Celebrations, Welham Boys' School hosts <span className="text-primary font-medium italic">Kamera Obscura</span> — an All-India Photography and Movie Making Competition. Launched in 2017, this annual event includes a workshop to help students further their talents in visual arts.
        </p>
      </CardContent>
    </Card>

    {/* Dates & Deadlines */}
    <div>
      <h3 className="font-display text-xl text-primary mb-4">Dates & Deadlines</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {[
          { label: "Registration Deadline", value: "Sunday, April 20, 2025" },
          { label: "Travel Details Submission", value: "Thursday, July 10, 2025" },
          { label: "Orientation & Topic Announcement", value: "Wednesday, July 30, 2025" },
          { label: "Submission of Entries", value: "Thursday, July 31, 2025" },
          { label: "Declaration of Results", value: "Friday, August 1, 2025" },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-primary font-display text-sm">{item.label}</p>
              <p className="text-muted-foreground text-sm">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Registration Links */}
    <Card className="bg-secondary/30 border-primary/20">
      <CardContent className="p-6 space-y-3">
        <h3 className="font-display text-lg text-primary">Registration Links</h3>
        <div className="space-y-2">
          <a href="https://forms.gle/W85Qor3LpTeLTSwZ7" target="_blank" rel="noopener noreferrer" className="block p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors cursor-none">
            <p className="text-primary font-display text-sm">Registration Form →</p>
            <p className="text-muted-foreground text-xs">forms.gle/W85Qor3LpTeLTSwZ7</p>
          </a>
          <a href="https://forms.gle/Ze1DZQeseiaPeQUQ7" target="_blank" rel="noopener noreferrer" className="block p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors cursor-none">
            <p className="text-primary font-display text-sm">Travel Details Form →</p>
            <p className="text-muted-foreground text-xs">forms.gle/Ze1DZQeseiaPeQUQ7</p>
          </a>
        </div>
      </CardContent>
    </Card>

    {/* Photography Section */}
    <div>
      <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
        <Camera className="w-5 h-5" /> Photography
      </h3>
      <Card className="bg-secondary/30 border-primary/20">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Participants</p>
              <p className="text-muted-foreground text-sm">1 per entry</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Medium</p>
              <p className="text-muted-foreground text-sm">Digital</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Eligibility</p>
              <p className="text-muted-foreground text-sm">Classes 9–12</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "All digital cameras are allowed.",
              "Photographs must be taken during the course of the event.",
              "Editing includes only cropping and contrast/brightness correction.",
              "File name format: schoolname_participantname (e.g., WBS_Vivaan Gupta)",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-primary font-display text-sm mb-2">Judging Criteria</p>
            <div className="flex flex-wrap gap-2">
              {["Creativity", "Adherence to Theme", "Composition", "Light, Exposure & Focus", "Visual Appeal"].map((c) => (
                <span key={c} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-display">{c}</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Movie Making Section */}
    <div>
      <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
        <Video className="w-5 h-5" /> Movie Making
      </h3>
      <Card className="bg-secondary/30 border-primary/20">
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Participants</p>
              <p className="text-muted-foreground text-sm">1 or 2 per entry</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Medium</p>
              <p className="text-muted-foreground text-sm">Digital</p>
            </div>
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-display text-xs">Eligibility</p>
              <p className="text-muted-foreground text-sm">Classes 9–12</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              "All digital cameras are allowed.",
              "Movies must be shot during the course of the event.",
              "File name format: schoolname_participantnames (e.g., WBS_Jaiveer Agarwal_Shivam Gupta)",
              "Theme and duration will be announced at the first briefing.",
              "Timestamps will be inspected to ensure works were created during the event.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-primary font-display text-sm mb-2">Judging Criteria</p>
            <div className="flex flex-wrap gap-2">
              {["Creativity", "Direction & Screenplay", "Cinematography", "Adherence to Theme", "Visual Appeal"].map((c) => (
                <span key={c} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-display">{c}</span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Contact */}
    <Card className="bg-secondary/30 border-primary/20">
      <CardContent className="p-5">
        <h3 className="font-display text-lg text-primary mb-3">Event Contact</h3>
        <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:kameraobscura@welhamboys.org" className="text-primary hover:underline cursor-none">kameraobscura@welhamboys.org</a></span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Mr. Sushant Portion — +91 9997166850</span>
          <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Mr. Jai Ranjan Kagdee — +91 8755903327</span>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default RegistrationKameraObscura;
