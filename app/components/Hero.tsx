"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Arka Plan Videosu */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        {/* Karartma ve Şık Gradyan Katmanı */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-black/50 to-black/70" />
      </div>

      {/* İçerik / Tipografi */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16">
        {/* Üst Rozet / Alt Başlık */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium tracking-[0.25em] uppercase mb-8 backdrop-blur-sm animate-fade-in">
          Metsan Ahşap • Ustalık • Mimari • Denizcilik
        </div>

        {/* Ana Başlık */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl drop-shadow-lg">
          AHŞABIN SINIRLARINI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400">
            YENİDEN İNŞA EDİYORUZ.
          </span>
        </h1>

        {/* Açıklama Metni */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10">
          METSAN AHŞAP, geleneksel ustalığı modern üretim anlayışıyla
          birleştirerek ahşaptan kalıcı yapılar, özel tasarımlar ve büyük
          ölçekli marin projeler üretiyor.
        </p>

        {/* Aksiyon Butonları */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#uzmanlik"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#c39e2d] text-slate-950 font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 group"
          >
            <span>Projelerimizi Keşfedin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/905422387979?text=Merhaba,%20projemiz%20için%20fiyat%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-8 py-3.5 rounded-lg text-sm backdrop-blur-sm transition-all duration-300"
          >
            <span>Teklif Al</span>
            <ArrowRight className="w-4 h-4 opacity-70" />
          </a>
        </div>
      </div>

      {/* Alt Yumuşak Geçiş Gradyanı */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070b14] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
