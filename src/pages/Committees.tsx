import { useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { committees, orderedCommittees } from "@/data/committees";

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
    }, 150);
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

  const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
  const DUR = "0.7s";

  return (
    <Link
      to={`/committees/${committee.id}`}
      className="relative overflow-hidden cursor-none block h-full rounded-xl"
      style={{
        flex: isActive ? 20 : 1,
        transition: `flex ${DUR} ${EASE}`,
        willChange: "flex",
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
          transition: `opacity ${DUR} ${EASE}`,
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
            transition: `opacity ${DUR} ${EASE}`,
          }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          transition: `background ${DUR} ${EASE}`,
          background: isActive
            ? "linear-gradient(to top, hsl(var(--background) / 0.7) 0%, hsl(var(--background) / 0.15) 40%, transparent 100%)"
            : "linear-gradient(to top, hsl(var(--background) / 0.7) 0%, hsl(var(--background) / 0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-8 gap-3 z-10">
        {/* Logo */}
        {committee.logo && (
          <img
            src={committee.logo}
            alt={`${committee.shortName} logo`}
            className="object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] w-12 h-12"
            style={{
              transition: `transform ${DUR} ${EASE}, opacity ${DUR} ${EASE}`,
              transform: isActive ? "scale(1.7) translateZ(0)" : "scale(1) translateZ(0)",
              transformOrigin: "center bottom",
              opacity: isActive ? 1 : 0.8,
              willChange: "transform",
            }}
          />
        )}

        {/* Short name - rotated when collapsed */}
        <h2
          className="font-display text-primary uppercase font-bold whitespace-nowrap"
          style={{
            textShadow: "0 2px 16px hsl(15 30% 12% / 0.95), 0 0 40px hsl(15 30% 12% / 0.7)",
            fontSize: isActive
              ? committee.shortName.length > 10 ? "1.5rem" : "2rem"
              : committee.shortName.length > 10 ? "0.85rem" : "1.25rem",
            letterSpacing: isActive
              ? committee.shortName.length > 10 ? "3px" : "6px"
              : committee.shortName.length > 10 ? "1.5px" : "3px",
            writingMode: isActive ? "horizontal-tb" : "vertical-rl",
            textOrientation: "mixed",
            transform: isActive ? "none" : "rotate(180deg)",
            transition: `font-size ${DUR} ${EASE}, letter-spacing ${DUR} ${EASE}`,
          }}
        >
          {committee.shortName}
        </h2>

        {/* Full name + agenda visible on hover */}
        <div
          className="text-center max-w-md overflow-hidden"
          style={{
            opacity: isActive ? 1 : 0,
            maxHeight: isActive ? "200px" : "0",
            transform: isActive ? "translateY(0)" : "translateY(16px)",
            transition: `opacity ${DUR} ${EASE}, max-height ${DUR} ${EASE}, transform ${DUR} ${EASE}`,
            pointerEvents: isActive ? "auto" : "none",
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
    <PageLayout backgroundImage="/images/committees-bg.jpg" backgroundOverlayOpacity={0.65}>
      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-primary tracking-[5px] sm:tracking-[8px] md:tracking-[15px] uppercase text-center mb-4 max-w-full break-words"
      >
        Committees
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        className="w-32 md:w-48 h-[2px] mb-6 origin-center"
        style={{ background: "linear-gradient(to right, transparent, hsl(var(--blue-accent)), hsl(var(--gold)), hsl(var(--blue-accent)), transparent)" }}
      />

      <div className="mb-12" />

      {/* Mobile Card Layout */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden"
      >
        {orderedCommittees.map((c) => (
          <Link
            key={c.id}
            to={`/committees/${c.id}`}
            className="relative overflow-hidden rounded-xl group block border border-primary/10"
            style={{ height: "260px" }}
          >
            <img
              src={portraitImages[c.id] || c.cardImage}
              alt={c.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, hsl(var(--background) / 0.92) 0%, hsl(var(--background) / 0.5) 45%, transparent 80%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 pb-5 gap-1.5 z-10">
              {c.logo && (
                <img src={c.logo} alt={`${c.shortName} logo`} className="w-9 h-9 object-contain drop-shadow-lg mb-1" />
              )}
              <h2
                className={`font-display text-primary uppercase font-bold text-center ${
                  c.shortName.length > 10 ? "text-sm tracking-[2px]" : "text-xl tracking-[4px]"
                }`}
                style={{ textShadow: "0 2px 12px hsl(15 30% 12% / 0.9)" }}
              >
                {c.shortName}
              </h2>
              {c.shortName !== c.name && (
                <p className="text-primary/85 text-[10px] text-center tracking-[2px] uppercase">
                  {c.name}
                </p>
              )}
              {c.agenda && (
                <p className="text-muted-foreground text-[11px] text-center leading-snug line-clamp-2 mt-1 px-1 italic">
                  {c.agenda}
                </p>
              )}
              <span className="text-blue-accent text-[10px] tracking-[3px] uppercase mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                View →
              </span>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Desktop Vertical Strips */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="w-full max-w-6xl hidden md:flex gap-4 rounded-2xl overflow-hidden"
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
