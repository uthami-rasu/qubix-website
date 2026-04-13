import React from 'react';
import section_bg from "../assets/images/section3/section.png";
import feature_image from "../assets/images/section3/Group 1686553285.png";
import { Trophy, Lightbulb, Headset } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-white/80" />,
      title: "Industry Expertise",
      description: "Over 2 years of experience delivering cutting-edge solutions across multiple industries."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white/80" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide you with the most advanced solutions."
    },
    {
      icon: <Headset className="w-8 h-8 text-white/80" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly at all times."
    }
  ];

  return (
    <section 
      className="relative py-28 px-6 lg:px-24 overflow-hidden font-sans bg-[#020617]"
      style={{
        backgroundImage: `url(${section_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Overlay to enhance contrast */}
      <div className="absolute inset-0 bg-[#020617]/40 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why <span className="text-[#ef4444]">Choose</span> Us
          </h2>
          <p className="text-gray-400 text-lg font-medium opacity-80">
            What sets us apart from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Featured Image with Decorative Frame */}
          <div className="relative group">
            {/* Decorative Blue/Purple Frame - matching the screenshot's diagonal shape */}
            <div className="absolute -top-12 -left-12 w-[85%] h-[85%] border-2 border-blue-500/30 rounded-[40px] -rotate-6 z-0 pointer-events-none group-hover:-rotate-3 transition-transform duration-700"></div>
            <div className="absolute -bottom-10 -right-6 w-[70%] h-[70%] border-2 border-purple-500/20 rounded-[40px] rotate-12 z-0 pointer-events-none group-hover:rotate-6 transition-transform duration-700"></div>
            
            {/* The Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
              <img 
                src={feature_image} 
                alt="Technology Exploration" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[100px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Right Column: Feature List */}
          <div className="flex flex-col gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-8 group">
                {/* Icon Container with specific styling from image */}
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl group-hover:border-white/30 transition-all duration-300 transform group-hover:-translate-y-1">
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <div className="space-y-3 pt-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ef4444] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-[17px] leading-relaxed max-w-md font-normal opacity-90">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
