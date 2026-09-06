import { SmoothScrollProvider } from './lib/smoothScroll';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Studio } from './components/Studio';
import { Approach } from './components/Approach';
import { FeaturedProject } from './components/FeaturedProject';
import { Quote } from './components/Quote';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main className="bg-ink">
        <Hero />
        <Manifesto />
        <ProjectsGallery />
        <Studio />
        <Approach />
        <FeaturedProject />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

export default App;
