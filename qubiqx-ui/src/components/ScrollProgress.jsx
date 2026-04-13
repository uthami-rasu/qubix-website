import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    // Function to handle Lenis scroll progress (0 to 1)
    const handleLenisScroll = (e) => {
      // Use e.progress for 100% accurate and smooth tracking
      setScrollWidth(e.progress * 100);
    };

    // Native fallback for reliability
    const handleNativeScroll = () => {
      if (!window.lenis) {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollWidth(scroll);
      }
    };

    // Wait for Lenis to be initialized on the window object
    const checkLenis = setInterval(() => {
      if (window.lenis) {
        window.lenis.on('scroll', handleLenisScroll);
        clearInterval(checkLenis);
      }
    }, 50);

    window.addEventListener('scroll', handleNativeScroll);

    return () => {
      if (window.lenis) window.lenis.off('scroll', handleLenisScroll);
      window.removeEventListener('scroll', handleNativeScroll);
      clearInterval(checkLenis);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-[#ef4444] to-[#f43f5e] shadow-[0_0_15px_rgba(239,68,68,0.7)] will-change-[width]"
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
