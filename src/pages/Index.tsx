import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SecretariatSection from "@/components/SecretariatSection";
import Welmun2025Recap from "@/components/Welmun2025Recap";
import ScheduleBanner from "@/components/ScheduleBanner";
import ContactBanner from "@/components/ContactBanner";

const Index = () => {
  const [introVisible, setIntroVisible] = useState(() => {
    return !sessionStorage.getItem("welmun-intro-seen");
  });

  const handleEnter = () => {
    sessionStorage.setItem("welmun-intro-seen", "true");
    setIntroVisible(false);
  };

  return (
    <>
      {/* Custom cursor — outside all clipped containers so it's always visible */}
      <CustomCursor isIntroVisible={introVisible} />

      {/* Contact banner — lowest fixed layer (z-0) */}
      <div className="fixed inset-0 z-0">
        <ContactBanner />
      </div>

      {/* Schedule layer — revealed after main content scrolls away */}
      <div className="relative z-[2]" style={{ clipPath: "inset(0)" }}>
        {/* Schedule banner fixed inside this clipped container */}
        <div className="fixed inset-0 z-0">
          <ScheduleBanner />
        </div>

        {/* Main content — top layer */}
        <div className="relative z-10" style={{ clipPath: "inset(0)" }}>
          {/* Single shared background for hero + secretariat */}
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: "url(/images/welmun-home-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-background/75" />
          </div>
          <ParticleCanvas />
          {introVisible && <IntroScreen onEnter={handleEnter} />}
          <Navbar />
          <HeroSection animateIn={!introVisible} />
          <div className="relative z-10">
            <SecretariatSection />
            <Welmun2025Recap />
          </div>
        </div>
        {/* Spacer reveals the fixed ScheduleBanner */}
        <div className="h-screen" />
      </div>
      {/* Spacer reveals the fixed ContactBanner */}
      <div className="h-screen" />
    </>
  );
};

export default Index;
