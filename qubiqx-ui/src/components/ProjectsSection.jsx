import React from 'react';
import section8_bg from "../assets/images/section8/section8-bg.png";
import finance_img from "../assets/images/section8/img-2.png";
import retail_img from "../assets/images/section8/img-1.png";
import health_img from "../assets/images/section8/img.png";
import ai_img from "../assets/images/section8/img-4.png";
import proptech_img from "../assets/images/section8/img-6.png";
import edutech_img from "../assets/images/section8/img-5.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Platform",
      category: "FINANCE",
      image: finance_img,
      accent: "text-purple-500"
    },
    {
      id: 2,
      title: "E-Commerce Hub",
      category: "RETAIL",
      image: retail_img,
      accent: "text-orange-500"
    },
    {
      id: 3,
      title: "Health Connect",
      category: "HEALTHCARE",
      image: health_img,
      accent: "text-pink-500"
    },
    {
      id: 4,
      title: "AI Analytics Suite",
      category: "AI / TECH",
      image: ai_img,
      accent: "text-green-500"
    },
    {
      id: 5,
      title: "PropTech Solution",
      category: "REAL ESTATE",
      image: proptech_img,
      accent: "text-yellow-500"
    },
    {
      id: 6,
      title: "EduTech Platform",
      category: "EDUCATION",
      image: edutech_img,
      accent: "text-blue-500"
    }
  ];

  return (
    <section 
      className="relative py-32 px-6 lg:px-24 overflow-hidden font-sans bg-black"
      style={{
        backgroundImage: `url(${section8_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-[#ef4444]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium opacity-80">
            Showcasing our best work and successful client partnerships
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative flex flex-col bg-[#1A1A2E]/50 backdrop-blur-md rounded-[32px] overflow-hidden border border-white/5 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col p-6 bg-[#1A1A2E]/80">
                <span className={`text-xs font-bold tracking-[0.2em] mb-2 ${project.accent}`}>
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#ef4444] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
