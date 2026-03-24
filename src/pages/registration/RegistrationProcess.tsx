import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationProcess = () => (
  <section>
    <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
      <FileText className="w-7 h-7" /> Registration Process
    </h2>
    <div className="space-y-4">
      {[
        {
          step: "Step 1",
          title: "Submit the Delegate Information Form",
          desc: "Fill out the Delegate Information Form with details of all participating delegates and the Faculty Advisor(s). Include committee preferences for each delegate.",
        },
        {
          step: "Step 2",
          title: "Submit the Indemnity Form",
          desc: "The Principal must sign and seal the Indemnity Form granting consent for the delegation to participate. Submit a scanned copy via email.",
        },
        {
          step: "Step 3",
          title: "Complete Payment",
          desc: "Transfer the school registration fee (₹10,000) and per-delegate fee via bank transfer. Email transaction details to the Conference Director.",
        },
        {
          step: "Step 4",
          title: "Receive Country/Portfolio Allocation",
          desc: "The Secretariat will assign country and committee allocations based on preference and availability. Allocations will be communicated via email.",
        },
        {
          step: "Step 5",
          title: "Submit Position Papers",
          desc: "Each delegate must submit a position paper for their assigned committee by July 20, 2026. Guidelines are provided in each committee's Background Guide.",
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
    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
      <p className="text-muted-foreground text-sm leading-relaxed">
        <span className="text-primary font-display">Note:</span> Registration will be considered complete on the receipt of duly filled forms, scanned copy of the Indemnity Form, and on the receipt of transaction details. Email all documents to{" "}
        <a href="mailto:kirantripathi@welhamboys.org" className="text-primary hover:underline cursor-none">kirantripathi@welhamboys.org</a> latest by <span className="text-primary">July 1, 2025</span>.
      </p>
    </div>
  </section>
);

export default RegistrationProcess;
