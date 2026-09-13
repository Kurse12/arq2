import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../data/images';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '12', label: 'Años de trayectoria' },
  { value: '38', label: 'Proyectos completados' },
  { value: '6', label: 'Provincias' },
];

export function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="estudio" ref={sectionRef} className="bg-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 md:px-10 lg:py-32">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display max-w-md text-4xl leading-[1.1] text-bone sm:text-5xl"
          >
            Diez años proyectando desde el paisaje.
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mt-6 max-w-md text-base leading-relaxed text-bone-dim"
          >
            Trabajamos con equipos reducidos y proyectos limitados por año. Cada
            obra recibe la misma atención: visitamos el terreno, entendemos la
            luz de cada estación y diseñamos hacia adentro, no hacia la fachada.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hair pt-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <p className="font-display text-3xl text-bone">{stat.value}</p>
                <p className="mt-1 text-xs text-bone-dim leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative isolate min-h-[420px] overflow-hidden md:min-h-0">
          <div ref={imgRef} className="absolute inset-0 -top-[8%] h-[116%] will-change-transform">
            <img
              src={images.studioInterior(1280)}
              srcSet={`${images.studioInterior(640)} 640w, ${images.studioInterior(960)} 960w, ${images.studioInterior(1280)} 1280w, ${images.studioInterior(1672)} 1672w`}
              sizes="(min-width: 768px) 50vw, 100vw"
              alt="Interior de living con estructura de madera vista y muro de vidrio hacia el jardín"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
