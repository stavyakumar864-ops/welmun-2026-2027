import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, FileText, Grid3X3 } from "lucide-react";
import { motion } from "framer-motion";
import { orderedCommittees } from "@/data/committees";
import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";

interface Props {
  resource: "background-guide" | "matrix";
}

const RESOURCE_META = {
  "background-guide": { label: "Background Guide", Icon: FileText },
  matrix: { label: "Matrix", Icon: Grid3X3 },
} as const;

const CommitteeResourcePlaceholder = ({ resource }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const committee = orderedCommittees.find((c) => c.id === id);
  const { label, Icon } = RESOURCE_META[resource];

  return (
    <>
      <CustomCursor isIntroVisible={false} />
      <ParticleCanvas />
      <Navbar />

      <div className="relative z-[2]" style={{ clipPath: "inset(0)" }}>
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url(/images/committees-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <main className="relative z-10 pt-20 min-h-screen px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] py-16 md:py-24 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-xl text-center flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Icon className="w-7 h-7" />
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-primary tracking-wide">
              {label}
            </h1>
            {committee && (
              <p className="text-muted-foreground text-base md:text-lg">
                {committee.name}
              </p>
            )}
            <p className="font-display text-2xl md:text-3xl text-accent italic">
              Coming Soon
            </p>
            <p className="text-muted-foreground text-sm max-w-md">
              This document is being finalised and will be available here shortly.
              Please check back closer to the conference.
            </p>
            <button
              onClick={() => navigate(committee ? `/committees/${committee.id}` : "/committees")}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/40 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-none"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to {committee ? committee.shortName : "Committees"}
            </button>
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default CommitteeResourcePlaceholder;
