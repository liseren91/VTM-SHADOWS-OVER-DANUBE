
import React, { useState, useEffect } from 'react';
import { SettingContent } from '../types';
import { ArrowLeft, MapPin, BookOpen, Clock, AlertTriangle, Users, Zap, AlertOctagon, Quote, Crosshair, Trash2, Crown, Gamepad2 } from 'lucide-react';

interface SettingViewProps {
  content: SettingContent;
  onBack: () => void;
}

const SettingView: React.FC<SettingViewProps> = ({ content, onBack }) => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  // Load saved images from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('vtm_clan_images');
    if (saved) {
      try {
        setGeneratedImages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load saved images", e);
      }
    }
  }, []);

  const handleResetImage = (e: React.MouseEvent, clanName: string) => {
    e.stopPropagation();
    if (window.confirm('Reset to default image?')) {
      setGeneratedImages(prev => {
        const newState = { ...prev };
        delete newState[clanName];
        localStorage.setItem('vtm_clan_images', JSON.stringify(newState));
        return newState;
      });
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-blood-red transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono uppercase tracking-widest text-sm">Return to Main</span>
        </button>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide border-b border-blood-red pb-6">
          {content.title}
        </h1>
      </div>

      {/* Recommendations / What to play */}
      {content.recommendations && (
        <section className="mb-24 px-6 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="w-6 h-6 text-blood-red" />
            <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.recommendations.question}</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {content.recommendations.games.map((game, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-sm hover:border-blood-red/50 transition-colors flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-blood-red rounded-full shadow-[0_0_8px_rgba(139,0,0,0.8)]" />
                <span className="text-gray-200 font-serif text-lg">{game}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* History Timeline */}
      <section className="mb-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Clock className="w-6 h-6 text-blood-red" />
          <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.history.intro}</h2>
        </div>
        
        <div className="border-l-2 border-blood-red/30 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-2">
          {content.history.timeline.map((event, idx) => (
            <div key={idx} className="relative">
              <span className="absolute -left-[41px] md:-left-[59px] top-1 w-5 h-5 bg-black border-2 border-blood-red rounded-full"></span>
              <span className="block text-blood-red font-mono font-bold text-lg mb-1">{event.year}</span>
              <h3 className="text-xl font-serif text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Geography Grid */}
      <section className="mb-24 bg-white/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <MapPin className="w-6 h-6 text-blood-red" />
            <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.geography.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.geography.locations.map((loc, idx) => (
              <div key={idx} className="bg-black/40 border border-white/10 p-6 hover:border-blood-red/50 transition-colors">
                <h3 className="text-lg font-bold text-white mb-3 font-serif">{loc.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Six Traditions */}
      <section className="mb-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Crown className="w-6 h-6 text-blood-red" />
          <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.traditions.title}</h2>
        </div>

        <p className="text-xl text-white italic mb-12 font-serif text-center md:text-left border-l-4 border-blood-red pl-6 py-2">
          {content.traditions.intro}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.traditions.traditions.map((rule, idx) => (
            <div 
              key={idx} 
              className="relative p-8 bg-gradient-to-br from-neutral-900 to-black border border-white/10 hover:border-blood-red/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-8 text-[120px] font-serif font-bold text-white/5 select-none pointer-events-none">
                {ROMAN_NUMERALS[idx]}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-baseline gap-3 mb-4 border-b border-blood-red/30 pb-3">
                  <span className="text-blood-red font-serif font-bold text-xl">{ROMAN_NUMERALS[idx]}.</span>
                  <h3 className="text-xl font-serif text-white tracking-wider uppercase">
                    {rule.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clans Section - Redesigned */}
      <section className="mb-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Users className="w-6 h-6 text-blood-red" />
          <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.clans.title}</h2>
        </div>
        
        <p className="text-xl text-white italic mb-16 font-serif text-center md:text-left border-l-4 border-blood-red pl-6 py-2">
          {content.clans.intro}
        </p>

        <div className="grid grid-cols-1 gap-16">
          {content.clans.items.map((clan, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#0a0a0a] border border-white/10 hover:border-blood-red/50 transition-all duration-500 flex flex-col md:flex-row overflow-hidden rounded-sm"
            >
              {/* Image Section (Left/Top) */}
              <div className="md:w-5/12 relative aspect-video md:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
                  
                  <img 
                      src={generatedImages[clan.name] || clan.image} 
                      alt={clan.name} 
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        generatedImages[clan.name] 
                          ? 'opacity-100 saturate-100' 
                          : 'saturate-[0.2] group-hover:saturate-100 opacity-70 group-hover:opacity-100 group-hover:scale-105'
                      }`}
                  />

                  {/* Reset overlay (only shown when a generated image exists) */}
                  {generatedImages[clan.name] && (
                    <div className="absolute top-4 right-4 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handleResetImage(e, clan.name)}
                        className="bg-black/60 hover:bg-red-900/80 text-white p-2 rounded-sm border border-white/20 backdrop-blur-md transition-all"
                        title="Reset to Default"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Clan Title Overlay on Image (Mobile only) */}
                  <div className="absolute bottom-4 left-4 z-20 md:hidden">
                    <a href={clan.link} target="_blank" rel="noreferrer" className="hover:text-blood-red transition-colors">
                      <h3 className="text-3xl font-serif font-bold text-white tracking-wide">{clan.name}</h3>
                    </a>
                  </div>
              </div>
              
              {/* Content Section (Right/Bottom) */}
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col relative">
                {/* Decorative background line */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none" />

                {/* Header Desktop */}
                <div className="hidden md:flex justify-between items-start mb-6 pb-4 border-b border-white/10">
                  <div>
                    <a href={clan.link} target="_blank" rel="noreferrer" className="group/link">
                       <h3 className="text-4xl font-serif font-bold text-white tracking-wide group-hover/link:text-blood-red transition-colors">{clan.name}</h3>
                    </a>
                    <p className="text-blood-red font-mono text-sm tracking-[0.2em] uppercase mt-1">{clan.nickname}</p>
                  </div>
                  <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                    <Users className="w-10 h-10 text-white stroke-1" />
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6 flex gap-3 text-gray-500 italic text-sm md:text-base bg-white/5 p-3 rounded-r border-l-2 border-blood-red/50">
                   <Quote className="w-5 h-5 flex-shrink-0 text-blood-red/50 transform scale-x-[-1]" />
                   "{clan.stereotype}"
                </div>
                
                {/* Description */}
                <div className="mb-8 flex-grow">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base font-sans font-light">
                    {clan.description}
                  </p>
                </div>

                {/* Stats Grid - The "Dossier" Look */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  
                  {/* Disciplines */}
                  <div className="bg-black border border-white/10 p-3 group/stat hover:border-blood-red/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                       <Zap className="w-4 h-4 text-yellow-500/80" />
                       <span className="text-xs font-mono uppercase text-gray-500 tracking-wider font-bold">Disciplines</span>
                    </div>
                    <p className="text-white font-serif text-sm tracking-wide group-hover/stat:text-yellow-500/90 transition-colors">
                      {clan.disciplines}
                    </p>
                  </div>

                   {/* Weakness */}
                   <div className="bg-black border border-white/10 p-3 group/stat hover:border-blood-red/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                       <AlertOctagon className="w-4 h-4 text-blood-red" />
                       <span className="text-xs font-mono uppercase text-gray-500 tracking-wider font-bold">Weakness</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-tight group-hover/stat:text-white transition-colors">
                      {clan.weakness}
                    </p>
                  </div>

                  {/* Roles */}
                  <div className="sm:col-span-2 bg-black border border-white/10 p-3 group/stat hover:border-blood-red/30 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                       <Crosshair className="w-4 h-4 text-blue-400/70" />
                       <span className="text-xs font-mono uppercase text-gray-500 tracking-wider font-bold">Typical Roles</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {clan.roles.map((role, rIdx) => (
                        <span key={rIdx} className="text-xs bg-white/10 px-2 py-1 rounded-sm text-gray-300 border border-white/5 font-mono">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Basic Concepts */}
      <section className="mb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-6 h-6 text-blood-red" />
          <h2 className="text-2xl font-serif text-gray-200 tracking-wider uppercase">{content.basics.title}</h2>
        </div>
        
        <p className="text-xl text-white italic mb-10 font-serif text-center md:text-left border-l-4 border-blood-red pl-6 py-2">
          {content.basics.intro}
        </p>

        <div className="grid gap-8">
          {content.basics.concepts.map((concept, idx) => (
            <div key={idx} className="border-b border-white/10 pb-8 last:border-0">
              <h3 className="text-blood-red text-xl font-bold mb-2 uppercase tracking-wide font-sans">{concept.term}</h3>
              <p className="text-gray-300 leading-relaxed">{concept.definition}</p>
              {concept.details && (
                <ul className="mt-3 space-y-1">
                  {concept.details.map((d, i) => (
                    <li key={i} className="text-sm text-gray-500 italic">• {d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Adaptations Warning */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="border border-blood-red/40 bg-blood-red/5 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <AlertTriangle className="w-32 h-32 text-blood-red" />
          </div>
          <h2 className="text-2xl font-serif text-white mb-6 relative z-10">{content.adaptations.title}</h2>
          <p className="text-gray-300 mb-6 font-medium relative z-10">{content.adaptations.disclaimer}</p>
          
          <ul className="space-y-3 mb-8 relative z-10">
            {content.adaptations.items.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-gray-400">
                <span className="text-blood-red font-bold">/</span>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="pt-6 border-t border-blood-red/20 relative z-10">
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-widest">{content.adaptations.reason}</p>
            <p className="text-white font-serif italic text-lg">"{content.adaptations.conclusion}"</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingView;
