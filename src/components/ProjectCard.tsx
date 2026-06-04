type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]">
      <div className="mb-5 h-1 w-12 rounded-full bg-orange-400 transition group-hover:w-20" aria-hidden="true" />
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-7 text-white/70">{description}</p>
    </article>
  );
}
