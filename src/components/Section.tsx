import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="bg-[#050816] px-6 py-24 text-white md:px-16" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
