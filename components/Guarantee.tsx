import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="bg-[#A8D8C2]/20 border border-[#A8D8C2]/40 rounded-3xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-16 h-16 text-[#2F5D62]" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-xl font-bold text-[#2F5D62] mb-3">
          Garantía Incondicional de 7 Días
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Si el material no cumple tus expectativas, te devolvemos el 100% de tu inversión sin hacer preguntas. El riesgo es totalmente nuestro.
        </p>
      </div>
    </section>
  );
}
