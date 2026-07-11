'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic for the carousel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    
    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (el) {
        el.scrollLeft += scrollStep;
        scrollAmount += scrollStep;
        // Reset scroll when reaching the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
           el.scrollLeft = 0;
           scrollAmount = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <h2 className="font-heading text-2xl font-bold text-[#2F5D62] text-center mb-10 px-6">
        Lo que dicen las profesionales
      </h2>

      <div 
        ref={scrollRef}
        className="flex gap-4 px-6 overflow-x-auto hide-scrollbar pb-8"
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
            className="shrink-0 w-[280px] h-[320px] relative rounded-2xl overflow-hidden shadow-md border border-gray-100"
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
      </div>
    </section>
  );
}
