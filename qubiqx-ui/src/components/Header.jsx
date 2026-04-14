import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { createPortal } from 'react-dom';

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

  const mobileMenu = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'block',
        pointerEvents: isMenuOpen ? 'auto' : 'none',
        opacity: isMenuOpen ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      {/* Dark backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(160deg, #000000 0%, #0d0000 50%, #1a0000 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '96px 32px 40px',
          display: 'flex',
          flexDirection: 'column',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
        }}
      >
        {/* Top bar: Logo + Close Button */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <img src={logo} alt="Qubiqx" style={{ height: 32, width: 'auto' }} />
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                fontSize: 18,
                fontWeight: 600,
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ef4444'}
              onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}
            >
              <span>{link.name}</span>
              <span style={{ width: 32, height: 1, background: 'rgba(255,255,255,0.12)' }} />
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div style={{ marginTop: 'auto', paddingTop: 32 }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 24 }} />
          <p style={{ color: '#6b7280', fontSize: 10, fontWeight: 700, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}>Connect</p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
            {[<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />, <FaGithub />].map((icon, idx) => (
              <div
                key={idx}
                style={{
                  width: 48, height: 48,
                  borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: 18, cursor: 'pointer',
                }}
              >
                {icon}
              </div>
            ))}
          </div>
          <button
            style={{
              width: '100%',
              padding: '20px 0',
              background: 'linear-gradient(90deg, #dc2626, #ef4444)',
              border: 'none',
              borderRadius: 16,
              color: '#fff',
              fontWeight: 700,
              fontSize: 18,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(239,68,68,0.3)',
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu rendered via Portal — outside <header> to avoid backdrop-filter inheritance */}
      {createPortal(mobileMenu, document.body)}
    </>
  );
};

export default Header;
