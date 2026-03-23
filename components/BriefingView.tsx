import React from 'react';
import { ArrowLeft, ShieldAlert, Database, ScanSearch } from 'lucide-react';
import { Language } from '../types';
import { BRIEFING_CONTENT } from '../briefingContent';

interface BriefingViewProps {
  lang: Language;
  onBack: () => void;
}

const BriefingView: React.FC<BriefingViewProps> = ({ lang, onBack }) => {
  const content = BRIEFING_CONTENT[lang];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,11,11,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,10,10,0.7)),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_4px)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-blood-red transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono uppercase tracking-widest text-sm">Return to Main</span>
        </button>

        <section className="relative border border-green-900/60 bg-[#050806]/90 shadow-[0_0_60px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-green-700/30 to-transparent" />
            <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-green-700/30 to-transparent" />
          </div>

          <div className="border-b border-green-900/60 px-4 py-3 flex items-center justify-between bg-black/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blood-red/90" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-600/80" />
              <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.35em] text-green-500/90">
                SchreckNET / PETROVARADIN_FORTRESS
              </span>
            </div>
            <div className="hidden md:block font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
              Secure dossier render
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid xl:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 border border-blood-red/40 bg-blood-red/10 text-blood-red font-mono text-xs uppercase tracking-[0.25em] mb-5">
                  <ShieldAlert className="w-4 h-4" />
                  {content.warning}
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide leading-none mb-4">
                  {content.title}
                </h1>
                <p className="text-green-500/80 font-mono uppercase tracking-[0.25em] text-sm md:text-base mb-8">
                  {content.subtitle}
                </p>
                <p className="max-w-3xl text-gray-300 text-lg leading-relaxed border-l-2 border-green-700/50 pl-5">
                  {content.outro}
                </p>
              </div>

              <aside className="relative border border-white/10 bg-black/40 backdrop-blur-sm p-5 md:p-6">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle,rgba(138,11,11,0.18),transparent_65%)]" />
                <div className="flex items-center gap-3 mb-5">
                  <Database className="w-5 h-5 text-green-500" />
                  <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-green-400">
                    Packet metadata
                  </h2>
                </div>
                <div className="space-y-3">
                  {content.metadata.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[92px_1fr] gap-4 border-b border-white/5 pb-3"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                        {item.label}
                      </div>
                      <div className="font-mono text-sm text-gray-200 break-words">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            <div className="mt-10 grid gap-6">
              {content.sections.map((section, index) => (
                <section
                  key={section.title}
                  className="relative border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 md:p-8"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blood-red via-green-700 to-transparent" />
                  <div className="flex items-center gap-3 mb-5 pl-3">
                    <ScanSearch className="w-5 h-5 text-blood-red flex-shrink-0" />
                    <div className="font-mono text-xs uppercase tracking-[0.28em] text-green-500/85">
                      Packet {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <h2 className="pl-3 text-2xl md:text-3xl font-serif text-white mb-6 tracking-wide">
                    {section.title}
                  </h2>
                  <div className="space-y-5 pl-3 md:pl-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base md:text-lg text-gray-300 leading-8 max-w-4xl">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-10 border border-blood-red/20 bg-blood-red/5 p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-blood-red mb-3">
                End packet
              </div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mb-6">
                {content.signature}
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <div className="font-mono text-green-500/85">{content.footer}</div>
                <div className="text-gray-500 uppercase tracking-[0.24em]">
                  Copying, forwarding and quoting have consequences
                </div>
                <div className="text-white/80 font-serif italic text-xl">
                  {content.epigraph}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BriefingView;
