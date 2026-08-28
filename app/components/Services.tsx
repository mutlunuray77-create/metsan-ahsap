"use client";

import React, { useState } from "react";
import { ChevronRight, X, Compass, Hammer, Sparkles, Layers, ShieldCheck, Home } from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [modalItem, setModalItem] = useState<{title: string, cat: string, tree: string, desc: string, care: string} | null>(null);

  const items = [
    {
      id: 1,
      cat: "dis",
      title: "Lüks Teak & Iroko Deniz İskelesi",
      tree: "Burma Teak / Afrika Iroko",
      image: "/dort.jpeg",
      desc: "Tuzlu deniz suyu, dalga basıncı ve yoğun güneş ışınlarına karşı özel statik çelik kazık üzerine marin geçme sistemli iskeleler.",
      care: "Yılda 1 kez sezon başında marin tik yağı uygulaması önerilir.",
      icon: <Compass size={22} className="text-amber-400" />
    },
    {
      id: 2,
      cat: "ic",
      title: "LED Lineer Konsol Yüzer Merdiven",
      tree: "Masif Meşe / Amerikan Ceviz",
      image: "/uc.jpeg",
      desc: "Gizli duvar içi çelik konsollarla taşınan, basamak altı sensörlü LED lineer aydınlatmalı ve 10+10 mm temperli lamine cam korkuluklu merdivenler.",
      care: "Hafif nemli mikrofiber bez ve doğal ahşap sabunuyla temizlenmelidir.",
      icon: <Hammer size={22} className="text-amber-400" />
    },
    {
      id: 3,
      cat: "dis",
      title: "Pergola, Kamelya & Kıyı Bungalov",
      tree: "Termo-Çam / Lamine Kestane",
      image: "/bir.jpeg",
      desc: "Dış mekan iklim koşullarına dayanıklı, gölgelendirme panjurlu ve basamaklı sahil bağlantısına sahip butik dinlenme mekanları.",
      care: "2 yılda bir UV koruyucu emprenye cila bakımı uygulanır.",
      icon: <Home size={22} className="text-amber-400" />
    },
    {
      id: 4,
      cat: "dis",
      title: "Geniş Güneşlenme Deck Platformu",
      tree: "Fırınlanmış Iroko / Teak",
      image: "/iki.jpeg",
      desc: "Gizli klips vidalama ile ayak basma konforu sağlayan havuz ve deniz kenarı dinlenme alanı ahşap zemin çözümleri.",
      care: "Periyodik sistre ve yüksek su itici marin yağ koruması.",
      icon: <Layers size={22} className="text-amber-400" />
    },
    {
      id: 5,
      cat: "ozel",
      title: "Statik Karkas & Çelik Taşıyıcı Sistem",
      tree: "Korozyon Korumalı Marin Çelik & Ahşap",
      image: "/before.jpeg",
      desc: "Deniz içi ve kıyı yapılarında ağır yüklere ve dalga dinamiğine dayanıklı mühendislik hesaplı alt karkas kurulumları.",
      care: "5 yılda bir katodik ve karkas bağlantı kontrolü önerilir.",
      icon: <ShieldCheck size={22} className="text-amber-400" />
    },
    {
      id: 6,
      cat: "ozel",
      title: "Kişiye Özel Butik Tasarım & İmalat",
      tree: "Masif Doğal Ağaç Seçenekleri",
      image: "/after.jpeg",
      desc: "Mimari projelerinize tam uyumlu, ölçüye özel üretilen lüks ahşap detaylar ve ince işçilik çözümleri.",
      care: "Kullanılan masif ağaç türüne uygun periyodik doğal yağlama.",
      icon: <Sparkles size={22} className="text-amber-400" />
    }
  ];

  const filtered = activeCategory === "all" ? items : items.filter(i => i.cat === activeCategory);

  return (
    <section id="hizmetler" className="py-24 bg-[#0B132B] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Görsel Vitrin & Katalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Faaliyet Alanlarımız & İmalatlarımız
            </h2>
          </div>

          {/* Kategori Seçici */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tüm Hizmetler" },
              { id: "dis", label: "Dış Mekan (İskele & Deck)" },
              { id: "ic", label: "İç Mekan (Merdiven)" },
              { id: "ozel", label: "Özel Tasarım & Statik" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Görselli Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div 
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/60 transition-all duration-500 min-h-[380px] flex flex-col justify-between p-6 shadow-xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.28] group-hover:brightness-[0.38]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />

              {/* Üst Kısım */}
              <div className="relative z-20">
                <div className="w-11 h-11 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 flex items-center justify-center mb-4 shadow-md">
                  {item.icon}
                </div>
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {item.tree}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Alt Kısım */}
              <div className="relative z-20 mt-6">
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                  {item.desc}
                </p>
                <button 
                  onClick={() => setModalItem(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 hover:bg-amber-600 border border-slate-700 hover:border-amber-500 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-between"
                >
                  <span>Teknik & Bakım Detayları</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detay Popup Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white p-8 rounded-3xl max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in-95">
            <button 
              onClick={() => setModalItem(null)} 
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X size={22} />
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Katalog Bilgisi
            </span>
            <h4 className="text-2xl font-bold text-white mt-3 mb-2">{modalItem.title}</h4>
            
            <div className="my-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold text-amber-400 uppercase mb-1">Kullanılan Ağaç Türü / Malzeme:</div>
              <div className="text-sm font-semibold text-slate-200">{modalItem.tree}</div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">{modalItem.desc}</p>
            
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6">
              <div className="text-xs font-bold text-emerald-400 uppercase mb-1">Bakım & Koruma Talimatı:</div>
              <div className="text-xs text-slate-400">{modalItem.care}</div>
            </div>

            <a 
              href="#talep" 
              onClick={() => setModalItem(null)}
              className="block text-center bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 rounded-xl transition text-sm shadow-lg shadow-amber-600/30"
            >
              Bu Proje İçin Keşif & Fiyat İste
            </a>
          </div>
        </div>
      )}
    </section>
  );
}