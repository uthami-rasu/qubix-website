import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import IndustriesSection from './components/IndustriesSection';
import WorkSection from './components/WorkSection';
import ProjectsSection from './components/ProjectsSection';
import VisionSection from './components/VisionSection';
import ScrollProgress from './components/ScrollProgress';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <TechSection />
        <IndustriesSection />
        <WorkSection />
        <ProjectsSection />
        <VisionSection />
      </main>
    </div>
  );
}

export default App
