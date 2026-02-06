
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, MessageSquare, X, Send, Loader2, Smartphone } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Sei l'assistente ufficiale di Mini Pro™. 
          Informazioni chiave da comunicare:
          1. Prezzo speciale: Solo 24,99€ (Sconto 50% attivo ora).
          2. Pagamento: Accettiamo solo pagamenti sicuri con carta (Visa, Mastercard, Apple Pay) per garantire la massima velocità di spedizione. NON facciamo contrassegno.
          3. Colori disponibili: Nero, Argento, Blu e Arancione.
          4. Spedizione: Gratuita e tracciata.
          5. Caratteristiche: Android, Touch screen 3 pollici, Fotocamera, Google Play Store.
          
          Sii entusiasta, amichevole e spingi l'utente a completare l'acquisto prima che finiscano le scorte. Rispondi in italiano con emoji.`,
        },
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "Il Mini Pro è pazzesco, approfitta dell'offerta!" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Scusa, siamo sommersi di richieste! Il prezzo a 24,99€ è davvero un affare, ordina subito!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white border border-zinc-200 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-brand p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-black italic">Mini Pro AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X className="w-5 h-5" /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-zinc-400 text-sm mt-10 space-y-2">
                <Smartphone className="w-12 h-12 mx-auto mb-4 opacity-20 text-zinc-900" />
                <p className="font-bold uppercase tracking-widest text-zinc-900">Domande sul Mini Pro?</p>
                <p className="font-medium">Chiedimi dei colori o della spedizione! 🚀</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm font-medium ${m.role === 'user' ? 'bg-zinc-900 text-white shadow-lg' : 'bg-zinc-100 text-zinc-900'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 p-4 rounded-3xl">
                  <Loader2 className="w-4 h-4 animate-spin text-pink-600" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Scrivi qui..."
              className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-3 text-sm font-semibold focus:outline-none"
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-zinc-900 p-3 rounded-2xl text-white">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-gradient-brand w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group">
          <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
