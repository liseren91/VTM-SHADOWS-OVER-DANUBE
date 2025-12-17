import React, { useState } from 'react';
import { RulesPageContent } from '../types';
import { ArrowLeft, Scroll, Sword, Flame, Book, Heart, Coins, Shield, CheckCircle2, XCircle, AlertTriangle, ChevronDown } from 'lucide-react';

interface RulesViewProps {
  content: RulesPageContent;
  onBack: () => void;
}

const RulesView: React.FC<RulesViewProps> = ({ content, onBack }) => {
  const [openSubsections, setOpenSubsections] = useState<Record<string, boolean>>({});

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'scroll': return <Scroll className="w-6 h-6" />;
      case 'sword': return <Sword className="w-6 h-6" />;
      case 'flame': return <Flame className="w-6 h-6" />;
      case 'book': return <Book className="w-6 h-6" />;
      case 'heart': return <Heart className="w-6 h-6" />;
      case 'coins': return <Coins className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      default: return <Scroll className="w-6 h-6" />;
    }
  };

  const toggleSubsection = (key: string) => {
    setOpenSubsections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black flex flex-col md:flex-row">
      {/* Sidebar Navigation (Desktop) / Top Bar (Mobile) */}
      <aside className="w-full md:w-80 md:h-[calc(100vh-6rem)] md:sticky md:top-24 bg-black/90 backdrop-blur border-b md:border-b-0 md:border-r border-white/10 z-30 overflow-y-auto">
        <div className="p-6">
            <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-blood-red transition-colors mb-8 group"
            >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono uppercase tracking-widest text-sm">Return to Main</span>
            </button>
            <h1 className="text-3xl font-serif text-white mb-8 tracking-wide border-b border-blood-red pb-4">
                {content.title}
            </h1>
            <nav className="space-y-2">
                {content.sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left flex items-center gap-4 px-4 py-3 rounded text-gray-400 hover:bg-white/5 hover:text-white transition-all group"
                    >
                        <span className="text-blood-red opacity-70 group-hover:opacity-100 transition-opacity">
                            {getIcon(section.icon)}
                        </span>
                        <span className="font-serif tracking-wide text-sm md:text-base">{section.title}</span>
                    </button>
                ))}
            </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 lg:p-20 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-24">
            {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blood-red/10 rounded-full border border-blood-red/30 text-blood-red">
                            {getIcon(section.icon)}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white tracking-widest uppercase">
                            {section.title}
                        </h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-white/10 pl-6 md:pl-10 ml-5">
                        {section.content.map((block, idx) => (
                            <div key={idx} className="space-y-4">
                                {block.subtitle && (
                                    <h3 className="text-xl font-serif text-gray-200 flex items-center gap-2">
                                        {block.listType === 'check' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                        {block.listType === 'cross' && <XCircle className="w-5 h-5 text-red-500" />}
                                        {block.listType === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                                        {block.subtitle}
                                    </h3>
                                )}
                                
                                {block.text && (
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {block.text}
                                    </p>
                                )}

                                {block.list && (
                                    <ul className="space-y-3 mt-4">
                                        {block.list.map((item, i) => (
                                            <li key={i} className={`flex items-start gap-3 p-3 rounded bg-white/5 ${
                                                block.listType === 'check' ? 'border-l-4 border-green-500/50' :
                                                block.listType === 'cross' ? 'border-l-4 border-red-500/50' :
                                                block.listType === 'warning' ? 'border-l-4 border-yellow-500/50' :
                                                'border-l-4 border-gray-600'
                                            }`}>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {block.subsections && (
                                  <div className="space-y-3 mt-4">
                                    {block.subsections.map((sub, subIdx) => {
                                      const key = `${section.id}-${idx}-${subIdx}`;
                                      const isOpen = !!openSubsections[key];
                                      return (
                                        <div key={key} className="border border-white/10 rounded bg-white/5 overflow-hidden">
                                          <button
                                            onClick={() => toggleSubsection(key)}
                                            className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-200 hover:text-white hover:bg-white/5 transition-colors"
                                          >
                                            <span className="font-serif text-lg">{sub.title}</span>
                                            <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-blood-red' : 'text-gray-400'}`} />
                                          </button>
                                          {isOpen && (
                                            <div className="border-t border-white/10 p-4 space-y-3 animate-in fade-in">
                                              {sub.text && (
                                                <p className="text-gray-400 leading-relaxed text-base">
                                                  {sub.text}
                                                </p>
                                              )}
                                              {sub.list && (
                                                <ul className="space-y-2">
                                                  {sub.list.map((item, listIdx) => (
                                                    <li key={listIdx} className="flex items-start gap-3 p-3 rounded bg-black/40 border border-white/5">
                                                      <span className="text-gray-300">{item}</span>
                                                    </li>
                                                  ))}
                                                </ul>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
      </main>
    </div>
  );
};

export default RulesView;