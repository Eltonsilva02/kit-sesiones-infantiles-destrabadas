'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "¿Para qué edades es recomendado el material?",
      a: "El kit fue desarrollado pensando en niños de 4 a 12 años, cubriendo las principales fases de desarrollo infantil."
    },
    {
      q: "¿Puedo usarlo en mis sesiones online?",
      a: "Absolutamente. Muchos de los recursos pueden ser compartidos en pantalla o adaptados fácilmente para la modalidad virtual."
    },
    {
      q: "¿Cómo tendré acceso a los archivos?",
      a: "Inmediatamente después de la confirmación del pago recibirás un correo electrónico con el enlace de acceso directo al material completo."
    },
    {
      q: "¿Están divididos por temática clínica?",
      a: "Sí. Todo el material está organizado por demandas como ansiedad, TDAH, duelo y regulación emocional para facilitar tu día a día."
    },
    {
      q: "¿Debo pagar alguna mensualidad?",
      a: "No. Es un pago único que te da acceso de por vida a todo el material para imprimir cuantas veces quieras."
    },
    {
      q: "¿El material es fácil de imprimir?",
      a: "Totalmente. Los archivos están en formato PDF en alta calidad y listos para ser impresos en cualquier impresora común."
    }
  ];

  return (
    <section className="bg-white px-6 pb-20 pt-8">
      <h2 className="font-heading text-2xl font-bold text-[#2F5D62] text-center mb-10">
        Preguntas Frecuentes
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string, a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
        className="w-full flex items-center justify-between p-5 bg-gray-50/50 hover:bg-gray-50 transition-colors text-left cursor-pointer"
      >
        <span className="font-semibold text-sm text-[#2F5D62] pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 bg-gray-50/50 text-sm text-gray-600 leading-relaxed">
              <div className="pt-2 border-t border-gray-100">
                {faq.a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
