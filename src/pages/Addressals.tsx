import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import secGenPhoto from "@/assets/sec-gen.png";

interface Addressal {
  label: string;
  title: string;
  name: string;
  role: string;
  photo: string;
  quote: { text: string; author: string };
  body: string[];
  closing?: string;
  signature: string;
}

const addressals: Addressal[] = [
  {
    label: "From the Desk of",
    title: "Principal's Message",
    name: "Ms. Sangeeta Kain",
    role: "Principal, Welham Boys' School",
    photo:
      "https://static.wixstatic.com/media/9bbbe8_794ddc299c444cddab7caf98ad6d1e16~mv2.jpg/v1/crop/x_0,y_55,w_576,h_603/fill/w_268,h_281,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Principal's%20Photo%20for%20WELMUM%2022_JPG.jpg",
    quote: {
      text: "In all chaos there is a cosmos, in all disorder a secret order.",
      author: "Carl Jung",
    },
    body: [
      "The gavel falls for the twelfth time and on behalf of Welham Boys' School, I warmly welcome each one of you to WELMUN 2026.",
      "With every passing year, this conference has matured in its ambition and deepened in its purpose. What began as an exercise in academic diplomacy has evolved into a space where young delegates discover the weight of real-world responsibility and the courage it demands.",
      "This year's theme, Ordo ab Chao — \"Order from Chaos\" — speaks to something far greater than geopolitics. It speaks to character. The world our delegates will inherit is one of extraordinary complexity, and it will not yield to hesitation. It rewards those who can hold their ground under pressure, reason through disagreement, and build consensus where none seemed possible. The committees this year have been curated with precisely that challenge in mind.",
      "To every delegate, I say this: bring your conviction, sharpen your arguments, and above all, listen as keenly as you speak. The measure of a great diplomat has always been wisdom, not just wit.",
      "May WELMUN 2026 be a conference worthy of the tradition that precedes it. We look forward to hosting you at Welham Boys' School.",
    ],
    closing: "Best Regards,",
    signature: "Sangeeta Kain",
  },
  {
    label: "From the Desk of",
    title: "Secretary-General's Message",
    name: "Ahan Sparsh",
    role: "Secretary-General, WELMUN 2026",
    photo: secGenPhoto,
    quote: {
      text: "If you look hard enough, chaos turns into order the way letters turn into words.",
      author: "Patricia McCormick",
    },
    body: [
      "The first thought that came to my mind when I sat down to write this was a simple one: \"why does chaos bother us so much?\" Perhaps it is not the disorder itself, but the feeling of being out of control, of not knowing what comes next. We are taught, directly and indirectly, to seek order, to trust certainty, and to believe that order is something permanent and dependable.",
      "The world seldom works that way.",
      "Order is, more often than not, temporary. Treaties falter, ceasefires are broken, crimes are committed everyday; the fact is, the world is more criminal than it is civilized. Order shifts, and sometimes collapses entirely under the weight of conflict and competing perspectives. In those moments, chaos emerges not as the presence of tension, but as the absence of order. This may seem like a small distinction, but it reveals the true purpose of every international organisation: reducing tension only treats the symptoms. Order is the ultimate goal.",
      "The theme of this year, \"Order out of Chaos,\" is not a call to eliminate tension. It is a recognition that tension is where the work begins, because order never stands when it's one sided. Order is never achieved from draft resolutions passed without debate, from disagreements left unspoken, from any imposition of power and authority by one over another. It is built gradually, and with intention, through honest conversation and the willingness to sit with ideas that challenge our own. Everything else is, at best, tokenistic.",
      "That is the spirit I look forward to bringing to this conference as your Secretary-General.",
      "The days ahead will be full of moments where things do not go as planned. Arguments may feel unresolved, consensus may seem out of reach, and the path forward in committee may be unclear. In those moments, your approach will matter more than your preparation. Listening without immediately conceding, questioning without dismissing, and adapting without losing conviction: these are the qualities that define not just strong delegates, but thoughtful people.",
      "WELMUN has never simply been a conference. It is a space where ambition, perspective, and the willingness to negotiate come together. This year will be no different. From the urgency of national debates to the complexity of international decision-making, every committee has been designed to challenge you, not just in what you argue, but in how you think.",
      "None of this would have been possible without the dedication of the Secretariat, the Executive Board, and the support of our institution. Their work has been guided by a single purpose: to make this conference both challenging and meaningful.",
      "You will walk into committee with your ideas, your strategies, and your voice. What you build with them is entirely up to you.",
      "Order, after all, is never found. It is made, especially in times of chaos.",
    ],
    closing: "This WELMUN, let the power of love overcome the love for power.",
    signature: "Ahan Sparsh",
  },
];

