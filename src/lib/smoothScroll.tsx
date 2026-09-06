import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      return;
    }

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.15,
    });

    const onTick = (time: number) => instance.raf(time * 1000);

    instance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    return () => {
      gsap.ticker.remove(onTick);
      instance.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
