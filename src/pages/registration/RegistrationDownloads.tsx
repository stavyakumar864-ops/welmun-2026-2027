import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationDownloads = () => (
  <section>
    <h2 className="font-display text-3xl text-primary mb-6 flex items-center gap-3">
      <Download className="w-7 h-7" /> Downloadable Forms
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      {[
        { title: "Invitation Letter", desc: "Official invitation from the Principal of Welham Boys' School.", file: "/docs/WELMUN-Invite.docx" },
        { title: "Delegate Information Form", desc: "Details of delegates, teacher escorts, and committee preferences.", file: "/docs/WELMUN-Delegate_Information.docx" },
        { title: "Indemnity Form", desc: "Consent form to be signed and sealed by the Principal.", file: "/docs/WELMUN-Indemnity_Form.docx" },
        { title: "Hotel Tariff", desc: "List of partner hotels with rates and contact details.", file: "/docs/WELMUN-Hotel_Tariff.pdf" },
      ].map((doc) => (
        <a key={doc.title} href={doc.file} download className="block group">
          <Card className="bg-secondary/30 border-primary/20 hover:border-primary/50 hover:bg-secondary/50 transition-colors duration-300 hover-lift h-full">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm text-primary group-hover:text-foreground transition-colors">{doc.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{doc.desc}</p>
              </div>
              <Download className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors shrink-0" />
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  </section>
);

export default RegistrationDownloads;
