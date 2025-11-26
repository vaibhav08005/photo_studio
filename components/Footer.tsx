import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl uppercase text-white font-bold">Nanded<span className="text-brand-accent">Snaps</span></h2>
          <p className="text-gray-600 text-xs mt-2 uppercase tracking-widest">© 2024 Nanded Snaps Studio. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
           <a href="#home" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Home</a>
           <a href="#about" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">About</a>
           <a href="#services" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Services</a>
           <a href="#contact" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;