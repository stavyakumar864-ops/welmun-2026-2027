import { useEffect, useRef, useState } from "react";
import elephantLogo from "@/assets/welham-elephant.png";
import welmunLogo from "@/assets/hd-white.png";

type Props = {
  targetAt: number;
  onUnlock: () => void;
};

const getRemaining = (target: number) => {
  const diff = Math.max(0, target - Date.now());
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const BG = "#ffffff";
const BEIGE = "#2E1A0C";
const BEIGE_DIM = "#5C3A1E";
const GOLD = "#A87936";

const DISPLAY = "'Playfair Display', 'Didot', 'Bodoni 72', 'Times New Roman', serif";
const BODY = "'Cormorant Garamond', 'Georgia', serif";

const EASE_OUT = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_IN = "cubic-bezier(0.7, 0, 0.84, 0)";
const EASE_IN_OUT = "cubic-bezier(0.65, 0, 0.35, 1)";

// Inject keyframes once
const KEYFRAMES = `
@keyframes cd-rise {
  0% { opacity: 0; transform: translateY(24px); filter: blur(6px); }
  100% { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes cd-tick {
  0% { transform: translateY(-0.18em); opacity: 0; filter: blur(3px); }
  60% { opacity: 1; filter: blur(0); }
  100% { transform: translateY(0); opacity: 1; filter: blur(0); }
}
@keyframes cd-shimmer {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
@keyframes cd-bloom {
  0% { transform: scale(0.6); opacity: 0; }
  40% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(2.8); opacity: 0; }
}
`;

type Phase = "enter" | "counting" | "blur" | "compress" | "morph" | "gone";

const Unit = ({ value, label, phase }: { value: number; label: string; phase: Phase }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div
      key={value}
      style={{
        fontFamily: DISPLAY,
        fontWeight: 700,
        fontSize: "clamp(3.5rem, 8vw, 7rem)",
        lineHeight: 0.9,
        color: BEIGE,
        fontVariantNumeric: "tabular-nums",
        letterSpacing: "-0.02em",
        animation:
          phase === "counting" || phase === "enter"
            ? `cd-tick 420ms ${EASE_OUT} both`
            : undefined,
      }}
    >
      {String(value).padStart(2, "0")}
    </div>
    <div
      style={{
        marginTop: "1rem",
        fontFamily: BODY,
        fontWeight: 500,
        fontStyle: "italic",
        fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
        letterSpacing: "0.5em",
        textTransform: "uppercase",
        color: GOLD,
        paddingLeft: "0.5em",
      }}
    >
      {label}
    </div>
  </div>
);

const Divider = () => (
  <div
    style={{
      width: "1px",
      alignSelf: "stretch",
      background: `linear-gradient(to bottom, transparent 0%, ${GOLD}55 25%, ${GOLD} 50%, ${GOLD}55 75%, transparent 100%)`,
      margin: "0 clamp(1rem, 3vw, 2.25rem)",
      animation: `cd-shimmer 2.8s ease-in-out infinite`,
    }}
  />
);

const Flourish = () => (
  <svg width="280" height="14" viewBox="0 0 280 14" aria-hidden="true">
    <line x1="0" y1="7" x2="118" y2="7" stroke={GOLD} strokeWidth="0.8" opacity="0.7" />
    <line x1="162" y1="7" x2="280" y2="7" stroke={GOLD} strokeWidth="0.8" opacity="0.7" />
    <path d="M 126 7 Q 133 0 140 7 Q 147 14 154 7" fill="none" stroke={BEIGE_DIM} strokeWidth="1.1" />
    <circle cx="140" cy="7" r="1.5" fill={GOLD} />
  </svg>
);

const Countdown = ({ targetAt, onUnlock }: Props) => {
  const [t, setT] = useState(() => getRemaining(targetAt));
  const [phase, setPhase] = useState<Phase>("enter");
  const firedRef = useRef(false);

  // Initial mount entrance
  useEffect(() => {
    const id = setTimeout(() => setPhase("counting"), 900);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const tick = () => {
      const r = getRemaining(targetAt);
      setT(r);
      if (
        !firedRef.current &&
        r.hours === 0 &&
        r.minutes === 0 &&
        r.seconds === 0
      ) {
        firedRef.current = true;
        // Stage 1: text blurs out
        setPhase("blur");
        // Stage 2: surface compresses into a circle around the welmun logo, logo fades in
        setTimeout(() => setPhase("compress"), 650);
        // Stage 3: morph — brown circle dissolves leaving just the logo (which matches Intro)
        setTimeout(() => setPhase("morph"), 1850);
        // Stage 4: unmount
        setTimeout(() => setPhase("gone"), 2400);
        setTimeout(() => onUnlock(), 2500);
      }
    };
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [targetAt, onUnlock]);

  const exiting =
    phase === "blur" || phase === "compress" || phase === "morph" || phase === "gone";
  const gone = phase === "gone";

  // While exiting: every inner element blurs + fades simultaneously.
  const riseStyle = (delayMs: number): React.CSSProperties => ({
    animation: phase === "enter" ? `cd-rise 900ms ${EASE_OUT} ${delayMs}ms both` : undefined,
    opacity: exiting ? 0 : undefined,
    filter: exiting ? "blur(24px)" : undefined,
    transition: exiting
      ? `opacity 600ms ${EASE_IN_OUT}, filter 700ms ${EASE_IN_OUT}`
      : undefined,
    willChange: "opacity, filter",
  });

  // Clip-path compresses the surface into a circle the size of the IntroScreen WELMUN logo.
  // Center 50% / 41% matches the logo's vertical position on IntroScreen (above-center stack).
  const surfaceClip =
    phase === "compress"
      ? "circle(7vmin at 50% 41%)"
      : phase === "morph" || phase === "gone"
      ? "circle(0vmin at 50% 41%)"
      : "circle(150% at 50% 41%)";

  // The welmun-logo overlay appears during compress/morph, mimicking IntroScreen layout
  // so its position matches exactly. Fades in during compress, sustains, then unmount.
  const logoOverlayOpacity = phase === "compress" || phase === "morph" ? 1 : 0;

  return (
    <>
      <style>{KEYFRAMES}</style>
      <div
        aria-hidden={gone}
        style={{
          position: "fixed",
          inset: 0,
          background: BG,
          zIndex: 9999,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "clamp(1.75rem, 4vh, 3rem) clamp(1.5rem, 5vw, 4rem)",
          textAlign: "center",
          color: BEIGE,
          clipPath: surfaceClip,
          WebkitClipPath: surfaceClip,
          transition: `clip-path 1200ms ${EASE_IN_OUT}, -webkit-clip-path 1200ms ${EASE_IN_OUT}, opacity 500ms ease`,
          opacity: gone ? 0 : 1,
          pointerEvents: gone ? "none" : "auto",
          willChange: "clip-path, opacity",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {/* Subtle vignette */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at center, transparent 55%, ${BEIGE}0F 100%)`,
            pointerEvents: "none",
          }}
        />

        {/* Top eyebrow */}
        <div
          style={{
            ...riseStyle(0),
            fontFamily: BODY,
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "clamp(0.75rem, 1.1vw, 1rem)",
            letterSpacing: "0.55em",
            textTransform: "uppercase",
            color: GOLD,
            paddingLeft: "0.55em",
          }}
        >
          Welham Boys' School &nbsp;·&nbsp; Dehradun
        </div>

        {/* Center block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={riseStyle(120)}>
            <Flourish />
          </div>

          <h1
            style={{
              ...riseStyle(180),
              fontFamily: DISPLAY,
              fontWeight: 800,
              color: BEIGE,
              fontSize: "clamp(3rem, 9vw, 7.5rem)",
              lineHeight: 1,
              margin: "1.5rem 0 0.5rem 0",
              letterSpacing: "0.04em",
            }}
          >
            WELMUN&nbsp;2026
          </h1>

          <div
            style={{
              ...riseStyle(260),
              fontFamily: BODY,
              fontStyle: "italic",
              fontWeight: 500,
              color: BEIGE_DIM,
              fontSize: "clamp(1.4rem, 3.5vw, 2.6rem)",
              letterSpacing: "0.03em",
              lineHeight: 1.15,
            }}
          >
            The Countdown Begins
          </div>

          <div
            style={{
              ...riseStyle(340),
              fontFamily: DISPLAY,
              color: GOLD,
              fontSize: "clamp(0.8rem, 1.2vw, 1.05rem)",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginTop: "1rem",
              paddingLeft: "0.5em",
            }}
          >
            Ordo ab Chao
          </div>

          <div style={{ ...riseStyle(420), marginTop: "2.25rem" }}>
            <Flourish />
          </div>

          {/* Timer */}
          <div
            style={{
              ...riseStyle(500),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2.25rem",
              flexWrap: "wrap",
              rowGap: "2rem",
              transformOrigin: "center",
            }}
          >
            <Unit value={t.hours} label="Hours" phase={phase} />
            <Divider />
            <Unit value={t.minutes} label="Minutes" phase={phase} />
            <Divider />
            <Unit value={t.seconds} label="Seconds" phase={phase} />
          </div>

          <div style={{ ...riseStyle(580), marginTop: "2.25rem" }}>
            <Flourish />
          </div>

          <div
            style={{
              ...riseStyle(660),
              marginTop: "1.25rem",
              fontFamily: DISPLAY,
              fontWeight: 600,
              color: BEIGE,
              fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              paddingLeft: "0.4em",
            }}
          >
            XII May MMXXVI &nbsp;·&nbsp; 3 P.M.
          </div>
        </div>

        {/* Footer with logos */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div
            style={{
              ...riseStyle(740),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <img
              src={elephantLogo}
              alt="Welham Boys' School"
              style={{
                height: "clamp(3.5rem, 7vw, 5.5rem)",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0)",
              }}
            />
            <div
              style={{
                fontFamily: BODY,
                fontStyle: "italic",
                color: BEIGE_DIM,
                fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                paddingLeft: "0.35em",
              }}
            >
              Welham Boys' School
            </div>
          </div>

          <div
            style={{
              ...riseStyle(820),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <img
              src={welmunLogo}
              alt="WELMUN"
              style={{
                height: "clamp(3.5rem, 7vw, 5.5rem)",
                width: "auto",
                objectFit: "contain",
                filter: "invert(1)",
              }}
            />
            <div
              style={{
                fontFamily: BODY,
                fontStyle: "italic",
                color: BEIGE_DIM,
                fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                paddingLeft: "0.35em",
              }}
            >
              WELMUN 2026
            </div>
          </div>
        </div>
      </div>

      {/* WELMUN logo overlay — mimics IntroScreen layout so position matches exactly.
          Fades in as the brown surface compresses to a circle around it, creating a
          seamless morph: countdown -> logo -> IntroScreen (which renders the same logo). */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: logoOverlayOpacity,
          transition: `opacity 700ms ${EASE_IN_OUT}`,
          willChange: "opacity",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={welmunLogo}
            alt=""
            style={{
              width: "clamp(10rem, 14vw, 14rem)",
              height: "clamp(10rem, 14vw, 14rem)",
              objectFit: "contain",
              marginBottom: "2rem",
              filter: "drop-shadow(0 0 40px rgba(245, 234, 215, 0.3))",
            }}
          />
          {/* Spacers that match IntroScreen's WELMUN '26 + tagline so the logo's
              vertical center aligns with the IntroScreen layout. */}
          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "0.06em",
              visibility: "hidden",
            }}
          >
            WELMUN '26
          </div>
          <div
            style={{
              marginTop: "0.75rem",
              fontFamily: BODY,
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
              visibility: "hidden",
            }}
          >
            'Ordo ab Chao'
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
