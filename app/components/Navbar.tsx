"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0B132B]/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-12 w-12 relative bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center overflow-hidden">
            <Image 
              src="/logo.jpeg" 
              alt="Metsan Ahşap Logo" 
              width={44} 
              height={44} 
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-black tracking-wider block text-white group-hover:text-amber-400 transition-colors">METSAN AHŞAP</span>
            <span className="text-[10px] text-amber-500 tracking-widest uppercase block -mt-1 font-bold">Tasarım & Uygulama</span>
          </div>
        </a>

        {/* Menü Linkleri */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <a href="#hero" className="hover:text-amber-400 transition-colors">Ana Sayfa</a>
          <a href="#hikayemiz" className="hover:text-amber-400 transition-colors">Hikâyemiz</a>
          <a href="#hakkimizda" className="hover:text-amber-400 transition-colors">Hakkımızda</a>
          <a href="#hizmetler" className="hover:text-amber-400 transition-colors">Hizmetlerimiz</a>
          <a href="#projeler" className="hover:text-amber-400 transition-colors">Projelerimiz</a>
          <a href="#iletisim" className="hover:text-amber-400 transition-colors">İletişim</a>
          <a 
            href="#talep" 
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-bold text-xs shadow-lg shadow-amber-600/30 flex items-center gap-1.5 hover:scale-105"
          >
            <span>Ücretsiz Keşif İste</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden text-slate-200 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 text-base font-semibold">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Ana Sayfa</a>
          <a href="#hikayemiz" onClick={() => setMobileMenuOpen(false)}>Hikâyemiz</a>
          <a href="#hakkimizda" onClick={() => setMobileMenuOpen(false)}>Hakkımızda</a>
          <a href="#hizmetler" onClick={() => setMobileMenuOpen(false)}>Hizmetlerimiz</a>
          <a href="#projeler" onClick={() => setMobileMenuOpen(false)}>Projelerimiz</a>
          <a href="#iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
          <a href="#talep" onClick={() => setMobileMenuOpen(false)} className="text-amber-400 font-bold">Ücretsiz Keşif İste →</a>
        </div>
      )}
    </nav>
  );
}