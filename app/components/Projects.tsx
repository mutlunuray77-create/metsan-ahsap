"use client";

import React, { useState } from "react";
import { ArrowUpRight, X, Sparkles, ShieldCheck, Compass } from "lucide-react";

interface ProjectItem {
  id: string;
  category: "all" | "marin" | "cephe" | "deck" | "ic-mekan";
  categoryLabel: string;
  title: string;
  tagline: string;
  material: string;
  coverImage: string;
  description: string;
  specs: string[];
  gallery: {
    title: string;
    url: string;
  }[];
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const projects: ProjectItem[] = [
    {
      id: "marin-1",
      category: "marin",
      categoryLabel: "Marin Ahşap",
      title: "Denizcilik & Marin Ahşap",
      tagline:
        "Açık deniz ve tuzlu su şartlarına tam dayanıklı güverte ve armuz mühendisliği.",
      material: "1. Sınıf Burma Teak • Marin Armuz • A4 Paslanmaz",
      coverImage: "/deniz-1.jpeg",
      description:
        "Tuzlu su, yüksek UV ve sert açık deniz şartlarına karşı en üstün direnci sunan Burma Tik ağacı, marin armuz yalıtımı ve paslanmaz altyapıyla süperyat güverteleri ve deniz iskeleleri imalatı.",
      specs: [
        "1. Sınıf Burma Teak Güverte Kaplaması",
        "Marin Sika & Armuz Yalıtım Sistemleri",
        "Kavisli Basamak & Gizli LED Aydınlatma",
        "A4 Paslanmaz Çelik Gizli Bağlantı Elemanları",
      ],
      gallery: [
        { title: "Süperyat Güverte & Helikopter Pisti", url: "/deniz-1.jpeg" },
        { title: "Açık Deniz Ahşap İskele Platformu", url: "/deniz-2.jpeg" },
        { title: "Su Üstü Masif Ahşap Loca İmalatı", url: "/deniz-4.jpeg" },
        { title: "Tik Güverte Özel Kamara İşçiliği", url: "/deniz-5.jpeg" },
      ],
    },
    {
      id: "cephe-1",
      category: "cephe",
      categoryLabel: "Mimari & Cephe",
      title: "Mimari & Cephe Uygulamaları",
      tagline:
        "Hava sirkülasyonlu, gizli karkaslı modern villa ve dış cephe louvre sistemleri.",
      material: "Thermo-İroko • Gizli Alüminyum Karkas • Ahşap Panjur",
      // Kapak görseli olarak doğrudan modern villa lamel cephesini veya hareketli panjuru koyuyoruz:
      coverImage: "/mimari-2.jpeg",
      description:
        "Dört mevsim dış iklim koşullarına dayanıklı termal işlem görmüş iroko profiller, hareketli ahşap güneş kırıcı panjurlar ve hava sirkülasyonlu modern mimari dış cephe louvre sistemleri.",
      specs: [
        "Thermo-Wood İroko & Dişbudak Profiller",
        "Güneş Kırıcı Hareketli Louvre & Panjur Sistemleri",
        "Hava Sirkülasyonlu ve Isı Köprüsüz Alt Karkas",
        "Gizli Klipsli Çivisiz Dış Cephe Montajı",
      ],
      gallery: [
        { title: "Modern Villa Lamel Dış Cephe", url: "/mimari-2.jpeg" },
        {
          title: "Villa Dış Cephe Hareketli Ahşap Panjur",
          url: "/mimari-5.jpeg",
        },
        {
          title: "Doğal Taş & Masif Ahşap Entegrasyonu",
          url: "/mimari-3.jpeg",
        },
        { title: "Güneş Kırıcı Ahşap Lamel Sistemleri", url: "/mimari-4.jpeg" },
      ],
    },
    {
      id: "deck-1",
      category: "deck",
      categoryLabel: "Dış Mekan & Deck",
      title: "Dış Mekan & Deck Sistemleri",
      tagline:
        "Islak zeminlerde kaymaz, su tahliyeli profesyonel teras ve havuz karkasları.",
      material: "Doğal İroko • Teak • Klor & Su Dirençli Yağlar",
      // Duşluk ünitesi ve açık hava zeminleri tam olarak bu alana ait:
      coverImage: "/dismekan-1.jpeg",
      description:
        "Klorlu havuz sularına, yoğun güneş ışığına ve neme karşı özel yağlarla korunan; su tahliye kanallı gizli karkas üzerine kaymaz ahşap deck ve açık alan mimari üniteleri.",
      specs: [
        "Havuz Kenarı & Bahçe Kaymaz Ahşap Deck",
        "Masif Ahşap Açık Alan Bahçe Duşluk Üniteleri",
        "Eğimli Zeminlere Özel Statik Taşıyıcı Karkas",
        "Gizli Klipsli Su Tahliyeli Zemin Montajı",
      ],
      gallery: [
        {
          title: "Masif Ahşap Açık Alan Bahçe Duşluğu",
          url: "/dismekan-1.jpeg",
        },
        {
          title: "Deniz Kenarı Teras Deck & Merdiven",
          url: "/dismekan-2.jpeg",
        },
        { title: "Havuz Başı İroko Güverte Zemin", url: "/dismekan-3.jpeg" },
        {
          title: "Geniş Manzara Terası Masif Zemin Kaplama",
          url: "/dismekan-4.jpeg",
        },
      ],
    },
    {
      id: "ic-mekan-1",
      category: "ic-mekan",
      categoryLabel: "Özel Ahşap & İç Mekan",
      title: "Özel Ahşap & İç Mekan",
      tagline:
        "LED lineer konsol yüzer merdivenler, yekpare masalar ve butik mimari zanaat.",
      material: "Masif Meşe • Doğal Ceviz • Cam & Çelik Taşıyıcı",
      coverImage: "/ozel-1.jpeg",
      description:
        "İç mekanlarda ferahlık sağlayan gizli çelik omurgalı yüzer konsol merdivenler, lamine cam korkuluklar, yekpare masif ceviz masalar ve mekana özel butik zanaat çözümleri.",
      specs: [
        "Gizli Çelik Taşıyıcılı Konsol Yüzer Merdiven",
        "Basamak Altı Gizli LED Lineer Aydınlatma",
        "Lamine Cam Korkuluk Entegrasyonu",
        "Projeye Özel Butik Masif Mobilya & Panel İmalatı",
      ],
      gallery: [
        {
          title: "LED Aydınlatmalı Konsol Yüzer Merdiven",
          url: "/ozel-1.jpeg",
        },
        { title: "Cam Korkuluklu Masif Basamak Sistemi", url: "/ozel-2.jpeg" },
        { title: "Yekpare Masif Ağaç Salon Masası", url: "/ozel-3.jpeg" },
        {
          title: "Özel Ahşap Bölme & Akustik Duvar Paneli",
          url: "/ozel-4.jpeg",
        },
      ],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const tabs = [
    { key: "all", label: "Tüm Projeler" },
    { key: "marin", label: "Marin Ahşap" },
    { key: "cephe", label: "Mimari & Cephe" },
    { key: "deck", label: "Dış Mekan & Deck" },
    { key: "ic-mekan", label: "Özel Ahşap" },
  ];

  return (
    <section
      id="uzmanlik"
      className="py-24 bg-[#080d1a] text-white border-t border-slate-800/80 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Üst Başlık & Sekmeler */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              Üretim & Taahhüt Portfolyosu
            </div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white">
              Uzmanlık Alanlarımız
            </h2>
          </div>

          {/* Filtre Sekmeleri */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all ${
                  activeTab === tab.key
                    ? "bg-amber-400 text-slate-950 font-semibold shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Ana Kart Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0d1527] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 cursor-pointer flex flex-col shadow-xl"
            >
              {/* Kapak Görseli */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-medium text-amber-300">
                  {project.categoryLabel}
                </div>
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bilgi Alanı */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-wider block mb-1">
                    {project.material}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-amber-400 font-medium">
                  <span>Detayları ve Fotoğrafları İncele</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP / MODAL GALERİSİ */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b1220] border border-slate-700/80 rounded-2xl overflow-y-auto p-6 md:p-8 text-white shadow-2xl">
            {/* Kapat Butonu */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Başlık Alanı */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                {selectedProject.categoryLabel} • TEKNİK DETAYLAR
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Teknik Özellikler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 bg-slate-900/70 p-4 rounded-xl border border-slate-800">
              {selectedProject.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-slate-300"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 4 Fotoğraflı Galeri */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Uygulama ve İmalat Görselleri
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.gallery.map((g, idx) => (
                  <div
                    key={idx}
                    className="relative h-44 rounded-xl overflow-hidden border border-slate-800 bg-slate-950"
                  >
                    <img
                      src={g.url}
                      alt={g.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <p className="text-[11px] font-medium text-white">
                        {g.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teklif Al Butonu */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Bu alandaki projeniz için keşif ve mimari detay görüşmesi
                başlatın.
              </span>
              <a
                href={`https://wa.me/905422387979?text=Merhaba,%20${encodeURIComponent(
                  selectedProject.title,
                )}%20hakkında%20bilgi%20ve%20fiyat%20teklifi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-6 py-2.5 rounded-lg text-xs transition-colors"
              >
                Bu Proje İçin Teklif Alın
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
