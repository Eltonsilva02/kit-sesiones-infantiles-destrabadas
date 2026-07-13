"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano4 = data.getFullYear();
    setDateStr(`${dia}/${mes + 1}/${ano4}`);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white font-sans overflow-x-hidden">
      
      {/* Top Banner */}
      <div className="w-full bg-[#fbb03b] py-2 px-4 text-center z-50 sticky top-0 shadow-lg">
        <p className="text-sm font-bold tracking-wide">
          <span className="text-white">Descuento solo </span>
          <span className="text-[#FFFF00]">HOY</span>
          <span className="text-white"> en esta </span>
          <span className="text-[#FFFF00]">PÁGINA</span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center pt-8 pb-16 px-4 max-w-5xl mx-auto text-center">
        <div className="mb-8 w-3/4 max-w-sm">
          <img 
            src="https://gledigital.com/wp-content/uploads/2025/01/Logo-Pagina-2.webp" 
            alt="Logo" 
            className="w-full h-auto object-contain animate-fade-in-down"
          />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase italic leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Transforma tu lectura de la <span className="text-[#fbb03b]">Biblia</span> en una experiencia poderosa y reveladora con un estudio de los <span className="text-[#fbb03b]">cuatro Evangelios</span> que te mostrará cómo las enseñanzas de <span className="text-[#fbb03b]">Cristo</span> pueden cambiar tu vida.
        </h1>

        <div className="w-full max-w-2xl mb-8">
          <img 
            src="https://gledigital.com/wp-content/uploads/2025/01/Principal-2.webp" 
            alt="Evangelios" 
            className="w-full h-auto rounded-xl shadow-[0_0_30px_rgba(251,176,59,0.3)] animate-pulse-slow"
          />
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          Explicaciones detalladas y fáciles de entender: <strong className="text-white">Cada versículo de los cuatro evangelios explicado de manera clara, sin complicaciones teológicas,</strong> para que comprendas el mensaje con profundidad por solo: <span className="text-[#fbb03b] font-bold text-2xl block mt-2">$ 3,90 <span className="text-sm md:text-base">(¡Este valor será convertido a su moneda local en el momento del pago para facilitar su compra!)</span></span>
        </p>
      </section>

      {/* Marquee Strips */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center py-10 my-4 h-40">
        <div className="absolute w-[110%] h-12 bg-gradient-to-r from-[#422D0B] to-[#FBB03B] flex items-center shadow-xl rotate-[3deg] scale-105 overflow-hidden z-10 top-8">
          <div className="whitespace-nowrap animate-marquee flex text-white font-bold tracking-widest uppercase">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-4">DESCUENTO APLICADO ● ENTREGA INMEDIATA ●</span>
            ))}
          </div>
        </div>
        <div className="absolute w-[110%] h-12 bg-gradient-to-r from-[#FBB03B] to-[#422D0B] flex items-center shadow-xl -rotate-[3deg] scale-105 overflow-hidden z-0 top-16">
          <div className="whitespace-nowrap animate-marquee-reverse flex text-white font-bold tracking-widest uppercase">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-4">APROBADO POR MÁS DE 4957 CREYENTES ●</span>
            ))}
          </div>
        </div>
      </section>

      {/* Inside Content */}
      <section className="flex flex-col items-center py-16 px-4 text-center max-w-5xl mx-auto relative">
        <div className="animate-bounce mb-4 text-[#fbb03b]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold italic mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
          POR DENTRO DEL <span className="text-[#fbb03b]">CONTENIDO:</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 w-full">
          {['1e.webp', '4e.webp', '3e.webp', '2e.webp'].map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-[#333] hover:scale-105 transition-transform duration-300 shadow-lg">
              <img src={`https://gledigital.com/wp-content/uploads/2025/01/${img}`} alt={`Muestra ${i+1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>

        <p className="text-xl md:text-3xl font-bold italic mb-6 leading-tight max-w-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
          ¡Los 4 Evangelios <span className="text-[#fbb03b]">Revelados</span>: Entiende Cada Versículo con Claridad y Profundidad!
        </p>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          <span className="text-[#fbb03b] font-semibold">Tendrás acceso a contextos históricos y culturales: Descubre</span> cómo las palabras de Jesús tenían sentido en su época y cómo siguen siendo relevantes hoy en día, con enriquecedores detalles.
        </p>
      </section>

      {/* Ideal For */}
      <section className="flex flex-col items-center py-12 px-4 text-center max-w-5xl mx-auto">
        <div className="animate-bounce mb-4 text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold italic mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
          ES <span className="text-[#fbb03b]">IDEAL</span> PARA TI QUE DESEAS:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img src="https://gledigital.com/wp-content/uploads/2025/01/b1.webp" alt="Beneficio 1" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img src="https://gledigital.com/wp-content/uploads/2025/01/b2.webp" alt="Beneficio 2" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="ctacompra" className="w-full bg-[#050505] py-20 px-4 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://vivitrick.com/wp-content/uploads/2024/12/02-1-1.webp')] bg-cover bg-center opacity-20 pointer-events-none"></div>
        
        <div className="animate-bounce mb-6 text-white relative z-10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold italic text-center uppercase mb-16 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
          DICHO ESTO, AHORA TIENES <span className="text-[#fbb03b]">2 OPCIONES</span> <br className="hidden md:block"/>
          <span className="text-[#aaff00]">(LA 2 ES LA MEJOR)</span>:
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl relative z-10 items-stretch justify-center">
          
          {/* Option 1 */}
          <div className="flex-1 max-w-md mx-auto w-full bg-[#141414] border border-[#333] rounded-2xl p-8 flex flex-col hover:border-[#fbb03b] transition-colors duration-300">
            <h3 className="text-4xl font-bold text-center mb-6">OPCIÓN <span className="text-[#fbb03b]">1</span></h3>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#2a2a2a] flex-grow flex flex-col">
              <p className="text-xl font-bold mb-6 text-center">
                <span className="text-[#fbb03b] underline block mb-1">BÁSICO:</span>
                SOLO MÓDULOS BÁSICOS.
              </p>
              
              <ul className="space-y-4 text-gray-400 mb-8 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Los cuatro libros del Evangelio Explicados Versículo por Versículo.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Material a través del área de miembros.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Acceso por 12 meses
                </li>
              </ul>

              <div className="text-center mb-8">
                <span className="text-5xl font-bold text-[#fbb03b]">$3,90</span>
              </div>

              <a id="ebs-checkout" href="https://pay.hotmart.com/Y106693716H?checkoutMode=10" className="w-full text-center py-4 rounded-lg font-bold uppercase tracking-wider text-white transition-all duration-300 border border-[#fbb03b] hover:bg-[#fbb03b] hover:text-black">
                QUIERO SOLAMENTE LO BÁSICO
              </a>
              
              <div className="mt-4 text-center">
                <span className="bg-[#ea1d2c] text-white text-xs px-2 py-1 rounded shadow-[0_0_10px_rgba(234,29,44,0.8)] inline-block">
                  ¡ATENCIÓN: Tenemos una oferta aún más VENTAJOSA para ti! Mira al lado.
                </span>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div className="flex-1 max-w-md mx-auto w-full bg-[#141414] border border-[#fbb03b] shadow-[0_0_20px_rgba(251,176,59,0.3)] rounded-2xl p-8 flex flex-col relative transform lg:-translate-y-4">
            
            <div className="absolute -top-4 -right-4 bg-[#f0a705] text-white font-bold py-1 px-8 rotate-12 shadow-lg border-2 border-black z-20">
              ¡MÁS VENDIDO!
            </div>

            <h3 className="text-4xl font-bold text-center mb-6">OPCIÓN <span className="text-[#fbb03b]">2</span></h3>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#333] flex-grow flex flex-col">
              <p className="text-xl font-bold mb-6 text-center">
                <span className="text-[#fbb03b] underline block mb-1">COMBO COMPLETO:</span>
                TODA LA COLECCIÓN + BONOS.
              </p>
              
              <ul className="space-y-4 text-gray-300 mb-6 border-b border-[#333] pb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Los cuatro libros del Evangelio Explicados Versículo por Versículo.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  Material a través del área de miembros.
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                  <span className="font-bold text-[#fbb03b]">Acceso de por vida</span>
                </li>
              </ul>

              <ul className="space-y-3 text-gray-300 mb-8 flex-grow text-sm">
                {[
                  "BONO#01 - Comunicación Eficaz en el Púlpito.",
                  "BONO#02 - Desarrollo Espiritual del Predicador.",
                  "BONOS#03 - Exégesis y Hermenéutica Bíblica.",
                  "BONO#04 - Historia de la Predicación Cristiana.",
                  "BONO#05 - Predicación Expositiva.",
                  "BONO#06 - Predicación Temática.",
                  "BONO#07 - Preparación de Sermones Guía Práctica.",
                  "Sumando Son: $ 50,00 en contenido.",
                  "Soporte 24h Vía E-mail."
                ].map((bono, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 mr-2 text-[#fbb03b] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {bono}
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6 flex flex-col items-center">
                <span className="text-xl text-red-500 line-through decoration-2 font-bold mb-1">$59,90</span>
                <span className="text-6xl font-bold text-[#fbb03b]">$7,90</span>
              </div>

              <a id="ebs-checkout" href="https://pay.hotmart.com/Y106693716H?checkoutMode=10" className="w-full text-center py-4 rounded-lg font-bold uppercase tracking-wider text-white bg-gradient-to-b from-[#fbb03b] to-[#c8871e] hover:from-[#00ff00] hover:to-[#008000] shadow-[0_0_15px_rgba(251,176,59,0.9)] hover:shadow-[0_0_20px_#25a837] transition-all duration-300 animate-pulse-slow">
                QUIERO EL COMBO COMPLETO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold italic text-center mb-12 uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
          PREGUNTAS <span className="text-[#fbb03b]">FRECUENTES</span>:
        </h2>
        
        <div className="space-y-4">
          {[
            {
              q: "¿Dónde recibiré acceso a este material?",
              a: "Todo nuestro material estará disponible a través de una hermosa área de miembros en la plataforma de Cartpanda."
            },
            {
              q: "¿Los enseñanzas están basadas en la Biblia?",
              a: "Sí, todo nuestro material fue desarrollado por pastores y hombres de Dios que, a través de la revelación dada por el Señor a ellos, desarrollaron este material."
            },
            {
              q: "¿Para quién está indicado este material?",
              a: "Para Pastores, Líderes de Grupos de Estudio, Seminaristas, Voluntarios y Líderes de Ministerios que tienen la bendita misión de llevar la Palabra de Dios en diversas ocasiones."
            },
            {
              q: "¿Qué formas de pago se aceptan?",
              a: "Aceptamos todo tipo de tarjetas de crédito y todas las demás formas de pago disponibles en la plataforma Cartpanda."
            },
            {
              q: "¿Existe alguna garantía?",
              a: "Ofrecemos 7 días de garantía incondicional; si no estás satisfecho, te devolvemos el 100% de tu dinero de manera rápida y sin complicaciones."
            }
          ].map((faq, i) => (
            <details key={i} className="group border border-[#333] bg-[#111] rounded-lg overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-lg marker:content-none hover:bg-[#1a1a1a] transition-colors">
                <span>{faq.q}</span>
                <span className="transition group-open:rotate-180 text-[#fbb03b]">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="border-t border-[#333] p-6 text-gray-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#ctacompra" className="inline-block py-4 px-10 rounded-lg font-bold uppercase tracking-wider text-white bg-gradient-to-b from-[#fbb03b] to-[#c8871e] hover:from-[#00ff00] hover:to-[#008000] shadow-[0_0_15px_rgba(251,176,59,0.9)] hover:shadow-[0_0_20px_#25a837] transition-all duration-300">
            Aclaré mis dudas, ahora quiero adquirirlo.
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-sm text-gray-600 border-t border-[#222]">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>

      {/* Simple Custom Animations using global CSS class extension for tailwind */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
          width: max-content;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
