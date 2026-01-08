import React, { useState, useEffect } from 'react';
import { RulesPageContent } from '../types';
import { ArrowLeft, Scroll, Sword, Flame, Book, Heart, Coins, Shield, CheckCircle2, XCircle, AlertTriangle, ChevronDown, Droplets, MessageSquare, Link as LinkIcon } from 'lucide-react';

interface RulesViewProps {
  content: RulesPageContent;
  onBack: () => void;
}

const RulesView: React.FC<RulesViewProps> = ({ content, onBack }) => {
  const [openSubsections, setOpenSubsections] = useState<Record<string, boolean>>({});
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'scroll': return <Scroll className="w-6 h-6" />;
      case 'sword': return <Sword className="w-6 h-6" />;
      case 'flame': return <Flame className="w-6 h-6" />;
      case 'book': return <Book className="w-6 h-6" />;
      case 'heart': return <Heart className="w-6 h-6" />;
      case 'coins': return <Coins className="w-6 h-6" />;
      case 'shield': return <Shield className="w-6 h-6" />;
      case 'droplet': return <Droplets className="w-6 h-6" />;
      case 'message-square': return <MessageSquare className="w-6 h-6" />;
      default: return <Scroll className="w-6 h-6" />;
    }
  };

  const toggleSubsection = (key: string) => {
    setOpenSubsections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const scrollToSection = (id: string, updateHash = true) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (updateHash) {
        // Update URL without triggering hashchange navigation
        window.history.replaceState(null, '', `#rules-${id}`);
      }
    }
  };

  const copyLinkToSection = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#rules-${id}`;
    navigator.clipboard.writeText(url);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Handle initial scroll if URL has section anchor
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const match = hash.match(/^rules-(.+)$/);
    if (match) {
      const sectionId = match[1];
      setTimeout(() => {
        scrollToSection(sectionId, false);
      }, 100);
    }
  }, []);

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
            {content.warning && (
                <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex gap-4 -mb-12">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0" />
                    <div>
                        <h3 className="text-yellow-500 font-serif text-xl mb-2 uppercase tracking-wider">{content.warning.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{content.warning.text}</p>
                    </div>
                </div>
            )}
            {content.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-8 group">
                        <div className="p-3 bg-blood-red/10 rounded-full border border-blood-red/30 text-blood-red">
                            {getIcon(section.icon)}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-white tracking-widest uppercase">
                            {section.title}
                        </h2>
                        <button
                            onClick={() => copyLinkToSection(section.id)}
                            className={`opacity-0 group-hover:opacity-100 transition-all p-2 ${
                              copiedSection === section.id 
                                ? 'text-green-500 opacity-100' 
                                : 'text-gray-500 hover:text-blood-red'
                            }`}
                            title="Copy link to section"
                        >
                            {copiedSection === section.id ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : (
                              <LinkIcon className="w-5 h-5" />
                            )}
                        </button>
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
                                    <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">
                                        {block.text}
                                    </p>
                                )}

                                {block.image && (
                                    <div className="mt-4 mb-6">
                                        <img 
                                            src={block.image} 
                                            alt={block.subtitle || "Rule illustration"} 
                                            className="max-w-full h-auto rounded border border-white/10 shadow-lg shadow-blood-red/5"
                                        />
                                    </div>
                                )}

                                {block.list && (
                                    <ul className="space-y-3 mt-4">
                                        {block.list.map((item, i) => {
                                            const itemText = typeof item === 'string' ? item : item.text;
                                            const itemImage = typeof item === 'object' ? item.image : null;
                                            
                                            return (
                                                <li key={i} className={`flex flex-col gap-3 p-3 rounded bg-white/5 ${
                                                    block.listType === 'check' ? 'border-l-4 border-green-500/50' :
                                                    block.listType === 'cross' ? 'border-l-4 border-red-500/50' :
                                                    block.listType === 'warning' ? 'border-l-4 border-yellow-500/50' :
                                                    'border-l-4 border-gray-600'
                                                }`}>
                                                    <span className="text-gray-300 whitespace-pre-line">{itemText}</span>
                                                    {itemImage && (
                                                        <div className="mt-2">
                                                            <img 
                                                                src={itemImage} 
                                                                alt={itemText} 
                                                                className="max-w-full md:max-w-md h-auto rounded border border-white/10"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                    )}
                                                </li>
                                            );
                                        })}
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
                                                <p className="text-gray-400 leading-relaxed text-base whitespace-pre-line">
                                                  {sub.text}
                                                </p>
                                              )}
                                              {sub.image && (
                                                <div className="mt-4 mb-4">
                                                  <img 
                                                    src={sub.image} 
                                                    alt={sub.title} 
                                                    className="max-w-full h-auto rounded border border-white/5 shadow-md shadow-blood-red/5"
                                                  />
                                                </div>
                                              )}
                                              {sub.list && (
                                                <ul className="space-y-2">
                                                  {sub.list.map((item, listIdx) => {
                                                    const itemText = typeof item === 'string' ? item : item.text;
                                                    const itemImage = typeof item === 'object' ? item.image : null;
                                                    
                                                    return (
                                                      <li key={listIdx} className="flex flex-col gap-3 p-3 rounded bg-black/40 border border-white/5">
                                                        <span className="text-gray-300 whitespace-pre-line">{itemText}</span>
                                                        {itemImage && (
                                                          <div className="mt-2">
                                                            <img 
                                                              src={itemImage} 
                                                              alt={itemText} 
                                                              className="max-w-full md:max-w-md h-auto rounded border border-white/10 shadow-md"
                                                              loading="lazy"
                                                            />
                                                          </div>
                                                        )}
                                                      </li>
                                                    );
                                                  })}
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