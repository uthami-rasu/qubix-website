import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import team_img from "../assets/images/section10/Desktop.png";
import footer_ppls from "../assets/images/section10/ppls.png";
import logo from "../assets/images/logo.png";

const TeamFooter = () => {
  return (
    <div className="w-full bg-black font-sans">
      
      {/* 2. Meet Our Team Section */}
      <section className="pt-0 pb-0 px-6 lg:px-24 relative z-20">
        <div className="max-w-[1200px] mx-auto relative overflow-visible -mb-10 lg:-mb-16 transition-all duration-500">
          <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-red-900/40 bg-red-600/30 backdrop-blur-xl border border-white/10 p-1">
            <img 
              src={team_img} 
              alt="Meet Our Team" 
              className="w-full h-auto object-cover rounded-[36px]" 
            />
          </div>
        </div>
      </section>

      {/* 3. Footer Area (Lets Talk!) */}
      <footer className="bg-black pb-20 px-4 lg:px-5 relative z-10">
        <div className="max-w-[1700px] mx-auto relative group">
          
          {/* Main Footer Container with Glassmorphism */}
          <div className="border-[3px] border-red-600/80 rounded-[20px] bg-red-900/30 backdrop-blur-2xl p-10 lg:p-14 lg:pt-28 relative overflow-hidden min-h-[450px] shadow-[0_0_80px_rgba(220,38,38,0.15)] z-10">
            {/* Subtle background glow enhancement */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/10 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-600/5 to-transparent pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10 h-full">
              
              {/* Left Column: Brand & Contact */}
              <div className="flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/logo">
                    <div className="relative">
                      <img src={logo} alt="Qubiqx" className="h-12 w-auto transition-transform duration-700 group-hover/logo:rotate-[360deg]" />
                      <div className="absolute -inset-2 bg-red-600/20 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase italic">Qubiqx</span>
                  </div>
                  <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-[300px]">
                    We are always open to discuss your project and improve your online presence.
                  </p>
                </div>
                
                {/* Combined Red Contact Box */}
                <div className="bg-[#FF0000] rounded-2xl p-6 lg:p-7 flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-10 w-fit shadow-[0_0_40px_rgba(255,0,0,0.3)] hover:shadow-[0_0_60px_rgba(255,0,0,0.5)] transition-shadow duration-500">
                  <div className="flex flex-col">
                    <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Email me at</span>
                    <a href="mailto:qubiqx@gmail.com" className="text-white font-extrabold text-base hover:tracking-wider transition-all duration-300">qubiqx@gmail.com</a>
                  </div>
                  <div className="w-px h-10 bg-white/30 hidden xl:block"></div>
                  <div className="flex flex-col">
                    <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Call us</span>
                    <a href="tel:+919715612695" className="text-white font-extrabold text-base hover:tracking-wider transition-all duration-300">+91 9715612695</a>
                  </div>
                </div>
              </div>

              {/* Middle Column: Lets Talk */}
              <div className="flex flex-col justify-start lg:pt-4 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter italic leading-none drop-shadow-lg">Lets Talk!</h2>
                  <p className="text-gray-300 text-base font-medium leading-relaxed max-w-[340px]">
                    We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-4">
                    {[
                      { icon: <FaFacebookF />, link: "#" },
                      { icon: <FaLinkedinIn />, link: "#" },
                      { icon: <FaInstagram />, link: "#" },
                      { icon: <FaGithub />, link: "#" }
                    ].map((social, idx) => (
                      <a key={idx} href={social.link} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 hover:scale-110 shadow-lg transition-all duration-300">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: People Image */}
              <div className="relative flex items-end justify-end">
                <div className="w-full max-w-[420px] pointer-events-none group/team">
                  <img 
                    src={footer_ppls} 
                    alt="Team" 
                    className="w-full h-auto object-contain brightness-125 translate-y-6 group-hover/team:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Border Overlay Layer - sitting on top of everything to keep border visible over avatars */}
          <div className="absolute inset-0 border-[3px] border-red-600/80 rounded-[20px] pointer-events-none z-30"></div>
        </div>

        {/* 4. Bottom Copyright Bar */}
        <div className="max-w-[1700px] mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-[10px] font-bold tracking-[0.4em] uppercase opacity-60">
          <p className="tracking-widest">Copyright 2026, qubiqx.com</p>
          <div className="flex items-center gap-10 md:gap-16">
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Services</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Careers</a>
            <a href="#" className="hover:text-red-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamFooter;
