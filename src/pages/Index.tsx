import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SecretariatSection from "@/components/SecretariatSection";
import ScheduleBanner from "@/components/ScheduleBanner";

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
      {/* Schedule banner fixed behind everything */}
      <ScheduleBanner />
      {/* Main content on top */}
      <div className="relative z-10" style={{ clipPath: "inset(0)" }}>
        <CustomCursor isIntroVisible={introVisible} />
        <ParticleCanvas />
        {introVisible && <IntroScreen onEnter={handleEnter} />}
        <Navbar />
        <HeroSection />
        <div className="relative">
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: "url(/images/home-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative z-10">
            <SecretariatSection />
          </div>
        </div>
      </div>
      {/* Transparent spacer reveals the fixed ScheduleBanner underneath */}
      <div className="relative z-0 h-screen" />
    </>
  );
};

export default Index;
