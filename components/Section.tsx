import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  isAlternate?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", isAlternate = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden ${
        isAlternate ? 'bg-night-black' : 'bg-gradient-to-b from-black to-blood-dark/10'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
           <div className="h-[2px] w-12 bg-blood-red"></div>
           <h2 className="text-3xl md:text-5xl font-serif text-parchment tracking-widest uppercase shadow-black drop-shadow-lg">
            {title}
           </h2>
           <div className="h-[2px] flex-grow bg-gradient-to-r from-blood-red to-transparent"></div>
        </div>
        
        <div className="text-gray-300 font-sans leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;