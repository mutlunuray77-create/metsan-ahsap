"use client";

import React from "react";
import { Users, Lightbulb, ShieldCheck, Factory } from "lucide-react";

export default function History() {
  const values = [
    {
      icon: Users,
      title: "Profesyonel Ekip",
      description:
        "Yarım asra yaklaşan atölye ve şantiye tecrübemizle, her projenin kendine has mimari ve statik ihtiyaçlarını derinlemesine analiz ediyoruz. Lüks villa projelerinden mega yat güvertelerine kadar her aşamada uzman zanaatkarlarımızla anahtar teslim mühendislik çözümleri sunuyoruz.",
    },
    {
      icon: Lightbulb,
      title: "Yaratıcı & Yenilikçi",
      description:
        "Geleneksel ahşap ustalığını ileri teknolojiyle buluşturuyoruz. Dış mekan koşullarına, deniz suyuna ve yüksek neme meydan okuyan fırınlanmış sert ağaçlar, esnek lamel uygulamaları ve hava sirkülasyonlu louvre cephe sistemleriyle modern mimarinin sınırlarını genişletiyoruz.",
    },
    {
      icon: ShieldCheck,
      title: "Kalite Anlayışı",
      description:
        "Kaliteyi bir standart değil, vazgeçilmez bir imalat ilkesi olarak görüyoruz. A4 kalite paslanmaz çelik bağlantılar, marin sınıfı tutkallar, sertifikalı 1. sınıf Burma Teak ve Thermo-Wood hammaddeler ile milimetrik işçilik kalitesini bir araya getiriyoruz.",
    },
    {
      icon: Factory,
      title: "Endüstriyel & Taahhüt",
      description:
        "Fatsa merkez üretim atölyemizden Bodrum, Ege ve Marmara şantiyelerine uzanan organize montaj ağımızla hareket ediyoruz. Mimari takvimlerinize tam sadakat göstererek projelerinizi zamanında, eksiksiz ve en yüksek işçilik toleransıyla teslim ediyoruz.",
    },
  ];

  return (
    <section
      id="hakkimizda"
      className="relative bg-[#070b14] text-white py-24 border-t border-slate-800 overflow-hidden scroll-mt-16"
    >
      {/* Sinematik Koyu Arka Plan Dokusu */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/arkaplan.jpeg"
          alt="Metsan Ahşap Arka Plan"
          className="w-full h-full object-cover opacity-30 brightness-90 contrast-125 saturate-75"
        />
        {/* Çok Katmanlı Yumuşak Karartma Perdesi */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-[#070b14]/75 to-[#070b14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/90 via-transparent to-[#070b14]/90" />
      </div>

      {/* Üst Kısım: Hikaye & Kimlik */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-300 text-xs font-mono uppercase tracking-wider mb-4 backdrop-blur-md">
          HAKKIMIZDA & KURUMSAL
        </div>

        <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-8 drop-shadow">
          Ahşabın Doğallığını, <br />
          <span className="text-amber-400">
            Yüksek Zanaat ve Mühendislikle
          </span>{" "}
          Buluşturuyoruz.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-200 font-light leading-relaxed">
          <div className="lg:col-span-6 space-y-4 bg-black/45 p-7 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <p>
              <strong className="text-white font-medium">
                Metsan Ahşap Tasarım & Uygulama
              </strong>
              ; köklü atölye kültürünü modern mimarlık pratikleriyle
              birleştiren, lüks konutlardan süperyat marin güvertelerine uzanan
              geniş bir alanda faaliyet gösteren profesyonel bir taahhüt
              firmasıdır.
            </p>
            <p>
              Bizim için ahşap; yalnızca bir yapı malzemesi değil, yaşayan,
              mekanlara kimlik kazandıran ve doğru işlendiğinde nesiller boyu
              dayanıklılığını koruyan mimari bir değerdir. Bu bilinçle, her
              projeye özel ağaç seçimi, doğru fırınlama ve koruyucu kimyasal
              standartlarını titizlikle tayin ediyoruz.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-4 bg-black/45 p-7 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <p>
              Fatsa merkezli donanımlı üretim tesisimiz, Bodrum ve Ege
              kıyılarındaki prestijli projelerin yanı sıra Türkiye genelinde
              seçkin mimarlık ofisleri ve inşaat yöneticileriyle çözüm ortaklığı
              yürütmektedir.
            </p>
            <p>
              3D detaylandırmadan şantiyedeki son montaj vidasına kadar sürecin
              her adımını şeffaf, statik hesaplamalara uygun ve taahhüt edilen
              teslim takvimine sadık kalarak yönetiyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Alt Kısım: 4 Kolonlu Kurumsal Değerler Kartları */}
      <div className="relative z-10 border-t border-slate-800/80 bg-black/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col border-l border-amber-500/30 pl-6 hover:border-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
