import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { useScrollTo } from '../hooks/useScrollTo';

const LINKS = [
  { label: 'Proyectos', target: '#proyectos' },
  { label: 'Estudio', target: '#estudio' },
  { label: 'Contacto', target: '#contacto' },
];

export function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="bg-ink border-t border-hair px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#top');
            }}
            className="font-sans text-[11px] tracking-[0.22em] uppercase text-bone"
          >
            Estudio&nbsp;/&nbsp;Arquitectura
          </a>
          <p className="mt-4 max-w-[26ch] text-sm text-bone-dim">
            Av. Del Libertador 4850, Buenos Aires, Argentina.
          </p>
        </div>

        <nav className="flex gap-8">
          {LINKS.map((link) => (
            <a
              key={link.target}
              href={link.target}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.target);
              }}
              className="font-sans text-sm text-bone-dim transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-start gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-bone-dim transition-colors hover:text-bone"
          >
            <InstagramLogo size={20} weight="light" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-bone-dim transition-colors hover:text-bone"
          >
            <LinkedinLogo size={20} weight="light" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1440px] flex-col-reverse gap-4 border-t border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-bone-dim/70">
          &copy; {new Date().getFullYear()} Estudio de Arquitectura. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
