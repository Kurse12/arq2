import { motion, useReducedMotion } from 'motion/react';
import { images } from '../data/images';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Approach() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display max-w-lg text-4xl leading-[1.1] text-bone sm:text-5xl"
        >
          Un proceso que no se apura.
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:auto-rows-[220px]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative isolate min-h-[320px] overflow-hidden lg:col-span-2 lg:row-span-2 lg:min-h-0"
          >
            <img
              src={images.approachC(960)}
              srcSet={`${images.approachC(640)} 640w, ${images.approachC(960)} 960w, ${images.approachC(1280)} 1280w`}
              sizes="(min-width: 640px) 50vw, 100vw"
              alt="Living room con escalera y luz natural"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="font-display text-3xl text-bone">Escuchar</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-bone-dim">
                Visitamos el terreno antes de dibujar. La orientación, el viento
                y las rutinas de cada familia definen el punto de partida.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="group relative isolate min-h-[220px] overflow-hidden lg:col-span-2 lg:min-h-0"
          >
            <img
              src={images.proyectado(960)}
              srcSet={`${images.proyectado(640)} 640w, ${images.proyectado(960)} 960w, ${images.proyectado(1280)} 1280w`}
              sizes="(min-width: 640px) 50vw, 100vw"
              alt="Maqueta física y modelo 3D de una casa junto a planos en un estudio de arquitectura"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <h3 className="font-display text-3xl text-bone">Proyectar</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-bone-dim">
                Maquetas físicas y modelos 3D en cada etapa, revisados junto
                al cliente antes de avanzar a obra.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="group relative isolate min-h-[220px] overflow-hidden lg:min-h-0"
          >
            <img
              src={images.approachA(640)}
              srcSet={`${images.approachA(640)} 640w, ${images.approachA(960)} 960w, ${images.approachA(1280)} 1280w`}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              alt="Living room luminoso con vigas de madera vista"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-2xl text-bone">Construir</h3>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="group relative isolate min-h-[220px] overflow-hidden lg:min-h-0"
          >
            <img
              src={images.approachB(640)}
              srcSet={`${images.approachB(640)} 640w, ${images.approachB(960)} 960w, ${images.approachB(1280)} 1280w`}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              alt="Baño en suite con tonos oscuros y bañera exenta"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-2xl text-bone">Habitar</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
