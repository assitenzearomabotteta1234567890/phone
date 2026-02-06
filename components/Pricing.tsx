
import React, { useState } from 'react';
import { ShoppingCart, Check, Clock, ShieldCheck, Heart, CreditCard } from 'lucide-react';

const Pricing: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Nero');
  const shopifyLink = "https://minipro.shop/cart/61028054073674:1";

  const colors = [
    { name: 'Nero', class: 'bg-zinc-900' },
    { name: 'Argento', class: 'bg-zinc-300' },
    { name: 'Blu', class: 'bg-blue-600' },
    { name: 'Arancio', class: 'bg-orange-500' }
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white border-2 border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl relative">
          
          <div className="bg-gradient-brand py-4 text-center">
            <p className="text-white text-sm font-black tracking-[0.2em] uppercase">OFFERTA LIMITATA: -50% DI SCONTO</p>
          </div>
          
          <div className="p-8 md:p-14">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-5xl font-black italic tracking-tighter text-zinc-900 uppercase">MINI PRO™ ULTRA</h3>
                <div className="flex items-center gap-2 text-zinc-500 font-bold text-sm uppercase tracking-widest bg-zinc-100 px-3 py-1.5 rounded-full w-fit">
                   Android • 16GB • 4G Ready
                </div>
                
                <div className="pt-4 space-y-3">
                  <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">Seleziona Colore:</p>
                  <div className="flex gap-4 flex-wrap">
                    {colors.map((c) => (
                      <button 
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`group relative flex flex-col items-center gap-2 transition-all`}
                      >
                        <div className={`w-12 h-12 rounded-full ${c.class} shadow-inner border-2 ${selectedColor === c.name ? 'border-pink-600 scale-110 ring-4 ring-pink-100' : 'border-transparent opacity-80'}`} />
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedColor === c.name ? 'text-pink-600' : 'text-zinc-400'}`}>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right flex flex-col items-center md:items-end w-full md:w-auto">
                <div className="text-zinc-300 line-through text-2xl font-black italic tracking-tighter">€49,99</div>
                <div className="text-7xl font-black text-zinc-900 tracking-tighter italic">€24,99</div>
                <div className="bg-green-100 text-green-600 text-xs font-black py-2 px-4 rounded-full mt-4 uppercase tracking-[0.1em] border border-green-200">
                  RISPARMI €25.00
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 mb-12 py-8 border-y border-zinc-100">
              {[
                "Spedizione Internazionale Gratuita",
                "Processore Quad-Core Fluido",
                "Google Play Store Incluso",
                "Custodia Slim in Regalo",
                "Certificato di Qualità",
                "Supporto Clienti 24/7"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-600 font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <a 
                href={shopifyLink}
                className="w-full bg-zinc-900 py-7 rounded-[2rem] text-white text-3xl font-black tracking-tight hover:bg-pink-600 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4 uppercase italic"
              >
                COMPRA ORA <ShoppingCart className="w-8 h-8" />
              </a>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap justify-center items-center gap-6">
                   <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold uppercase tracking-widest">
                    <CreditCard className="w-4 h-4 text-pink-600" /> Solo pagamento con carta
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-pink-600" /> Transazioni Criptate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
