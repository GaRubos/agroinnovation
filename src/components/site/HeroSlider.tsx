import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Slide = { src: string; alt: string };

const INTERVAL_MS = 6000;

/** Full-bleed crossfading background slides for the home hero. */
export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  return (
    <>
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={i === index ? s.alt : ""}
          aria-hidden={i !== index}
          width={1920}
          height={1088}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 -z-20 size-full object-cover object-[70%_center] transition-[opacity,transform] duration-[1400ms] ease-out",
            i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
          )}
        />
      ))}

      {slides.length > 1 && (
        <div
          className="absolute bottom-5 right-5 z-10 flex gap-2 lg:bottom-8 lg:right-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Слайд ${i + 1}`}
              aria-current={i === index}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  "block h-1 rounded-full transition-all duration-500",
                  i === index ? "w-10 bg-brand-bright" : "w-5 bg-forest-foreground/40 hover:bg-forest-foreground/70",
                )}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
