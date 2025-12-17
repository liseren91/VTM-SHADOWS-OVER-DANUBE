import React from 'react';
import { AboutPageContent } from '../types';
import { ArrowLeft, Sparkles, CheckCircle2, XCircle, Hourglass, User, Info, Scale, Target, Map } from 'lucide-react';

interface AboutViewProps {
  content: AboutPageContent;
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ content, onBack }) => {
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

      <div className="max-w-6xl mx-auto px-6 space-y-24">
        
        {/* Intro Section */}
        <section className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6">
                <h3 className="text-4xl font-serif text-white tracking-wide border-b border-blood-red pb-4 inline-block">
                  {content.intro.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {content.intro.text}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {content.intro.subText}
                </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <h4 className="text-blood-red font-serif text-xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {content.atmosphere.title}
                </h4>
                <ul className="space-y-3">
                  {content.atmosphere.list.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400">
                      <span className="block w-1.5 h-1.5 mt-1.5 bg-blood-red rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
            </div>
        </section>

        {/* Expectations Grid */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* What To Expect */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
                  {content.expectations.title}
                </h3>
              </div>
              <ul className="space-y-4">
                 {content.expectations.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-4 p-4 border-l-2 border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-gray-200">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>

            {/* What NOT To Expect */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-blood-red" />
                <h3 className="text-2xl font-serif text-blood-red tracking-widest uppercase">
                  {content.limitations.title}
                </h3>
              </div>
              <ul className="space-y-4">
                 {content.limitations.items.map((item, idx) => (
                   <li key={idx} className="flex items-start gap-4 p-4 border-l-2 border-blood-red/20 bg-blood-dark/10 hover:bg-blood-dark/20 transition-colors">
                      <span className="text-gray-400">{item}</span>
                   </li>
                 ))}
              </ul>
            </div>
        </section>

        {/* Roles Section (Moved from Landing) */}
        <section className="space-y-12">
            <div className="flex items-center gap-3 mb-8">
                <User className="w-8 h-8 text-blood-red" />
                <h2 className="text-3xl font-serif text-white tracking-widest uppercase">
                  {content.roles.title}
                </h2>
            </div>
          
          {/* NPC Block */}
          <div className="flex flex-col md:flex-row gap-8 items-center border border-white/5 bg-white/5 p-8 rounded-sm">
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-3xl font-serif text-white mb-2">{content.roles.npc.title}</h3>
              <p className="text-blood-red font-mono text-sm tracking-widest mb-4">{content.roles.npc.subtitle}</p>
              <p className="text-gray-400 text-sm">{content.roles.npc.list}</p>
            </div>
            <div className="md:w-2/3 border-l border-white/10 pl-0 md:pl-8">
              <p className="mb-4 text-gray-300">
                {content.roles.npc.desc}
              </p>
              <div className="p-4 bg-black/40 text-sm text-gray-500 italic border-l-2 border-blood-red">
                {content.roles.npc.quote}
              </div>
            </div>
          </div>

          {/* Player Block */}
          <div className="flex flex-col md:flex-row gap-8 items-center border border-white/5 bg-white/5 p-8 rounded-sm">
            <div className="md:w-1/3 text-center md:text-left order-1 md:order-2">
              <h3 className="text-3xl font-serif text-white mb-2">{content.roles.pc.title}</h3>
              <p className="text-blood-red font-mono text-sm tracking-widest mb-4">{content.roles.pc.subtitle}</p>
              <p className="text-gray-400 text-sm">{content.roles.pc.list}</p>
            </div>
            <div className="md:w-2/3 border-r border-white/10 pr-0 md:pr-8 text-right order-2 md:order-1">
              <p className="mb-4 text-gray-300">
                {content.roles.pc.desc}
              </p>
            </div>
          </div>
        </section>


        {/* Age Limits Section (New) */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
             {/* Decorative background element */}
             <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Hourglass className="w-64 h-64 text-white" />
             </div>

             <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-10">
                    <Hourglass className="w-8 h-8 text-blood-red" />
                    <h2 className="text-3xl font-serif text-white tracking-widest uppercase">
                        {content.ageLimits.title}
                    </h2>
                 </div>

                 <div className="grid md:grid-cols-2 gap-12 mb-12">
                     {/* Mortal Age */}
                     <div className="space-y-4">
                         <h3 className="text-xl font-serif text-white border-b border-blood-red/50 pb-2">{content.ageLimits.mortal.title}</h3>
                         <ul className="space-y-2">
                             <li className="text-white font-bold">{content.ageLimits.mortal.min}</li>
                             <li className="text-gray-300">{content.ageLimits.mortal.typical}</li>
                         </ul>
                         <p className="text-sm text-gray-500 italic mt-2">{content.ageLimits.mortal.reason}</p>
                     </div>

                     {/* Vampire Age */}
                     <div className="space-y-4">
                         <h3 className="text-xl font-serif text-white border-b border-blood-red/50 pb-2">{content.ageLimits.vampire.title}</h3>
                         <ul className="space-y-2">
                             <li className="text-gray-300"><strong className="text-white">0-10:</strong> {content.ageLimits.vampire.fledgling}</li>
                             <li className="text-gray-300"><strong className="text-white">10-50:</strong> {content.ageLimits.vampire.neonate}</li>
                             <li className="text-blood-red font-bold uppercase mt-4 block">{content.ageLimits.vampire.max}</li>
                         </ul>
                         <p className="text-sm text-gray-500 italic">{content.ageLimits.vampire.maxReason}</p>
                     </div>
                 </div>

                 {/* Examples */}
                 <div className="mb-12 bg-black/40 p-6 border border-white/5">
                     <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-wider">{content.ageLimits.examples.title}</h3>
                     <div className="space-y-3">
                         {content.ageLimits.examples.items.map((ex, i) => (
                             <div key={i} className="flex items-start gap-3">
                                 {ex.status === 'ok' ? (
                                     <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                 ) : (
                                     <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                 )}
                                 <span className={ex.status === 'ok' ? 'text-gray-300' : 'text-gray-500 line-through'}>{ex.text}</span>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Why? */}
                 <div className="grid md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                     <div className="md:col-span-3 mb-2">
                         <h3 className="text-xl font-serif text-white">{content.ageLimits.justification.title}</h3>
                     </div>
                     {content.ageLimits.justification.items.map((item, i) => (
                         <div key={i} className="bg-white/5 p-4 rounded">
                             <div className="flex items-center gap-2 mb-2 text-blood-red font-bold uppercase tracking-wider text-sm">
                                 {i === 0 && <Scale className="w-4 h-4" />}
                                 {i === 1 && <Target className="w-4 h-4" />}
                                 {i === 2 && <Map className="w-4 h-4" />}
                                 {item.title}
                             </div>
                             <p className="text-sm text-gray-400">{item.text}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </section>

      </div>
    </div>
  );
};

export default AboutView;