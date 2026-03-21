import { memo } from "react";
import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
  hideParticles?: boolean;
}

const PageLayout = memo(({ children, backgroundImage, hideParticles }: PageLayoutProps) => {
  return (
    <>
      <CustomCursor isIntroVisible={false} />
      {!hideParticles && <ParticleCanvas />}
      <Navbar />
      {backgroundImage && (
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
      )}
      <main className={`pt-32 md:pt-36 min-h-screen px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] xl:px-[12%] pb-16 md:pb-24 flex flex-col items-center ${backgroundImage ? "relative z-10" : ""}`}>
        {children}
      </main>
    </>
  );
});

PageLayout.displayName = "PageLayout";
export default PageLayout;
