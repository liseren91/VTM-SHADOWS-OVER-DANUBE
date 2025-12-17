import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { Terminal, Send, X, Cpu } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface SchreckNetProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const SchreckNet: React.FC<SchreckNetProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].schrecknet;
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language or open state changes
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: t.welcome }]);
    }
  }, [isOpen, lang, t.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Format history for the API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToGemini(history, userMsg.text, lang);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: t.networkError, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-black border-2 border-green-900 shadow-[0_0_20px_rgba(20,83,45,0.5)] flex flex-col h-[80vh] font-mono text-green-500 rounded-sm relative overflow-hidden">
        {/* Scanlines Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
        
        {/* Header */}
        <div className="bg-green-900/20 p-3 border-b border-green-800 flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 animate-pulse" />
            <span className="font-bold tracking-wider">SCHRECKNET v.20.0.4 [{lang.toUpperCase()}]</span>
          </div>
          <button onClick={onClose} className="hover:text-green-300 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 z-20 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-black">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 border ${
                msg.role === 'user' 
                  ? 'border-green-700 bg-green-900/10 text-right' 
                  : 'border-green-900/50 bg-black text-left'
              }`}>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 text-green-700 p-3">
                <Cpu className="w-4 h-4 animate-spin" />
                <span className="animate-pulse">{t.processing}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-green-800 bg-black z-20">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.inputPlaceholder}
              className="flex-1 bg-black border border-green-800 p-3 text-green-500 focus:outline-none focus:border-green-500 placeholder-green-900"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="px-4 border border-green-800 hover:bg-green-900/30 transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchreckNet;