import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(target, {
        offset: 0,
        immediate: false,
        duration: 1.2
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-5 flex items-center justify-between border-b border-white/5 bg-[#000000] lg:bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Qubiqx" className="h-8 md:h-9 w-auto hover:opacity-80 transition-opacity" />
      </div>

      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-white font-sans">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleNavClick(e, link.href)}
            className="hover:text-red-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="relative overflow-hidden group bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95"
        >
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

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Full-screen backdrop */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}></div>
        
        {/* Drawer Content — solid black + red gradient */}
        <div 
          className={`absolute top-0 right-0 w-full sm:w-[75%] h-full border-l border-white/10 p-8 pt-28 transition-transform duration-500 ease-out flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0000 60%, #1a0000 100%)' }}
        >
          {/* Top Close Button (X icon) */}
          <button 
            className="absolute top-6 right-6 text-white w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all z-[70]"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="flex flex-col gap-6 text-2xl font-bold text-white tracking-tight">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`transition-all duration-700 ease-out delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} hover:text-red-500 flex items-center justify-between group py-2`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <span className="w-12 h-[1px] bg-white/10 group-hover:bg-red-500 transition-all"></span>
              </a>
            ))}

            {/* Close Button after menus end */}
            <button 
              className={`mt-4 w-full py-4 bg-white/10 border border-white/20 text-white text-base font-bold rounded-2xl hover:bg-white/20 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </button>
          </nav>

          <div className="mt-auto pb-10 space-y-8">
            <div className="h-px bg-white/10 w-full"></div>
            <div className="space-y-4">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Connect</p>
              <div className="flex gap-4">
                {[<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />, <FaGithub />].map((icon, idx) => (
                  <div key={idx} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-lg hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-5 bg-gradient-to-r from-red-600 to-red-400 text-white font-bold text-lg rounded-2xl active:scale-95 transition-transform shadow-xl shadow-red-600/20">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
