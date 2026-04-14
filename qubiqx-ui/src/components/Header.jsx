import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-5 flex items-center justify-between border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Qubiqx" className="h-8 md:h-9 w-auto hover:opacity-80 transition-opacity" />
      </div>

      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-white font-sans">
        <a href="#" className="hover:text-red-500 transition-colors duration-200">Home</a>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-red-500 transition-colors group duration-200">
          <span>Services</span>
          <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-all transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-red-500 transition-colors group duration-200">
          <span>Careers</span>
          <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-all transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="#" className="hover:text-red-500 transition-colors duration-200">Contact</a>
      </nav>

      <div className="flex items-center gap-3 md:gap-4">
        <button className="relative overflow-hidden group bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95">
          <span className="relative z-10">Start Project</span>
          <div className="absolute inset-0 bg-white/10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-1.5 bg-white/5 rounded-lg border border-white/10 active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 top-0 bg-black/60 backdrop-blur-2xl z-[60] lg:hidden transition-all duration-700 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute top-0 right-0 w-[70%] h-full bg-[#050a1f] border-l border-white/10 p-8 pt-28 transition-transform duration-500 ease-out flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Top Close Button (X icon) */}
          <button 
            className="absolute top-6 right-6 text-white w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all z-[70]"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-5 text-xl font-bold text-white tracking-tight">
            {['Home', 'Services', 'Careers', 'Contact'].map((item, idx) => (
              <a 
                key={item} 
                href="#" 
                className={`transition-all duration-700 ease-out delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} hover:text-red-500 flex items-center justify-between group`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item}</span>
                <span className="w-8 h-[1px] bg-white/20 group-hover:bg-red-500 group-hover:w-12 transition-all"></span>
              </a>
            ))}

            {/* Close Button after menus end */}
            <button 
              className={`mt-4 w-fit px-6 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>

          <div className="mt-auto pb-8 space-y-8">
            <div className="h-px bg-white/10 w-full"></div>
            <div className="space-y-4">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Connect</p>
              <div className="flex gap-4">
                {[<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />, <FaGithub />].map((icon, idx) => (
                  <div key={idx} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-sm hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-red-600 to-red-400 text-white font-bold rounded-2xl active:scale-95 transition-transform shadow-lg shadow-red-600/20">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
