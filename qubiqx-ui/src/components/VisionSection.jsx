import React from 'react';
import section9_bg from "../assets/images/section9/section9.png";

const VisionSection = () => {
  return (
    <section 
      className="relative py-32 px-6 lg:px-24 overflow-hidden font-sans bg-black flex flex-col items-center justify-center min-h-[500px]"
      style={{
        backgroundImage: `url(${section9_bg})`,
        backgroundSize: '99% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient Overlays for focus and visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.4)_100%)] z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Making Technology <br />
          <span className="text-[#ef4444]">Simple and Meaningful.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-90 italic px-4">
          "We're a team of engineers, designers, and strategists who believe great software should be powerful yet intuitive, complex yet accessible."
        </p>

        {/* CTA Button */}
        <div className="pt-8">
          <button className="px-12 py-5 bg-gradient-to-r from-[#ef4444] to-[#c2410c] text-white font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_40px_rgba(239,68,68,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Subtle bottom gradient sweep */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-1"></div>
    </section>
  );
};

export default VisionSection;
