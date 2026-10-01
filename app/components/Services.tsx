"use client";

import React from "react";
import {
  Anchor,
  ShieldCheck,
  Ruler,
  Sparkles,
  Hammer,
  Truck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Anchor,
      title: "Marin & Yat Ahşap İmalatı",
      badge: "Süperyat & Tekne",
      desc: "Tuzlu su ve yüksek UV şartlarına tam dirençli Burma Tik güverte imalatı, marin armuz yalıtımı ve kamara içi özel masif işçiliği.",
    },
    {
      icon: ShieldCheck,
      title: "Mimari Dış Cephe & Lamel",
      badge: "Villa & Konut",
      desc: "Thermo-Wood iroko ve dişbudak profillerle nefes alan, gizli karkaslı, hava sirkülasyonlu lüks villa cephe ve louvre sistemleri.",
    },
    {
      icon: Sparkles,
      title: "Havuz Kenarı & Teras Deck",
      badge: "Islak Hacim",
      desc: "Klor ve güneş ışınlarına dayanıklı kaymaz ahşap güverte uygulamaları, su tahliyeli gizli taşıyıcı altyapı ve peyzaj entegrasyonu.",
    },
    {
      icon: Hammer,
      title: "Konsol Merdiven & Masif Masalar",
      badge: "Özel Tasarım",
      desc: "Gizli çelik taşıyıcılı havada duran masif ahşap merdivenler, yekpare doğal ceviz masalar ve butik iç mimari imalatlar.",
    },
    {
      icon: Ruler,
      title: "Statik & Proje Danışmanlığı",
      badge: "Mühendislik",
      desc: "Ağacın nem dengesi, termal genleşme payları ve paslanmaz metal bağlantılarının mimari çizimlere tam uyumlu statik analizi.",
    },
    {
      icon: Truck,
      title: "Anahtar Teslim Şantiye Montajı",
      badge: "Taahhüt",
      desc: "Fatsa atölyemizden Bodrum, Ege ve Karadeniz şantiyelerine uzanan uzman ekibimizle milimetrik ve hatasız saha montajı.",
    },
  ];

  return (
    <section
      id="hizmetler"
      className="py-24 bg-[#0a0f1d] text-white border-t border-slate-800 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Hizmetlerimiz
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            Sadece Ahşap Değil, <br />
            <span className="text-amber-400">Mimari Çözüm Ortağınız.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Marin standartlardan lüks konut mimarisine uzanan tüm ahşap taahhüt
            süreçlerinde yüksek mühendislik ve zanaat güvencesi sunuyoruz.
          </p>
        </div>

        {/* 6'lı Modern Hizmet Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            const whatsappUrl = `https://wa.me/905422387979?text=${encodeURIComponent(
              `Merhaba, Metsan Ahşap "${srv.title}" hizmetiniz hakkında detaylı bilgi ve teknik keşif talep ediyorum.`,
            )}`;

            return (
              <div
                key={idx}
                className="group relative bg-[#0e1629] p-8 rounded-2xl border border-slate-800/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Tıklanabilir Buton */}
                <div className="mt-8 pt-4 border-t border-slate-800/60">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-amber-400 hover:text-amber-300 font-medium group-hover:translate-x-1 transition-all py-1"
                  >
                    <span>Detaylı Bilgi & Keşif</span>
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
