"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import { ArrowRight, X, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface CategoryDetail {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  specs: string[];
  gallery: { title: string; image: string }[];
}

interface ProjectDetail {
  cat: string;
  title: string;
  loc: string;
  year: string;
  image: string;
  wood: string;
  desc: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryDetail | null>(
    null,
  );
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(
    null,
  );

  // 4 Uzmanlık Alanı ve Tıklandığında Açılacak Detaylar & Örnek Fotoğraflar
  const categories: CategoryDetail[] = [
    {
      id: "denizcilik",
      num: "01",
      title: "DENİZCİLİK",
      subtitle: "Ahşap tekneler, marin iskeleler ve gemiler.",
      desc: "Tuzlu deniz suyuna, dalga sürtünmesine ve yoğun güneş ışınlarına dayanıklı marin sınıf Iroko ve Burma Teak ahşap uygulamaları. Çelik kazık taşıyıcılar üzerine gizli geçme karkas montajıyla uzun ömürlü kıyı yapıları inşa ediyoruz.",
      specs: [
        "A4 kalite marin paslanmaz çelik bağlantı elemanları",
        "Tuzlu su korozyonuna karşı fırınlanmış Teak & Iroko",
        "Statik hesaplı çelik taşıyıcı karkas mühendisliği",
        "Sezonluk marin koruma ve periyodik yağlama garantisi",
      ],
      gallery: [
        { title: "Marin Halatlı Ana Yat İskelesi", image: "/dort.jpeg" },
        { title: "Geniş Güneşlenme Deck Platformu", image: "/iki.jpeg" },
        {
          title: "Şantiye Çelik Karkas İskelet Montajı",
          image: "/before.jpeg",
        },
        { title: "Kıyı İskele Geçiş Yolu", image: "/bir.jpeg" },
      ],
    },
    {
      id: "mimari",
      num: "02",
      title: "MİMARİ",
      subtitle: "Tarihi konaklar, cephe kaplamaları ve yapılar.",
      desc: "Kültür varlığı tescilli yalı, konak ve köşklerde geleneksel çatkı teknikleri, el oyması cumba süslemeleri ve kalem işi tavan işçiliklerini aslına sadık kalarak restore ediyor; modern yapılara lüks ahşap dış cephe louvre çözümleri uyguluyoruz.",
      specs: [
        "Geleneksel ahşap geçme ve karkas teknikleri",
        "Emprenyeli yangın ve nem geciktirici koruma",
        "Aslına uygun röleve ve restorasyon işçiliği",
        "Katran çamı ve meşe kaset tavan uygulamaları",
      ],
      gallery: [
        { title: "Sahil Ahşap Bungalov & Panjur Detayı", image: "/bir.jpeg" },
        { title: "Masif Ahşap İnce Çatkı Uygulaması", image: "/after.jpeg" },
        { title: "Taşıyıcı Karkas Çatı İskeleti", image: "/before.jpeg" },
        { title: "Geleneksel Ahşap Mimari Detaylar", image: "/dort.jpeg" },
      ],
    },
    {
      id: "dismekan",
      num: "03",
      title: "DIŞ MEKAN",
      subtitle: "Pergolalar ve dış mekan uygulamaları.",
      desc: "Açık hava iklim koşullarına dayanıklı lamine ahşap gölgelendirme pergolaları, kış bahçeleri, havuz kenarı ve villa bahçesi için gizli klips vidalamalı masif deck döşemeleriyle doğallığı açık alanlarınıza entegre ediyoruz.",
      specs: [
        "Gizli klipsli, çıplak ayakla yürümeye uygun deck montajı",
        "Geniş açıklıklı lamine kiriş ve pergola sistemleri",
        "UV filtreli bitkisel marin dış mekan yağ koruması",
        "Havuz ve bahçe mimarisine özel modüler yerleşim",
      ],
      gallery: [
        { title: "Güneşlenme Deck & Dinlenme Locası", image: "/iki.jpeg" },
        { title: "Marin Yürüyüş Yolu & İskele Deck", image: "/dort.jpeg" },
        { title: "Kıyı Dinlenme Evi & Deck Zemin", image: "/bir.jpeg" },
        { title: "Şantiye Zemin Karkas Kurulumu", image: "/before.jpeg" },
      ],
    },
    {
      id: "ozel",
      num: "04",
      title: "ÖZEL",
      subtitle: "Özel ahşap üretim projeleri.",
      desc: "İç mekan mimarisine prestij katan, duvar içine gömülen gizli çelik omurgalarla havada asılı duran LED aydınlatmalı konsol merdivenler, temperli lamine cam korkuluklar ve tek parça gövdeli masif kütük mobilyalar üretiyoruz.",
      specs: [
        "Duvar içi gizli çelik konsol taşıyıcı statik",
        "Masif meşe & ceviz basamak altı lineer LED",
        "10+10 mm rodajlı temperli lamine cam korkuluk",
        "Mekana özel milimetrik projelendirme ve 3D modelleme",
      ],
      gallery: [
        { title: "LED Konsol Merdiven & Cam Korkuluk", image: "/uc.jpeg" },
        { title: "Masif Ahşap Yüzer Basamak Detayı", image: "/after.jpeg" },
        { title: "Özel Tasarım İç Mekan İmalatı", image: "/before.jpeg" },
        { title: "İnce Zanaat Ahşap İşçiliği", image: "/dort.jpeg" },
      ],
    },
  ];

