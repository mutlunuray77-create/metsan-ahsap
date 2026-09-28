"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2024]/95 backdrop-blur-md border-b border-stone-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Sol Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 relative bg-white/10 rounded-lg p-1.5 flex items-center justify-center border border-white/20">
            <Image
              src="/logo.jpeg"
              alt="Metsan Ahşap"
              width={32}
              height={32}
              className="object-contain invert"
            />
          </div>
          <div>
            <span className="font-serif tracking-widest text-sm font-bold block">
              METSAN AHŞAP
            </span>
            <span className="text-[9px] tracking-[0.2em] text-[#D4A373] uppercase block -mt-0.5 font-light">
              Tasarım & Uygulama
            </span>
          </div>
        </a>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-stone-300 font-medium">
          <a href="#hero" className="hover:text-white transition">
            Ana Sayfa
          </a>
          <a href="#hakkimizda" className="hover:text-white transition">
            Hakkımızda
          </a>
          <a href="#uzmanlik" className="hover:text-white transition">
            Uzmanlık Alanlarımız
          </a>
          <a href="#projeler" className="hover:text-white transition">
            Projeler
          </a>
          <a href="#surec" className="hover:text-white transition">
            Süreç
          </a>
          <a href="#iletisim" className="hover:text-white transition">
            İletişim
          </a>
        </nav>

        {/* Mobil Menü Butonu (Ekran görüntündeki yuvarlak buton) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 rounded-full border border-stone-700 bg-stone-900/80 flex items-center justify-center text-white"
          aria-label="Menüyü Aç"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobil Açılır Menü */}
      {open && (
        <div className="md:hidden bg-[#1C2024] border-b border-stone-800 px-6 py-8 flex flex-col gap-5 text-sm tracking-wider uppercase font-serif">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            Ana Sayfa
          </a>
          <a
            href="#hakkimizda"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            Hakkımızda
          </a>
          <a
            href="#uzmanlik"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            Uzmanlık Alanlarımız
          </a>
          <a
            href="#projeler"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            Projeler
          </a>
          <a
            href="#surec"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            Süreç
          </a>
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="hover:text-[#D4A373]"
          >
            İletişim
          </a>
        </div>
      )}
    </header>
  );
}
