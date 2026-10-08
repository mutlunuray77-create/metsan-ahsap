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
    { id: "ozel", name: "ÖZEL İÇ MEKAN & ZANAAT", icon: Sparkles },
  ];

  const projects = [
    // ==========================================
    // 1. DENİZCİLİK & GÜVERTE
    // ==========================================
    {
      id: 1,
      category: "deniz",
      title: "Süperyat Tik Güverte & Helikopter Pisti",
      desc: "Burma Tik marin armuz ve milimetrik kavisli açık deniz güvertesi",
      image: "/deniz-1.jpeg",
      tag: "Süperyat Güverte",
    },
    {
      id: 2,
      category: "deniz",
      title: "Kavisli Yat Güverte Basamakları & LED Kanalları",
      desc: "Gizli lineer aydınlatmalı kavisli basamak dönüşleri ve tik kaplama",
      image: "/mimari-4.jpeg",
      tag: "Kavisli İmalat",
    },
    {
      id: 3,
      category: "deniz",
      title: "Yat Güvertesi İskelet & Karkas İmalatı",
      desc: "Hassas şantiye terazisinde kavisli omurga ve armuz fitil uygulaması",
      image: "/deniz-7.jpeg",
      tag: "Güverte Karkas",
    },
    {
      id: 4,
      category: "deniz",
      title: "Marin Güverte Yağlama & Yüzey Koruma",
      desc: "Güneşin UV ışınlarına ve deniz suyuna karşı özel tik yağı bakımı",
      image: "/deniz-8.jpeg",
      tag: "Tik Bakımı",
    },
    {
      id: 5,
      category: "deniz",
      title: "Motoryat Özel Tik Oturma & Güverte Detayı",
      desc: "Yüksek dayanımlı masif ağaç ile konforlu seyir güvertesi",
      image: "/deniz-9.jpeg",
      tag: "Marin Donanım",
    },
    {
      id: 6,
      category: "deniz",
      title: "1. Sınıf Burma Tik Zemin Kaplaması",
      desc: "Dikişsiz elastik marin mastik dolgulu pürüzsüz güverte yüzeyi",
      image: "/deniz-10.jpeg",
      tag: "Yat Zemin",
    },

    // ==========================================
    // 2. MİMARİ & DIŞ CEPHE
    // ==========================================
    {
      id: 7,
      category: "mimari",
      title: "Bodrum Villa Ahşap Panjur & Dış Cephe",
      desc: "Güneş kırıcı hareketli masif ahşap kanatlar ve modern lamel cephe",
      image: "/ozel-1.jpeg",
      tag: "Villa Cephe",
    },
    {
      id: 8,
      category: "mimari",
      title: "Thermo-Wood Lamel Dikey Cephe Kaplaması",
      desc: "Termal işlem görmüş, dönme ve çatlama yapmayan dış cephe giydirme",
      image: "/mimari-2.jpg",
      tag: "Dikey Lamel",
    },
    {
      id: 9,
      category: "mimari",
      title: "Villa Giriş Cephe & Alınlık Kaplama",
      desc: "Gizli çelik altyapı üzerine monte edilen fırınlanmış İroko cephe",
      image: "/mimari-7.jpeg",
      tag: "Dış Cephe",
    },
    {
      id: 10,
      category: "mimari",
      title: "Geniş Açıklıklı Masif Ahşap Pergola & Gölgelik",
      desc: "Açık alan yaşamını ferahlatan, statik mukavemetli ahşap gölgelik sistemi",
      image: "/mimari-8.jpeg",
      tag: "Pergola",
    },
    {
      id: 11,
      category: "mimari",
      title: "Özel Tasarım Masif Ahşap Çatı Saçağı",
      desc: "Dış hava şartlarına karşı gizli damlalıklı ve pahlı saçak detayı",
      image: "/mimari-9.jpeg",
      tag: "Çatı Saçak",
    },
    {
      id: 12,
      category: "mimari",
      title: "Şantiye Cephe Louvre Montaj Aşaması",
      desc: "Sahada lazer teraziyle sıfır hata toleransıyla yürütülen montaj",
      image: "/mimari-10.jpeg",
      tag: "Şantiye Montaj",
    },

    // ==========================================
    // 3. DIŞ MEKAN & DECK
    // ==========================================
    {
      id: 13,
      category: "dismekan",
      title: "Kayalık Sahil İroko Güneşlenme Terası",
      desc: "Doğal kayalık zemin üzerine statik karkasla kurulan sahil deck platformu",
      image: "/ozel-3.jpeg",
      tag: "Sahil Deck",
    },
    {
      id: 14,
      category: "dismekan",
      title: "Lüks Havuz Başı Teak Deck Kaplama",
      desc: "Klorlu havuz sularına karşı kaymaz, radiuslu pah kenarlı zemin işçiliği",
      image: "/dismekan-7.jpeg",
      tag: "Havuz Deck",
    },
    {
      id: 15,
      category: "dismekan",
      title: "Geniş Alan Teras Zemin Döşemesi",
      desc: "Su tahliyesi için özel eğim verilmiş gizli klipsli deck altyapısı",
      image: "/dismekan-8.jpeg",
      tag: "Teras Deck",
    },
    {
      id: 16,
      category: "dismekan",
      title: "Doğal Peyzaj Ahşap Dinlenme Alanı",
      desc: "Bahçe ve peyzajla iç içe masif ahşap zemin oturma platformu",
      image: "/dismekan-9.jpeg",
      tag: "Peyzaj Deck",
    },
    {
      id: 17,
      category: "dismekan",
      title: "Statik Çelik Karkas Üzeri Deck Montajı",
      desc: "Topraktan izole edilmiş, havalandırma boşluklu uzun ömürlü zemin",
      image: "/dismekan-10.jpeg",
      tag: "Zemin Karkas",
    },

    // ==========================================
    // 4. ÖZEL İÇ MEKAN & ZANAAT
    // ==========================================
    {
      id: 18,
      category: "ozel",
      title: "Yekpare Doğal Kenarlı Ceviz Yemek Masası",
      desc: "Doğal damar ve hareleri korunmuş, Fatsa atölyesinde işlenmiş masif masa",
      image: "/ozel-2.jpg",
      tag: "Masif Masa",
    },
    {
      id: 19,
      category: "ozel",
      title: "Taş Mimari İçi Ahşap Merdiven & Trabzan",
      desc: "Masif basamaklar ve geleneksel el oyması ahşap küpeşte zanaati",
      image: "/mimari-3.jpeg",
      tag: "Masif Merdiven",
    },
    {
      id: 20,
      category: "ozel",
      title: "Akustik Masif Ahşap İç Duvar Lamelleri",
      desc: "Mekan akustiğini ve sıcaklığını artıran doğal meşe duvar panelleri",
      image: "/ozel-7.jpeg",
      tag: "Akustik Lamel",
    },
    {
      id: 21,
      category: "ozel",
      title: "Özel Masif Ahşap Saklama & Raf Ünitesi",
      desc: "Nem dengesi gözetilerek üretilen özel kiler ve raf sistemleri",
      image: "/ozel-8.jpeg",
      tag: "Özel İmalat",
    },
    {
      id: 22,
      category: "ozel",
      title: "Kavisli Helisel Masif Ahşap Zanaati",
      desc: "Bükümlü basamak dönüşleri ve milimetrik alıştırma işçiliği",
      image: "/ozel-9.jpeg",
      tag: "Kavisli Zanaat",
    },
    {
      id: 23,
      category: "ozel",
      title: "Butik İç Mekan Masif Ahşap Kaplama",
      desc: "Mimari projelere özel tasarlanmış damar takipli iç mekan çözümleri",
      image: "/ozel-10.jpeg",
      tag: "İç Mimari",
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

        {/* Proje Kartları Izgarası */}
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

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-amber-300">
                    {item.tag}
                  </span>
                </div>

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

        {/* Modal / Büyütme Ekranı */}
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
