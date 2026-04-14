import React from 'react';
import section5_bg from "../assets/images/section5/section5-1.png";
import { 
  SiReact, SiJavascript, SiPython, SiAngular, 
  SiDocker, SiFigma 
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

const TechSection = () => {
  const techs = [
    { icon: <SiReact size={38} />, name: "React" },
    { icon: <SiJavascript size={38} />, name: "JavaScript" },
    { icon: <SiPython size={38} />, name: "Python" },
    { icon: <SiAngular size={38} />, name: "Angular" },
    { icon: <FaAws size={38} />, name: "AWS" },
    { icon: <SiDocker size={38} />, name: "Docker" },
    { icon: <FaJava size={38} />, name: "Java" },
    { icon: <SiFigma size={38} />, name: "Figma" }
  ];

  return (
    <section 
      className="relative py-32 px-6 lg:px-24 overflow-hidden font-sans bg-[#020617]"
      style={{
        backgroundImage: `url(${section5_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle darkening overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Atmospheric Pink Glows in all 4 corners */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full -translate-x-1/2 translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/10 blur-[130px] rounded-full translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight">
            Technologies <span className="text-[#ef4444]">We Use</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium opacity-80">
            Using the Best Tools to Build the Future
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Descriptive Text */}
          <div className="space-y-10">
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
              We leverage the most powerful and proven technologies to build robust, scalable solutions that stand the test of time.
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed font-normal opacity-90">
              Our expertise spans across modern frameworks, cloud platforms, and cutting-edge tools that ensure your product is built on a solid foundation.
            </p>
          </div>

          {/* Right Column: Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techs.map((tech, index) => (
              <div 
                key={index}
                className="group relative flex items-center justify-center aspect-square rounded-[24px] bg-[#111827] shadow-2xl overflow-hidden transition-all duration-500"
              >
                {/* Rotating Animated Gradient Border */}
                <div className="absolute inset-0 p-[1.5px] rounded-[24px] overflow-hidden">
                  <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#3b82f6,#8b5cf6)] animate-rotate opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full rounded-[23px] bg-[#111827] flex items-center justify-center z-10">
                    {/* Icon - Always White */}
                    <div className="text-white transition-all duration-500 transform group-hover:scale-110 z-20">
                      {tech.icon}
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Glow behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechSection;
