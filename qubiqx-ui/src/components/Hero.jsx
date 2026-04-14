import React from 'react';
import { useLottie } from 'lottie-react';
import section1_1 from '../assets/images/section1-1.png';
import section1_2 from '../assets/images/section1-2.png';
import scrollAnimation from '../animations/scroll down (1).json';
import playgroundAnimation from '../animations/Image Playground Animation (1).json';

const Hero = () => {
  // Playground Animation Hook
  const playgroundOptions = {
    animationData: playgroundAnimation,
    loop: true,
    autoplay: true,
  };
  const { View: PlaygroundView } = useLottie(playgroundOptions);

  // Scroll Animation Hook
  const scrollOptions = {
    animationData: scrollAnimation,
    loop: true,
    autoplay: true,
  };
  const { View: ScrollView } = useLottie(scrollOptions);

  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden">
      {/* Background Abstract Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* CENTERED RING - Focal Point */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <img 
            src={section1_2} 
            alt="Centered Ring" 
            className="w-full max-w-[690px] opacity-70 mix-blend-screen animate-pulse duration-[6000ms] pointer-events-none"
          />
        </div>

        {/* Playground Animation Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 mix-blend-screen pointer-events-none">
          {PlaygroundView}
        </div>

        {/* Wave Swirl (section1-1.png) - Positioned as a wave */}
        <img 
          src={section1_1} 
          alt="Wave Background" 
          className="absolute left-[2%] bottom-[-10%] w-[120%] lg:w-[110%] opacity-90 mix-blend-screen pointer-events-none z-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-[12px] md:text-[13px] text-gray-300 tracking-wide font-medium">
          <span className="text-amber-400 text-lg leading-none">✦</span>
          <span>Building the Future of Technology</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-white tracking-tight leading-[1.1] md:leading-[1.05] font-sans max-w-4xl">
          Transforming Ideas Into <br className="hidden md:block" />
          <span className="text-white">Digital Excellence</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-[19px] max-w-2xl leading-relaxed font-sans opacity-80">
          We craft cutting-edge digital experiences that push boundaries and 
          redefine what's possible in the modern tech landscape.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-400 text-white px-8 md:px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] transition-all duration-300 active:scale-95 group text-sm md:text-base">
            Start Your Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <button className="w-full sm:w-auto bg-white/5 backdrop-blur-lg border border-white/10 text-white px-8 md:px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 group text-sm md:text-base">
            View Our Work
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all">
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 opacity-40">
        {ScrollView}
      </div>
    </section>
  );
};

export default Hero;
