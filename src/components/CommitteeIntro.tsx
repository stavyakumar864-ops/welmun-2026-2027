import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Video imports for each committee
import unscVideo from "@/assets/committees/unsc-intro.mp4";
import disecVideo from "@/assets/committees/disec-intro.mp4";
import unodcVideo from "@/assets/committees/unodc-intro.mp4";
import viceroysVideo from "@/assets/committees/viceroys-cabinet-intro.mp4";
import loksabhaVideo from "@/assets/committees/loksabha-intro.mp4";
import ipcVideo from "@/assets/committees/ipc-intro.mp4";

const committeeVideos: Record<string, string> = {
  unsc: unscVideo,
  disec: disecVideo,
  unodc: unodcVideo,
  "viceroys-cabinet": viceroysVideo,
  "lok-sabha": loksabhaVideo,
  ipc: ipcVideo,
};

interface CommitteeIntroProps {
  committeeId: string;
  committeeName: string;
  onComplete: () => void;
}

const CommitteeIntro = ({ committeeId, committeeName, onComplete }: CommitteeIntroProps) => {
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = committeeVideos[committeeId];

  const handleEnd = useCallback(() => {
    setVisible(false);
    setTimeout(onComplete, 600);
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    if (videoRef.current) videoRef.current.pause();
    handleEnd();
  }, [handleEnd]);

  if (!videoSrc) {
    onComplete();
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          onClick={handleSkip}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            onEnded={handleEnd}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-background/40" />

          {/* Committee name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 font-display text-5xl md:text-7xl lg:text-8xl text-primary tracking-[8px] uppercase text-center"
            style={{
              textShadow: "0 4px 20px hsl(220 40% 13% / 0.8), 0 0 60px hsl(220 40% 13% / 0.5)",
            }}
          >
            {committeeName}
          </motion.h1>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 text-primary text-sm tracking-[3px] uppercase cursor-none"
          >
            Click to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommitteeIntro;
