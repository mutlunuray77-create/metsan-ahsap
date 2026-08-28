import React from "react";
import { Phone, Mail, MapPin, Clock, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 bg-[#F9F7F2] text-[#2B2118] border-t border-stone-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 block">
            Ulaşılabilirlik & İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2118] tracking-tight">
            Atölyemizi Ziyaret Edin veya İletişime Geçin
          </h2>
          <p className="text-stone-600 mt-3 text-sm leading-relaxed">
            Projelerinizi yerinde projelendirmek, ahşap numunelerini incelemek veya keşif planlamak için doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* İletişim Kartları */}
          <div className="space-y-4 flex flex-col justify-between">
            <a 
              href="tel:+905000000000"
              className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 transition-colors flex items-center gap-5 shadow-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Doğrudan İletişim Hattı</div>
                <div className="text-lg font-extrabold text-[#2B2118] mt-0.5">+90 (5XX) XXX XX XX</div>
              </div>
            </a>

            <a 
              href="mailto:info@metsanahsap.com"
              className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-600 transition-colors flex items-center gap-5 shadow-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Kurumsal E-Posta</div>
                <div className="text-lg font-extrabold text-[#2B2118] mt-0.5">info@metsanahsap.com</div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 flex items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Atölye & Merkez Ofis</div>
                <div className="text-sm font-bold text-[#2B2118] mt-0.5">Fatih Mah. Yahya Kemal Sk. No:2B/39 Fatsa / ORDU</div>
                <div className="text-xs text-stone-500 font-medium mt-1">Bodrum Şantiye & Keşif Koordinatörlüğü</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-emerald-700" />
                <span>Pzt - Cmt: 08:30 - 19:00</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-amber-700" />
                <span>Sözleşmeli & Garantili Teslimat</span>
              </div>
            </div>
          </div>

          {/* Google Haritası */}
          <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-xl min-h-[340px] relative bg-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47863.09848529278!2d37.4665487719602!3d41.02677579899121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4064d306b39d1b6b%3A0x7d27e997f62e8ee6!2sFatsa%2C%20Ordu!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-90"
            />
          </div>

        </div>

      </div>
    </section>
  );
}