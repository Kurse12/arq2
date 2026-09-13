import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsGallery() {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    if (reduce || !wrapRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;

      const build = () => {
        const getDistance = () => track.scrollWidth - window.innerWidth;

        const trigger = ScrollTrigger.create({
          trigger: wrapRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          animation: gsap.to(track, { x: () => -getDistance(), ease: 'none' }),
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
            const idx = Math.min(
              projects.length - 1,
              Math.round(self.progress * (projects.length - 1)),
            );
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActive(idx);
            }
          },
        });

        return trigger;
      };

      const trigger = build();
      return () => trigger.kill();
    }, wrapRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="proyectos"
      ref={wrapRef}
      className="relative isolate overflow-hidden bg-ink"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 pt-8 md:px-10 md:pt-10">
        <p className="font-sans text-[11px] tracking-[0.24em] text-bone-dim uppercase">
          Proyectos
        </p>
        <p className="font-sans text-[11px] tracking-[0.15em] text-bone-dim tabular-nums">
          {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </p>
      </div>

      <div
        ref={trackRef}
        className={`flex h-[100dvh] ${reduce ? 'w-full flex-col overflow-y-auto snap-y snap-mandatory' : 'w-max'}`}
      >
        {projects.map((project) => (
          <article
            key={project.index}
            className={`relative isolate h-[100dvh] shrink-0 ${reduce ? 'w-full snap-start' : 'w-screen'}`}
          >
            <img
              src={project.image(1280)}
              srcSet={`${project.image(640)} 640w, ${project.image(960)} 960w, ${project.image(1280)} 1280w, ${project.image(1672)} 1672w`}
              sizes="100vw"
              alt={`${project.name}, ${project.type} en ${project.location}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1440px] px-6 pb-12 md:px-10 md:pb-16">
              <p className="font-sans text-xs tracking-[0.15em] text-bone-dim uppercase">
                {project.location} &middot; {project.year}
              </p>
              <h3 className="font-display mt-2 text-4xl text-bone sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-1 font-sans text-sm text-bone-dim">{project.type}</p>
            </div>
          </article>
        ))}
      </div>

      {!reduce && (
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto h-[2px] w-full max-w-[1440px] bg-hair px-6 md:px-10">
          <div ref={progressRef} className="h-full w-0 bg-bone" />
        </div>
      )}
    </section>
  );
}
