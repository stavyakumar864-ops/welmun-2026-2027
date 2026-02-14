import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { committees } from "@/data/committees";

const Committees = () => (
  <PageLayout>
    <h1 className="font-display text-5xl text-primary mb-4 tracking-[6px] uppercase">
      Committees
    </h1>
    <div className="gold-divider mb-16" />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
      {committees.map((c) => (
        <Link
          key={c.id}
          to={`/committees/${c.id}`}
          className="group relative aspect-[4/3] overflow-hidden cursor-none block"
        >
          <img
            src={c.cardImage}
            alt={c.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-display text-xl md:text-2xl text-primary text-center px-4 tracking-wider">
              {c.shortName}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  </PageLayout>
);

export default Committees;
