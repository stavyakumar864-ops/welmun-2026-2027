import PageLayout from "@/components/PageLayout";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import secGenPhoto from "@/assets/sec-gen.png";

const Addressals = () => {
  const principalRef = useScrollReveal<HTMLElement>(0.1);
  const sgRef = useScrollReveal<HTMLElement>(0.1);

  return (
    <PageLayout backgroundImage="/images/addressals-bg.jpg">
      {/* Principal's Message */}
      <section ref={principalRef} className="w-full max-w-5xl mb-20 reveal-section">
        <h1 className="font-display text-4xl md:text-5xl text-primary mb-8">Principal's Message</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              It gives me immense pleasure to welcome you to the eleventh edition of the Welham Boys' School Model United Nations Conference – WELMUN 2025. Over the years, WELMUN has grown to become a platform that not only promotes global awareness and diplomacy among students but also nurtures values of empathy, leadership, and dialogue.
            </p>
            <p>
              The theme this year, Orbis Vox – "Voice of the World" – highlights the power of dialogue in shaping the world we live in. In these three days of deliberation, we hope to see young minds engage in meaningful debate, represent diverse perspectives, and seek solutions that transcend borders and differences. At WELMUN, every delegate has the opportunity to be heard and to make a difference.
            </p>
            <p>
              Each committee has been carefully curated to challenge delegates intellectually and inspire them to think critically about pressing global issues—past, present, and future.
            </p>
            <p>
              I wish all participants a thought-provoking and enriching experience. May your voices echo with the conviction of change and cooperation.
            </p>
            <p>We look forward to hosting you at Welham Boys' School for WELMUN 2025.</p>
            <p className="mt-4">
              Warm regards<br />
              Sangeeta Kain<br />
              Principal
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <img
              src="https://static.wixstatic.com/media/9bbbe8_794ddc299c444cddab7caf98ad6d1e16~mv2.jpg/v1/crop/x_0,y_55,w_576,h_603/fill/w_268,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Principal's%20Photo%20for%20WELMUM%2022_JPG.jpg"
              alt="Ms. Sangeeta Kain"
              className="w-56 h-56 object-cover rounded-full border-2 border-primary/30"
              loading="lazy"
            />
            <h3 className="font-display text-xl text-primary font-bold">Ms. Sangeeta Kain</h3>
            <p className="text-primary italic">Principal</p>
          </div>
        </div>
      </section>

      {/* Secretary General's Message */}
      <section ref={sgRef} className="w-full max-w-5xl reveal-section">
        <h1 className="font-display text-4xl md:text-5xl text-primary mb-8">Secretary General's Message</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              As I sit here to write this message, I find myself overwhelmed with a myriad of emotions — some joyous, some melancholic. Life, much like these emotions, is a mosaic of moments, each with its own distinct hue. Some bring happiness, while others test our resilience. But what truly defines success is the unwavering determination to persevere, no matter the odds. The world today stands as a testament to this truth. With turmoil and uncertainty clouding our skies, countless lives have been disrupted, leaving us in a state of unprecedented challenge. Yet, in the face of adversity, hope and perseverance shine the brightest.
            </p>
            <p>
              Power, when wielded wisely, is a force for progress. This reminds me of a Secretary-General's address I read in ninth grade, which stated, "When the power of love overcomes the love for power, the world will know peace." Many dismiss this as an unattainable utopia, but I beg to differ. If there is one universal truth, it is that change is inevitable. And I believe, with every fiber of my being, that our generation not only possesses the potential but also the resolve to be the harbingers of that change.
            </p>
            <p>
              A little about myself — I am Ahan Sparsh, a firm believer in the power of perseverance and purpose. I am someone from a humble background, studies the art of humble politics and tries to live a not so humble life, and it hasn't always been kind. There have been days when the weight of the world felt too heavy to bear, moments when silence echoed louder than words, and nights spent wondering if things would ever truly get better. I have seen dreams crumble, relationships falter, and hope flicker in the darkest corners of my mind. But even in those moments, I held on. Not because I had to — but because I chose to.
            </p>
            <p>
              And that's what I want WELMUN to mean to you. A space where even if the gods are against you, you don't go down without a fight. A place where resilience isn't a virtue — it's a way of life. A platform where your voice matters, and where disagreement is not destruction, but dialogue.
            </p>
            <p>
              This year, WELMUN will host some of the most dynamic and nuanced committees to date. From the tension-laced halls of the Lok Sabha and the strategic corridors of UNSC, to the diplomatic delicacy of DISEC and the economical firepower of ECOSOC — this is not just a conference. This is a battleground of ideas. A place where you'll learn to handle pressure, think fast, argue better, and most importantly — grow.
            </p>
            <p>
              This experience will challenge your mind, test your patience, and shape your character. It will offer you allies, adversaries, mentors and moments that will live far beyond the three days of committee.
            </p>
            <p>
              And none of this would have been possible without the exceptional team that has brought this vision to life. Standing beside me are Shreyas Shah, in the capacity of Director-General, and Samarth Agrawal and Divij Gupta as the Under Secretary-Generals, along with a hardworking Executive Board and the brilliant teachers of our school. Together, we have poured in sleepless nights, unwavering passion, and a whole lot of heart into this conference. And we are not just your Secretariat — we are your biggest supporters.
            </p>
            <p className="mt-2 font-medium text-primary">
              Welcome to WELMUN's 11th edition<br />
              Let your voice echo. Let your truth matter. Let the world listen.
            </p>
            <p className="mt-4">
              Ahan Sparsh<br />
              Secretary-General,<br />
              Welham Boys' School Model United Nations Conference
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <img
              src={secGenPhoto}
              alt="Ahan Sparsh"
              className="w-56 h-56 object-cover rounded-full border-2 border-primary/30"
              loading="lazy"
            />
            <h3 className="font-display text-xl text-primary font-bold">Ahan Sparsh</h3>
            <p className="text-primary italic">Secretary-General</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Addressals;
