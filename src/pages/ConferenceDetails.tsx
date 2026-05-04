import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Shield, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PDF_URLS = {
  policy: "/docs/conference-policy.pdf",
  charter:
    "https://www.welhammun.org/_files/ugd/9bbbe8_d5a06f62464948b281210257dc716a48.pdf",
};

const importantDownloads = [
  {
    title: "Conference Policy",
    description: "Discipline, dress code, electronics policy, awards, and more.",
    url: PDF_URLS.policy,
    icon: <Shield className="w-5 h-5" />,
  },
  {
    title: "Charter of the United Nations",
    description: "Full text of the UN Charter & Statute of the International Court of Justice.",
    url: PDF_URLS.charter,
    icon: <Scale className="w-5 h-5" />,
  },
];

const ConferenceDetails = () => {
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <PageLayout backgroundImage="/images/conference-bg.jpg">
      <div ref={headerRef} className="reveal-section flex flex-col items-center">
        <h1 className="font-display text-4xl md:text-5xl text-primary mb-4 text-center">
          Conference Details
        </h1>
        <div className="gold-divider" />
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <div className="mt-8">
          <h2 className="font-display text-2xl text-primary mb-6 flex items-center gap-3">
            <Download className="w-6 h-6" /> Important Downloads
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {importantDownloads.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-secondary/20 border-primary/15 hover:border-primary/40 hover:bg-secondary/40 transition-colors duration-300 hover-lift h-full">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="font-display text-sm text-primary group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                    <Download className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ConferenceDetails;
