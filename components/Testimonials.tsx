
import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Luca M.",
      role: "Digital Nomad",
      content: "Lo porto sempre con me come backup. Mi ha salvato più volte quando l'iPhone principale era scarico. Android gira benissimo!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=luca"
    },
    {
      name: "Sonia F.",
      role: "Mamma",
      content: "Il regalo perfetto per mio figlio. È piccolo per le sue mani, ha WhatsApp per sentirci e non costa una fortuna come gli altri.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sonia"
    },
    {
      name: "Davide R.",
      role: "Runner",
      content: "Finalmente posso andare a correre con uno smartphone che non mi pesa nella tasca. Spotify e GPS funzionano alla perfezione!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=davide"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter">I NOSTRI CLIENTI 🔥</h2>
          <div className="flex flex-col items-center gap-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <p className="text-zinc-400 font-bold text-sm uppercase tracking-widest">Oltre 2,400 recensioni a 5 stelle</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-zinc-50 border border-zinc-200 p-10 rounded-[2.5rem] relative hover:bg-white hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-8">
                <img src={rev.avatar} className="w-14 h-14 rounded-full border-2 border-white shadow-lg" alt={rev.name} />
                <div>
                  <h4 className="font-extrabold text-zinc-900 flex items-center gap-1.5 text-lg">
                    {rev.name} <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider italic">Acquisto Verificato</p>
                </div>
              </div>
              <p className="text-zinc-600 font-medium italic text-lg leading-relaxed">"{rev.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
