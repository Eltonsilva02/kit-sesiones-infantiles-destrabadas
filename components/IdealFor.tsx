'use client';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function IdealFor() {
  const bullets = [
    "Conducir sesiones con más seguridad y dirección clínica.",
    "Crear un vínculo rápido incluso con niños resistentes.",
    "Dejar atrás la sensación de improvisación e inseguridad.",
    "Tener un arsenal lúdico siempre a tu alcance."
  ];

  return (
    <section className="bg-[#A8D8C2] px-6 py-16 text-[#2F5D62]">
      <h2 className="font-heading text-2xl font-bold text-center mb-10">
        Ideal para ti que deseas
      </h2>
      
      <div className="space-y-4">
        {bullets.map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-white/70 p-5 rounded-2xl shadow-sm"
          >
            <div className="bg-[#FFF4E6] p-2 rounded-full shrink-0 mt-0.5">
              <Star className="w-5 h-5 text-[#F28C7B] fill-[#F28C7B]" />
            </div>
            <p className="font-medium text-[15px] leading-snug pt-1.5">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}