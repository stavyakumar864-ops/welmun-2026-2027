import { useParams, Link, useNavigate } from "react-router-dom";
import { committees } from "@/data/committees";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

      {/* Montage — fixed video at z-0 + spacer */}
      <CommitteeIntro
        committeeId={committee.id}
        committeeName={committee.shortName}
      />

      {/* Committee info — scrolls over the montage */}
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

        <main className="relative z-10 pt-20 min-h-screen px-[5%] md:px-[8%] lg:px-[10%] py-24 flex flex-col items-center">
          {/* Back + Prev/Next nav */}
          <div className="w-full max-w-6xl flex items-center justify-between mb-10">
            <Link
              to="/committees"
              className="text-muted-foreground hover:text-primary transition-colors cursor-none"
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

          {/* Logo + Committee Name */}
          <div ref={headerRef} className="w-full max-w-6xl flex flex-col items-center mb-12 reveal-section">
            <img
              src={committee.logo}
              alt={committee.name}
              className="w-36 h-auto object-contain mb-4"
            />
            <h1 className="font-display text-3xl md:text-4xl text-primary mb-2 text-center">
              {committee.name}
            </h1>
            {committee.agenda && (
              <p className="text-muted-foreground italic mb-2 text-center">
                Agenda: "{committee.agenda}"
              </p>
            )}
            {committee.freezeDate && (
              <p className="text-muted-foreground mb-4 text-center">
                <span className="text-primary font-medium">Freeze Date: </span>
                {committee.freezeDate}
              </p>
            )}
            {committee.note && (
              <p className="text-accent font-medium mb-4 text-center">{committee.note}</p>
            )}
          </div>

          {/* Chair — Text — Vice Chair layout */}
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-6 lg:gap-10 items-start mb-16">
            {/* Left — Chairperson */}
            {committee.eb[0] && (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={committee.eb[0].image}
                  alt={committee.eb[0].name}
                  className="w-40 h-52 object-cover rounded-sm border-2 border-primary/50 shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                />
                <p className="text-primary font-display text-sm font-medium text-center leading-tight">
                  {committee.eb[0].name}
                </p>
                <p className="text-accent italic text-xs text-center">
                  {committee.eb[0].role}
                </p>
              </div>
            )}

            {/* Center — Chair's Letter + Resource links */}
            <div className="flex flex-col">
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                {committee.chairLetter.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="mt-4">
                  {committee.chairName}
                  <br />
                  {committee.chairRole}, {committee.name}
                  <br />
                  <a
                    href={`mailto:${committee.chairEmail}`}
                    className="text-primary hover:underline cursor-none"
                  >
                    {committee.chairEmail}
                  </a>
                </p>
              </div>

              {/* Resource buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {committee.bgLink && (
                  <a
                    href={committee.bgLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-primary text-primary text-sm text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
                  >
                    Background Guide
                  </a>
                )}
                {committee.matrixLink && (
                  <a
                    href={committee.matrixLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-primary text-primary text-sm text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
                  >
                    Matrix
                  </a>
                )}
                {committee.ropLink && (
                  <a
                    href={committee.ropLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-primary text-primary text-sm text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
                  >
                    Rules of Procedure
                  </a>
                )}
              </div>
            </div>

            {/* Right — Vice Chairperson */}
            {committee.eb[1] ? (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={committee.eb[1].image}
                  alt={committee.eb[1].name}
                  className="w-40 h-52 object-cover rounded-sm border-2 border-primary/50 shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                />
                <p className="text-primary font-display text-sm font-medium text-center leading-tight">
                  {committee.eb[1].name}
                </p>
                <p className="text-accent italic text-xs text-center">
                  {committee.eb[1].role}
                </p>
              </div>
            ) : <div />}
          </div>

          {/* Executive Board — remaining members */}
          {committee.eb.length > 2 && (
            <div className="w-full max-w-6xl">
              <h2 className="font-display text-2xl text-primary mb-8 text-center">Executive Board</h2>
              <div ref={ebRef} className="flex flex-wrap justify-center gap-8">
                {committee.eb.slice(2).map((member, i) => (
                  <div key={member.name} data-reveal={i} className="flex flex-col items-center text-center gap-3 w-36">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-44 object-cover rounded-sm border-2 border-primary/40 shadow-[0_0_12px_hsl(var(--primary)/0.15)]"
                      loading="lazy"
                    />
                    <p className="text-primary text-sm font-display font-medium leading-tight">{member.name}</p>
                    <p className="text-accent text-xs italic">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default CommitteeDetail;
