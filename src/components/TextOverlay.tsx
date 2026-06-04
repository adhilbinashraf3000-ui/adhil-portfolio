type TextOverlayProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cta?: string;
};

export default function TextOverlay({ eyebrow, title, subtitle, cta }: TextOverlayProps) {
  return (
    <div className="relative z-10 max-w-4xl text-white">
      {eyebrow && <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">{eyebrow}</p>}
      <h1 id="hero-title" className="text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">{subtitle}</p>
      {cta && (
        <a href="#contact" className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3 font-bold text-black shadow-glow transition hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-300">
          {cta}
        </a>
      )}
    </div>
  );
}