  // 4 Seçkin Proje ve Tıklandığında Açılacak Büyük Fotoğraf Modalı
  const projects: ProjectDetail[] = [
    {
      cat: "DENİZCİLİK",
      title: "Kıyı Yat Gövdesi & İskele",
      loc: "BODRUM, TR",
      year: "2025",
      image: "/dort.jpeg",
      wood: "Burma Teak & Iroko Marin Ağaç",
      desc: "Tuzlu deniz suyuna tam mukavemetli çelik kazık karkas üzerine simetrik güneşlenme cepleri, marin halatlı baba korkuluklar ve yat yanaşma donanımıyla projelendirilen prestijli sahil iskelesi.",
    },
    {
      cat: "MİMARİ",
      title: "Ahşap Atriyum & Konak",
      loc: "ANTALYA / TR",
      year: "2024",
      image: "/bir.jpeg",
      wood: "Termo-Çam & Masif Kestane",
      desc: "Kıyı şeridinde saz tavan kaplamalı dinlenme köşkü, doğal ahşap panjur kepenkler ve deniz üstü basamaklı yürüyüş aksıyla entegre edilen özel mimari yapı.",
    },
    {
      cat: "DIŞ MEKAN",
      title: "Liman & Deck Lounge",
      loc: "İZMİR / TÜRKBÜKÜ, TR",
      year: "2023",
      image: "/iki.jpeg",
      wood: "Fırınlanmış Iroko Masif Deck",
      desc: "Geniş güneşlenme ve dinlenme terası. UV koruyucu doğal yağ uygulaması ve gizli klips montajı sayesinde çıplak ayak konforu sunan marina dinlenme platformu.",
    },
    {
      cat: "ÖZEL",
      title: "İmza Konsol Merdiven",
      loc: "İSTANBUL, TR",
      year: "2025",
      image: "/uc.jpeg",
      wood: "1. Sınıf Masif Meşe & Temperli Cam",
      desc: "Duvar içine ankrajlanan çelik konsollarla taşınan yüzer basamaklar. Basamak altı gizli sensörlü lineer LED aydınlatma ve şeffaf temperli lamine cam güvenlik panelleri.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E2328] selection:bg-[#B68D56] selection:text-white font-sans">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ (Çekiçli Usta & Serif Manşet) */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col justify-end pb-16 pt-32 bg-[#12161A] text-white overflow-hidden px-6"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 scale-105"
          style={{ backgroundImage: "url('/before.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12161A] via-[#12161A]/75 to-[#12161A]/40" />

        <div className="relative max-w-4xl mx-auto w-full z-10">
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4A373] mb-3">
            METSAN AHŞAP • AHŞAP • USTALIK • MİMARİ • DENİZCİLİK
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.08] mb-6">
            AHŞABIN <br />
            SINIRLARINI <br />
            YENİDEN İNŞA <br />
            EDİYORUZ.
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-xl leading-relaxed mb-8 font-light">
            METSAN AHŞAP, geleneksel ustalığı modern üretim anlayışıyla
            birleştirerek ahşaptan kalıcı yapılar, özel tasarımlar ve büyük
            ölçekli projeler üretiyor.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#projeler"
              className="inline-flex items-center justify-center gap-2 bg-[#B68D56] hover:bg-[#A37844] text-white px-7 py-4 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg shadow-[#B68D56]/20"
            >
              <span>Projelerimizi Keşfedin</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/905422387979?text=Merhaba%20Metin%20Bey,%20web%20sitenizden%20ula%C5%9Ft%C4%B1m.%20Teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700/60 px-7 py-4 rounded-xl font-medium text-sm transition-all duration-300"
            >
              <span>Teklif Al</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. DEĞERLERİMİZ (01-05 Kutucukları) */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B68D56] block mb-2">
            DEĞERLERİMİZ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1F22]">
            Her proje, doğru düşünceyle başlar.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {[
            { num: "01", title: "Usta İşçilik" },
            { num: "02", title: "Özel Üretim" },
            { num: "03", title: "Projeye Özel Çözümler" },
            { num: "04", title: "Kaliteli Malzeme" },
            { num: "05", title: "Profesyonel Uygulama" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between min-h-[130px] hover:border-[#B68D56] transition-colors ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="text-xs font-serif text-[#B68D56] tracking-wider">
                {item.num}
              </span>
              <h3 className="text-sm sm:text-base font-serif font-medium text-[#1C1F22] leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3. UZMANLIK ALANLARI (Tıklanabilir 4 Geniş Kart & Açılır Galeri) */}
      <section id="uzmanlik" className="py-16 max-w-5xl mx-auto px-6">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B68D56] block mb-2">
              UZMANLIK ALANLARI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1F22]">
              Ahşapla Hayata Geçirdiğimiz Alanlar
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Detaylı açıklama ve örnekler için kartlara tıklayın →
          </span>
        </div>

        <div className="space-y-4">
          {categories.map((cat, idx) => {
            const bgImage =
              idx === 0
                ? "/dort.jpeg"
                : idx === 1
                  ? "/bir.jpeg"
                  : idx === 2
                    ? "/iki.jpeg"
                    : "/uc.jpeg";
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className="group relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px] flex flex-col justify-between p-7 text-white shadow-md cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
              >
                <img
                  src={bgImage}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.45]"
                />
                <div className="relative z-10 text-xs font-serif opacity-80">
                  {cat.num}
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif tracking-wider mb-1 group-hover:text-[#D4A373] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-stone-200">{cat.subtitle}</p>
                  </div>
                  <div className="w-11 h-11 rounded-full border border-white/50 bg-black/30 backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:bg-[#B68D56] group-hover:border-[#B68D56] transition-all">
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. GÖRSEL ARA KATMAN: KÜTÜK & USTALIK */}
      <section className="relative py-28 my-10 bg-[#161412] text-white text-center overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 brightness-75"
          style={{ backgroundImage: "url('/before.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[#161412]/60" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4A373] block mb-3">
            USTALIK
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif leading-tight mb-4">
            Ustalık, Detaylarda Saklıdır.
          </h2>
          <p className="text-stone-300 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Her çizgi, her birleşim ve her yüzey; yıllarca sürecek bir hikâyenin
            parçasıdır.
          </p>
        </div>
      </section>

      {/* 5. SEÇKİN PROJELER (Tıklanabilir 4 Dikey Kart & Tam Ekran Lightbox) */}
      <section id="projeler" className="py-20 max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B68D56] block mb-2">
              PROJELER
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1F22]">
              Seçkin Projeler
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md font-light leading-relaxed">
            Fotoğrafların üzerine tıklayarak büyük halini ve projede uygulanan
            mühendislik detaylarını inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProject(proj)}
              className="group relative rounded-2xl overflow-hidden aspect-[9/15] flex flex-col justify-between p-5 text-white shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              <div className="relative z-10 text-[10px] tracking-widest uppercase font-serif text-stone-300 flex items-center justify-between">
                <span>{proj.cat}</span>
                <span className="text-[9px] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-white group-hover:bg-[#B68D56] transition-colors">
                  Büyüt ↗
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-serif font-medium leading-tight mb-3 group-hover:text-[#D4A373] transition-colors">
                  {proj.title}
                </h4>
                <div className="pt-2 border-t border-white/20 flex justify-between text-[10px] text-stone-300 uppercase tracking-wider font-light">
                  <span>{proj.loc}</span>
                  <span>{proj.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. GÖRSEL ARA KATMAN: DENİZ USTALIĞI & GULET */}
      <section className="relative py-28 my-10 bg-[#0F141C] text-white text-center overflow-hidden px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 brightness-75"
          style={{ backgroundImage: "url('/dort.jpeg')" }}
        />
        <div className="absolute inset-0 bg-[#0F141C]/65" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4A373] block mb-3">
            DENİZ USTALIĞI
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif leading-tight mb-4">
            Denizle Buluşan Ustalık.
          </h2>
          <p className="text-stone-300 text-sm font-light max-w-lg mx-auto leading-relaxed mb-4">
            Her detay, yılların deneyimiyle şekillenir.
          </p>
          <div className="text-sm font-serif italic text-amber-200/90 tracking-wider">
            "Ham Ahşaptan Açık Deniz'e."
          </div>
        </div>
      </section>

      {/* 7. SÜREÇ (01-05 ADIMLAR) */}
      <section
        id="surec"
        className="py-20 bg-white border-y border-stone-200/80"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14 text-center sm:text-left">
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1F22]">
              Bir Proje Nasıl Hayata Geçiyor?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                name: "KEŞİF",
                desc: "İhtiyaçların ve projenin detaylı analizi.",
              },
              {
                num: "02",
                name: "TASARIM",
                desc: "Projelendirme ve üretim planlaması.",
              },
              {
                num: "03",
                name: "USTALIK",
                desc: "Ahşabın işlenmesi ve üretim süreci.",
              },
              {
                num: "04",
                name: "UYGULAMA",
                desc: "Profesyonel montaj ve uygulama.",
              },
              {
                num: "05",
                name: "TESLİM",
                desc: "Zamanında, eksiksiz ve garantili teslim.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-14 h-14 rounded-full border border-[#B68D56]/50 flex items-center justify-center font-serif text-sm text-[#B68D56] mb-4 bg-[#FAF8F5]">
                  {step.num}
                </div>
                <h4 className="text-xs font-bold tracking-widest text-[#1C1F22] uppercase mb-1">
                  {step.name}
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HAKKIMIZDA */}
      <section
        id="hakkimizda"
        className="py-24 max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1F22] mb-6 leading-tight">
          Gelenekten Geleceğe Uzanan Bir Ustalık.
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl mx-auto">
          METSAN AHŞAP, deneyim, özen ve modern üretim anlayışını birleştirerek
          ahşabın her katmanında kalite yaratır. Her projede özel çözümler
          üretir, hassas işçilikle büyük ölçekli üretim hedeflerine ulaşır ve
          her detayın kalıcı bir hikâye taşımasına özen gösterir.
        </p>
        <a
          href="#iletisim"
          className="inline-flex items-center justify-center gap-2 bg-[#B68D56] hover:bg-[#A37844] text-white px-8 py-3.5 rounded-xl font-medium text-sm transition-all shadow-md"
        >
          <span>Hikâyemizi Keşfedin</span>
          <ArrowRight size={16} />
        </a>
      </section>

      {/* 9. BİR SONRAKİ PROJENİZ (KOYU CTA ALANI) */}
      <section className="bg-[#12161A] text-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D4A373] block mb-3">
            METSAN AHŞAP
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif leading-tight mb-4">
            Bir Sonraki Projeniz Burada Başlayabilir.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base font-light mb-10">
            Fikrinizi, deneyim ve ustalıkla gerçeğe dönüştürelim.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <a
              href="https://wa.me/905422387979?text=Merhaba%20Metin%20Bey,%20projemiz%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B68D56] hover:bg-[#A37844] text-white px-8 py-4 rounded-xl font-medium text-sm transition-all"
            >
              <span>Projenizi Anlatın</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+905422387979"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 px-8 py-4 rounded-xl font-medium text-sm transition-all"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      {/* 10. İLETİŞİM & HARİTA */}
      <section id="iletisim" className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B68D56] block mb-2">
            ULAŞILABİLİRLİK & İLETİŞİM
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1C1F22]">
            Atölyemizi Ziyaret Edin veya İletişime Geçin
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-3 font-light max-w-md mx-auto">
            Projelerinizi yerinde projelendirmek, ahşap numunelerini incelemek
            veya keşif planlamak için doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-4 flex flex-col justify-between">
            <a
              href="tel:+905422387979"
              className="p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-[#B68D56] transition-colors shadow-sm block group"
            >
              <div className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">
                DOĞRUDAN İLETİŞİM HATTI (METİN BEY)
              </div>
              <div className="text-xl font-bold font-serif text-[#1C1F22] mt-1 group-hover:text-[#B68D56] transition-colors">
                +90 542 238 79 79
              </div>
            </a>

