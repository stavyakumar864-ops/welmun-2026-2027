import { Camera, Video, CheckCircle, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { Easing } from "framer-motion";

const ease: Easing = [0, 0, 0.2, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

const RegistrationKameraObscura = () => {
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);
  const datesRef = useScrollReveal<HTMLDivElement>(0.1);
  const linksRef = useScrollReveal<HTMLDivElement>(0.1);
  const photoRef = useScrollReveal<HTMLDivElement>(0.1);
  const movieRef = useScrollReveal<HTMLDivElement>(0.1);
  const contactRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <PageLayout>
      <section className="space-y-8 w-full max-w-4xl">
        {/* Header */}
        <div ref={headerRef} className="reveal-section flex flex-col items-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-display text-5xl md:text-7xl text-primary tracking-[8px] uppercase text-center"
          >
            Kamera Obscura
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-lg text-primary/60 tracking-[4px] mt-2"
          >
            8.0
          </motion.p>
          <div className="gold-divider" />
        </div>

        {/* Intro */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <Card className="bg-secondary/30 border-primary/20 hover-lift">
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As part of the World Art Day Celebrations, Welham Boys' School hosts <span className="text-primary font-medium italic">Kamera Obscura</span> — an All-India Photography and Movie Making Competition. Launched in 2017, this annual event includes a workshop to help students further their talents in visual arts.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dates & Deadlines */}
        <div ref={datesRef} className="reveal-section">
          <h3 className="font-display text-xl text-primary mb-4">Dates & Deadlines</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { label: "Registration Deadline", value: "Sunday, April 20, 2025" },
              { label: "Travel Details Submission", value: "Thursday, July 10, 2025" },
              { label: "Orientation & Topic Announcement", value: "Monday, July 28, 2025" },
              { label: "Submission of Entries", value: "Tuesday, July 29, 2025" },
              { label: "Declaration of Results", value: "Wednesday, July 30, 2025" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover-lift"
              >
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary font-display text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Registration Links */}
        <div ref={linksRef} className="reveal-section">
          <Card className="bg-secondary/30 border-primary/20 hover-lift">
            <CardContent className="p-6 space-y-3">
              <h3 className="font-display text-lg text-primary">Registration Links</h3>
              <div className="space-y-2">
                <motion.a
                  href="https://forms.gle/W85Qor3LpTeLTSwZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors cursor-none"
                >
                  <p className="text-primary font-display text-sm">Registration Form →</p>
                  <p className="text-muted-foreground text-xs">forms.gle/W85Qor3LpTeLTSwZ7</p>
                </motion.a>
                <motion.a
                  href="https://forms.gle/Ze1DZQeseiaPeQUQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors cursor-none"
                >
                  <p className="text-primary font-display text-sm">Travel Details Form →</p>
                  <p className="text-muted-foreground text-xs">forms.gle/Ze1DZQeseiaPeQUQ7</p>
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Photography Section */}
        <div ref={photoRef} className="reveal-section">
          <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
            <Camera className="w-5 h-5" /> Photography
          </h3>
          <Card className="bg-secondary/30 border-primary/20 hover-lift">
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Participants", value: "1 per entry" },
                  { label: "Medium", value: "Digital" },
                  { label: "Eligibility", value: "Classes 9–12" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="p-3 bg-primary/5 rounded-lg border border-primary/10"
                  >
                    <p className="text-primary font-display text-xs">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  "All digital cameras are allowed.",
                  "Photographs must be taken during the course of the event.",
                  "Editing includes only cropping and contrast/brightness correction.",
                  "File name format: schoolname_participantname (e.g., WBS_Vivaan Gupta)",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-primary font-display text-sm mb-2">Judging Criteria</p>
                <div className="flex flex-wrap gap-2">
                  {["Creativity", "Adherence to Theme", "Composition", "Light, Exposure & Focus", "Visual Appeal"].map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-display"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Movie Making Section */}
        <div ref={movieRef} className="reveal-section">
          <h3 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
            <Video className="w-5 h-5" /> Movie Making
          </h3>
          <Card className="bg-secondary/30 border-primary/20 hover-lift">
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  { label: "Participants", value: "1 or 2 per entry" },
                  { label: "Medium", value: "Digital" },
                  { label: "Eligibility", value: "Classes 9–12" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="p-3 bg-primary/5 rounded-lg border border-primary/10"
                  >
                    <p className="text-primary font-display text-xs">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  "All digital cameras are allowed.",
                  "Movies must be shot during the course of the event.",
                  "File name format: schoolname_participantnames (e.g., WBS_Jaiveer Agarwal_Shivam Gupta)",
                  "Theme and duration will be announced at the first briefing.",
                  "Timestamps will be inspected to ensure works were created during the event.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="text-primary font-display text-sm mb-2">Judging Criteria</p>
                <div className="flex flex-wrap gap-2">
                  {["Creativity", "Direction & Screenplay", "Cinematography", "Adherence to Theme", "Visual Appeal"].map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 font-display"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div ref={contactRef} className="reveal-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <Card className="bg-secondary/30 border-primary/20 hover-lift">
              <CardContent className="p-5">
                <h3 className="font-display text-lg text-primary mb-3">Event Contact</h3>
                <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:kameraobscura@welhamboys.org" className="text-primary hover:underline cursor-none">kameraobscura@welhamboys.org</a></span>
                  <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Mr. Sushant Portion — +91 9997166850</span>
                  <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Mr. Jai Ranjan Kagdee — +91 8755903327</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RegistrationKameraObscura;
