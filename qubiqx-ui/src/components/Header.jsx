import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5 flex items-center justify-between border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Qubiqx" className="h-9 w-auto hover:opacity-80 transition-opacity" />
      </div>

      <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[15px] font-medium text-white font-sans">
        <a href="#" className="hover:text-amber-400 transition-colors duration-200">Home</a>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-amber-400 transition-colors group duration-200">
          <span>Services</span>
          <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-all transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 cursor-pointer hover:text-amber-400 transition-colors group duration-200">
          <span>Careers</span>
          <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-all transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <a href="#" className="hover:text-amber-400 transition-colors duration-200">Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="relative overflow-hidden group bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95">
          <span className="relative z-10 text-[14px]">Start Project</span>
          <div className="absolute inset-0 bg-white/10 translate-y-10 group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-black/95 z-40 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col items-center gap-8 pt-12 text-lg font-medium text-gray-300">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Careers</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
