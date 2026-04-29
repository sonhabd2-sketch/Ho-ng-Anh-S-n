import React from 'react';
import { Phone, MapPin, Globe } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header id="main-header" className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0070c0] rounded-full flex items-center justify-center">
            <Globe className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900 leading-tight">VNPT <span className="text-[#0070c0]">TP.HCM</span></h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Digital Solutions Consultant</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-[#0070c0] transition-colors">Internet FiberVNN</a>
          <a href="#" className="hover:text-[#0070c0] transition-colors">VinaPhone 5G</a>
          <a href="#" className="hover:text-[#0070c0] transition-colors">Giải Pháp DX</a>
          <a href="#" className="hover:text-[#0070c0] transition-colors">Học Tập Thông Minh</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:18001166" 
            className="flex items-center gap-2 bg-[#0070c0] hover:bg-[#005fa3] text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-100"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">1800 1166</span>
          </a>
        </div>
      </div>
    </header>
  );
};
