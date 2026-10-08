"use client";

import React, { useState } from "react";
import { Ship, Home, Trees, Sparkles, ZoomIn, X } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "TÜM PROJELER", icon: Sparkles },
    { id: "deniz", name: "DENİZCİLİK & GÜVERTE", icon: Ship },
    { id: "mimari", name: "MİMARİ & DIŞ CEPHE", icon: Home },
    { id: "dismekan", name: "DIŞ MEKAN & DECK", icon: Trees },
    { id: "ozel", name: "ÖZEL İÇ MEKAN & MERDİVEN", icon: Sparkles },
  ];

  // Her kategoride tam 8'er adet proje fotoğrafı
  const projects = [
    // ---------------- DENİZCİLİK & GÜVERTE (8 ADET) ----------------
    {
      id: 1,
      category: "deniz",
      title: "Süperyat Tik Güverte & Helikopter Pisti",
      desc: "Burma Tik marin armuz ve milimetrik kavisli güverte kaplaması",
      image: "/deniz-1.jpeg",
      tag: "Süperyat Güverte",
    },
    {
      id: 2,
      category: "deniz",
      title: "Özel Tasarım Marin Güverte İmalatı",
      desc: "Tuzlu suya ve zorlu açık deniz koşullarına tam dirençli ahşap",
      image: "/deniz-2.jpeg",
      tag: "Marin Ahşap",
    },
    {
      id: 3,
      category: "deniz",
      title: "Kavisli Yat Güverte Basamakları",
      desc: "Gizli LED lineer kanalları ve yekpare kavisli basamak zanaati",
      image: "/deniz-3.jpeg",
      tag: "Kavisli İmalat",
    },
    {
      id: 4,
      category: "deniz",
      title: "Açık Deniz Tik Kaplama İskele",
      desc: "A4 kalite paslanmaz çelik gizli bağlantılı güverte altyapısı",
      image: "/deniz-4.jpeg",
      tag: "Tik Güverte",
    },
    {
      id: 5,
      category: "deniz",
      title: "Lüks Motoryat Baş Güverte Platformu",
      desc: "Yüksek UV filtreli özel marin yağlama ve dikişsiz armuz fitil",
      image: "/deniz-7.jpeg",
      tag: "Yat Güverte",
    },
    {
      id: 6,
      category: "deniz",
      title: "Katamaran Kıç Güverte Dinlenme Alanı",
      desc: "1. sınıf fırınlanmış Burma Tik ahşap ile açık deniz konforu",
      image: "/deniz-8.jpeg",
      tag: "Katamaran Ahşap",
    },
    {
      id: 7,
      category: "deniz",
      title: "Marin Kokpit & Entegre Masif Donanım",
      desc: "Hassas CNC kesim ve el işçiliğiyle üretilmiş marin detaylar",
      image: "/deniz-9.jpeg",
      tag: "Kokpit Güverte",
    },
    {
      id: 8,
      category: "deniz",
      title: "Mega Yat Yüzme Platformu Kaplaması",
      desc: "Sürekli su temasına dayanıklı özel izolasyon ve elastik mastikleme",
      image: "/deniz-10.jpeg",
      tag: "Yüzme Platformu",
    },

    // ---------------- MİMARİ & DIŞ CEPHE (8 ADET) ----------------
    {
      id: 9,
      category: "mimari",
      title: "Bodrum Villa Ahşap Louvre & Panjur",
      desc: "Güneş kırıcı hareketli ahşap panjur ve modern lamel cephe",
      image: "/mimari-5.jpeg",
      tag: "Dış Cephe Louvre",
    },
    {
      id: 10,
      category: "mimari",
      title: "Doğal Taş & Masif Ahşap Villa Karkası",
      desc: "Doğal dokuların modern mimari çizgilerle harmanlandığı lüks villa",
      image: "/mimari-3.jpeg",
      tag: "Ahşap & Taş",
    },
    {
      id: 11,
      category: "mimari",
      title: "Modern Giriş Saçak & Tavan Lamel Sistemi",
      desc: "Hava sirkülasyonlu gizli karkas ve gizli aydınlatma detayları",
      image: "/mimari-1.jpeg",
      tag: "Tavan Kaplama",
    },
    {
      id: 12,
      category: "mimari",
      title: "Thermo-Wood Dikey Cephe Kaplaması",
      desc: "Dış hava koşullarına dayanıklı termal modifiye edilmiş doğal ahşap",
      image: "/mimari-2.jpg",
      tag: "Dikey Cephe",
    },
    {
      id: 13,
      category: "mimari",
      title: "Geniş Açıklıklı Ahşap Pergola & Gölgelik",
      desc: "Statik çelik takviyeli taşıyıcı kirişler ve masif lamel gölgelik",
      image: "/mimari-7.jpeg",
      tag: "Villa Pergola",
    },
    {
      id: 14,
      category: "mimari",
      title: "Akıllı Hareketli Ahşap Kanat Panjur",
      desc: "Güneş açısına göre yönlenen motorlu ve kayar ahşap panjur sistemi",
      image: "/mimari-8.jpeg",
      tag: "Güneş Kırıcı",
    },
    {
      id: 15,
      category: "mimari",
      title: "Taş Ev Modern Ahşap Saçak & Alınlık",
      desc: "Geleneksel dokuya sadık kalınarak üretilen modern fırınlanmış ahşap",
      image: "/mimari-9.jpeg",
      tag: "Ahşap Saçak",
    },
    {
      id: 16,
      category: "mimari",
      title: "Boutique Otel Ahşap Cephe Giydirme",
      desc: "Gizli klips montajı ile yüzeyde vida izi bırakmayan kusursuz estetik",
      image: "/mimari-10.jpeg",
      tag: "Cephe Giydirme",
    },

    // ---------------- DIŞ MEKAN & DECK (8 ADET) ----------------
    {
      id: 17,
      category: "dismekan",
      title: "Kayalık Sahil Güneşlenme Platformu",
      desc: "Doğal kayalık zemin üzerine statik karkasla oturtulmuş İroko deck",
      image: "/ozel-3.jpeg",
      tag: "Sahil Deck",
    },
    {
      id: 18,
      category: "dismekan",
      title: "Modern Villa Açık Hava Masif Duşluk",
      desc: "Güneşe ve suya dayanıklı masif ahşap duş ünitesi ve peyzaj entegrasyonu",
      image: "/mimari-4.jpeg",
      tag: "Masif Bahçe Duşu",
    },
    {
      id: 19,
      category: "dismekan",
      title: "Lüks Rezidans Teras Zemin Deck Kaplama",
      desc: "Eğim tahliyeli gizli klips altyapısı ve kaymaz yüzey işçiliği",
      image: "/dismekan-1.jpeg",
      tag: "Teras Deck",
    },
    {
      id: 20,
      category: "dismekan",
      title: "Kıyı İskelesi & Ahşap Yürüyüş Yolu",
      desc: "Dalga yüklerine karşı güçlendirilmiş taşıyıcı karkas üzeri tik deck",
      image: "/dismekan-2.jpeg",
      tag: "İskele Deck",
    },
    {
      id: 21,
      category: "dismekan",
      title: "Sonsuzluk Havuzu Kenarı Teak Deck",
      desc: "Klorlu havuz suyuna karşı ekstra koruyucu doğal yağ uygulaması",
      image: "/dismekan-7.jpeg",
      tag: "Havuz Deck",
    },
    {
      id: 22,
      category: "dismekan",
      title: "Bahçe Peyzaj Masif Ahşap Dinlenme Terası",
      desc: "Toprakla doğrudan temas etmeyen özel havalandırmalı kompozit takozlar",
      image: "/dismekan-8.jpeg",
      tag: "Peyzaj Terası",
    },
    {
      id: 23,
      category: "dismekan",
      title: "Açık Alan Ahşap Jakuzi Çevre Platformu",
      desc: "Nem direnci en üst düzey Thermo Dişbudak ile sıcak su direnci",
      image: "/dismekan-9.jpeg",
      tag: "Jakuzi Platformu",
    },
    {
      id: 24,
      category: "dismekan",
      title: "Villa Giriş Ahşap Yüzer Köprü Yolu",
      desc: "Gizli çelik taşıyıcılı, su üzerinde süzülen ahşap karşılama yolu",
      image: "/dismekan-10.jpeg",
      tag: "Yüzer Zemin Yolu",
    },

    // ---------------- ÖZEL İÇ MEKAN & MERDİVEN (8 ADET) ----------------
    {
      id: 25,
      category: "ozel",
      title: "Gizli Çelik Omurgalı Konsol Masif Merdiven",
      desc: "Duvara gizlenmiş çelik konstrüksiyon üzerine masif meşe kılıf basamaklar",
      image: "/ozel-1.jpeg",
      tag: "Konsol Merdiven",
    },
    {
      id: 26,
      category: "ozel",
      title: "Yekpare Doğal Ağaç Kenarlı Ceviz Yemek Masası",
      desc: "Fatsa atölyesinde asırlık ceviz kütüğünden özel tasarım masif masa",
      image: "/ozel-2.jpg",
      tag: "Doğal Kütük Masa",
    },
    {
      id: 27,
      category: "ozel",
      title: "Özel Tasarım Cam Korkuluklu Ahşap Basamak",
      desc: "Şeffaf lamine cam korkuluklar ve gizli lineer aydınlatma",
      image: "/ozel-4.jpeg",
      tag: "Lüks Merdiven",
    },
    {
      id: 28,
      category: "ozel",
      title: "Atölye İmalatı Özel Tasarım Masif Mobilya",
      desc: "Tamamen el işçiliği, doğal cila ve birinci sınıf ahşap zanaati",
      image: "/ozel-5.jpeg",
      tag: "Özel Mobilya",
    },
    {
      id: 29,
      category: "ozel",
      title: "Akustik Masif Ahşap İç Duvar Lamelleri",
      desc: "Mekan akustiğini ve sıcaklığını artıran doğal meşe duvar panelleri",
      image: "/ozel-7.jpeg",
      tag: "Akustik Lamel",
    },
    {
      id: 30,
      category: "ozel",
      title: "Masif Ağaç Şarap Mahzeni & Saklama Ünitesi",
      desc: "Özel nem dengesine duyarlı termal ahşap raflar ve şık detaylar",
      image: "/ozel-8.jpeg",
      tag: "Şarap Mahzeni",
    },
    {
      id: 31,
      category: "ozel",
      title: "Kavisli Helisel Masif Ahşap Merdiven",
      desc: "Usta ellerde bükülerek şekillendirilen heykelsi döner ahşap gövde",
      image: "/ozel-9.jpeg",
      tag: "Helisel Merdiven",
    },
    {
      id: 32,
      category: "ozel",
      title: "Yönetici Odası & Villa İçin Özel Ceviz Konsol",
      desc: "Gömme pirinç detaylar ve soft-close gizli ahşap mekanizmalar",
      image: "/ozel-10.jpeg",
      tag: "Özel Konsol",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="uzmanlik"
      className="py-24 bg-[#080d1a] text-white scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Uygulama Portfolyosu
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            İmzamızı Taşıyan Projeler
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Süperyatlardan lüks villalara, açık deniz güvertelerinden heykelsi
            iç mekanlara uzanan seçkin imalatlarımız.
          </p>
        </div>

        {/* Kategori Filtre Butonları */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count =
              cat.id === "all"
                ? projects.length
                : projects.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-105"
                    : "bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeTab === cat.id
                      ? "bg-slate-950 text-amber-400"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Proje Kartları Izgarası (Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0b1222] border border-slate-800/80 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all duration-500 flex flex-col shadow-lg"
            >
              {/* Fotoğraf Kutusu */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Rozet */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-amber-300">
                    {item.tag}
                  </span>
                </div>

                {/* Büyütme Butonu */}
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="absolute bottom-3 right-3 p-2 bg-black/60 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-md border border-white/10 rounded-xl text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  aria-label="Fotoğrafı büyüt"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              {/* Bilgi Kutusu */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-mono">
                    MTS-{item.category.toUpperCase()}-0{item.id}
                  </span>
                  <a
                    href="https://wa.me/905422387979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-medium"
                  >
                    Detay Sor →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / Büyütülmüş Fotoğraf Görüntüleyici */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-slate-900 border border-slate-700 rounded-full"
                aria-label="Kapat"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Büyütülmüş Proje"
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
