
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  const shopifyLink = "https://minipro.shop/cart/61028054073674:1";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        {/* Social Stats Bar */}
        <div className="bg-zinc-900 py-8 border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-10 text-center">
            <div>
              <p className="text-3xl font-black text-white italic tracking-tighter">80K+</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black mt-1">Clienti Soddisfatti</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white italic tracking-tighter">4.9/5</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black mt-1">Rating Recensioni</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white italic tracking-tighter">PRO</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black mt-1">Qualità Garantita</p>
            </div>
          </div>
        </div>

        <Features />
        
        {/* Viral Section / Why Choose Us */}
        <section id="benefits" className="py-24 px-4 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-[50%] bg-zinc-50 -z-10 transform -skew-y-2" />
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-zinc-900 uppercase">TIKTOK MADE ME BUY IT 📲</h2>
               <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Il gadget più desiderato del momento.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
               <div className="aspect-[4/5] bg-white rounded-[3rem] border-8 border-zinc-100 shadow-2xl overflow-hidden relative group">
                  {/* Immagine Confronto Smartphone reale */}
                  <img 
                    src="https://m.media-amazon.com/images/I/815sAn2LNTL._AC_SL1500_.jpg" 
                    alt="Comparison with standard phone" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute bottom-10 left-10 bg-zinc-900/90 backdrop-blur px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase">
                    Metà delle dimensioni 📏
                  </div>
               </div>

               <div className="space-y-10 text-left md:pl-10">
                  <div className="space-y-4">
                     <h3 className="text-3xl font-black text-zinc-900 uppercase italic leading-none text-gradient-brand">Grande Memoria,<br/>Zero Peso.</h3>
                     <p className="text-zinc-500 font-medium leading-relaxed text-sm">Mini Pro™ non rinuncia a nulla. Fotocamera, Google Play e una batteria ottimizzata per durare tutto il giorno in un corpo pazzesco.</p>
                  </div>
                  
                  {/* Multimedia Grid Image */}
                  <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
                    <img src="https://m.media-amazon.com/images/I/71nxkiVVfBL._AC_SL1500_.jpg" alt="Multimedia Capacity" className="w-full" />
                  </div>

                  <div className="flex items-center gap-8 mb-4">
                    <div className="text-center">
                       <p className="text-xl font-black text-zinc-900 tracking-tighter italic">12.000</p>
                       <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Foto</p>
                    </div>
                    <div className="text-center">
                       <p className="text-xl font-black text-zinc-900 tracking-tighter italic">225</p>
                       <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Episodi TV</p>
                    </div>
                    <div className="text-center">
                       <p className="text-xl font-black text-zinc-900 tracking-tighter italic">3.500</p>
                       <p className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Brani</p>
                    </div>
                  </div>

                  <a href={shopifyLink} className="inline-block bg-zinc-900 text-white px-10 py-5 rounded-2xl font-black italic tracking-tighter uppercase hover:bg-pink-600 transition-colors shadow-xl">
                    VAI AL CHECKOUT 💸
                  </a>
               </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Pricing />
        
        {/* Mini Footer / Bottom Bar */}
        <div className="bg-zinc-50 py-10 border-t border-zinc-200">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="font-extrabold text-xl tracking-tighter uppercase italic text-zinc-900 mb-4">Mini Pro™</div>
              <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} - Pagamenti sicuri criptati SSL. Spedizione monitorata.
              </p>
           </div>
        </div>
      </main>
    </div>
  );
};

export default App;
