import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-sm mb-1">
            METSAN AHŞAP TASARIM UYGULAMA TİC. LTD. ŞTİ.
          </p>
          <p>Fatih Mah. Yahya Kemal Sk. No:2B/39 Fatsa / ORDU</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Fatsa V.D. No: 6201708262 | Mersis No: 0620170826200001 | Oda Sicil
            No: 007629
          </p>
        </div>

        <div className="text-center md:text-right">
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
    </footer>
  );
}
