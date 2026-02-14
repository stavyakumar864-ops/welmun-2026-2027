import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationFAQs = () => (
  <section>
    <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
      <HelpCircle className="w-7 h-7" /> Frequently Asked Questions
    </h2>
    <div className="space-y-4">
      {[
        {
          q: "How many delegates can we send?",
          a: "Register a delegation of 7–12 delegates, one for each committee. Maximum 12 delegates per delegation. You may send additional delegates as part of a second delegation.",
        },
        {
          q: "Can we choose our committee preferences?",
          a: "Yes, you can indicate committee preferences in the Delegate Information Form. However, final allocation of committee and country is at the discretion of the Secretariat.",
        },
        {
          q: "Is the Faculty Advisor charged?",
          a: "No, registration charges are not applicable for the Faculty Advisor.",
        },
        {
          q: "What is the dress code?",
          a: "Delegates must wear smart western formals (suit and tie) or Indian formals (kurta-pyjama) at all times during committee sessions.",
        },
        {
          q: "Is accommodation provided on campus?",
          a: "No, outstation delegates are expected to book accommodation in the partner hotels listed above. The school will arrange daily pick-and-drop between the hotel and campus.",
        },
        {
          q: "What is the refund policy?",
          a: "If a school registers and withdraws 7 days prior to the event, no fees will be refunded.",
        },
        {
          q: "How do I contact the organizers?",
          a: "Secretary-General Ahan Sparsh: welmun@welhamboys.org / WhatsApp +91-7007800474. Conference Director Ms. Kiran Tripathi: kirantripathi@welhamboys.org / WhatsApp +91-7409809908.",
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

    {/* Contact */}
    <div className="mt-10 p-6 bg-secondary/30 rounded-lg border border-primary/20 text-center space-y-3">
      <h3 className="font-display text-xl text-primary">Questions?</h3>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-muted-foreground">
        <div>
          <p className="text-primary font-display text-xs mb-1">Secretary-General</p>
          <p>Ahan Sparsh</p>
          <a href="mailto:welmun@welhamboys.org" className="text-primary hover:underline cursor-none text-xs">welmun@welhamboys.org</a>
          <p className="text-xs">WhatsApp: +91-7007800474</p>
        </div>
        <div>
          <p className="text-primary font-display text-xs mb-1">Conference Director</p>
          <p>Ms. Kiran Tripathi</p>
          <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none text-xs">kirantripathi@welhamboys.org</a>
          <p className="text-xs">WhatsApp: +91-7409809908</p>
        </div>
      </div>
    </div>
  </section>
);

export default RegistrationFAQs;
