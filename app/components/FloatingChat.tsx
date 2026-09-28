"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
  return (
    <aside
      aria-label="Hızlı WhatsApp İletişim"
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/905422387979?text=Merhaba%20Metin%20Bey,%20Metsan%20Ah%C5%9Fap%20web%20sitenizden%20ula%C5%9Ft%C4%B1m.%20Projemiz%20i%C3%A7in%20bilgi%20ve%20ke%C5%9Fif%20g%C3%B6r%C3%BC%C5%9Fmesi%20talep%20ediyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-full shadow-2xl shadow-emerald-950/80 flex items-center gap-2.5 font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30 group"
      >
        <MessageCircle
          size={22}
          className="group-hover:rotate-12 transition-transform"
        />
        <span className="tracking-wide">WhatsApp'tan Yazın</span>
      </a>
    </aside>
  );
}
