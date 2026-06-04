import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  label: string;
};

export default function VideoBackground({ src, poster, label }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-80"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        aria-label={label}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/75 to-black/55" aria-hidden="true" />
      <button
        type="button"
        onClick={toggleVideo}
        className="absolute bottom-6 right-6 rounded-full border border-white/20 bg-white/90 p-3 text-black shadow-glow transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
        aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}
