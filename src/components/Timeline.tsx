type TimelineItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-7">
      {items.map((item) => (
        <article key={`${item.company}-${item.role}`} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-1 font-semibold text-orange-300">{item.company}</p>
              <p className="text-sm text-white/55">{item.location}</p>
            </div>
            <p className="w-fit rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">{item.period}</p>
          </div>
          <ul className="mt-5 space-y-3 text-white/75">
            {item.points.map((point) => (
              <li key={point} className="leading-7"><span className="mr-2 text-orange-300">•</span>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
