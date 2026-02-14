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
      <ScheduleBanner />
      <div className="relative z-10">
        <CustomCursor isIntroVisible={introVisible} />
        <ParticleCanvas />
        {introVisible && <IntroScreen onEnter={handleEnter} />}
        <Navbar />
        <div className="relative bg-background">
          <HeroSection />
          <div className="relative">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/images/home-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-background/80" />
            </div>
            <div className="relative z-10">
              <SecretariatSection />
            </div>
          </div>
        </div>
        {/* Spacer to reveal the fixed ScheduleBanner behind */}
        <div className="h-screen" />
      </div>
    </>
  );
};

export default Index;
