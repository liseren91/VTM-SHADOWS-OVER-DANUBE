
export type Language = 'en' | 'ru';

export interface NavItem {
  label: string;
  href: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  type: 'mandatory' | 'optional' | 'downtime';
}

export interface RoleInfo {
  title: string;
  type: 'NPC' | 'Player';
  description: string;
  details: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface LocationItem {
  name: string;
  description: string;
}

export interface BasicRuleItem {
  term: string;
  definition: string;
  details?: string[];
}

export interface ClanItem {
  name: string;
  nickname: string;
  stereotype: string;
  description: string;
  disciplines: string;
  weakness: string;
  roles: string[];
  image: string;
  link: string;
}

export interface SettingContent {
  title: string;
  history: {
    title: string;
    intro: string;
    timeline: TimelineEvent[];
  };
  geography: {
    title: string;
    locations: LocationItem[];
  };
  traditions: {
    title: string;
    intro: string;
    traditions: { name: string; description: string }[];
  };
  clans: {
    title: string;
    intro: string;
    items: ClanItem[];
  };
  basics: {
    title: string;
    intro: string;
    concepts: BasicRuleItem[];
  };
  adaptations: {
    title: string;
    disclaimer: string;
    items: string[];
    reason: string;
    conclusion: string;
  };
}

export interface RuleSection {
  id: string;
  title: string;
  icon: string;
  content: {
    subtitle?: string;
    text?: string;
    list?: string[];
    listType?: 'bullet' | 'check' | 'cross' | 'warning';
    subsections?: {
      title: string;
      text?: string;
      list?: string[];
    }[];
  }[];
}

export interface RulesPageContent {
  title: string;
  sections: RuleSection[];
}

export interface AgeLimitRule {
  title: string;
  mortal: {
    title: string;
    min: string;
    typical: string;
    reason: string;
  };
  vampire: {
    title: string;
    fledgling: string;
    neonate: string;
    max: string;
    maxReason: string;
  };
  examples: {
    title: string;
    items: { text: string; status: 'ok' | 'fail' }[];
  };
  justification: {
    title: string;
    items: { title: string; text: string }[];
  };
}

export interface AboutPageContent {
  title: string;
  intro: {
    title: string;
    text: string;
    subText: string;
  };
  atmosphere: {
    title: string;
    list: string[];
  };
  video?: {
    title: string;
    description?: string;
    url: string;
  };
  expectations: {
    title: string;
    items: string[];
  };
  limitations: {
    title: string;
    items: string[];
  };
  roles: {
    title: string;
    npc: {
      title: string;
      subtitle: string;
      list: string;
      desc: string;
      quote: string;
    };
    pc: {
      title: string;
      subtitle: string;
      list: string;
      desc: string;
    };
  };
  ageLimits: AgeLimitRule;
}

export interface TeamMember {
  name: string;
  role: string;
  telegram?: string;
}

export interface CastingPageContent {
  title: string;
  description: string;
  teamSection: {
    title: string;
    members: TeamMember[];
  };
  helpersSection: {
    title: string;
    intro: string;
    roles: string[];
    cta: string;
  };
  applyButton: string;
}
