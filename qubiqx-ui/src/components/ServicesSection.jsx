import React from 'react';
import section4_bg from "../assets/images/section4/section4-1.png";
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Software Development",
      description: "Custom enterprise software solutions built with cutting-edge technologies to streamline your business operations and drive growth."
    },
    {
      title: "Web Development",
      description: "Responsive, fast, and scalable web applications that deliver exceptional user experiences across all devices and platforms."
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and provide seamless functionality on iOS and Android."
    },
    {
      title: "UI/UX Strategy",
      description: "User-centered design solutions that combine aesthetics with functionality to create intuitive digital experiences."
    },
    {
      title: "Digital Growth",
      description: "Strategic digital transformation consulting to help your business scale and adapt to the evolving technology landscape."
    }
  ];

  return (
    <section 
      className="relative pt-32 pb-12 px-6 lg:px-24 overflow-hidden font-sans bg-[#020617]"
      style={{
        backgroundImage: `url(${section4_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our <span className="text-[#ef4444]">Services</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer ${index === 0 ? 'border-t' : ''}`}
            >
              {/* Service Title */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ef4444] transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <div className="w-full md:w-3/5 md:px-12 mb-6 md:mb-0">
                <p className="text-gray-300 text-[17px] leading-relaxed font-normal opacity-90 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex justify-end items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[#ef4444] group-hover:bg-[#ef4444]/10 transition-all duration-500 transform group-hover:translate-x-2">
                  <ArrowRight className="text-white group-hover:text-[#ef4444] transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
