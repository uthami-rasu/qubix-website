import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
