import React from 'react';
import { CastingPageContent, Language } from '../types';
import RolesGridWidget from './RolesGridWidget';
import { ArrowLeft, Send, Users, PenTool, Camera, MapPin, Shirt, Shield, Image as ImageIcon } from 'lucide-react';
import { APPLICATION_URL } from '../constants';
import { NEW_PRIMOGENS_CONTENT } from '../newPrimogensContent';

interface CastingViewProps {
  content: CastingPageContent;
  lang: Language;
  onBack: () => void;
}

const CastingView: React.FC<CastingViewProps> = ({ content, onBack, lang }) => {
  const primogensContent = NEW_PRIMOGENS_CONTENT[lang];

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
        <p className="text-gray-400 text-lg max-w-2xl">{content.description}</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-24">

        {/* New Primogens Section */}
        <section className="bg-gradient-to-br from-neutral-950 via-black to-neutral-900 border border-white/10 p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Shield className="w-48 h-48 text-blood-red" />
          </div>

          <div className="relative z-10">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-3 border-b border-blood-red pb-3 inline-block">
                {primogensContent.title}
              </h2>
              <p className="text-blood-red font-mono text-sm uppercase tracking-widest mb-3">
                {primogensContent.subtitle}
              </p>
              <p className="text-gray-400 max-w-4xl leading-relaxed">
                {primogensContent.intro}
              </p>
            </div>

            <div className="space-y-10">
              {primogensContent.entries.map((entry) => (
                <article
                  key={entry.clan}
                  className="border border-white/10 bg-white/[0.03] p-5 md:p-7 rounded-sm"
                >
                  <div className="grid lg:grid-cols-[220px_1fr] gap-6 md:gap-8">
                    <div className="space-y-4">
                      <div className="aspect-[3/4] border border-dashed border-white/25 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                        <ImageIcon className="w-10 h-10 text-gray-500 mb-3" />
                        <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                          {entry.photoPlaceholder}
                        </p>
                      </div>
                      <div className="border border-white/10 bg-black/40 p-3 text-center">
                        <p className="font-serif text-white text-lg leading-tight">{entry.primogen}</p>
                        <p className="text-blood-red text-xs uppercase tracking-wider mt-1">{entry.clan}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">{entry.clan}</h3>
                        <p className="text-blood-red font-mono text-sm uppercase tracking-wider mb-4">
                          Примоген: {entry.primogen}
                        </p>
                        <div className="space-y-4">
                          {entry.opening.map((paragraph) => (
                            <p key={paragraph} className="text-gray-300 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-emerald-800/40 bg-emerald-950/10 p-4">
                          <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">♚ Шах</p>
                          <p className="text-gray-300 text-sm leading-relaxed">{entry.shah}</p>
                        </div>
                        <div className="border border-amber-700/40 bg-amber-950/10 p-4">
                          <p className="text-amber-400 font-mono text-xs uppercase tracking-widest mb-2">♚ Мат</p>
                          <p className="text-gray-300 text-sm leading-relaxed">{entry.mat}</p>
                        </div>
                      </div>

                      <div className="border border-white/10 bg-black/40 p-4">
                        <p className="text-gray-200 font-serif text-lg mb-3">Слухи</p>
                        <ul className="space-y-2 text-gray-400">
                          {entry.rumors.map((rumor) => (
                            <li key={rumor} className="flex gap-2">
                              <span className="text-blood-red mt-0.5">•</span>
                              <span className="leading-relaxed">{rumor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-l-2 border-blood-red pl-4 space-y-3">
                        <h4 className="text-xl font-serif text-white">{entry.clanPitchTitle}</h4>
                        {entry.clanPitch.map((paragraph) => (
                          <p key={paragraph} className="text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="pt-2">
                        <a
                          href={entry.applyUrl}
                          className="inline-block px-8 py-3 bg-blood-red text-white font-serif text-sm tracking-widest hover:bg-red-800 transition-all border border-red-500 shadow-[0_0_14px_rgba(138,11,11,0.55)] hover:shadow-[0_0_22px_rgba(220,20,60,0.75)] transform hover:-translate-y-0.5"
                        >
                          {entry.applyLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        {/* Roles Grid Widget */}
        <section className="bg-black/50 border border-white/10 rounded-sm overflow-hidden">
           <RolesGridWidget lang={lang} />
        </section>

        {/* Team Section */}
        <section>
            <div className="flex items-center gap-4 mb-10">
                <Users className="w-8 h-8 text-blood-red" />
                <h2 className="text-3xl font-serif text-white tracking-widest uppercase">
                    {content.teamSection.title}
                </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {content.teamSection.members.map((member, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-neutral-900 to-black border-l-4 border-blood-red p-6 hover:bg-neutral-900 transition-colors group">
                        <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-blood-red transition-colors">{member.name}</h3>
                        <p className="text-gray-400 mb-4 text-sm uppercase tracking-wide">{member.role}</p>
                        {member.telegram && (
                            <a 
                                href={`https://t.me/${member.telegram.replace('@', '')}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-blood-red hover:text-white transition-colors flex items-center gap-2 text-sm font-mono"
                            >
                                <Send className="w-3 h-3" />
                                {member.telegram}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* Helpers Section */}
        <section className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <PenTool className="w-64 h-64 text-white" />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">
                    {content.helpersSection.title}
                </h2>
                <p className="text-gray-300 text-lg mb-8 italic border-l-2 border-blood-red pl-4">
                    {content.helpersSection.intro}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {content.helpersSection.roles.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-200 bg-black/40 p-3 rounded border border-white/5">
                            {idx === 0 && <MapPin className="w-5 h-5 text-blood-red" />}
                            {idx === 1 && <Shirt className="w-5 h-5 text-blood-red" />}
                            {idx === 2 && <Camera className="w-5 h-5 text-blood-red" />}
                            {idx === 3 && <PenTool className="w-5 h-5 text-blood-red" />}
                            <span>{role}</span>
                        </div>
                    ))}
                </div>

                <p className="text-blood-red font-bold uppercase tracking-wider text-sm mb-8">
                    {content.helpersSection.cta}
                </p>

                <div className="text-center md:text-left">
                    <a 
                        href={APPLICATION_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-12 py-4 bg-blood-red text-white font-serif text-lg tracking-widest hover:bg-red-800 transition-all border border-red-500 shadow-[0_0_20px_rgba(138,11,11,0.6)] hover:shadow-[0_0_30px_rgba(220,20,60,0.8)] transform hover:-translate-y-1"
                    >
                        {content.applyButton}
                    </a>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default CastingView;
