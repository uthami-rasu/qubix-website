import React from 'react';
import section7_bg from "../assets/images/section7/section7.png";
import img_discovery from "../assets/images/section7/img-3.png";
import img_design from "../assets/images/section7/img-2.png";
import img_dev from "../assets/images/section7/img-1.png";
import img_launch from "../assets/images/section7/img.png";

const WorkSection = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "Understanding your vision and requirements",
      image: img_discovery
    },
    {
      id: 2,
      title: "Design",
      description: "Creating architecture and user experience",
      image: img_design
    },
    {
      id: 3,
      title: "Development",
      description: "Building with cutting-edge technologies",
      image: img_dev
    },
    {
      id: 4,
      title: "Launch",
      description: "Deployment and continuous support",
      image: img_launch
    }
  ];

  return (
    <section 
      className="relative py-32 px-6 lg:px-24 overflow-hidden font-sans bg-black"
      style={{
        backgroundImage: `url(${section7_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight">
            How <span className="text-[#ef4444]">We Work</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium opacity-80">
            Our proven development process
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md rounded-[28px] overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/25 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Image Frame Section */}
              <div className="p-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Step Number Divider */}
              <div className="px-4">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-blue-500/30"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-center justify-center py-6 px-6 text-center">
                <span className="text-white/40 font-bold text-xl mb-3 tracking-widest">{step.id}</span>
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#ef4444] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed opacity-90 max-w-[200px]">
                  {step.description}
                </p>
              </div>

              {/* Dynamic Accent Bar (Bottom) */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ef4444]/0 to-transparent transition-all duration-500 group-hover:via-[#ef4444]/60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
