import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <CustomCursor isIntroVisible={false} />
      <ParticleCanvas />
      <Navbar />
      <main className="pt-20 min-h-screen px-[10%] py-24 flex flex-col items-center">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
