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
              It gives me immense pleasure to welcome you to the eleventh edition of the Welham Boys' School Model United Nations Conference – WELMUN 2026. Over the years, WELMUN has grown to become a platform that not only promotes global awareness and diplomacy among students but also nurtures values of empathy, leadership, and dialogue.
            </p>
            <p>
              The theme this year, Ordo ab Chao – "Order from Chaos" – highlights the power of dialogue in shaping the world we live in. In these three days of deliberation, we hope to see young minds engage in meaningful debate, represent diverse perspectives, and seek solutions that transcend borders and differences. At WELMUN, every delegate has the opportunity to be heard and to make a difference.
            </p>
            <p>
              Each committee has been carefully curated to challenge delegates intellectually and inspire them to think critically about pressing global issues—past, present, and future.
            </p>
            <p>
              I wish all participants a thought-provoking and enriching experience. May your voices echo with the conviction of change and cooperation.
            </p>
            <p>We look forward to hosting you at Welham Boys' School for WELMUN 2026.</p>
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
            <blockquote className="border-l-2 border-primary/40 pl-4 italic text-primary/90">
              "If you look hard enough, chaos turns into order the way letters turn into words."
              <br />
              <span className="not-italic text-sm">— Patricia McCormick</span>
            </blockquote>
            <p>
              The first thought that came to my mind when I sat down to write this was a simple one: "why does chaos bother us so much?" Perhaps it is not the disorder itself, but the feeling of being out of control, of not knowing what comes next. We are taught, directly and indirectly, to seek order, to trust certainty, and to believe that order is something permanent and dependable.
            </p>
            <p>The world seldom works that way.</p>
            <p>
              Order is, more often than not, temporary. Treaties falter, ceasefires are broken, crimes are committed everyday; the fact is, the world is more criminal than it is civilized. Order shifts, and sometimes collapses entirely under the weight of conflict and competing perspectives. In those moments, chaos emerges not as the presence of tension, but as the absence of order. This may seem like a small distinction, but it reveals the true purpose of every international organisation: reducing tension only treats the symptoms. Order is the ultimate goal.
            </p>
            <p>
              The theme of this year, "Order out of Chaos," is not a call to eliminate tension. It is a recognition that tension is where the work begins, because order never stands when it's one sided. Order is never achieved from draft resolutions passed without debate, from disagreements left unspoken, from any imposition of power and authority by one over another. It is built gradually, and with intention, through honest conversation and the willingness to sit with ideas that challenge our own. Everything else is, at best, tokenistic.
            </p>
            <p>That is the spirit I look forward to bringing to this conference as your Secretary-General.</p>
            <p>
              The days ahead will be full of moments where things do not go as planned. Arguments may feel unresolved, consensus may seem out of reach, and the path forward in committee may be unclear. In those moments, your approach will matter more than your preparation. Listening without immediately conceding, questioning without dismissing, and adapting without losing conviction: these are the qualities that define not just strong delegates, but thoughtful people.
            </p>
            <p>
              WELMUN has never simply been a conference. It is a space where ambition, perspective, and the willingness to negotiate come together. This year will be no different. From the urgency of national debates to the complexity of international decision-making, every committee has been designed to challenge you, not just in what you argue, but in how you think.
            </p>
            <p>
              None of this would have been possible without the dedication of the Secretariat, the Executive Board, and the support of our institution. Their work has been guided by a single purpose: to make this conference both challenging and meaningful.
            </p>
            <p>
              You will walk into committee with your ideas, your strategies, and your voice. What you build with them is entirely up to you.
            </p>
            <p>Order, after all, is never found. It is made, especially in times of chaos.</p>
            <p className="mt-2 font-medium text-primary">
              This WELMUN, let the power of love overcome the love for power.
            </p>
            <p className="mt-4">
              Ahan Sparsh<br />
              Secretary-General
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
