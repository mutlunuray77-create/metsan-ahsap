"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  Layers,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function Catalog() {
  const totalPages = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const pagesData = [
    {
      page: 1,
      badge: "KAPAK & VİZYON",
      title: "Metsan Ahşap Tasarım & Uygulama",
      subtitle: "2026 Mimari & Marin Ahşap Proje Kataloğu",
      description:
        "Yarım asra yaklaşan atölye tecrübesiyle; süperyatlardan lüks villa dış cephelerine, peyzaj deck sistemlerinden konsol merdivenlere uzanan yüksek zanaat ve mühendislik seçkisi.",
      specs: [
        { label: "Üretim Merkezi", val: "Fatsa / Ordu" },
        { label: "Hizmet Ağı", val: "Bodrum, Ege, Karadeniz & Türkiye Geneli" },
        {
          label: "Uzmanlık",
          val: "Marin Güverte, Cephe Louvre, Deck, İç Mimari",
        },
      ],
      points: [
        "1. Sınıf fırınlanmış sert ağaçlar ve sertifikalı hammadde",
        "A4 kalite paslanmaz çelik gizli bağlantı elemanları",
        "3D mimari modelleme ve milimetrik şantiye montajı",
      ],
      image: "/deniz-1.jpeg",
      imageCaption: "Açık Deniz Güverte & Helikopter Pisti İmalatı",
    },
    {
      page: 2,
      badge: "HAMMADDE & MÜHENDİSLİK",
      title: "1. Sınıf Sertifikalı Ağaç Standartları",
      subtitle: "Doğru Ağaç • Doğru Fırınlama • Milimetrik Statik",
      description:
        "Tuzlu su, yüksek UV ve sert iklim koşullarına meydan okuyan, nem dengesi laboratuvar hassasiyetinde ayarlanmış tescilli ağaç türleri.",
      specs: [
        {
          label: "Burma Teak",
          val: "650-750 kg/m³ • Doğal silika ve reçineli marin güverte ağacı",
        },
        {
          label: "Thermo-İroko",
          val: "215°C termal işlem, çürümez sınıf 1 dış cephe standardı",
        },
        {
          label: "Thermo Dişbudak",
          val: "Yüksek lif mukavemeti, boyutsal kararlılık ve zemin direnci",
        },
      ],
      points: [
        "Fırınlanmış kontrollü nem dengesi (%8 - %12 tolerans)",
        "Gıda ve çevre dostu sertifikalı koruyucu doğal yağlar",
        "Nem genleşme boşlukları hesaplanmış altyapı karkası",
      ],
      image: "/mimari-3.jpeg",
      imageCaption: "Doğal Taş & Masif Ahşap Mimari Karkas Uygulaması",
    },
    {
      page: 3,
      badge: "MARİN & SÜPERYAT",
      title: "Denizcilik Güverte Mühendisliği",
      subtitle: "Süperyat, Katamaran ve Butik Tekne İşçiliği",
      description:
        "Açık deniz koşullarına tam dirençli 1. sınıf Burma Tik güverte imalatı. Kavisli basamaklar, gizli LED lineer kanallar ve marin armuz yalıtımında sıfır hata toleransı.",
      specs: [
        { label: "Proje Tipi", val: "Mega Yat Güverte & Helikopter Pisti" },
        { label: "Ağaç Cinsi", val: "1. Sınıf Burma Teak (Tectona grandis)" },
        { label: "İzolasyon", val: "Marin Hibrit Polimer Sika Armuz Fitili" },
      ],
      points: [
        "A4 316L kalite deniz suyu dirençli paslanmaz gizli bağlantılar",
        "Esneme payı bırakılmış marin tutkal ve elastomer armuzlama",
        "Yekpare kavisli basamak dönüşleri ve baş dinlenme platformları",
      ],
      image: "/mimari-4.jpeg",
      imageCaption:
        "LED Aydınlatmalı Kavisli Tik Güverte ve Helikopter İniş Alanı",
    },
    {
      page: 4,
      badge: "MİMARİ CEPHE & LOUVRE",
      title: "Nefes Alan Ahşap Cephe Sistemleri",
      subtitle: "Hava Sirkülasyonlu Karkas & Hareketli Panjur",
      description:
        "Lüks konut ve otel projelerinde modern mimarinin vazgeçilmezi olan dikey ve yatay lamel kaplamalar. Güneş kırıcı hareketli ahşap kanatlarla dört mevsim termal konfor.",
      specs: [
        { label: "Malzeme", val: "Thermo-Wood İroko Lamel & Dişbudak" },
        { label: "Altyapı", val: "Hava Sirkülasyonlu Gizli Alüminyum Karkas" },
        { label: "Mekanizma", val: "Katlanır & Sürgülü Masif Ahşap Louvre" },
      ],
      points: [
        "Gizli klipsli montaj ile yüzeyde vida deliği bırakmayan estetik",
        "Bina cephesinin nefes almasını sağlayan hava tahliye boşlukları",
        "Güneş ve yağmura karşı çift kat koruyucu UV filtreli yağlama",
      ],
      image: "/mimari-5.jpeg",
      imageCaption:
        "Bodrum Villa Projesi - Hareketli Ahşap Panjur ve Lamel Montajı",
    },
    {
      page: 5,
      badge: "DIŞ MEKAN & PEYZAJ",
      title: "Zemin Deck & Havuz Güverteleri",
      subtitle: "Kaymaz Güvenli Zeminler & Kıyı İskeleleri",
      description:
        "Klorlu havuz sularına, deniz dalgalarına ve yoğun ayak trafiğine dayanıklı; kaymaz yüzey işçilikli zemin deck ve özel mimari açık alan üniteleri.",
      specs: [
        { label: "Uygulama", val: "Deniz Kenarı Teras Deck & Masif Duşluk" },
        {
          label: "Karkas Tipi",
          val: "Statik Çelik Omurga & Ahşap Taşıyıcı Izgara",
        },
        { label: "Yüzey Dokusu", val: "Kaymaz Radiuslu Pahlı Kenar İşçiliği" },
      ],
      points: [
        "Su tahliye kanallı eğim hesaplı alt taşıyıcı sistemi",
        "Tuzlu su ve klordan etkilenmeyen özel masif bahçe duşlukları",
        "Ege ve Akdeniz kıyılarında kayalık zemin üzerine stabil montaj",
      ],
      image: "/ozel-3.jpeg",
      imageCaption:
        "Kayalık Sahil Üzerine Kurulan Güneşlenme Ahşap Deck Platformu",
    },
    {
      page: 6,
      badge: "İÇ MEKAN & TAAHHÜT",
      title: "Konsol Yüzer Merdiven & Masif Masalar",
      subtitle: "Statik Keşiften Anahtar Teslim Montaja",
      description:
        "İç mekanlara ferahlık ve heykelsi bir hava katan gizli çelik omurgalı konsol masif merdivenler, cam korkuluklar ve yekpare doğal ceviz masalar.",
      specs: [
        {
          label: "Taşıyıcı Sistem",
          val: "Gizli Çelik Kutu Profil ve Masif Meşe Kılıf",
        },
        { label: "Aydınlatma", val: "Basamak Altı Gizli Lineer LED Kanalları" },
        {
          label: "Taahhüt Süreci",
          val: "Keşif → 3D Tasarım → İmalat → Montaj",
        },
      ],
      points: [
        "Fatsa atölyesinde ön montaj ve sıfır hata tolerans testi",
        "Mimari takvime sadık anahtar teslim şantiye montajı",
        "Projeniz için 7/24 teknik keşif ve keşif danışmanlığı",
      ],
      image: "/ozel-1.jpeg",
      imageCaption: "Gizli Çelik Taşıyıcılı Masif Ahşap Konsol Yüzer Merdiven",
    },
  ];

  const currentData = pagesData[currentPage - 1];

  return (
    <section
      id="katalog"
      className="py-20 bg-[#060a14] text-white border-t border-slate-800 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Üst Başlık Barı */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Editoryal Yayın & Teknik Şartname
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif tracking-tight text-white">
              Metsan Ahşap Ürün Kataloğu
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
              Tüm teknik detayları, ağaç şartnamelerini ve gerçek şantiye
              fotoğraflarını sayfa sayfa inceleyin.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/metsan-ahsap-katalog.pdf"
              download="Metsan_Ahsap_Katalog_2026.pdf"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold px-4 py-2.5 rounded-xl text-xs transition-colors shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>PDF Kataloğu İndir</span>
            </a>
            <a
              href="/metsan-ahsap-katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-slate-700 hover:border-amber-400/50 bg-slate-900/80 text-slate-200 hover:text-white px-3.5 py-2.5 rounded-xl text-xs transition-colors"
            >
              <span>Yeni Sekmede Aç</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>

        {/* ASMAZ AHŞAP MANTIĞINDA GERÇEK ÇİFT TARAFLI EDİTORYAL KATALOG KİTABI */}
        <div className="relative bg-[#0a0f1d] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Üst Durum Çubuğu */}
          <div className="flex items-center justify-between px-6 py-3 bg-[#0d1424] border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-mono text-amber-400 font-semibold tracking-wider">
                SAYFA 0{currentData.page} / 0{totalPages}
              </span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-300 font-medium hidden sm:inline">
                {currentData.badge}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <span>METSAN AHŞAP EDİTORYAL ARŞİV</span>
            </div>
          </div>

          {/* Çift Sayfa Düzeni (Sol: Teknik & Bilgi | Sağ: Büyük Fotoğraf) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            {/* SOL SAYFA: ASMAZ AHŞAP TARZI TEKNİK VE EDİTORYAL ALAN */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0c1322] to-[#090e1a] border-b lg:border-b-0 lg:border-r border-slate-800">
              <div>
                <div className="inline-block px-2.5 py-0.5 bg-amber-400/10 border border-amber-400/30 rounded text-[11px] font-mono text-amber-300 mb-3">
                  {currentData.badge}
                </div>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mb-1.5 leading-snug">
                  {currentData.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-medium text-amber-400/90 mb-4 tracking-wide">
                  {currentData.subtitle}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {currentData.description}
                </p>

                {/* Teknik Şartname Tablo Kartları */}
                <div className="space-y-2 mb-6 bg-black/40 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    Teknik Şartname & Malzeme Künyesi
                  </div>
                  {currentData.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 border-b border-slate-800/50 last:border-0 gap-0.5"
                    >
                      <span className="font-semibold text-slate-200">
                        {spec.label}:
                      </span>
                      <span className="text-slate-400 text-left sm:text-right">
                        {spec.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Öne Çıkan Standartlar */}
                <div className="space-y-1.5">
                  {currentData.points.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-slate-300 font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alt Buton: Doğrudan Teklif Al */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  İmalat Kodu: MTS-2026-0{currentData.page}
                </span>
                <a
                  href={`https://wa.me/905422387979?text=Merhaba,%20Metsan%20Katalog%20Sayfa%20${currentData.page}%20(${encodeURIComponent(currentData.title)})%20hakkında%20keşif%20ve%20teklif%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline decoration-amber-400/40 hover:decoration-amber-300 transition-colors"
                >
                  Bu Sayfa İçin Fiyat & Keşif İste →
                </a>
              </div>
            </div>

            {/* SAĞ SAYFA: BÜYÜK YÜKSEK ÇÖZÜNÜRLÜKLÜ GERÇEK İMALAT FOTOĞRAFI */}
            <div className="lg:col-span-6 relative bg-slate-950 min-h-[360px] lg:min-h-full flex flex-col justify-end overflow-hidden group">
              <img
                src={currentData.image}
                alt={currentData.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Fotoğraf Altı Mimari Bilgi Şeridi */}
              <div className="relative z-10 p-6 flex items-end justify-between">
                <div className="bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 max-w-md">
                  <span className="block text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                    Şantiyeden Uygulama Karesi
                  </span>
                  <p className="text-xs text-white font-medium mt-0.5">
                    {currentData.imageCaption}
                  </p>
                </div>

                <div className="hidden sm:block text-right text-[11px] font-mono text-white/60 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/10">
                  © Metsan Ahşap
                </div>
              </div>

              {/* Sol Ok Butonu */}
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? "opacity-20 cursor-not-allowed bg-black/40 text-slate-500"
                    : "bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 shadow-xl"
                }`}
                aria-label="Önceki Sayfa"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Sağ Ok Butonu */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? "opacity-20 cursor-not-allowed bg-black/40 text-slate-500"
                    : "bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white border border-white/20 shadow-xl"
                }`}
                aria-label="Sonraki Sayfa"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Alt Sayfa Seçim Noktaları */}
          <div className="bg-[#0b1220] border-t border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {pagesData.map((p) => (
                <button
                  key={p.page}
                  onClick={() => setCurrentPage(p.page)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    currentPage === p.page
                      ? "bg-amber-400 text-slate-950 font-bold shadow-md"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  <span>0{p.page}</span>
                  <span className="hidden md:inline text-[11px] font-sans font-normal opacity-80">
                    {p.badge.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>

            <span className="text-[11px] text-slate-400">
              Sayfaları çevirmek için sağ/sol okları veya sayfa numaralarını
              tıklayın
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
