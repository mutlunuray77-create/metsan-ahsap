import React from "react";
import { CheckCircle2, Leaf, HeartHandshake, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="hakkimizda" className="py-24 bg-[#F5F1E8] text-[#2B2118]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Bölüm 1: Şirket Hikayesi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7A8B70] block mb-2">
              Güven & Köklü Zanaat
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#2B2118] mb-6 font-serif leading-tight">
              Ahşaba Can Veren <br />Tutkulu Bir Hikâye.
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4 text-base">
              <strong>METSAN AHŞAP</strong>, atölye tozunu soluyarak yetişmiş ustaların el becerisini, çağımızın modern statik mühendisliği ve mimari vizyonuyla harmanlayan bir tasarım-uygulama firmasıdır.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6 text-sm">
              Bodrum sahillerinin lüks deniz üstü projelerinden Karadeniz’in tarihi ahşap konaklarına kadar; her ağacın damar yapısını tanıyarak çalışıyor, mekana ruh katan zamansız eserler üretiyoruz.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-stone-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#7A8B70]" />
                <span>Sertifikalı İthal Teak & Iroko</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#7A8B70]" />
                <span>Gizli Çelik Taşıyıcı Statik</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#7A8B70]" />
                <span>Tarihi Eser Standartları</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#7A8B70]" />
                <span>Yerinde Keşif & 3D Projelendirme</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
            <img 
              src="/before.jpeg" 
              alt="Metsan Ahşap Şantiye & İskele Montajı" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-xs uppercase tracking-wider font-bold text-[#CCD5AE]">Şantiyede Bizzat Üretim</div>
                <div className="text-base font-bold">Usta Eller, Kusursuz Detaylar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bölüm 2: Değerlerimiz Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-[#7A8B70] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#7A8B70]/15 text-[#7A8B70] flex items-center justify-center mb-5">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#2B2118] mb-2 font-serif">Sürdürülebilirlik & Saygı</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Yalnızca sürdürülebilir ormanlardan elde edilen sertifikalı ağaçları işliyor, doğaya minimum atık prensibiyle yaklaşıyoruz.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-[#7A8B70] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 text-[#B07D46] flex items-center justify-center mb-5">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#2B2118] mb-2 font-serif">Yüksek Segment Malzeme</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Marin sınıf paslanmaz vidalar, UV filtreli doğal bitkisel yağlar ve fırınlanmış dayanıklı masif gövdeler kullanıyoruz.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-[#7A8B70] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#7A8B70]/15 text-[#7A8B70] flex items-center justify-center mb-5">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#2B2118] mb-2 font-serif">Kusursuz Teslimat Sözü</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Planlanan teslim tarihine sadık kalıyor, montaj sonrası periyodik bakım ve garanti desteğimizle müşterimizin yanında duruyoruz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}