"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ANA SAYFA", href: "#hero" },
    { name: "HAKKIMIZDA", href: "#hakkimizda" },
    { name: "HİZMETLER", href: "#hizmetler" },
    { name: "UZMANLIK ALANLARIMIZ", href: "#uzmanlik" },
    { name: "KATALOG", href: "#katalog" },
    { name: "İLETİŞİM", href: "#iletisim" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080d1a]/95 backdrop-blur-md py-3 shadow-xl border-b border-slate-800"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Alanı: Orijinal Rozet + Kurumsal Tipografi */}
        <Link href="#hero" className="flex items-center gap-3.5 group">
          <div className="relative h-11 w-11 rounded-lg overflow-hidden border border-amber-400/40 p-1 bg-white/95 shadow-md group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
            <img
              src="/metsanahsaplogo.jpeg"
              alt="Metsan Ahşap Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="border-l border-amber-400/30 pl-3 py-0.5">
            <span className="font-serif tracking-widest text-lg font-bold text-white block leading-tight">
              METSAN <span className="text-amber-400">AHŞAP</span>
            </span>
            <span className="block text-[9px] tracking-[0.22em] text-slate-300 font-sans uppercase">
              Tasarım & Uygulama
            </span>
          </div>
        </Link>

        {/* Masaüstü Menü Linkleri */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-wider text-slate-200 hover:text-amber-400 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Sağ Buton: Lüks Keşif Talebi */}
        <div className="hidden md:flex items-center">
          <a
            href="https://wa.me/905422387979?text=Merhaba,%20Metsan%20Ah%C5%9Fap%20projeleriniz%20hakk%C4%B1nda%20ke%C5%9Fif%20ve%20detayl%C4%B1%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-amber-400/60 bg-amber-400/10 hover:bg-amber-400 text-amber-300 hover:text-slate-950 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-md"
          >
            <span>Keşif & Proje Talebi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Menü"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080d1a] border-b border-slate-800 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800/50"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/905422387979"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-amber-400 bg-amber-400 text-slate-950 py-2.5 rounded-lg text-xs font-semibold mt-3"
          >
            Keşif & Proje Talebi
          </a>
        </div>
      )}
    </nav>
  );
}
