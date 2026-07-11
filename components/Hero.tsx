'use client';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="bg-[#FFF4E6] px-6 pt-12 pb-16 rounded-b-[40px] shadow-sm relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-heading text-3xl font-bold text-[#2F5D62] text-center leading-tight mb-6">
          <span className="text-[#F28C7B]">+80 recursos lúdicos</span> para psicólogas infantiles listos para imprimir y aplicar
        </h1>

        <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="https://i.ibb.co/Q3yFkYFw/Chat-GPT-Image-10-de-jul-de-2026-14-52-00.png"
            alt="Kit Sesiones Infantiles"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
        </div>

        <p className="text-[#2F5D62] text-center text-lg font-medium mb-8 leading-relaxed">
          Ten actividades terapéuticas organizadas por demanda clínica para usar incluso cuando el niño no habla, no participa o llega agitado.
        </p>

        <ul className="space-y-4 mb-8">
          {[
            'Material 100% práctico y muy visual',
            'Aplica en formato presencial y online',
            'Organizado por demandas clínicas reales',
            'Fácil de imprimir y usar hoy',
          ].map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-white/80"
            >
              <CheckCircle2 className="w-6 h-6 text-[#A8D8C2] shrink-0" />
              <span className="text-[#2F5D62] font-semibold text-sm">{text}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          id="ebs-checkout"
          href="#oferta"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full bg-[#F28C7B] text-white text-center font-heading font-bold text-xl py-5 rounded-full shadow-[0_8px_20px_rgba(242,140,123,0.4)] transition-all hover:bg-[#e07b6a]"
        >
          ¡Quiero mi Kit ahora!
        </motion.a>
      </motion.div>
    </section>
  );
}
