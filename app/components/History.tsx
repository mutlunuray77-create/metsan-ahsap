import React from "react";

export default function History() {
  return (
    <section id="hikayemiz" className="py-20 bg-[#2B2118] text-[#F5F1E8] border-b border-[#7A8B70]/20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#7A8B70] mb-3 block">
          Köklü Geçmiş
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F1E8] mb-6">
          Gelenekten Geleceğe Ahşap Tutkusu
        </h2>
        <p className="text-stone-300 leading-relaxed text-base max-w-3xl mx-auto">
          Çıraklıktan ustalığa uzanan bu yolculukta, ahşabın her damarını tanıyarak büyüdük. 
          Geleneksel marangozluk prensiplerini modern mimari statik çözümlerle harmanlayıp 
          yaşam alanlarına değer katmaya devam ediyoruz.
        </p>
      </div>
    </section>
  );
}