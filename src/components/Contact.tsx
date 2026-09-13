import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { images } from '../data/images';

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section id="contacto" ref={sectionRef} className="relative isolate overflow-hidden bg-ink">
      <div ref={imgRef} className="absolute inset-0 -top-[10%] -z-10 h-[120%] will-change-transform">
        <img
          src={images.contactInterior(1280)}
          srcSet={`${images.contactInterior(640)} 640w, ${images.contactInterior(960)} 960w, ${images.contactInterior(1280)} 1280w, ${images.contactInterior(1672)} 1672w`}
          sizes="100vw"
          alt="Dormitorio principal con vista al jardín a través de puertas vidriadas"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/78" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-10 md:py-40">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-sans text-[11px] tracking-[0.24em] text-bone-dim uppercase"
        >
          Contacto
        </motion.p>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
          className="font-display mt-6 max-w-2xl text-4xl leading-[1.1] text-bone sm:text-6xl"
        >
          Hablemos de tu proyecto.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
          className="mt-6 max-w-md text-base text-bone-dim"
        >
          Tomamos un número limitado de proyectos por año para dedicarles el
          tiempo que necesitan. Contanos dónde estás construyendo.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
          className="mt-10"
        >
          <a
            href="mailto:hola@estudioarquitectura.com.ar"
            className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 font-sans text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
          >
            Iniciar conversación
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hair pt-8 sm:flex-row sm:items-center sm:gap-10">
          <a
            href="mailto:hola@estudioarquitectura.com.ar"
            className="inline-flex items-center gap-2 font-sans text-sm text-bone-dim transition-colors hover:text-bone"
          >
            <EnvelopeSimple size={16} weight="light" />
            hola@estudioarquitectura.com.ar
          </a>
          <a
            href="tel:+541148765432"
            className="inline-flex items-center gap-2 font-sans text-sm text-bone-dim transition-colors hover:text-bone"
          >
            <Phone size={16} weight="light" />
            +54 11 4876 5432
          </a>
        </div>
      </div>
    </section>
  );
}