const AddressalLetter = ({ data, index }: { data: Addressal; index: number }) => (
  <motion.article
    className="w-full max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Label + portrait header */}
    <div className="flex flex-col items-center text-center mb-10">
      <span className="font-display italic text-xs md:text-sm text-blue-accent tracking-[5px] uppercase mb-3">
        {data.label}
      </span>
      <h2 className="font-display text-3xl md:text-5xl text-primary tracking-wide mb-8">
        {data.title}
      </h2>
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-blue-accent/20 blur-2xl" />
        <img
          src={data.photo}
          alt={data.name}
          className="relative w-44 h-44 md:w-52 md:h-52 object-cover rounded-full border-2 border-primary/30 shadow-2xl"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
      <p className="font-display text-xl text-primary mt-5">{data.name}</p>
      <p className="text-muted-foreground text-sm italic">{data.role}</p>
      <div className="gold-divider mx-auto" style={{ margin: "24px auto" }} />
    </div>

    {/* Pullquote */}
    <figure className="relative mb-12 mx-auto max-w-2xl px-6">
      <Quote
        className="absolute -top-3 -left-2 w-10 h-10 text-blue-accent/30"
        strokeWidth={1.5}
      />
      <blockquote className="font-display italic text-xl md:text-2xl text-primary/90 leading-relaxed text-center">
        {data.quote.text}
      </blockquote>
      <figcaption className="text-center text-muted-foreground text-xs tracking-[3px] uppercase mt-4">
        — {data.quote.author}
      </figcaption>
    </figure>

    {/* Body */}
    <div className="space-y-5 text-muted-foreground leading-[1.85] text-[15px] md:text-base text-center md:text-left">
      {data.body.map((para, i) => (
        <p key={i} className={i === 0 ? "md:first-letter:font-display md:first-letter:text-5xl md:first-letter:float-left md:first-letter:mr-2 md:first-letter:leading-[0.9] md:first-letter:text-primary" : ""}>
          {para}
        </p>
      ))}
    </div>

    {/* Signature */}
    <div className="mt-10 pt-6 border-t border-primary/15 text-center md:text-left">
      {data.closing && (
        <p className="text-primary/90 italic mb-3">{data.closing}</p>
      )}
      <p className="font-display text-2xl text-primary tracking-wide">{data.signature}</p>
      <p className="text-muted-foreground text-sm mt-1 italic">{data.role}</p>
    </div>
  </motion.article>
);

const Addressals = () => {
  return (
    <PageLayout backgroundImage="/images/addressals-bg.jpg">
      <motion.h1
        className="font-display text-4xl md:text-6xl text-primary text-center tracking-wide"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Addressals
      </motion.h1>
      <div className="gold-divider mx-auto" />
      <p className="text-muted-foreground text-center max-w-2xl mt-2 mb-16 text-sm md:text-base italic">
        Letters of welcome to WELMUN 2026.
      </p>

      <div className="w-full space-y-24 md:space-y-32">
        {addressals.map((a, i) => (
          <AddressalLetter key={a.title} data={a} index={i} />
        ))}
      </div>
    </PageLayout>
  );
};

export default Addressals;
