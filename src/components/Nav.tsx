import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { List, X } from '@phosphor-icons/react';
import { useLenis } from '../lib/smoothScroll';
import { useScrollTo } from '../hooks/useScrollTo';

const LINKS = [
  { label: 'Proyectos', target: '#proyectos' },
  { label: 'Estudio', target: '#estudio' },
  { label: 'Contacto', target: '#contacto' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (!lenis) return;
    const onScroll = ({ scroll }: { scroll: number }) => setScrolled(scroll > 40);
    lenis.on('scroll', onScroll);
    return () => {
      lenis.off('scroll', onScroll);
    };
  }, [lenis]);

  const go = (target: string) => {
    setOpen(false);
    scrollTo(target);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-500 md:h-20 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-hair' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            go('#top');
          }}
          className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone"
        >
          Estudio&nbsp;/&nbsp;Arquitectura
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={link.target}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.target);
                }}
                className="font-sans text-sm text-bone-dim transition-colors hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-bone md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-1 border-t border-hair bg-ink px-6 py-4 md:hidden"
        >
          {LINKS.map((link) => (
            <li key={link.target}>
              <a
                href={link.target}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.target);
                }}
                className="block py-3 font-sans text-base text-bone-dim"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
