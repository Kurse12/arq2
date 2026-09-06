import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { images } from '../data/images';
import { projects } from '../data/projects';
import { useScrollTo } from '../hooks/useScrollTo';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const scrollTo = useScrollTo();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce || !sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  const project = projects[active];
  const cycle = (dir: 1 | -1) => setActive((v) => (v + dir + projects.length) % projects.length);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-ink"
    >
      <div ref={imgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={images.heroExterior(2000)}
          srcSet={`${images.heroExterior(1000)} 1000w, ${images.heroExterior(1600)} 1600w, ${images.heroExterior(2400)} 2400w`}
          sizes="100vw"
          alt="Vivienda contemporánea al atardecer, hormigón y vidrio integrados al paisaje"
          className="h-full w-full scale-105 object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/20" />
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-24 md:px-10">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-6 font-sans text-[11px] tracking-[0.24em] text-bone-dim uppercase"
        >
          Arquitectura contemporánea
        </motion.p>

        <h1 className="font-display max-w-3xl text-[2.75rem] leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="block"
          >
            Espacios para
          </motion.span>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            className="block pb-1 italic leading-[1.1]"
          >
            habitar distinto.
          </motion.span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
          className="mt-6 max-w-md text-base text-bone-dim"
        >
          Diseñamos arquitectura que conecta con tu forma de vivir.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.52 }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={() => scrollTo('#proyectos')}
            className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 font-sans text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explorar proyectos
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] border-t border-hair px-6 py-5 md:px-10">
        <div className="flex items-center justify-between gap-4">
          <p className="hidden font-sans text-sm text-bone-dim sm:block">
            Diseño consciente. Espacios únicos.
          </p>

          <div className="flex items-center gap-4 font-sans text-xs text-bone-dim">
            <motion.div
              key={project.index}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="text-right sm:text-left"
            >
              <span className="tracking-[0.15em] uppercase">
                {project.index} / {project.name.toUpperCase()}
              </span>
              <span className="block text-bone-dim/70">{project.location}</span>
            </motion.div>

            <div className="flex items-center gap-2 pl-2">
              <button
                type="button"
                aria-label="Proyecto anterior"
                onClick={() => cycle(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hair text-bone transition-colors hover:bg-white/10"
              >
                <ArrowLeft size={14} weight="light" />
              </button>
              <button
                type="button"
                aria-label="Proyecto siguiente"
                onClick={() => cycle(1)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-hair text-bone transition-colors hover:bg-white/10"
              >
                <ArrowRight size={14} weight="light" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
