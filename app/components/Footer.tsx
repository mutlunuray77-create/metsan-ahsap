"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="iletisim"
      className="bg-[#050811] text-white border-t border-slate-800 pt-24 pb-14 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Üst İletişim Başlığı */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
            BİZE ULAŞIN
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white">
            Projenizi Birlikte <br />
            <span className="text-amber-400">Hayata Geçirelim.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 font-light">
            Marin ahşap, lüks villa dış cephe veya özel mimari mobilya
            projeleriniz için teknik keşif ve fiyat teklifi talep edebilirsiniz.
          </p>
        </div>

        {/* İletişim Bilgileri ve Harita Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Sol Kolon: İletişim Kartları */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#090f1d] border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-base font-serif font-semibold text-white mb-6 border-b border-slate-800/80 pb-3">
                İletişim & Merkez Ofis
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      Adres
                    </span>
                    <p className="font-light text-slate-200 mt-0.5">
                      Fatih Mah. Yahya Kemal Sk. No:2B/39 Fatsa / ORDU
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      Telefon
                    </span>
                    <a
                      href="tel:+905422387979"
                      className="font-light text-slate-200 hover:text-amber-400 transition-colors mt-0.5 block"
                    >
                      +90 542 238 79 79
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      E-Posta
                    </span>
                    <a
                      href="mailto:metsanahsap@gmail.com"
                      className="font-light text-slate-200 hover:text-amber-400 transition-colors mt-0.5 block"
                    >
                      metsanahsap@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">
                      Çalışma Saatleri
                    </span>
                    <p className="font-light text-slate-200 mt-0.5">
                      7/24 Hizmetinizdeyiz
                    </p>
                  </div>
                </div>
              </div>

              {/* Hızlı WhatsApp Butonu */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <a
                  href="https://wa.me/905422387979?text=Merhaba,%20projemiz%20için%20görüşmek%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp ile Hızlı Mesaj Gönderin</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Google Harita Entegrasyonu */}
          <div className="lg:col-span-7 h-[380px] lg:h-auto min-h-[380px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl relative bg-slate-950">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47915.22852232924!2d37.45263659999999!3d41.02891965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40656093cb4a234f%3A0x6b6c20be2b0bf9f4!2sFatsa%2C%20Ordu!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "grayscale(85%) contrast(1.1) invert(90%) hue-rotate(180deg)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Metsan Ahşap Harita Konumu"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Alt Telif & Mutlu Soft Studio İmzası (WhatsApp Butonundan Kaçan Padding) */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-400 pb-16 md:pb-6 pr-0 md:pr-32">
          <div className="text-left">
            <p className="font-semibold text-slate-200">
              METSAN AHŞAP TASARIM UYGULAMA TİC. LTD. ŞTİ.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Fatsa V.D. No: 6201708262 | Mersis No: 0620170826200001 | Oda
              Sicil No: 007629
            </p>
          </div>

          <div className="text-left md:text-right">
            <p>
              © {new Date().getFullYear()} Metsan Ahşap Tasarım. Tüm hakları
              saklıdır.
            </p>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">
              Designed & Developed by{" "}
              <span className="text-amber-400 font-semibold tracking-wide">
                Mutlu Soft Studio
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
