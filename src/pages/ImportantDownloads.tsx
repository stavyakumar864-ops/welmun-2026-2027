import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Scale, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PDF_URLS = {
  charter: "https://www.welhammun.org/_files/ugd/9bbbe8_d5a06f62464948b281210257dc716a48.pdf",
  policy: "https://www.welhammun.org/_files/ugd/9bbbe8_6733b7d5af714da1b2821aff084aee29.pdf",
  rop: "https://www.welhammun.org/_files/ugd/9bbbe8_2b0f20bed6084044a5450a4eee91ecd2.pdf",
};

const downloads = [
  {
    title: "Conference Policy",
    description: "Discipline, dress code, electronics policy, awards, and more.",
    url: PDF_URLS.policy,
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Charter of the United Nations",
    description: "Full text of the UN Charter & Statute of the International Court of Justice.",
    url: PDF_URLS.charter,
    icon: <Scale className="w-6 h-6" />,
  },
  {
    title: "Rules of Procedure",
    description: "Complete UNA-USA Rules of Procedure for all committees.",
    url: PDF_URLS.rop,
    icon: <BookOpen className="w-6 h-6" />,
  },
];

const DownloadCard = ({
  title,
  description,
  url,
  icon,
}: {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
    <Card className="bg-secondary/40 border-primary/20 hover:border-primary/50 hover:bg-secondary/60 transition-colors duration-300 hover-lift">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-primary group-hover:text-foreground transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        <Download className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors shrink-0" />
      </CardContent>
    </Card>
  </a>
);

const ImportantDownloads = () => {
  const headerRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <PageLayout backgroundImage="/images/conference-bg.jpg">
      <div ref={headerRef} className="reveal-section flex flex-col items-center">
        <h1 className="font-display text-4xl md:text-5xl text-primary mb-4 text-center">
          Important Downloads
        </h1>
        <div className="gold-divider" />
        <p className="text-muted-foreground text-lg mt-4 text-center max-w-2xl mb-12">
          Download all essential documents for WELMUN 2026.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto grid gap-4">
        {downloads.map((item, i) => (
          <DownloadCard key={i} {...item} />
        ))}
      </div>
    </PageLayout>
  );
};

export default ImportantDownloads;
