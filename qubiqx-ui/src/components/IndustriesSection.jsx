import React from 'react';
import section6_bg from "../assets/images/section6/section6-1.png";
import img_healthcare from "../assets/images/section6/img.png";
import img_finance from "../assets/images/section6/img-1.png";
import img_retail from "../assets/images/section6/img-2.png";
import img_education from "../assets/images/section6/img-3.png";
import img_real_estate from "../assets/images/section6/img-4.png";
import img_startups from "../assets/images/section6/img-5.png";
import { Heart, TrendingUp, ShoppingBag, GraduationCap, Building2, Rocket } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      name: "Healthcare",
      image: img_healthcare,
      icon: <Heart className="w-6 h-6 text-[#ef4444]" />,
      iconBg: "bg-[#ef4444]/10"
    },
    {
      name: "Finance",
      image: img_finance,
      icon: <TrendingUp className="w-6 h-6 text-[#10b981]" />,
      iconBg: "bg-[#10b981]/10"
    },
    {
      name: "Retail",
      image: img_retail,
      icon: <ShoppingBag className="w-6 h-6 text-[#a855f7]" />,
      iconBg: "bg-[#a855f7]/10"
    },
    {
      name: "Education",
      image: img_education,
      icon: <GraduationCap className="w-6 h-6 text-[#3b82f6]" />,
      iconBg: "bg-[#3b82f6]/10"
    },
    {
      name: "Real Estate",
      image: img_real_estate,
      icon: <Building2 className="w-6 h-6 text-[#eab308]" />,
      iconBg: "bg-[#eab308]/10"
    },
    {
      name: "Tech Startups",
      image: img_startups,
      icon: <Rocket className="w-6 h-6 text-[#ec4899]" />,
      iconBg: "bg-[#ec4899]/10"
    }
  ];

  return (
    <section 
      className="relative py-32 px-6 lg:px-24 overflow-hidden font-sans bg-black"
      style={{
        backgroundImage: `url(${section6_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight">
            Industries <span className="text-[#ef4444]">We Serve</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium opacity-80">
            Delivering specialized solutions across diverse sectors
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-[#111827]/80 backdrop-blur-sm rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden m-2 rounded-[18px]">
                <img 
                  src={industry.image} 
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-center justify-center py-6 px-4">
                <div className={`p-3 rounded-xl ${industry.iconBg} mb-3 transition-transform duration-500 group-hover:scale-110`}>
                  {industry.icon}
                </div>
                <h3 className="text-white font-semibold text-center text-sm md:text-base tracking-wide">
                  {industry.name}
                </h3>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