            <a
              href="mailto:hello@metsanahsap.com"
              className="p-6 rounded-2xl bg-white border border-stone-200/80 hover:border-[#B68D56] transition-colors shadow-sm block group"
            >
              <div className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">
                KURUMSAL E-POSTA
              </div>
              <div className="text-xl font-bold font-serif text-[#1C1F22] mt-1 group-hover:text-[#B68D56] transition-colors">
                hello@metsanahsap.com
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
              <div className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">
                ATÖLYE & MERKEZ OFİS
              </div>
              <div className="text-base font-bold font-serif text-[#1C1F22] mt-1">
                Fatih Mah. Yahya Kemal Sk. No:2B/39 Fatsa / Ordu
              </div>
              <div className="text-xs text-stone-500 mt-1 font-light">
                Bodrum & Ege Şantiye Koordinatörlüğü
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md min-h-[300px] relative bg-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47863.09848529278!2d37.4665487719602!3d41.02677579899121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4064d306b39d1b6b%3A0x7d27e997f62e8ee6!2sFatsa%2C%20Ordu!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="absolute inset-0 grayscale contrast-125"
            />
          </div>
        </div>
      </section>

      {/* --- MODAL 1: UZMANLIK ALANLARI AÇILIR PENCERESİ & 4 ÖRNEK GÖRSEL --- */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#1C2024] text-white border border-stone-700 w-full max-w-3xl rounded-3xl p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 my-8">
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700 transition"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-serif text-[#D4A373] tracking-widest uppercase">
              {activeCategory.num} • UZMANLIK ALANI DETAYI
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif mt-2 mb-4 text-white">
              {activeCategory.title}
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed mb-6 font-light">
              {activeCategory.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 bg-stone-900/80 p-5 rounded-2xl border border-stone-800">
              {activeCategory.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-stone-200"
                >
                  <CheckCircle2 size={15} className="text-[#B68D56] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                Uygulama Örnekleri & Sahadan Kareler:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeCategory.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden aspect-square border border-stone-700 bg-stone-900"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[10px] text-stone-200 font-medium leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/905422387979?text=Merhaba%20Metin%20Bey,%20bu%20kategorideki%20projemiz%20i%C3%A7in%20bilgi%20ve%20fiyat%20almak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#B68D56] hover:bg-[#A37844] text-white py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition shadow-lg"
              >
                Metin Bey ile Projeyi Görüşün
              </a>
              <button
                onClick={() => setActiveCategory(null)}
                className="sm:w-32 bg-stone-800 hover:bg-stone-700 text-stone-300 py-3.5 rounded-xl text-center text-xs font-bold transition"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: SEÇKİN PROJELER TAM EKRAN BÜYÜK RESİM & KÜNYE --- */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#1C2024] text-white border border-stone-700 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl animate-in fade-in zoom-in-95 my-8">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black flex items-center justify-center border border-white/20 transition"
              aria-label="Kapat"
            >
              <X size={20} />
            </button>

            <div className="relative w-full h-80 sm:h-[420px] bg-black">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2024] via-transparent to-black/30" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4A373] bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                  {activeProject.cat} PROJESİ
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-white mt-2">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-4 sm:gap-8 pb-6 border-b border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#B68D56]" />
                  <span>
                    <strong>Konum:</strong> {activeProject.loc}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#B68D56]" />
                  <span>
                    <strong>Yıl:</strong> {activeProject.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#B68D56]" />
                  <span>
                    <strong>Malzeme:</strong> {activeProject.wood}
                  </span>
                </div>
              </div>

              <p className="text-stone-300 text-sm leading-relaxed my-6 font-light">
                {activeProject.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/905422387979?text=Merhaba%20Metin%20Bey,%20web%20sitenizdeki%20"${encodeURIComponent(activeProject.title)}"%20projesi%20hakk%C4%B1nda%20ke%C5%9Fif%20ve%20fiyat%20almak%20istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#B68D56] hover:bg-[#A37844] text-white py-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition shadow-lg"
                >
                  Bu Projeye Benzer Keşif / Teklif İste
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="sm:w-32 bg-stone-800 hover:bg-stone-700 text-stone-300 py-4 rounded-xl text-center text-xs font-bold transition"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingChat />
    </div>
  );
}
