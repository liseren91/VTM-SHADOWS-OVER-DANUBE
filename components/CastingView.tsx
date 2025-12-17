import React from 'react';
import { CastingPageContent, Language } from '../types';
import RolesGridWidget from './RolesGridWidget';
import { ArrowLeft, Send, Users, PenTool, Camera, MapPin, Shirt } from 'lucide-react';
import { APPLICATION_URL } from '../constants';

interface CastingViewProps {
  content: CastingPageContent;
  lang: Language;
  onBack: () => void;
}

const CastingView: React.FC<CastingViewProps> = ({ content, onBack, lang }) => {
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