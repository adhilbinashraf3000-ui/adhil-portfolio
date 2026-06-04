export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span key={skill} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80">
          {skill}
        </span>
      ))}
    </div>
  );
}
