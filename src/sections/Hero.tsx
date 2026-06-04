import TextOverlay from '../components/TextOverlay';
import VideoBackground from '../components/VideoBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-28 md:px-16" aria-labelledby="hero-title">
      <VideoBackground src="/media/gtr-bg.mp4" poster="/media/profile.png" label="Cinematic rain-soaked car background video" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <TextOverlay
          eyebrow="Sales • Growth • EdTech"
          title="Adhil Ashraf"
          subtitle="Business Development Executive based in Abu Dhabi, helping education brands convert leads into enrolled students through trust-based follow-up, counselling support, and campaign execution."
          cta="Contact Me"
        />
        <div className="relative z-10 hidden justify-end md:flex">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-glow backdrop-blur">
            <img src="/media/profile.png" alt="Portrait of Adhil Ashraf" className="h-[420px] w-[360px] rounded-[1.5rem] object-cover" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
