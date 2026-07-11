'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function OfferCard() {
  return (
    <section id="oferta" className="bg-[#FFF4E6] px-6 py-16">
      <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-[#A8D8C2] relative pt-12">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F28C7B] text-white font-bold text-sm tracking-widest uppercase px-6 py-2 rounded-full whitespace-nowrap shadow-md">
          Promoción Especial
        </div>

        <h2 className="font-heading text-2xl font-bold text-[#2F5D62] text-center mb-6 leading-tight">
          Todo lo que vas a recibir hoy
        </h2>

        <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100">
          <Image
            src="https://i.ibb.co/5WYvww0m/Chat-GPT-Image-10-de-jul-de-2026-18-36-36.png"
            alt="Contenido del Kit"
            fill
            className="object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <ul className="space-y-3 mb-8">
          {[
            'Kit completo en formato PDF imprimible',
            'Fichas para sesiones infantiles difíciles',
            'Tarjetas de emociones y sentimientos',
            'Actividades para ansiedad y TDAH',
            'Recursos para duelo y comportamiento',
            'Materiales para psicoeducación familiar',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="bg-[#A8D8C2]/30 p-1 rounded-full shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-[#2F5D62]" />
              </div>
              <span className="text-sm font-medium text-gray-700 leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mb-6 border-t border-gray-100 pt-6">
          <p className="text-gray-400 font-medium line-through mb-1">De $97,00 por solo</p>
          <div className="flex items-start justify-center gap-1 text-[#2F5D62]">
            <span className="text-2xl font-bold mt-1">$</span>
            <span className="font-heading text-6xl font-black tracking-tighter">3,90</span>
          </div>
          <p className="text-[#A8D8C2] font-bold text-sm mt-2 uppercase tracking-wide">Acceso Inmediato</p>
        </div>

        <motion.a
          id="ebs-checkout"
          href="https://pay.hotmart.com/Y106693716H?checkoutMode=10"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full bg-[#2F5D62] text-white text-center font-heading font-bold text-xl py-5 rounded-full shadow-[0_8px_20px_rgba(47,93,98,0.4)] transition-all"
        >
          ¡Sí, quiero mi Kit completo!
        </motion.a>
      </div>
    </section>
  );
}
