import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

// Portrait images for vertical strips
import unscPortrait from "@/assets/committees/unsc-portrait.jpg";
import disecPortrait from "@/assets/committees/disec-portrait.jpg";
import unodcPortrait from "@/assets/committees/unodc-portrait.jpg";
import viceroysPortrait from "@/assets/committees/viceroys-portrait.jpg";
import specpolPortrait from "@/assets/committees/specpol-portrait.jpg";
import unhrcPortrait from "@/assets/committees/unhrc-portrait.jpg";
import ipcPortrait from "@/assets/committees/ipc-portrait.jpg";

const portraitImages: Record<string, string> = {
  unsc: unscPortrait,
  disec: disecPortrait,
  unodc: unodcPortrait,
  "viceroys-cabinet": viceroysPortrait,
  specpol: specpolPortrait,
  unhrc: unhrcPortrait,
  ipc: ipcPortrait,
};

// Video imports
import unscVideo from "@/assets/committees/unsc-intro.mp4";
import disecVideo from "@/assets/committees/disec-intro.mp4";
import unodcVideo from "@/assets/committees/unodc-intro.mp4";
import viceroysVideo from "@/assets/committees/viceroys-cabinet-intro.mp4";
import loksabhaVideo from "@/assets/committees/loksabha-intro.mp4";
import ipcVideo from "@/assets/committees/ipc-intro.mp4";
import unhcrVideo from "@/assets/committees/unhcr-intro.mp4";

const committeeVideos: Record<string, string> = {
  unsc: unscVideo,
  disec: disecVideo,
  unodc: unodcVideo,
  "viceroys-cabinet": viceroysVideo,
  specpol: loksabhaVideo,
  unhrc: unhcrVideo,
  ipc: ipcVideo,
};

const orderedIds = ["unsc", "disec", "unodc", "viceroys-cabinet", "specpol", "unhrc", "ipc"];
const orderedCommittees = orderedIds
  .map((id) => committees.find((c) => c.id === id))
  .filter(Boolean) as typeof committees;

const CommitteeStrip = ({
  committee,
  isActive,
  onHover,
  onLeave,
}: {
  committee: (typeof committees)[0];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const videoSrc = committeeVideos[committee.id];

  const handleMouseEnter = useCallback(() => {
    hoverTimer.current = setTimeout(() => {
      onHover();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 500);
  }, [onHover]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    onLeave();
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [onLeave]);

  return (
    <Link
      to={`/committees/${committee.id}`}
      className="relative overflow-hidden cursor-none block h-full rounded-xl"
      style={{
        flex: isActive ? 20 : 1,
        transition: "flex 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image (always visible) */}
      <img
        src={portraitImages[committee.id] || committee.cardImage}
        alt={committee.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          transition: "opacity 0.5s ease",
          opacity: isActive && videoSrc ? 0 : 1,
        }}
      />

      {/* Video (plays on hover) */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isActive
            ? "linear-gradient(to top, hsl(var(--background) / 0.85) 0%, hsl(var(--background) / 0.3) 40%, transparent 100%)"
            : "linear-gradient(to top, hsl(var(--background) / 0.9) 0%, hsl(var(--background) / 0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-8 gap-3 z-10">
        {/* Logo */}
        {committee.logo && (
          <img
            src={committee.logo}
            alt={`${committee.shortName} logo`}
            className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] transition-all duration-500"
            style={{
              width: isActive ? "5rem" : "3rem",
              height: isActive ? "5rem" : "3rem",
              opacity: isActive ? 1 : 0.8,
            }}
          />
        )}

        {/* Short name - rotated when collapsed */}
        <h2
          className="font-display text-primary uppercase font-bold whitespace-nowrap transition-all duration-500"
          style={{
            textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)",
            fontSize: isActive ? "2rem" : "1.25rem",
            letterSpacing: isActive ? "6px" : "3px",
            writingMode: isActive ? "horizontal-tb" : "vertical-rl",
            textOrientation: isActive ? "mixed" : "mixed",
            transform: isActive ? "none" : "rotate(180deg)",
          }}
        >
          {committee.shortName}
        </h2>

        {/* Full name + agenda visible on hover */}
        <div
          className="text-center max-w-md transition-all duration-500 overflow-hidden"
          style={{
            opacity: isActive ? 1 : 0,
            maxHeight: isActive ? "200px" : "0",
            transform: isActive ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-muted-foreground text-sm tracking-wider uppercase mb-2">
            {committee.name}
          </p>
          <p className="text-muted-foreground/70 text-xs leading-relaxed line-clamp-2">
            {committee.agenda}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Committees = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <PageLayout backgroundImage="/images/committees-bg.jpg">
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-primary tracking-[10px] md:tracking-[20px] uppercase text-center mb-4"
      >
        Committees
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="w-32 md:w-48 h-[2px] mb-10 origin-center"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--blue-accent)), hsl(var(--gold)), hsl(var(--blue-accent)), transparent)" }}
      />

      {/* Position Paper Deadline Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-14 w-full max-w-5xl p-5 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-red-300/90 text-sm leading-relaxed">
            <span className="text-red-400 font-display font-semibold">Important:</span> All delegates must submit their Position Papers by{" "}
            <span className="text-red-300 font-semibold">July 20, 2026</span>. Guidelines are provided in each committee's Background Guide. Late submissions may lead to de-marking of Position Papers.
          </p>
        </div>
      </motion.div>

      {/* Vertical Strips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-6xl flex gap-4 rounded-2xl overflow-hidden"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        {orderedCommittees.map((c) => (
          <CommitteeStrip
            key={c.id}
            committee={c}
            isActive={activeId === c.id}
            onHover={() => setActiveId(c.id)}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </motion.div>
    </PageLayout>
  );
};

export default Committees;
