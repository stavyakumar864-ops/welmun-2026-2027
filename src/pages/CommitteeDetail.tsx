import { useParams, Link, useNavigate } from "react-router-dom";
import { committees } from "@/data/committees";
import { ChevronLeft, ChevronRight, FileText, Grid3X3, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import CommitteeIntro from "@/components/CommitteeIntro";
import Navbar from "@/components/Navbar";
import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";

const CommitteeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentIndex = committees.findIndex((c) => c.id === id);
  const committee = currentIndex !== -1 ? committees[currentIndex] : null;
  const prevCommittee = currentIndex > 0 ? committees[currentIndex - 1] : null;
  const nextCommittee = currentIndex < committees.length - 1 ? committees[currentIndex + 1] : null;

  const headerRef = useScrollReveal<HTMLDivElement>(0.1);
  const ebRef = useStaggerReveal<HTMLDivElement>(100);

  if (!committee) {
    return (
      <div>
        <CustomCursor isIntroVisible={false} />
        <Navbar />
        <main className="pt-20 min-h-screen px-[5%] md:px-[8%] lg:px-[10%] py-24 flex flex-col items-center">
          <h1 className="font-display text-5xl text-primary mb-4">Committee Not Found</h1>
          <Link to="/committees" className="text-primary underline cursor-none">
            ← Back to Committees
          </Link>
        </main>
      </div>
    );
  }

  return (
    <>
      <CustomCursor isIntroVisible={false} />
      <ParticleCanvas />
      <Navbar />

      <CommitteeIntro
        committeeId={committee.id}
        committeeName={committee.shortName}
      />

      <div className="relative z-[2]" style={{ clipPath: "inset(0)" }}>
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: "url(/images/committees-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <main className="relative z-10 pt-20 min-h-screen px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] py-16 md:py-24 flex flex-col items-center">
          {/* Navigation Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between mb-12">
            <Link
              to="/committees"
              className="text-muted-foreground hover:text-primary transition-colors cursor-none text-sm"
            >
              ← Back to Committees
            </Link>
            <div className="flex gap-4">
              {prevCommittee ? (
                <button
                  onClick={() => navigate(`/committees/${prevCommittee.id}`)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-none"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {prevCommittee.shortName}
                </button>
              ) : <span />}
              {nextCommittee ? (
                <button
                  onClick={() => navigate(`/committees/${nextCommittee.id}`)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-none"
                >
                  {nextCommittee.shortName}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : <span />}
            </div>
          </div>

          {/* Hero: Logo + Committee Name + Agenda */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-5xl text-center mb-14"
          >
            <img
              src={committee.logo}
              alt={committee.name}
              className="w-24 h-24 md:w-28 md:h-28 object-contain mx-auto mb-5"
            />
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-3 tracking-wide">
              {committee.name}
            </h1>
            {committee.agenda && (
              <p className="text-muted-foreground italic text-base md:text-lg max-w-3xl mx-auto">
                "{committee.agenda}"
              </p>
            )}
            {committee.freezeDate && (
              <p className="text-muted-foreground text-sm mt-3">
                <span className="text-primary font-medium">Freeze Date:</span> {committee.freezeDate}
              </p>
            )}
            {committee.note && (
              <p className="text-accent font-medium text-sm mt-2">{committee.note}</p>
            )}
          </motion.div>

          {/* Main Content: Chair + Letter side by side */}
          <div ref={headerRef} className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start mb-20 reveal-section">
            {/* Left — Chair Photo + Resources */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-5"
            >
              {/* Chair Photo */}
              {committee.eb[0] && (
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="w-48 h-64 lg:w-56 lg:h-72 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
                    {committee.eb[0].image ? (
                      <img
                        src={committee.eb[0].image}
                        alt={committee.eb[0].name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                        <span className="text-muted-foreground/60 font-display text-xs">TBA</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-display text-base font-semibold leading-tight">
                      {committee.eb[0].name}
                    </p>
                    <p className="text-accent italic text-sm mt-0.5">
                      {committee.eb[0].role}
                    </p>
                  </div>
                </div>
              )}

              {/* Resource Buttons */}
              <div className="flex flex-col gap-2.5 w-full mt-3">
                {committee.bgLink && (
                  <a
                    href={committee.bgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-none"
                  >
                    <FileText className="w-4 h-4" />
                    Background Guide
                  </a>
                )}
                {committee.matrixLink && (
                  <a
                    href={committee.matrixLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-none"
                  >
                    <Grid3X3 className="w-4 h-4" />
                    Matrix
                  </a>
                )}
                {committee.ropLink && (
                  <a
                    href={committee.ropLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary/30 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-none"
                  >
                    <BookOpen className="w-4 h-4" />
                    Rules of Procedure
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right — Chair's Letter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col"
            >
              <h2 className="font-display text-xl text-primary mb-5 tracking-wide">
                Letter from the Chair
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
                {committee.chairLetter.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-primary/15">
                <p className="text-primary font-display font-semibold">{committee.chairName}</p>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {committee.chairRole}, {committee.name}
                </p>
                <a
                  href={`mailto:${committee.chairEmail}`}
                  className="text-primary text-sm hover:underline cursor-none mt-1 inline-block"
                >
                  {committee.chairEmail}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Executive Board */}
          {committee.eb.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-5xl"
            >
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl text-primary tracking-wide">
                  Executive Board
                </h2>
                <div
                  className="w-16 h-[2px] mx-auto mt-3"
                  style={{ background: "linear-gradient(to right, transparent, hsl(var(--gold)), transparent)" }}
                />
              </div>
              <div ref={ebRef} className="flex flex-wrap justify-center gap-8">
                {committee.eb.map((member, i) => (
                  <div
                    key={`${member.role}-${i}`}
                    data-reveal={i}
                    className="flex flex-col items-center text-center gap-2.5 w-32"
                  >
                    <div className="w-32 h-40 rounded-xl border border-primary/20 bg-muted/30 overflow-hidden shadow-md">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground/60 font-display text-xs">TBA</span>
                        </div>
                      )}
                    </div>
                    <p className="text-primary text-sm font-semibold leading-tight">{member.name}</p>
                    <p className="text-accent text-xs italic">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </>
  );
};

export default CommitteeDetail;
