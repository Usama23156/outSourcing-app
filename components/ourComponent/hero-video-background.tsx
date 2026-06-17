"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeroVideoBackgroundProps {
  src?: string;
  poster?: string;
}

export function HeroVideoBackground({
  src = "/hero-background-video.mp4",
  poster = "/hero-video-poster.jpg",
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playVideo();
  }, [prefersReducedMotion]);

  const togglePlayback = async () => {
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
    <div className="absolute inset-0">
      <div className="pointer-events-none absolute inset-0">
        {prefersReducedMotion ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${poster})` }}
            aria-hidden="true"
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
            aria-hidden="true"
          >
            <source src={src} type="video/mp4" />
          </video>
        )}

        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,47,0.92)_0%,rgba(10,26,47,0.78)_40%,rgba(10,26,47,0.45)_65%,rgba(10,26,47,0.25)_100%),linear-gradient(180deg,rgba(10,26,47,0.35)_0%,transparent_40%,rgba(10,26,47,0.55)_100%)]"
          aria-hidden="true"
        />
      </div>

      {!prefersReducedMotion ? (
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute right-6 bottom-6 z-20 flex size-11 items-center justify-center rounded-full border border-white/25 bg-[#0a1a2f]/60 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-[#0a1a2f]/80 sm:right-8 lg:right-10"
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? (
            <Pause className="size-4" aria-hidden="true" />
          ) : (
            <Play className="size-4" aria-hidden="true" />
          )}
        </button>
      ) : null}
    </div>
  );
}
