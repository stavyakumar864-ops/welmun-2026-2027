import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Shield,
  BookOpen,
  Gavel,
  Users,
  Camera,
  Shirt,
  Award,
  Smartphone,
  AlertTriangle,
  MessageSquare,
  Clock,
  Scale,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PDF_URLS = {
  charter:
    "https://www.welhammun.org/_files/ugd/9bbbe8_d5a06f62464948b281210257dc716a48.pdf",
  policy:
    "https://www.welhammun.org/_files/ugd/9bbbe8_6733b7d5af714da1b2821aff084aee29.pdf",
  rop: "https://www.welhammun.org/_files/ugd/9bbbe8_2b0f20bed6084044a5450a4eee91ecd2.pdf",
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
  {
    title: "Rules of Procedure",
    description: "Complete UNA-USA Rules of Procedure for all committees.",
    url: PDF_URLS.rop,
    icon: <BookOpen className="w-5 h-5" />,
  },
];

const policyItems = [
  {
    icon: <Gavel className="w-5 h-5" />,
    title: "Discipline",
    content:
      "Delegates are expected to always maintain the decorum of the committee. Anyone exhibiting non-diplomatic behavior will be suspended or expelled from the committee, at the discretion of the chair. The use of profanity will result in immediate expulsion from the conference. Delegates must refrain from showing unnecessary hostility and aggression. Delegates who disrupt committee sessions or other conference events may be barred from further participation.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Expectations",
    content:
      "Delegates are expected to have a basic knowledge of the UNA-USA rules of procedure. The chairs of each committee will explain any changes they incorporate. Delegates must adhere to position paper deadlines and be punctual for committee sessions. The Executive Board will inform delegates of the timing system at the start of the conference. Delegates are requested to consistently advocate their country's interests and represent the policies of the portfolio assigned to them.",
  },
  {
    icon: <Shirt className="w-5 h-5" />,
    title: "Dress Code",
    content:
      "Delegates must be dressed in smart western or Indian formal attire at all times. This may include a suit and a tie (Western) or kurta-pyjamas (Indian). Anyone violating the dress code will be barred from entering the meeting until they comply.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Lobbying",
    content:
      "Lobbying will take place solely during unmoderated caucuses where delegates will discuss the agenda and the flow of the committee with each other. Delegates must still comply with the code of conduct during unmoderated caucuses and break times.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Electronics Policy",
    content:
      "Delegates are not allowed to use the internet while the formal committee is in session. During break periods (lunch and tea breaks), on-campus internet services will be available. No headphones or earbuds are to be used during committee time.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Interjection",
    content:
      "Those wishing to raise a point or gain recognition will only raise the placard provided during the conference. IPC members wishing to question a delegate or conduct an interview must first contact the Executive Board. The Executive Board will decide whether to disregard a request to repeat a speech depending on committee time.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Photography",
    content:
      "Welham Boys' School reserves the right to monitor committee sessions and use photographs and videos at its discretion. The event may be published on the internet or in print media. No participating school is permitted to publish any media related to the conference sessions without consent of Welham Boys' School.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Plagiarism & Authenticity",
    content:
      "All committees will follow a strict policy against plagiarism of any kind. The Executive Board will run position papers through plagiarism checkers and penalize delegates accordingly. Further information regarding plagiarism policy will be provided in the background guides of different committees.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Awards",
    content:
      "The number of awards for each committee will be decided depending on the strength of the committee by the Secretariat. Delegates will be evaluated based on well-structured marking criteria formulated by the Executive Board. Anyone failing to comply with conference policies will become ineligible for an award. The judgement sheet may be shared only at the discretion of the chair.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Role of Faculty Advisors",
    content:
      "Faculty Advisors are responsible for ensuring that their student delegation follows the terms and conditions. They must also ensure the punctuality of their individual delegations.",
  },
];

