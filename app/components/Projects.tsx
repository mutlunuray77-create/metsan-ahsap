"use client";

import React, { useState } from "react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    { 
      id: 1, 
      category: "deck", 
      title: "Kıyı Bungalov & İskele Bağlantı Yolu", 
      location: "Bodrum / Sahil Şeridi",
      image: "/bir.jpeg",
      craft: "Deniz üzeri basamaklı ahşap yürüme yolu, özel ahşap panjur ve saz çatılı dinlenme evi entegrasyonu."
    },
    { 
      id: 2, 
      category: "deck", 
      title: "Geniş Güneşlenme Deck Platformu & Loca", 
      location: "Türkbükü / Bodrum",
      image: "/iki.jpeg",
      craft: "Güneşe ve tuza tam dayanımlı marin Teak zemin kaplaması, halat korkuluklu özel dinlenme alanı."
    },
    { 
      id: 3, 
      category: "stairs", 
      title: "LED Aydınlatmalı Konsol Merdiven & Cam Korkuluk", 
      location: "Lüks Villa İç Mekan",
      image: "/uc.jpeg",
      craft: "Duvar içi gizli çelik taşıyıcılar, masif meşe basamak altı lineer aydınlatma ve temperli cam paneller."
    },
    { 
      id: 4, 
      category: "deck", 
      title: "Marin Halat Korkuluklu Ana Yat İskelesi", 
      location: "Marina & Sahil Hattı",
      image: "/dort.jpeg",
      craft: "Statik çelik kazık karkas üzerine simetrik güneşlenme cepleri ve marin sınıfı halatlı baba sistemi."
    }
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section id="projeler" className="py-24 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              Uygulama Örneklerimiz
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ahşabın Hayata Dokunduğu Yerler
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tüm Projeler" },
              { id: "deck", label: "Deck & İskele" },
              { id: "stairs", label: "Konsol Merdiven" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30 scale-105"
                    : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4'lü Proje Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 h-[380px] sm:h-[440px] flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 hover:border-amber-500/50"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
              
              <div className="relative z-20">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700">
                  {p.location}
                </span>
                <h5 className="text-xl font-bold text-white mt-3 group-hover:text-amber-400 transition-colors">
                  {p.title}
                </h5>
                <p className="text-xs text-slate-300 mt-2 font-medium leading-relaxed">
                  {p.craft}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}