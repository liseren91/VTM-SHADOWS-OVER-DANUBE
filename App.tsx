import React, { useState, useEffect } from 'react';
import { Language } from './types';
import Section from './components/Section';
import EventCard from './components/EventCard';
import SchreckNet from './components/SchreckNet';
import SettingView from './components/SettingView';
import RulesView from './components/RulesView';
import AboutView from './components/AboutView';
import CastingView from './components/CastingView';
import Navbar from './components/Navbar';
import { TRANSLATIONS } from './translations';
import { APPLICATION_URL } from './constants';
import { Moon, ChevronDown, Calendar, MapPin, User, Flame, Plus, Minus } from 'lucide-react';

// Define valid views corresponding to hash
type View = 'home' | 'setting' | 'rules' | 'about' | 'casting';
const VALID_VIEWS: View[] = ['home', 'setting', 'rules', 'about', 'casting'];

// --- Landing Page Component (Moved outside App) ---
interface LandingPageProps {
  content: any; // Using any for simplicity here, but implies typeof TRANSLATIONS['en']
  lang: Language;
}

const LandingPage: React.FC<LandingPageProps> = ({ content, lang }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=2074)', 
              opacity: 0.9
            }} 
          />
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full pointer-events-none scale-110"
              style={{ opacity: 0.2 }}
              src="https://www.youtube.com/embed/5aYSV8IsB4w?autoplay=1&controls=0&rel=0&mute=1&loop=1&playlist=5aYSV8IsB4w&modestbranding=1"
              title="Landing background video"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-6 tracking-tighter drop-shadow-2xl leading-none">
            {content.hero.titleStart} <span className="text-blood-red block md:inline drop-shadow-[0_0_35px_rgba(220,20,60,0.8)]">{content.hero.titleEnd}</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 font-medium mb-10 max-w-4xl mx-auto drop-shadow-md text-balance bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/5 whitespace-pre-line">
            {content.hero.subtitle}
          </p>
          
          {/* Info Box */}
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mb-16 bg-black/80 p-8 border-y border-blood-red/50 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-6">
              <span className="text-blood-red font-serif text-xl uppercase flex items-center gap-2 font-bold tracking-wide">
                <Calendar className="w-5 h-5" /> {content.hero.details.whenLabel}
              </span>
              <span className="text-white font-sans text-xl font-bold tracking-wide">{content.hero.details.when}</span>
            </div>
            <div className="flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:px-6">
              <span className="text-blood-red font-serif text-xl uppercase flex items-center gap-2 font-bold tracking-wide">
                <MapPin className="w-5 h-5" /> {content.hero.details.whereLabel}
              </span>
              <span className="text-white font-sans text-xl font-bold tracking-wide">{content.hero.details.where}</span>
            </div>
            <div className="flex flex-col gap-1 md:pl-6">
              <span className="text-blood-red font-serif text-xl uppercase flex items-center gap-2 font-bold tracking-wide">
                <User className="w-5 h-5" /> {content.hero.details.mgLabel}
              </span>
              <span className="text-white font-sans text-lg font-medium leading-relaxed">{content.hero.details.mg}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a 
               href="#rules"
               onClick={(e) => handleLinkClick(e, '#rules')}
               className="px-10 py-4 bg-blood-red text-white font-serif text-lg tracking-widest hover:bg-red-800 transition-all border border-red-500 shadow-[0_0_20px_rgba(138,11,11,0.6)] hover:shadow-[0_0_30px_rgba(220,20,60,0.8)] transform hover:-translate-y-1 text-center"
             >
               {content.hero.buttonRules}
             </a>
             <a 
                href="#casting"
                onClick={(e) => handleLinkClick(e, '#casting')}
                className="px-10 py-4 bg-black/60 text-white border border-white/50 font-serif text-lg tracking-widest hover:bg-white/20 transition-all backdrop-blur-sm shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 text-center"
             >
               {content.hero.buttonJoin}
             </a>
          </div>
        </div>
        
        <a 
          href="#pitch" 
          onClick={(e) => handleLinkClick(e, '#pitch')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 text-white/50 cursor-pointer"
        >
          <ChevronDown className="w-10 h-10" />
        </a>
      </header>

      {/* Pitch/Premise Section */}
      <Section id="pitch" title={content.pitch.title} isAlternate className="text-center">
        <div className="max-w-4xl mx-auto space-y-12 py-10">
          <div className="relative">
            <Flame className="w-16 h-16 text-blood-red mx-auto mb-6 opacity-80 animate-pulse-slow" />
            <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic drop-shadow-md">
              "{content.pitch.context}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4 border-l-2 border-blood-red pl-6">
              <h3 className="text-xl font-serif text-red-500 tracking-widest uppercase">The Role</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {content.pitch.role}
              </p>
            </div>
            <div className="space-y-4 border-l-2 border-blood-red pl-6">
              <h3 className="text-xl font-serif text-red-500 tracking-widest uppercase">The Path</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {content.pitch.genre}
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-2xl font-serif text-white mb-8 tracking-wide">
              {content.pitch.question}
            </p>
            <a 
              href={APPLICATION_URL} 
              target="_blank"
              rel="noreferrer"
              className="inline-block px-12 py-5 bg-transparent border-2 border-blood-red text-blood-red font-serif text-xl font-bold tracking-[0.2em] hover:bg-blood-red hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(138,11,11,0.3)] hover:shadow-[0_0_40px_rgba(138,11,11,0.6)]"
            >
              {content.pitch.cta}
            </a>
          </div>
        </div>
      </Section>

      {/* Schedule Section (conditionally hidden) */}
      {content.schedule.hidden ? (
        <div id="schedule" aria-hidden="true" />
      ) : (
        <Section id="schedule" title={content.schedule.title} isAlternate>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 mb-8">
                {content.schedule.description}
              </p>
              <div className="space-y-4">
                {content.schedule.items.map((item: any, idx: number) => (
                  <EventCard key={idx} item={item} lang={lang} />
                ))}
              </div>
            </div>
            <div className="relative hidden md:block h-full min-h-[400px]">
              <div className="sticky top-24 p-8 border border-white/10 bg-black/50 backdrop-blur-sm shadow-xl">
                <h3 className="text-2xl font-serif text-blood-red mb-4 flex items-center gap-2">
                  <Moon className="w-6 h-6" />
                  {content.schedule.adviceTitle}
                </h3>
                <p className="italic text-gray-400 mb-4 leading-relaxed">
                  {content.schedule.adviceText}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />
                <p className="text-sm text-gray-500">
                  {content.schedule.adviceFooter}
                </p>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Call to Action */}
      <Section id="apply" title={content.apply.title} isAlternate>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl text-white mb-8 font-light">
            {content.apply.text1}
          </p>
          <p className="text-gray-400 mb-12">
            {content.apply.text2}
          </p>
          <a 
            href={APPLICATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-12 py-4 bg-blood-red hover:bg-red-800 text-white font-serif text-lg tracking-widest shadow-[0_0_20px_rgba(138,11,11,0.5)] hover:shadow-[0_0_40px_rgba(138,11,11,0.7)] transition-all transform hover:-translate-y-1"
          >
            {content.apply.button}
          </a>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" title={content.faq.title}>
        <div className="max-w-4xl mx-auto space-y-4">
          {content.faq.items.map((item: any, idx: number) => {
             const isOpen = openFaqIndex === idx;
             return (
               <div 
                 key={idx} 
                 className={`border transition-all duration-300 ${isOpen ? 'border-blood-red/50 bg-white/5' : 'border-white/10 hover:border-white/20 bg-transparent'}`}
               >
                 <button
                   onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                   className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                 >
                   <span className={`font-serif text-lg md:text-xl font-bold tracking-wide transition-colors ${isOpen ? 'text-blood-red' : 'text-gray-200'}`}>
                     {item.q}
                   </span>
                   {isOpen ? (
                     <Minus className="w-5 h-5 text-blood-red flex-shrink-0 ml-4" />
                   ) : (
                     <Plus className="w-5 h-5 text-gray-500 group-hover:text-white flex-shrink-0 ml-4" />
                   )}
                 </button>
                 
                 {isOpen && (
                   <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                        {item.a}
                        {item.link && (
                          <a href={item.link} className="text-white hover:text-blood-red border-b border-blood-red/50 hover:border-blood-red transition-all ml-1" target="_blank" rel="noreferrer">
                            @DanubeShadows
                          </a>
                        )}
                      </div>
                   </div>
                 )}
               </div>
             );
          })}
        </div>
      </Section>
    </div>
  );
};


// --- Main App Component ---

const App: React.FC = () => {
  const [isSchreckNetOpen, setSchreckNetOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ru'); 
  
  // State for routing
  const [currentView, setCurrentView] = useState<View>('home');
  const [currentHash, setCurrentHash] = useState<string>('');

  const content = TRANSLATIONS[lang];
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  // Handle Hash Changes (The Router)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentHash(hash);

      // Check for view-specific anchors (e.g., #rules-combat, #setting-clans)
      const viewAnchorMatch = hash.match(/^(rules|setting|about|casting)-(.+)$/);
      
      if (viewAnchorMatch) {
        const [, view, sectionId] = viewAnchorMatch;
        setCurrentView(view as View);
        // Scroll to section after view renders
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      } else if (VALID_VIEWS.includes(hash as View)) {
        setCurrentView(hash as View);
        window.scrollTo(0, 0);
      } else if (hash === '') {
        setCurrentView('home');
        window.scrollTo(0, 0);
      } else {
        // It's an anchor on the home page (e.g. #schedule)
        setCurrentView('home');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Initial check
    handleHashChange();

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blood-red selection:text-white bg-black">
      {/* Navigation */}
      <Navbar 
        lang={lang} 
        currentHash={currentHash} 
        onToggleLanguage={toggleLanguage}
        onOpenSchreckNet={() => setSchreckNetOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {currentView === 'home' && <LandingPage content={content} lang={lang} />}
        {currentView === 'about' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AboutView content={content.aboutPage} onBack={() => window.location.hash = ''} />
            </div>
        )}
        {currentView === 'setting' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SettingView content={content.settingPage} onBack={() => window.location.hash = ''} />
            </div>
        )}
        {currentView === 'rules' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <RulesView content={content.rulesPage} onBack={() => window.location.hash = ''} />
            </div>
        )}
        {currentView === 'casting' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CastingView 
                  content={content.castingPage} 
                  lang={lang}
                  onBack={() => window.location.hash = ''} 
                />
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 text-center border-t border-white/10 relative z-10">
        <div className="font-serif text-blood-red text-xl mb-4 tracking-widest">VAMPIRE: THE MASQUERADE</div>
        <p className="text-gray-600 text-sm max-w-xl mx-auto px-6">
          {content.footer.text}
        </p>
      </footer>

      {/* Chat Module */}
      <SchreckNet isOpen={isSchreckNetOpen} onClose={() => setSchreckNetOpen(false)} lang={lang} />
    </div>
  );
};

export default App;