import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  'Creemos que una casa no es un objeto terminado, sino un lugar que aprende a moverse con quienes la habitan. Cada proyecto nace de escuchar el terreno, la luz y las rutinas de una familia antes de dibujar la primera línea.';

export function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[];

    const ctx = gsap.context(() => {
      gsap.set(words, { opacity: 0.16 });
      gsap.to(words, {
        opacity: 1,
        stagger: 0.04,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 55%',
          scrub: 0.4,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="bg-ink px-6 py-28 md:px-10 md:py-40">
      <div ref={sectionRef} className="mx-auto max-w-4xl">
        <p className="font-display text-2xl leading-[1.35] text-bone sm:text-3xl md:text-4xl">
          {TEXT.split(' ').map((word, i) => (
            <span
              key={`${word}-${i}`}
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className={reduce ? 'opacity-100' : ''}
              style={{ marginRight: '0.28em', display: 'inline-block' }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
