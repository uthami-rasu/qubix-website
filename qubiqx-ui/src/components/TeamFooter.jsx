import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import team_img from "../assets/images/section10/Desktop.png";
import footer_ppls from "../assets/images/section10/ppls.png";
import logo from "../assets/images/logo.png";

const TeamFooter = () => {
  return (
    <div className="w-full bg-black font-sans">
      
      {/* 2. Meet Our Team Section */}
      <section className="bg-black py-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[40px] shadow-2xl">
          <img 
            src={team_img} 
            alt="Meet Our Team" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </section>

      {/* 3. Footer Area (Lets Talk!) */}
      <footer className="bg-black py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto border-2 border-[#ef4444]/60 rounded-[40px] bg-[#0A0A0A] p-12 lg:p-20 relative overflow-hidden min-h-[500px] flex items-center">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0 relative z-10 w-full">
            
            {/* Left: Brand info */}
            <div className="lg:w-1/3 space-y-10">
              <div className="flex items-center gap-4 group">
                <img src={logo} alt="Qubiqx" className="h-12 w-auto transition-transform duration-500 group-hover:rotate-[360deg]" />
                <span className="text-4xl font-bold text-white tracking-tighter italic">Qubiqx</span>
              </div>
              <p className="text-gray-400 text-xl font-medium leading-relaxed opacity-80 max-w-sm">
                We are always open to discuss your project and improve your online presence.
              </p>
              
              {/* Red Contact Boxes */}
              <div className="flex flex-wrap gap-4">
                <div className="px-8 py-5 bg-[#ef4444] rounded-2xl flex flex-col justify-center min-w-[220px] shadow-lg shadow-red-900/20">
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Email me at</span>
                  <span className="text-white font-bold text-base">qubiqx@gmail.com</span>
                </div>
                <div className="px-8 py-5 bg-[#ef4444] rounded-2xl flex flex-col justify-center min-w-[180px] shadow-lg shadow-red-900/20">
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Call us</span>
                  <span className="text-white font-bold text-base">+91 9715612695</span>
                </div>
              </div>
            </div>

            {/* Center: Lets Talk and Socials */}
            <div className="lg:w-1/3 lg:px-12 space-y-10">
              <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tighter italic">Lets Talk!</h2>
              <p className="text-gray-400 text-xl font-medium leading-relaxed opacity-80">
                We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-[#ef4444] hover:border-transparent transition-all duration-300">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-[#ef4444] hover:border-transparent transition-all duration-300">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-[#ef4444] hover:border-transparent transition-all duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 hover:bg-[#ef4444] hover:border-transparent transition-all duration-300">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>

            {/* Right: Team Illustration (Anchored inside the card) */}
            <div className="absolute bottom-0 right-0 pointer-events-none z-0">
              <img 
                src={footer_ppls} 
                alt="Team Illustration" 
                className="w-full max-w-[480px] h-auto origin-bottom-right translate-y-2 translate-x-4 brightness-95 opacity-90" 
              />
            </div>
          </div>
        </div>

        {/* 4. Bottom Copyright Bar */}
        <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-sm font-bold tracking-[0.2em] uppercase">
          <p>Copyright 2026, qubiqx.com</p>
          <div className="flex items-center gap-12">
            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Careers</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamFooter;
