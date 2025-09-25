import teamMembers from '../../data/team.json';

type TeamMember = {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
};

const members = teamMembers as TeamMember[];

export default function Team() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="homepage-team-heading">
      <div className="container-default">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">Meet the Team</p>
          <h2 id="homepage-team-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Bradford Informed Guidance Leadership
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A boutique, concierge-style brokerage built on relationships, transparency, and relentless client advocacy.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.id}
              className="flex flex-col items-center rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-28 w-28 overflow-hidden rounded-full border border-emerald-100 shadow-md">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm font-medium uppercase tracking-wide text-emerald-600">{member.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
