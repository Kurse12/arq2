import { lazy, Suspense } from 'react';
import { SmoothScrollProvider } from './lib/smoothScroll';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { ProjectsGallery } from './components/ProjectsGallery';

const Studio = lazy(() => import('./components/Studio').then((m) => ({ default: m.Studio })));
const Approach = lazy(() =>
  import('./components/Approach').then((m) => ({ default: m.Approach })),
);
const FeaturedProject = lazy(() =>
  import('./components/FeaturedProject').then((m) => ({ default: m.FeaturedProject })),
);
const Quote = lazy(() => import('./components/Quote').then((m) => ({ default: m.Quote })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));

function App() {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main className="bg-ink">
        <Hero />
        <Manifesto />
        <ProjectsGallery />
        <Suspense fallback={null}>
          <Studio />
          <Approach />
          <FeaturedProject />
          <Quote />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </SmoothScrollProvider>
  );
}

export default App;
