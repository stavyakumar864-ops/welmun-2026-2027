import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Video imports for each committee
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

interface CommitteeIntroProps {
  committeeId: string;
  committeeName: string;
}

const CommitteeIntro = ({ committeeId, committeeName }: CommitteeIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = committeeVideos[committeeId];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
    }
  }, []);

  if (!videoSrc) return null;

  return (
    <>
      {/* Fixed video that stays in place while content scrolls over it */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-primary tracking-[8px] uppercase text-center"
            style={{
              textShadow: "0 4px 20px hsl(15 30% 12% / 0.8), 0 0 60px hsl(15 30% 12% / 0.5)",
            }}
          >
            {committeeName}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-none"
        >
          <p className="text-primary text-sm tracking-[3px] uppercase">
            Scroll down
          </p>
          <span
            className="text-primary text-2xl"
            style={{ animation: "bounce-arrow 1.5s infinite" }}
          >
            ↓
          </span>
        </motion.div>
      </div>

      {/* Spacer so the montage is visible for one screen height */}
      <div className="h-screen relative" />
    </>
  );
};

export default CommitteeIntro;
