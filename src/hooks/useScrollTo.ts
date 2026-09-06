import { useCallback } from 'react';
import { useLenis } from '../lib/smoothScroll';

export function useScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: string) => {
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.4 });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [lenis],
  );
}
