import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Calendar,
  Users,
  CreditCard,
  MapPin,
  FileText,
  HelpCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  { id: "overview", label: "Overview", icon: Calendar },
  { id: "eligibility", label: "Eligibility", icon: Users },
  { id: "process", label: "Process", icon: FileText },
  { id: "fees", label: "Fees", icon: CreditCard },
  { id: "accommodation", label: "Accommodation", icon: MapPin },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
];

const Registration = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout backgroundImage="/images/addressals-bg.jpg">
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
          Everything you need to know to register for WELMUN 2026.
        </p>
      </div>

      <div className="w-full max-w-7xl flex gap-10">
        {/* Main Content */}
        <div className="flex-1 space-y-20">
          {/* Overview */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Calendar className="w-7 h-7" /> Overview & Important Dates
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The eleventh edition of the Welham Boys' School Model United Nations Conference (WELMUN 2026) brings together young minds from across the nation to deliberate on pressing global issues. The conference spans three days of rigorous debate, diplomacy, and dialogue.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "Conference Dates", value: "July 30 – August 1, 2026" },
                    { label: "Venue", value: "Welham Boys' School, Dehradun" },
                    { label: "Registration Deadline", value: "July 10, 2026" },
                    { label: "Position Paper Deadline", value: "July 20, 2026" },
                    { label: "Early Bird Deadline", value: "June 15, 2026" },
                    { label: "Delegation Size", value: "Minimum 5 delegates" },
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
              </CardContent>
            </Card>
          </section>

          {/* Eligibility */}
          <section id="eligibility" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <Users className="w-7 h-7" /> Eligibility & Guidelines
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  WELMUN is open to students from schools across India. Delegations must be accompanied by a Faculty Advisor who will be responsible for the conduct and punctuality of their students.
                </p>
                <div className="space-y-3">
                  {[
                    "Students from grades IX to XII are eligible to participate.",
                    "Each school may register one or more delegations of a minimum of 5 delegates.",
                    "Each delegation must be accompanied by at least one Faculty Advisor.",
                    "Individual (independent) delegate registrations are also accepted.",
                    "Prior MUN experience is recommended but not mandatory.",
                    "All delegates must adhere to the Conference Policy and Code of Conduct.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Registration Process */}
          <section id="process" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7" /> Registration Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "Step 1",
                  title: "Submit the Registration Form",
                  desc: "Fill out the online delegation registration form with details of all participating delegates and the Faculty Advisor. Ensure all information is accurate.",
                },
                {
                  step: "Step 2",
                  title: "Receive Country/Portfolio Allocation",
                  desc: "The Secretariat will assign country and committee allocations based on preference and availability. Allocations will be communicated via email.",
                },
                {
                  step: "Step 3",
                  title: "Complete Payment",
                  desc: "Transfer the delegation fee via bank transfer or online payment. Share the transaction receipt with the Secretariat via email for confirmation.",
                },
                {
                  step: "Step 4",
                  title: "Submit Position Papers",
                  desc: "Each delegate must submit a position paper for their assigned committee by the deadline. Guidelines will be shared in the Background Guide of each committee.",
                },
                {
                  step: "Step 5",
                  title: "Attend the Conference",
                  desc: "Arrive at Welham Boys' School on the opening day. Collect your delegate kit at the registration desk and attend the opening ceremony.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-secondary/30 border-primary/20 hover-lift">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="font-display text-primary text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Fees */}
          <section id="fees" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <CreditCard className="w-7 h-7" /> Delegation Fees
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/15 text-center">
                    <p className="font-display text-primary text-sm uppercase tracking-wider mb-2">Early Bird</p>
                    <p className="font-display text-4xl text-primary">₹2,500</p>
                    <p className="text-muted-foreground text-sm mt-2">Per delegate (before June 15)</p>
                  </div>
                  <div className="p-5 bg-primary/5 rounded-lg border border-primary/15 text-center">
                    <p className="font-display text-primary text-sm uppercase tracking-wider mb-2">Standard</p>
                    <p className="font-display text-4xl text-primary">₹3,000</p>
                    <p className="text-muted-foreground text-sm mt-2">Per delegate (after June 15)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-primary font-display text-sm">Fee Includes</p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Conference kit, meals during the conference (lunch & refreshments), participation certificate, and access to all committee sessions and social events.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-lg text-primary mb-3">Payment Details</h4>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><span className="text-primary">Account Name:</span> Welham Boys' School</p>
                    <p><span className="text-primary">Bank:</span> State Bank of India, Rajpur Road Branch</p>
                    <p><span className="text-primary">Account No.:</span> To be shared upon registration</p>
                    <p><span className="text-primary">IFSC:</span> To be shared upon registration</p>
                  </div>
                  <p className="text-muted-foreground text-xs mt-4 italic">
                    * Send the payment receipt to secretarygeneral@welhamboys.org with delegation name and school.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Accommodation */}
          <section id="accommodation" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <MapPin className="w-7 h-7" /> Accommodation & Travel
            </h2>
            <Card className="bg-secondary/30 border-primary/20">
              <CardContent className="p-6 space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                  Accommodation will be provided within the Welham Boys' School campus for outstation delegates. Faculty Advisors will be accommodated separately. All arrangements are on a sharing basis.
                </p>
                <div className="space-y-3">
                  {[
                    "On-campus accommodation is available on a first-come, first-served basis.",
                    "Delegates must carry their own toiletries and personal essentials.",
                    "Meals (breakfast, lunch, and dinner) will be provided during the conference.",
                    "Dehradun is well-connected by rail (Dehradun Railway Station) and air (Jolly Grant Airport).",
                    "Transport from the railway station/airport can be arranged upon prior request.",
                    "Faculty Advisors should communicate accommodation needs during registration.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-28">
            <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
              <HelpCircle className="w-7 h-7" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I register as an individual delegate?",
                  a: "Yes, independent delegate registrations are accepted. You will be placed in a committee based on availability and preference.",
                },
                {
                  q: "Is prior MUN experience necessary?",
                  a: "No, prior experience is not mandatory. WELMUN welcomes first-time delegates and provides resources to help them prepare.",
                },
                {
                  q: "What is the dress code?",
                  a: "Delegates must wear smart western formals (suit and tie) or Indian formals (kurta-pyjama) at all times during committee sessions.",
                },
                {
                  q: "Can we choose our committee preferences?",
                  a: "Yes, you can indicate committee preferences during registration. The Secretariat will try to accommodate preferences based on availability.",
                },
                {
                  q: "Are refunds available if we cancel?",
                  a: "Cancellations made 15 days before the conference are eligible for a 50% refund. No refunds will be issued for cancellations within 15 days of the event.",
                },
                {
                  q: "How do I contact the organizers?",
                  a: "You can reach us at secretarygeneral@welhamboys.org or through the Contact Us page on this website.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-secondary/30 border-primary/20">
                  <CardContent className="p-5">
                    <h3 className="font-display text-base text-primary mb-2">{item.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side Nav */}
        <nav className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-28 space-y-1">
            <p className="font-display text-xs text-primary/60 uppercase tracking-[3px] mb-4">On this page</p>
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 cursor-none text-left ${
                  activeSection === id
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
