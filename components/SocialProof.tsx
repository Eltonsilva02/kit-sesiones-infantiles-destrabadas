'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Removido o JS de auto-scroll para usar scroll nativo e evitar cortes

  return (
    <section className="bg-white py-16 overflow-hidden">
      <h2 className="font-heading text-2xl font-bold text-[#2F5D62] text-center mb-10 px-6">
        Lo que dicen las profesionales
      </h2>

      <div 
        ref={scrollRef}
        className="flex gap-4 px-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[
          "https://i.ibb.co/S4b91Gf8/Chat-GPT-Image-10-de-jul-de-2026-18-05-51-6.png",
          "https://i.ibb.co/SwxvRg0M/Chat-GPT-Image-10-de-jul-de-2026-18-05-51-5.png",
          "https://i.ibb.co/rfcnBJgC/Chat-GPT-Image-10-de-jul-de-2026-18-05-51-4.png",
          "https://i.ibb.co/MkSbw1Cq/Chat-GPT-Image-10-de-jul-de-2026-18-05-50-3.png",
          "https://i.ibb.co/GQwzkkGS/Chat-GPT-Image-10-de-jul-de-2026-18-05-50-2.png",
          "https://i.ibb.co/x8dfQHv7/Chat-GPT-Image-10-de-jul-de-2026-18-05-50-1.png"
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="snap-center shrink-0 w-[280px] h-[320px] relative rounded-2xl overflow-hidden shadow-md border border-gray-100"
          >
            <Image
              src={item}
              alt={`Testimonio ${idx + 1}`}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Elemento fantasma para garantir padding na última foto */}
        <div className="shrink-0 w-2" />
      </div>
    </section>
  );
}