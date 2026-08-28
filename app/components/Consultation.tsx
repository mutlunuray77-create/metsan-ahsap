"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Consultation() {
  const [selectedNeed, setSelectedNeed] = useState("Evim için ahşap çözüm arıyorum");
  const [submitted, setSubmitted] = useState(false);

  const projectNeeds = [
    { id: "home", label: "🏠 Ev / Villa Ahşap Çözüm" },
    { id: "commercial", label: "🏢 Otel / Restoran İskelesi" },
    { id: "custom", label: "🪵 Özel Konsol Merdiven" },
    { id: "restoration", label: "🔨 Restorasyon & Tarihi Yapı" },
    { id: "info", label: "💬 Keşif & Bilgi Talebi" },
  ];

  return (
    <section id="talep" className="py-24 bg-[#0B132B] text-slate-100 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
            Hızlı Keşif & Fiyatlandırma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projenizi Birlikte Hayata Geçirelim
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            İhtiyacınızı seçin, ekibimiz projeniz için yerinde keşif ve malzeme planlaması sağlasın.
          </p>
        </div>

        {/* Seçenek Butonları */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {projectNeeds.map((need) => (
            <button
              key={need.id}
              onClick={() => setSelectedNeed(need.label)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedNeed === need.label
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              {need.label}
            </button>
          ))}
        </div>

        {/* Form Alanı */}
        {submitted ? (
          <div className="bg-slate-900/90 p-10 rounded-3xl border border-emerald-500/40 text-center animate-in fade-in">
            <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Talebiniz Başarıyla Alındı!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Metsan Ahşap proje koordinatörümüz belirttiğiniz telefon numarası üzerinden en kısa sürede sizinle iletişime geçecektir.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-slate-900/90 p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl space-y-5"
          >
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Seçilen Kategori: {selectedNeed}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Adınız Soyadınız *</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Örn: Ahmet Yılmaz" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Telefon Numaranız *</label>
                <input 
                  required 
                  type="tel" 
                  placeholder="05XX XXX XX XX" 
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Proje Detayları / Notunuz</label>
              <textarea 
                rows={3} 
                placeholder="Bodrum Yalıkavak'taki villa için Teak iskele ve konsol merdiven keşfi talep ediyoruz..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-amber-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
            >
              <Send size={18} />
              <span>Teklif & Danışmanlık Talebi Gönder</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}