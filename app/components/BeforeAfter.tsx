"use client";

import React, { useState } from "react";
import { Sliders, Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="hikayemiz" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles size={16} /> Köklü Ustalık Mirası
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Bir Ağacın Hikâyesi, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Bir Ustalığın İmzası.
              </span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-base">
              Bodrum’un tuzlu deniz rüzgârlarına karşı duran marin Teak iskelelerden, statik çelik karkas mühendisliğine kadar; zanaatı ve modern tekniği tek potada eritiyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-3xl font-black text-amber-400">Statik Karkas</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Çelik & Ahşap Taşıyıcı</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-3xl font-black text-emerald-400">Marin Kalite</div>
                <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Teak & Iroko Standartı</div>
              </div>
            </div>
          </div>

          {/* Before/After Kartı */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Zaman Değişti. Ustalık Değişmedi.</span>
              <span className="text-xs text-slate-400 font-medium">Kaydırıcıyı Sürükleyin ↔</span>
            </div>

            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden select-none border border-slate-800 bg-slate-900">
              
              {/* Sonraki Hal (After) */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)` }}
              >
                <img 
                  src="/after.jpeg" 
                  alt="Bitmiş Lüks Teak İskele"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md pointer-events-none">
                  BİTMİŞ PROJE
                </div>
              </div>

              {/* Önceki Hal (Before) */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
              >
                <img 
                  src="/before.jpeg" 
                  alt="Şantiye Çelik Karkas Aşaması"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-amber-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md pointer-events-none">
                  ŞANTİYE & MÜHENDİSLİK
                </div>
              </div>

              {/* Sürükleme Çizgisi */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_12px_rgba(255,255,255,0.9)]" 
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white text-slate-900 p-2 rounded-full shadow-2xl hover:scale-110 transition-transform">
                  <Sliders size={16} />
                </div>
              </div>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="w-full mt-5 accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}