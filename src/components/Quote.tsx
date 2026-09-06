import { motion, useReducedMotion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Quote() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <motion.figure
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto max-w-2xl text-center"
      >
        <blockquote className="font-display text-2xl leading-[1.4] text-bone italic sm:text-3xl">
          Nos escucharon antes de proponer nada. La casa terminó pareciéndose
          más a como vivimos que a cualquier plano inicial.
        </blockquote>
        <figcaption className="mt-8 inline-flex items-center gap-3 font-sans text-sm text-bone-dim">
          <span className="h-px w-8 bg-hair" />
          Lucía Bianchi, propietaria de Casa Piedra
        </figcaption>
      </motion.figure>
    </section>
  );
}
