import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface PortraitCardProps {
  member: { role: string; name: string; img: string | null };
  size?: "lg" | "md" | "sm";
  delay?: number;
}

const PortraitCard = ({ member, size = "md", delay = 0 }: PortraitCardProps) => {
  const dims =
    size === "lg"
      ? "w-56 sm:w-64 md:w-72"
      : size === "md"
      ? "w-40 sm:w-44 md:w-52"
      : "w-36 sm:w-40 md:w-44";

  return (
    <motion.div
      className={`${dims} flex flex-col items-center text-center`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-xl bg-blue-accent/15 blur-2xl scale-95" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-primary/20 bg-secondary/40 shadow-2xl group">
          {member.img ? (
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/60">
              <span className="font-display text-primary/40 text-xs tracking-[3px] uppercase">
                Portrait
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="text-blue-accent text-[10px] md:text-[11px] tracking-[3px] uppercase mt-4 md:mt-5 leading-tight">
        {member.role}
      </span>
      <h3
        className={`font-display text-primary leading-tight mt-1.5 ${
          size === "lg" ? "text-xl sm:text-2xl md:text-3xl" : "text-sm sm:text-base md:text-lg"
        }`}
      >
        {member.name}
      </h3>
    </motion.div>
  );
};

export default PortraitCard;
