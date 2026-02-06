
import React from 'react';
import { Maximize, Shield, Zap, Globe, Cpu, Layout, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Dimensioni Record",
      desc: "Solo 3.54 pollici di altezza. Più piccolo di una carta di credito, sparisce in ogni tasca."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Display HD 3.0\"",
      desc: "Colori brillanti e touch ultra-reattivo. Supporta tutte le app social moderne."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Android 10.0",
      desc: "WhatsApp, TikTok, Instagram e YouTube già pronti. Google Play Store integrato."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Dual SIM 4G",
      desc: "Gestisci due numeri contemporaneamente. Segnale potente e GPS ultra-accurato."
    }
  ];

  return (
    <section id="features" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 uppercase italic">Piccolo corpo, <span className="text-gradient-brand">Grande Anima.</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto font-medium">Mini Pro™ non è un giocattolo, è uno smartphone completo in miniatura.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Immagine Dimensioni reali */}
          <div className="bg-white p-4 rounded-[3rem] border border-zinc-200 shadow-xl overflow-hidden flex flex-col items-center">
            <img 
              src="https://m.media-amazon.com/images/I/81k8q-YYXkL._AC_SL1500_.jpg" 
              alt="Size specification 3.54 inch" 
              className="w-full rounded-[2rem] object-cover" 
            />
            <div className="text-center mt-6">
              <p className="text-2xl font-black italic tracking-tighter text-zinc-900 uppercase">MISURE: 3.54" x 1.97"</p>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">Design Ergonomico Ultra Sottile</p>
            </div>
          </div>

          {/* Immagine Dual SIM reale */}
          <div className="bg-white p-4 rounded-[3rem] border border-zinc-200 shadow-xl overflow-hidden flex flex-col items-center">
             <img 
              src="https://m.media-amazon.com/images/I/518-3NEcvSL._AC_.jpg" 
              alt="Dual SIM Card Technology" 
              className="w-full rounded-[2rem] object-cover" 
            />
            <div className="text-center mt-6">
              <p className="text-2xl font-black italic tracking-tighter text-zinc-900 uppercase">Dual SIM Dual Standby</p>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">Connettività 4G Ovunque</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-white border border-zinc-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-gradient-brand group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900">{item.title}</h3>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
