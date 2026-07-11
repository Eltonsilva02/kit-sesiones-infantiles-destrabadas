'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Timer } from 'lucide-react';

export function Scarcity() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="bg-[#2F5D62] text-white px-6 py-16 text-center">
        <div className="flex justify-center mb-4">
          <Timer className="w-10 h-10 text-[#F28C7B]" />
        </div>
        <h2 className="font-heading text-2xl font-bold mb-6">
          Oferta por tiempo limitado
        </h2>
        
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-white/10 rounded-xl p-4 min-w-[80px]">
            <span className="block font-heading text-4xl font-bold text-[#F28C7B]">
              15
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-white/70">Min</span>
          </div>
          <div className="text-4xl font-bold text-white/50 pt-2">:</div>
          <div className="bg-white/10 rounded-xl p-4 min-w-[80px]">
            <span className="block font-heading text-4xl font-bold text-[#F28C7B]">
              00
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-white/70">Seg</span>
          </div>
        </div>

        <p className="text-white/80 text-sm mb-8 leading-relaxed px-4">
          Esta condición especial de lanzamiento puede terminar en cualquier momento. Aprovecha el descuento exclusivo antes de que el cronómetro llegue a cero.
        </p>

        <a
          id="ebs-checkout"
          href="https://pay.hotmart.com/Y106693716H?checkoutMode=10"
          className="inline-block w-full bg-[#F28C7B] text-white text-center font-heading font-bold text-lg py-5 rounded-full shadow-[0_8px_20px_rgba(242,140,123,0.4)] transition-all"
        >
          Aprovechar el descuento exclusivo
        </a>
      </section>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="bg-[#2F5D62] text-white px-6 py-16 text-center">
      <div className="flex justify-center mb-4">
        <Timer className="w-10 h-10 text-[#F28C7B]" />
      </div>
      <h2 className="font-heading text-2xl font-bold mb-6">
        Oferta por tiempo limitado
      </h2>
      
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-white/10 rounded-xl p-4 min-w-[80px]">
          <span className="block font-heading text-4xl font-bold text-[#F28C7B]">
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-white/70">Min</span>
        </div>
        <div className="text-4xl font-bold text-white/50 pt-2">:</div>
        <div className="bg-white/10 rounded-xl p-4 min-w-[80px]">
          <span className="block font-heading text-4xl font-bold text-[#F28C7B]">
            {seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-white/70">Seg</span>
        </div>
      </div>

      <p className="text-white/80 text-sm mb-8 leading-relaxed px-4">
        Esta condición especial de lanzamiento puede terminar en cualquier momento. Aprovecha el descuento exclusivo antes de que el cronómetro llegue a cero.
      </p>

      <motion.a
        id="ebs-checkout"
        href="https://pay.hotmart.com/Y106693716H?checkoutMode=10"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block w-full bg-[#F28C7B] text-white text-center font-heading font-bold text-lg py-5 rounded-full shadow-[0_8px_20px_rgba(242,140,123,0.4)] transition-all"
      >
        Aprovechar el descuento exclusivo
      </motion.a>
    </section>
  );
}
