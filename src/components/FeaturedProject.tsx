import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../data/images';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.16, 1, 0.3, 1] as const;

export function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.25 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={sectionRef} className="relative isolate h-[100dvh] overflow-hidden bg-ink">
      <img
        ref={imgRef}
        src={images.featuredInterior(1280)}
        srcSet={`${images.featuredInterior(640)} 640w, ${images.featuredInterior(960)} 960w, ${images.featuredInterior(1280)} 1280w, ${images.featuredInterior(1672)} 1672w`}
        sizes="100vw"
        alt="Interior de Casa Horizonte, living con muro de hormigón y vidrio hacia el jardín"
        loading="lazy"
        className="h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/30" />

      <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-xl"
        >
          <p className="font-sans text-xs tracking-[0.15em] text-bone-dim uppercase">
            Casa Horizonte, interior
          </p>
          <p className="font-display mt-4 text-2xl leading-[1.35] text-bone sm:text-3xl">
            La misma casa que se ve cerrada hacia la calle se abre por completo
            hacia el jardín trasero, donde vive la familia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