const charterHighlights = [
  {
    title: "Chapter I — Purposes & Principles",
    content:
      "The purposes of the United Nations are to maintain international peace and security, develop friendly relations among nations, achieve international cooperation in solving problems, and be a centre for harmonizing the actions of nations.",
  },
  {
    title: "Chapter II — Membership",
    content:
      "Membership is open to all peace-loving states which accept the obligations contained in the Charter. Admission is effected by a decision of the General Assembly upon the recommendation of the Security Council.",
  },
  {
    title: "Chapter IV — The General Assembly",
    content:
      "The General Assembly is composed of all Members of the United Nations. Each member shall have not more than five representatives. It may discuss any questions within the scope of the present Charter.",
  },
  {
    title: "Chapter V — The Security Council",
    content:
      "The Security Council consists of fifteen members including five permanent members: China, France, Russia, the United Kingdom, and the United States. It has primary responsibility for the maintenance of international peace and security.",
  },
  {
    title: "Chapter VI — Pacific Settlement of Disputes",
    content:
      "Parties to any dispute shall first seek a solution by negotiation, enquiry, mediation, conciliation, arbitration, judicial settlement, or other peaceful means of their own choice.",
  },
  {
    title: "Chapter VII — Action with Respect to Threats to Peace",
    content:
      "The Security Council shall determine the existence of any threat to the peace, breach of the peace, or act of aggression and shall make recommendations or decide what measures shall be taken to maintain or restore international peace and security.",
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
        <Tabs defaultValue="policy" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-secondary/50 border border-primary/20 h-auto p-1">
            <TabsTrigger
              value="policy"
              className="font-display text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Shield className="w-4 h-4 mr-1.5 hidden md:inline-block" />
              Conference Policy
            </TabsTrigger>
            <TabsTrigger
              value="charter"
              className="font-display text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Scale className="w-4 h-4 mr-1.5 hidden md:inline-block" />
              UN Charter
            </TabsTrigger>
            <TabsTrigger
              value="rop"
              className="font-display text-xs md:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <BookOpen className="w-4 h-4 mr-1.5 hidden md:inline-block" />
              Rules of Procedure
            </TabsTrigger>
          </TabsList>

          {/* Conference Policy Tab */}
          <TabsContent value="policy" className="mt-8">
            <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/15">
              <p className="text-foreground text-sm leading-relaxed">
                The following describes the policies of WELMUN 2026. All delegates,
                faculty advisors, and participants are expected to adhere to these
                guidelines throughout the duration of the conference.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {policyItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`policy-${i}`}
                  className="border border-primary/15 rounded-lg px-4 bg-secondary/20 hover:bg-secondary/30 transition-colors data-[state=open]:bg-secondary/40"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span className="flex items-center gap-3 text-left">
                      <span className="text-primary">{item.icon}</span>
                      <span className="font-display text-base text-foreground">
                        {item.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* UN Charter Tab */}
          <TabsContent value="charter" className="mt-8">
            <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/15">
              <p className="text-foreground text-sm leading-relaxed">
                The Charter of the United Nations is the foundational treaty of the
                United Nations. It was signed on 26 June 1945 in San Francisco. Key
                chapters are summarized below.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {charterHighlights.map((chapter, i) => (
                <Card
                  key={i}
                  className="bg-secondary/20 border-primary/15 hover:border-primary/30 transition-colors hover-lift"
                >
                  <CardContent className="p-5">
                    <h3 className="font-display text-sm text-primary mb-2">
                      {chapter.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {chapter.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Download the full UN Charter & Statute of the ICJ for complete
                reference.
              </p>
            </div>
          </TabsContent>

          {/* Rules of Procedure Tab */}
          <TabsContent value="rop" className="mt-8">
            <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/15">
              <p className="text-foreground text-sm leading-relaxed">
                The Rules of Procedure (ROP) govern how committee sessions are
                conducted. Delegates are expected to familiarize themselves with
                these rules before the conference. The document covers motions,
                points, voting procedures, and debate formats.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Motions & Points",
                  desc: "Understand the difference between procedural motions (Point of Order, Point of Inquiry) and substantive motions (moderated/unmoderated caucus).",
                },
                {
                  title: "Debate Format",
                  desc: "Learn about the General Speakers' List, moderated caucuses, unmoderated caucuses, and how to introduce draft resolutions.",
                },
                {
                  title: "Voting Procedures",
                  desc: "Understand roll call voting, simple majority vs two-thirds majority, and the right of veto in the Security Council.",
                },
                {
                  title: "Working Papers & Draft Resolutions",
                  desc: "Guidelines for drafting, sponsoring, and signatories of working papers and draft resolutions in committee.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="bg-secondary/20 border-primary/15 hover:border-primary/30 transition-colors hover-lift"
                >
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Download the complete Rules of Procedure document for detailed
                reference.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Important Downloads */}
        <div className="mt-12">
          <h2 className="font-display text-2xl text-primary mb-6 flex items-center gap-3">
            <Download className="w-6 h-6" /> Important Downloads
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
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
