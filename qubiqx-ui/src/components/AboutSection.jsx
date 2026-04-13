import React from 'react';
import section2_1 from '../assets/images/section2/section2-1.png';

const AboutSection = () => {
  const stats = [
    { label: 'Project Delivered', value: '15+', progress: 'w-[85%]', color: 'from-blue-600 to-blue-400' },
    { label: 'Professional', value: '100+', progress: 'w-[92%]', color: 'from-blue-600 to-blue-400' },
    { label: 'Happy Client', value: '15+', progress: 'w-[88%]', color: 'from-blue-600 to-blue-400' },
    { label: 'Experience', value: '02 yrs', progress: 'w-[75%]', color: 'from-amber-500 to-amber-300' },
  ];

  return (
    <section 
      className="relative py-28 px-6 lg:px-24 overflow-hidden font-sans bg-black border-y border-white/5"
      style={{
        backgroundImage: `url(${section2_1})`,
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Corner Glow Effects */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex flex-col gap-9 text-left">
          {/* Badge */}
          <div className="self-start">
            <span className="bg-[#e11d48] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wider shadow-[0_4px_20px_rgba(225,29,72,0.3)]">
              About Qubiqx
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight font-sans">
            Crafting Meaningful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#f43f5e]">
              Digital Experiences
            </span>
          </h2>

          {/* Description */}
          <p className="text-white text-[17px] leading-[1.7] max-w-xl font-normal opacity-90">
            Qubiqx is a modern software studio helping startups and businesses 
            transform ideas into scalable digital products with thoughtful design and 
            strong engineering. We don't just write code; we build the future of your 
            business.
          </p>

          {/* Feature List */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              <span className="text-white text-[15px] font-medium">Strategy & Planning</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
              <span className="text-white text-[15px] font-medium">Design & Development</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-12 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-4">
                <span className="text-[40px] font-bold text-white leading-none tracking-tight whitespace-nowrap">{stat.value}</span>
                {/* Custom Progress Bar matching the image */}
                <div className="w-[100px] h-[6px] flex rounded-sm overflow-hidden bg-white/5">
                  <div className="w-[10%] h-full bg-[#3b82f6]"></div> {/* Blue block */}
                  <div className="w-[65%] h-full bg-[#ffcc99]"></div> {/* Tan/Peach middle */}
                  <div className="w-[25%] h-full bg-[#fb923c]"></div> {/* Orange tip */}
                </div>
                <span className="text-[14px] text-white font-medium whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Empty but maintains layout balance */}
        <div className="hidden lg:block"></div>
      </div>

      {/* Marquee at the bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[#ef4444] py-1.5 overflow-hidden border-t border-white/10 z-20">
        <div className="flex whitespace-nowrap animate-marquee-ltr">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-white text-[15px] font-bold uppercase tracking-[4px] px-8 opacity-90">
              Qubiqx
            </span>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {[...Array(20)].map((_, i) => (
            <span key={i + 20} className="text-white text-[15px] font-bold uppercase tracking-[4px] px-8 opacity-90">
              Qubiqx
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
