import React from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import section10_bg from "../assets/images/section10/section10-bg.png";
import form_frame from "../assets/images/section10/div.png";

const ContactSection = () => {
  return (
    <section 
      className="relative w-full py-16 px-6 lg:px-24 overflow-hidden font-sans bg-black"
      style={{
        backgroundImage: `url(${section10_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        
        {/* Main Blue Glowing Frame (div.png) encapsulating the entire section */}
        <div 
          className="relative w-full p-4 md:p-10 lg:p-14 lg:py-16"
          style={{
            backgroundImage: `url(${form_frame})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 relative z-10">
            
            {/* Left Side: Brand & Contact Info */}
            <div className="lg:w-[45%] space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                  Let's Build Something <br />
                  <span className="text-[#ef4444]">Powerful</span>
                </h2>
                <p className="text-gray-400 text-base font-medium leading-relaxed opacity-80 max-w-sm">
                  Launch your next digital product with Qubiqx. Fill out the form or email us directly.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-all duration-300">
                    <Mail size={24} className="text-[#ef4444] drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)]" />
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-[#ef4444] transition-colors">qubiqx@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-all duration-300">
                    <Phone size={24} className="text-[#ef4444] drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)]" />
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-[#ef4444] transition-colors">+91 9715612695</span>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-all duration-300">
                    <MapPin size={24} className="text-[#ef4444] drop-shadow-[0_2px_4px_rgba(239,68,68,0.3)]" />
                  </div>
                  <span className="text-xl font-bold text-white group-hover:text-[#ef4444] transition-colors">Rajapalayam</span>
                </div>
              </div>
            </div>

            {/* Right Side: Refined Internal Contact Form */}
            <div className="lg:w-[50%] w-full">
              <div className="bg-[#1A1A2E]/40 backdrop-blur-xl border border-white/20 rounded-[24px] p-6 md:p-10 shadow-2xl relative">
                <form className="space-y-4 relative z-10">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-white px-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-[#0A0A1F]/40 border border-white/40 rounded-xl px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-white px-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-[#0A0A1F]/40 border border-white/40 rounded-xl px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-white px-1">Project Type</label>
                    <div className="relative">
                      <select className="w-full bg-[#0A0A1F]/40 border border-white/40 rounded-xl px-5 py-3 text-white appearance-none focus:outline-none focus:border-white transition-all cursor-pointer font-medium">
                        <option className="bg-[#1A1A2E] text-white">Select a project type</option>
                        <option className="bg-[#1A1A2E] text-white">Real Estate Platform</option>
                        <option className="bg-[#1A1A2E] text-white">Fintech Solution</option>
                        <option className="bg-[#1A1A2E] text-white">E-commerce App</option>
                        <option className="bg-[#1A1A2E] text-white">Other</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-white px-1">Message</label>
                    <textarea 
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="w-full bg-[#0A0A1F]/40 border border-white/40 rounded-xl px-5 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all resize-none font-medium"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#b91c1c] to-[#ef4444] text-white font-bold text-lg rounded-xl shadow-lg hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Get Started Now
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Decorative Pink Circle element from Screenshot */}
          <div className="absolute bottom-10 right-1/2 lg:right-[40%] translate-x-1/2 w-6 h-6 border-4 border-[#ff00ff] rounded-full opacity-60 z-20"></div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
