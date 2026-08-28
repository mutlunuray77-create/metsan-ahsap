"use client";

import React from "react";
import { ArrowRight, ShieldCheck, TreePine, Award, Hammer, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 bg-[#0B132B] text-[#F9F7F2] overflow-hidden">
      {/* Arka Plan & Karanlık Degrade Katmanı */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
        style={{ backgroundImage: "url('/dort.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/70" />

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-md">
            <Sparkles size={14} /> Bodrum & Ege Bölgesi Nitelikli Ahşap Mimarisi
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Doğallığı ve Estetiği <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Yaşam Alanlarınıza
            </span> Taşıyoruz.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl">
            Marin Teak & Iroko iskelelerden lüks villa konsol merdivenlerine, tarihi restorasyondan mekana özel butik üretime kadar kusursuz mühendislik imzası.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a 
              href="#talep" 
              className="inline-flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-600/30 hover:scale-105 active:scale-95"
            >
              <span>Ücretsiz Keşif & Teklif Al</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#projeler" 
              className="inline-flex items-center justify-center border border-slate-700 hover:border-amber-500 hover:text-amber-400 bg-slate-900/60 backdrop-blur-md text-slate-200 font-semibold px-8 py-4 rounded-xl transition"
            >
              Tamamlanan Projeler
            </a>
          </div>
        </div>

        {/* Neden Biz? Barı */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Award size={24} />
            </div>
            <div>
              <div className="text-xl font-bold text-white">30+ Yıl</div>
              <div className="text-xs text-slate-400 font-medium">Kuşaktan Kuşağa Ustalık</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <TreePine size={24} />
            </div>
            <div>
              <div className="text-xl font-bold text-white">1. Sınıf Masif</div>
              <div className="text-xs text-slate-400 font-medium">Sertifikalı Teak & Meşe</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-xl font-bold text-white">%100 Dayanım</div>
              <div className="text-xs text-slate-400 font-medium">Marin Statik & Koruma</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Hammer size={24} />
            </div>
            <div>
              <div className="text-xl font-bold text-white">Butik Üretim</div>
              <div className="text-xs text-slate-400 font-medium">Milimetrik Montaj</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}