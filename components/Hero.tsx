
import React from 'react';
import { ArrowRight, Star, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const shopifyLink = "https://minipro.shop/cart/61028054073674:1";

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] left-[60%] w-[600px] h-[600px] bg-pink-100/50 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 border border-pink-200 text-pink-600 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3" /> OFFERTA LANCIO 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-zinc-900">
            Il Mini Smartphone <br/><span className="text-gradient-brand italic">più virale del web.</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Potenza Android in soli 3 pollici. Design ispirato ai top di gamma, perfetto per chi cerca stile e portabilità estrema.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href={shopifyLink}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-brand rounded-2xl text-white font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl shadow-pink-500/40"
            >
              ORDINA A 24,99€ <ArrowRight className="w-6 h-6" />
            </a>
            <div className="flex flex-col items-center lg:items-start gap-1">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Garanzia Soddisfatti o Rimborsati</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4 text-zinc-400 border-t border-zinc-100">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-600">
              <ShieldCheck className="w-5 h-5 text-green-500" /> Pagamento 100% Sicuro con Carta
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Zap className="w-5 h-5 text-blue-500" /> Consegna Espressa
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-brand blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative rounded-[3rem] p-4 bg-white border border-zinc-100 shadow-2xl overflow-hidden">
             {/* Immagine 4 colori caricata dall'utente */}
             <img 
              src="https://m.media-amazon.com/images/I/61Hmydb5aiL._AC_SL1000_.jpg" 
              alt="Mini Pro Smartphone All Colors" 
              className="rounded-[2.5rem] w-full object-cover aspect-[4/5] brightness-105"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl border border-zinc-200 shadow-xl font-black text-zinc-900 text-lg uppercase tracking-tighter transform rotate-[-5deg]">
              NERO • ARGENTO • BLU • ARANCIO 🌈
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white border border-zinc-200 p-6 rounded-3xl shadow-2xl animate-pulse-slow">
            <p className="text-pink-600 font-black text-3xl italic tracking-tighter">€24,99</p>
            <p className="text-zinc-400 text-xs font-bold line-through tracking-wider uppercase">LISTINO €49,99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
