import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseUs />
        <ServicesSection />
        <TechSection />
      </main>
    </div>
  )
}

export default App
