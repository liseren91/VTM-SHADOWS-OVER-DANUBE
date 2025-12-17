import React from 'react';
import { ScheduleItem, Language } from '../types';
import { Clock, AlertCircle } from 'lucide-react';

interface EventCardProps {
  item: ScheduleItem;
  lang: Language;
}

const TYPE_LABELS: Record<Language, Record<ScheduleItem['type'], string>> = {
  en: {
    mandatory: 'MANDATORY',
    optional: 'OPTIONAL',
    downtime: 'DOWNTIME'
  },
  ru: {
    mandatory: 'ОБЯЗАТЕЛЬНО',
    optional: 'ПО ЖЕЛАНИЮ',
    downtime: 'ДАУНТАЙМ'
  }
};

const EventCard: React.FC<EventCardProps> = ({ item, lang }) => {
  const isMandatory = item.type === 'mandatory';
  
  return (
    <div className={`
      relative p-6 border-l-4 transition-all duration-300 hover:translate-x-2
      ${isMandatory 
        ? 'border-blood-red bg-gradient-to-r from-blood-dark/20 to-transparent' 
        : 'border-gray-600 bg-gray-900/20'}
    `}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <h3 className="text-xl font-serif font-bold text-gray-100 flex items-center gap-2">
          {item.title}
          {isMandatory && <AlertCircle className="w-4 h-4 text-blood-red" />}
        </h3>
        <div className="flex items-center gap-2 text-blood-red font-mono bg-black/50 px-3 py-1 rounded border border-red-900/30">
          <Clock className="w-4 h-4" />
          <span>{item.time}</span>
        </div>
      </div>
      <p className="text-gray-400 italic mb-2 text-sm tracking-wider">
        {TYPE_LABELS[lang][item.type]}
      </p>
      <p className="text-gray-300">{item.description}</p>
    </div>
  );
};

export default EventCard;