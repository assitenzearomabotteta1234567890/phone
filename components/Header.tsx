
import React from 'react';
import { ShoppingCart, Smartphone } from 'lucide-react';

const Header: React.FC = () => {
  const shopifyLink = "https://minipro.shop/cart/61028054073674:1";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center shadow-lg shadow-pink-500/20">
            <div className="w-5 h-5 flex items-center justify-center">
              <Smartphone className="text-white w-full h-full" />
            </div>
          </div>
          <span className="font-extrabold text-xl tracking-tighter uppercase italic text-zinc-900">Mini Pro</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-500">
          <a href="#features" className="hover:text-pink-600 transition-colors">Specifiche</a>
          <a href="#benefits" className="hover:text-pink-600 transition-colors">Perché sceglierlo</a>
          <a href="#reviews" className="hover:text-pink-600 transition-colors">Recensioni</a>
        </nav>

        <a 
          href={shopifyLink}
          className="bg-gradient-brand hover:brightness-110 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-pink-500/20"
        >
          ORDINA ORA
          <ShoppingCart className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};

export default Header;
