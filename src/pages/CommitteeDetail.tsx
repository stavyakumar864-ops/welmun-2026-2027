import { useParams, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

const CommitteeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const committee = committees.find((c) => c.id === id);

  if (!committee) {
    return (
      <PageLayout>
        <h1 className="font-display text-5xl text-primary mb-4">Committee Not Found</h1>
        <Link to="/committees" className="text-primary underline cursor-none">
          ← Back to Committees
        </Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Link
        to="/committees"
        className="text-muted-foreground hover:text-primary transition-colors cursor-none self-start mb-8"
      >
        ← Back to Committees
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-5xl mb-12">
        <img src={committee.logo} alt={committee.name} className="w-40 h-auto shrink-0" />
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-primary mb-3">
            {committee.name}
          </h1>
          {committee.agenda && (
            <p className="text-muted-foreground italic mb-2">
              <span className="text-primary font-medium">Agenda: </span>"{committee.agenda}"
            </p>
          )}
          {committee.freezeDate && (
            <p className="text-muted-foreground">
              <span className="text-primary font-medium">Freeze Date: </span>
              {committee.freezeDate}
            </p>
          )}
          {committee.note && (
            <p className="text-accent font-medium mt-2">{committee.note}</p>
          )}
        </div>
      </div>

      {/* Chair Letter */}
      <div className="w-full max-w-5xl space-y-5 text-muted-foreground leading-relaxed mb-12">
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

      {/* Resource Links */}
      <div className="flex flex-wrap gap-3 mb-12">
        {committee.bgLink && (
          <a
            href={committee.bgLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
          >
            Background Guide
          </a>
        )}
        {committee.matrixLink && (
          <a
            href={committee.matrixLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
          >
            Matrix
          </a>
        )}
        {committee.ropLink && (
          <a
            href={committee.ropLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-none"
          >
            Rules of Procedure
          </a>
        )}
      </div>

      {/* Executive Board */}
      <h2 className="font-display text-2xl text-primary mb-8">Executive Board</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-5xl">
        {committee.eb.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center gap-2">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded"
            />
            <p className="text-primary text-sm font-medium leading-tight">{member.name}</p>
            <p className="text-accent text-xs italic">{member.role}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default CommitteeDetail;
