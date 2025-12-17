
import { ScheduleItem, Language, SettingContent, RulesPageContent, AboutPageContent, CastingPageContent } from './types';

interface Content {
  nav: { label: string; href: string }[];
  hero: {
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    details: {
      whenLabel: string;
      when: string;
      whereLabel: string;
      where: string;
      mgLabel: string;
      mg: string;
    };
    buttonRules: string;
    buttonJoin: string;
  };
  pitch: {
    title: string;
    context: string;
    role: string;
    genre: string;
    question: string;
    cta: string;
  };
  aboutPage: AboutPageContent;
  settingPage: SettingContent;
  rulesPage: RulesPageContent;
  castingPage: CastingPageContent;
  schedule: {
    title: string;
    description: string;
    adviceTitle: string;
    adviceText: string;
    adviceFooter: string;
    items: ScheduleItem[];
  };
  apply: {
    title: string;
    text1: string;
    text2: string;
    button: string;
  };
  faq: {
    title: string;
    items: {
      q: string;
      a: string;
      link?: string;
    }[];
  };
  footer: {
    text: string;
  };
  schrecknet: {
    welcome: string;
    inputPlaceholder: string;
    processing: string;
    accessDenied: string;
    networkError: string;
    button: string;
  };
}

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Setting', href: '#setting' },
      { label: 'Rules', href: '#rules' },
      { label: 'Timeline', href: '#schedule' },
      { label: 'Casting', href: '#casting' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      titleStart: 'VTM:',
      titleEnd: 'SHADOWS OVER DANUBE',
      subtitle: 'Urban LARP. Mystical detective & action based on World of Darkness.',
      details: {
        whenLabel: 'When',
        when: 'November 11 - 15, 2026',
        whereLabel: 'Where',
        where: 'Novi Sad',
        mgLabel: 'MG',
        mg: 'Ptitsa, Kaire, Til & Max Gorin @GorinMY'
      },
      buttonRules: 'READ THE LAWS',
      buttonJoin: 'JOIN THE COURT',
    },
    pitch: {
      title: 'The Aftermath',
      context: 'Three years ago, the Camarilla wrested Novi Sad from the Sabbat. The war is over, but the city still remembers the taste of blood.',
      role: 'You are a Neonate. Yesterday\'s fledgling or an experienced predator? The city is full of opportunities for those willing to pay the price.',
      genre: 'Detective, action, or dark intrigue — you choose your path. No rails. Only your decisions, their consequences, and the world\'s reaction.',
      question: 'What are you willing to do for your goal?',
      cta: 'SUBMIT APPLICATION'
    },
    aboutPage: {
      title: 'About the Game',
      intro: {
        title: 'Novi Sad. 2026.',
        text: 'A city on the Danube, where old bridges remember more than they should. Three years ago, there was war. The Camarilla, led by the Prince of Budapest, drove the Sabbat out. Barricades were dismantled, bodies removed, the Masquerade restored. Now the Laws of Traditions rule here, and everything is relatively calm. Relatively.',
        subText: 'You are a neonate. Perhaps recently embraced, still adjusting to the Hunger. Or maybe you survived the war and seek your place in the new order. The city is open to the ambitious. Or it will devour those who are not careful.'
      },
      atmosphere: {
        title: 'Atmosphere & Concept',
        list: [
          'Night city with its bars, warehouses, mansions, and basements.',
          'Post-war Camarilla: new hierarchy, old grudges.',
          'Shadows of the past: not all Sabbat followers have left.',
          'Hunger, politics, survival.'
        ]
      },
      expectations: {
        title: 'What to Expect',
        items: [
          'Sandbox without rails — your actions shape the story',
          'Reactive world — NPCs react to your deeds and inaction',
          'Meaningful choices — every decision has consequences',
          'Action-based play — 5 nights of live game in the city',
          'Atmospheric locations — bars, clubs, ruins, mansions',
          'Combat and Intrigue — depending on your decisions',
          'Personal stories — your character, your goals, your path'
        ]
      },
      limitations: {
        title: 'What NOT to Expect',
        items: [
          'Macro-maps and mass battles',
          'Free-form ritualism — only approved by GMs',
          'Elder Players — everyone plays a Neonate',
          'Complex mental/obfuscate models — simplified mechanics',
          'Raids on player havens — your personal space is safe',
          'Guaranteed survival — death is possible, but fair'
        ]
      },
      roles: {
        title: 'The Hierarchy',
        npc: {
          title: 'The Court',
          subtitle: 'NON-PLAYER CHARACTERS',
          list: 'Prince, Seneschal, Harpy, Elders & Ancillae',
          desc: 'These potentates are Tech Characters (NPCs). They serve the narrative. They do not strive to "win" the game, nor do they play favorites to ensure their friends win. They have triggers, secrets, and modes of operation, but they exist to provide a backdrop for YOUR story.',
          quote: '"Killing an Elder requires more than a sharp stake. You will likely need the aid of another Elder, powerful artifacts, or a very long night."'
        },
        pc: {
          title: 'The Enforcer',
          subtitle: 'RESTRICTED PLAYER CHARACTER',
          list: 'The Sheriff',
          desc: 'The Sheriff is a player character, but bound by specific mechanical constraints and obligations to the Court. They are the arm of the law, but they are still playing the game with you.'
        }
      },
      ageLimits: {
        title: 'Character Age Limits',
        mortal: {
          title: 'Mortal Age at Embrace',
          min: 'Minimum: 18 years',
          typical: 'Typical: 20-40 years',
          reason: '(This is both a safety rule and a setting requirement — vampires do not embrace children)'
        },
        vampire: {
          title: 'Vampire Age',
          fledgling: 'Fledglings: 0-10 years (Fresh, still adjusting to Hunger)',
          neonate: 'Neonates: 10-50 years (Main player category. No longer fledgling, not yet Ancilla)',
          max: 'Maximum Vampire Age: 50 years',
          maxReason: '(Older = no longer a Neonate, too powerful for game balance)'
        },
        examples: {
          title: 'Examples',
          items: [
             { text: 'Character embraced at 25, 5 years passed → Fledgling', status: 'ok' },
             { text: 'Character embraced at 30, 20 years passed → Neonate', status: 'ok' },
             { text: 'Character embraced at 35, 45 years passed → Older Neonate', status: 'ok' },
             { text: 'Character embraced at 40, 100 years passed → Too old (Ancilla)', status: 'fail' }
          ]
        },
        justification: {
          title: 'Why these limits?',
          items: [
            { title: 'Balance', text: 'Older vampires are too powerful and break the game economy.' },
            { title: 'Focus', text: 'The game is about Neonates, about those just starting their path.' },
            { title: 'Relevance', text: 'You are witnesses and participants of recent events (the war 3 years ago).' }
          ]
        }
      }
    },
    castingPage: {
      title: 'Casting',
      description: 'Check the available roles and current casting status in the official registry.',
      teamSection: {
        title: 'Master Group',
        members: [
          { name: 'Ptitsa', role: 'Head Master, Plot, Mechanics', telegram: '@liseren' },
          { name: 'Kaire', role: 'Plot, Atmosphere', telegram: '@kyirevanity' },
          { name: 'Til', role: 'IT and MG Support', telegram: '' },
          { name: 'Max Gorin', role: 'Logistics Master (AHCH)', telegram: '@GorinMY' }
        ]
      },
      helpersSection: {
        title: 'Helpers and Consultants',
        intro: 'If you want to help with the organization, we have roles for:',
        roles: [
          'Location Assistants',
          'Costume Coordinators',
          'Photographers / Videographers',
          'Game Techs (especially with Lore knowledge)'
        ],
        cta: 'Mark in the application if you are ready to help!'
      },
      applyButton: 'SUBMIT APPLICATION'
    },
    settingPage: {
      title: 'The Setting',
      history: {
        title: 'Novi Sad: Post-War',
        intro: 'Brief History',
        timeline: [
          {
            year: 'Until 2010s',
            title: 'The Sword of Caine',
            description: 'Novi Sad under Sabbat control. The city served as a stronghold for the Sword of Caine in the Balkans — a whetstone where tactics were refined against Camarilla, Anarchs, and Lupines.'
          },
          {
            year: 'Autumn 2023',
            title: 'War for the City',
            description: 'The Camarilla, led by the Prince of Budapest, launched a massive operation to cleanse the city. The war was short but bloody. Sabbat followers either fell, retreated, or... went into hiding.'
          },
          {
            year: 'Winter 2023',
            title: 'Camarilla Domain',
            description: 'Novi Sad officially entered the Camarilla domain.'
          },
          {
            year: '2024-2025',
            title: 'Restoration',
            description: 'A new Sheriff and his team enforced order. Traditions were established, Sabbat remnants hunted down, and the Masquerade restored after the chaos of war. Neonates from other domains began to arrive — young, ambitious, eager for a slice of the new pie.'
          },
          {
            year: 'November 2026',
            title: 'New Order',
            description: 'Relative calm prevails. The hierarchy is set, Elysium functions, Traditions are upheld. But old grudges are not forgotten. Strange gangs roam the outskirts. Bodies with familiar markings are found. Paranoids whisper that some "newly converted" Camarilla know Sabbat rituals too well.'
          }
        ]
      },
      geography: {
        title: 'City Geography',
        locations: [
          { name: 'Stari Grad (Center)', description: 'Old city by the Danube. Location of Elysium, important meetings, status displays. Strictly controlled territory.' },
          { name: 'Petrovaradin Fortress', description: 'Ancient fortress on the hill. Rumors say its dungeons still hold Sabbat secrets.' },
          { name: 'Danube Banks', description: 'Bars, clubs, nightlife. Convenient hunting grounds and places for "no strings attached" meetings.' },
          { name: 'Industrial Zone & Outskirts', description: 'Abandoned factories, warehouses, slums. Might makes right here. Sometimes the mighty aren\'t vampires.' },
          { name: 'Fruška Gora', description: 'National park with forests and monasteries to the south. Beautiful, secluded, but not just ordinary wolves roam there.' }
        ]
      },
      traditions: {
        title: 'The Six Traditions',
        intro: 'Vampires of the Camarilla swear to uphold the six legendary Traditions of Caine — laws that Caine supposedly bequeathed to his descendants. Like other laws, the Traditions are often ignored, twisted, or outright broken.',
        traditions: [
          { name: 'The Masquerade', description: 'Thou shall not reveal thy true nature to those not of the Blood. Doing such shall renounce thy claims of Blood.' },
          { name: 'The Domain', description: 'Thy domain is thine own concern. All others owe thee respect while in it. None may challenge thy word while in thy domain.' },
          { name: 'The Progeny', description: 'Thou shall only Sire another with the permission of thine Elder. If thou createst another without thine Elder\'s leave, both thou and thy Progeny shall be slain.' },
          { name: 'The Accounting', description: 'Those thou create are thine own children. Until thy Progeny shall be Released, thou shall command them in all things. Their sins are thine to endure.' },
          { name: 'The Hospitality', description: 'Honor one another\'s domain. When thou comest to a foreign city, thou shall present thyself to the one who ruleth there. Without the word of acceptance, thou art nothing.' },
          { name: 'The Destruction', description: 'Thou art forbidden to destroy another of thy kind. The right of destruction belongeth only to thine Elder. Only the Eldest among thee shall call the Blood Hunt.' }
        ]
      },
      clans: {
        title: 'Clans and Roles',
        intro: 'All characters are Neonates belonging to one of the seven Camarilla clans.',
        items: [
          {
            name: 'Brujah',
            nickname: 'The Rebels',
            stereotype: 'Passionate, idealistic, furious. Philosophers and street fighters.',
            description: 'The Clan of contradictions. Once scholars of Carthage, now often furious fighters for justice (however they define it). Others remain true to the ideals of debate. All Brujah are united by passion. They feel deeply — which is their strength and their weakness. Terrifying in anger, dangerous strategists in calm.',
            disciplines: 'Potence, Celerity, Presence',
            weakness: 'Harder to resist Frenzy. The Beast is close to the surface.',
            roles: ['Enforcers and Bodyguards', 'Activists and Ideologues', 'Street Fighters', 'War Survivors'],
            image: '/clan-portraits/brujah.png',
            link: 'https://wod.su/vampire/clans/camarilla/brujah'
          },
          {
            name: 'Gangrel',
            nickname: 'The Savages',
            stereotype: 'Loners, survivors, beasts in human form.',
            description: 'Closer to nature than any other clan. They are comfortable in wild places, far from city politics. Many are drifters. However, the war brought some to the city — to defend territory or simply because there was nowhere else to run. Rare in Novi Sad, usually keeping to the outskirts.',
            disciplines: 'Animalism, Fortitude, Protean',
            weakness: 'Gain animal features with every Frenzy.',
            roles: ['Scouts and Trackers', 'Wilderness Liaisons', 'Lone Hunters', 'Apolitical Drifters'],
            image: '/clan-portraits/gangrel.png',
            link: 'https://wod.su/vampire/clans/camarilla/gangrel'
          },
          {
            name: 'Malkavian',
            nickname: 'The Lunatics',
            stereotype: 'Seers, madmen, those who see what others cannot.',
            description: 'Every Malkavian is insane. It is the curse of their Embrace. But this madness often brings strange insights, the ability to see hidden patterns, to sense lies. Other vampires both fear and value them. Their advice is priceless — if you can decipher it.',
            disciplines: 'Auspex, Dementation, Obfuscate',
            weakness: 'Insanity. Every Malkavian has a specific derangement that never fades.',
            roles: ['Informants and Spies', 'Advisors (Strange but accurate)', 'Seers', 'Unpredictable Elements'],
            image: '/clan-portraits/malkavian.png',
            link: 'https://wod.su/vampire/clans/camarilla/malkavian'
          },
          {
            name: 'Nosferatu',
            nickname: 'Sewer Rats',
            stereotype: 'Monsters, informants, invisible observers.',
            description: 'The Embrace twists Nosferatu into hideous monsters. Physically repulsive, they are forced to hide. But in the shadows, they see and hear everything. They build spy networks, control the city underground, and trade secrets. Information is power, and they are the kings of espionage.',
            disciplines: 'Animalism, Obfuscate, Potence',
            weakness: 'Horrific appearance (App 0). Cannot pass as human, even with magic.',
            roles: ['Information Brokers', 'Spies and Saboteurs', 'Underground Controllers', 'Secret Keepers'],
            image: '/clan-portraits/nosferatu.png',
            link: 'https://wod.su/vampire/clans/camarilla/nosferatu'
          },
          {
            name: 'Toreador',
            nickname: 'The Degenerates',
            stereotype: 'Artists, seducers, aesthetes, socialites.',
            description: 'Obsessed with beauty. Art, music, beautiful mortals, perfect moments — they exist for this. Many were artists in life. In vampire society, they are the kings and queens of the social scene. Harpies, event organizers, makers and breakers of reputation.',
            disciplines: 'Auspex, Celerity, Presence',
            weakness: 'Transfixed by beauty. Can become entranced and immobile when witnessing something truly beautiful.',
            roles: ['Social Manipulators', 'Elysium Hosts', 'Harpies', 'Seducers'],
            image: '/clan-portraits/toreador.png',
            link: 'https://wod.su/vampire/clans/camarilla/toreador'
          },
          {
            name: 'Tremere',
            nickname: 'The Warlocks',
            stereotype: 'Blood mages, hierarchs, those who turned magic into science.',
            description: 'A young clan of former mortal mages who stole immortality. Others still mistrust them. But they are indispensable due to Thaumaturgy. Their pyramid hierarchy is rigid: every Tremere answers to their elders through mystical bonds.',
            disciplines: 'Auspex, Dominate, Thaumaturgy',
            weakness: 'Blood Bond to the Clan. Must drink the blood of the Council of Seven.',
            roles: ['Ritualists', 'Occult Researchers', 'Clan Politicians', 'Magic Solvers'],
            image: '/clan-portraits/tremere.png',
            link: 'https://wod.su/vampire/clans/camarilla/tremere'
          },
          {
            name: 'Ventrue',
            nickname: 'Blue Bloods',
            stereotype: 'Kings, leaders, Camarilla aristocracy.',
            description: 'They consider themselves the rulers of vampire society. Most Princes are Ventrue. They control, organize, and govern. They value order, tradition, and stability. They are used to commanding — and are usually good at it. But their arrogance is their weakness.',
            disciplines: 'Dominate, Fortitude, Presence',
            weakness: 'Selective palate. Can only drink from a specific type of mortal (e.g., only nobility, only soldiers, only blondes).',
            roles: ['Leaders and Organizers', 'Politicians and Diplomats', 'Business Managers', 'Power Seekers'],
            image: '/clan-portraits/ventrue.png',
            link: 'https://wod.su/vampire/clans/camarilla/ventrue'
          }
        ]
      },
      basics: {
        title: 'VTM: The Basics',
        intro: 'You are no longer mortal. You are a Vampire, a Childe of Caine, a predator in the night.',
        concepts: [
          {
            term: 'Vampires (Kindred)',
            definition: 'Immortal (until killed), drinking blood to survive, burned by sunlight. Possessing supernatural Disciplines. Part of a society with its own laws.'
          },
          {
            term: 'The Beast',
            definition: 'The Hunger, the Rage living inside you. Lose control, and the Beast takes over.'
          },
          {
            term: 'Humanity',
            definition: 'The only way not to become a monster is to hold onto what makes you human. Every monstrous act distances you from your former self.'
          },
          {
            term: 'The Camarilla',
            definition: 'The Sect ruling most of the world\'s cities. Core principle: The Masquerade.',
            details: ['Violate Traditions — risk your head. Literally.']
          },
          {
            term: 'Elysium',
            definition: 'Neutral territory where violence is forbidden (Theaters, Museums). A place for politics.',
          },
          {
            term: 'Hierarchy',
            definition: 'Prince (Ruler), Primogen (Council), Sheriff (Enforcer), Harpies (Status Arbiters), Scourge (Hunter of outsiders). You are a Neonate at the bottom.'
          },
          {
            term: 'Enemies',
            definition: 'Sabbat (Fanatics), Werewolves (Real and deadly), Hunters (Organized mortals), Other Vampires (Your rivals).'
          }
        ]
      },
      adaptations: {
        title: 'Lore Adaptations',
        disclaimer: 'We play loosely with World of Darkness canon. This is an atmospheric experience, not a strict textbook simulation.',
        items: [
          'Using V20 rules, but set in 2026.',
          'V5 events (Beckett\'s Jihad Diary, Elders leaving, Second Inquisition) did NOT happen.',
          'Gehenna did not happen.',
          'Methuselahs are sleeping comfortably.',
          'Novi Sad history is fictionalized for the game.',
          'Some NPCs may not align with canon.'
        ],
        reason: 'We want to provide the classic VTM experience — politics, intrigue, survival — without global apocalyptic events overshadowing personal stories.',
        conclusion: 'If you are a lore expert — great. If something doesn\'t match the books — it\'s not a bug, it\'s a feature.'
      }
    },
    rulesPage: {
      title: 'Game Rules',
      sections: [
        {
          id: 'general',
          title: 'General Principles',
          icon: 'scroll',
          content: [
            {
              text: 'System: Vampire: The Masquerade 20th Anniversary Edition (V20) adapted for LARP.',
              list: [
                'Game Time: Evenings after sunset. Game time runs from sunset to sunrise. During the day, characters sleep/hide — out of game.',
                'Game Period: 5 evenings (November 11-15, 2026).',
                'Safety: We use a "Safe word" system and safety gestures. Details provided upon acceptance.'
              ],
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'combat',
          title: 'Combat System',
          icon: 'sword',
          content: [
            {
              subtitle: 'Type: Live Action Role Play (LARP) combat.',
              text: 'Combat is played in light-touch mode. Strikes and grapples are simulated, not actually inflicted. Success is determined by a combination of declared abilities and roleplay. In disputes, a Storyteller is called.',
            },
            {
              subtitle: 'Allowed ✅',
              list: [
                'Roleplayed strikes and grapples (no real contact)',
                'Use of Disciplines (declared aloud)',
                'Tactical retreat',
                'Use of environment (cover, height)',
                'Melee weapons (safe LARP replicas)'
              ],
              listType: 'check'
            },
            {
              subtitle: 'Forbidden ❌',
              list: [
                'Real physical contact beyond light touch',
                'Firearms (even replicas) — strictly declared by voice',
                'Raids on player havens without consent',
                'Attacks on players during off-game time'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Health Levels (V20)',
              list: [
                'Healthy',
                'Bruised',
                'Hurt (-1 penalty)',
                'Injured (-1 penalty)',
                'Wounded (-2 penalty)',
                'Mauled (-2 penalty)',
                'Crippled (-5 penalty)',
                'Incapacitated (Unconscious)',
                'Torpor/Death'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Damage Types',
              list: [
                'Bashing: Heals quickly',
                'Lethal: Dangerous, requires blood to heal',
                'Aggravated: Fire, sunlight, werewolf claws/fangs, magic — heals very slowly'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'disciplines',
          title: 'Disciplines',
          icon: 'flame',
          content: [
            {
              text: 'We use V20 Disciplines adapted for LARP. Usage: Declare name and level, spend blood (if needed), roleplay the effect.',
            },
            {
              subtitle: 'Clan Disciplines',
              list: [
                'Brujah: Potence, Celerity, Presence',
                'Gangrel: Animalism, Fortitude, Protean',
                'Malkavian: Auspex, Dementation, Obfuscate',
                'Nosferatu: Animalism, Obfuscate, Potence',
                'Toreador: Auspex, Celerity, Presence',
                'Tremere: Auspex, Dominate, Thaumaturgy',
                'Ventrue: Dominate, Fortitude, Presence'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Important Rules',
              list: [
                'Dominate does not work on characters with Auspex of equal or higher level.',
                'Obfuscate breaks upon aggressive actions.',
                'Thaumaturgy requires ST approval for every ritual.',
                'Disciplines do not make you invincible — roleplay and tactics matter more.'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'rituals',
          title: 'Rituals',
          icon: 'book',
          content: [
            {
              text: 'Thaumaturgy is available only to Tremere. There is no "free-form" ritualism. All rituals must be approved by STs in advance.',
              list: [
                'Choose a ritual available to your level.',
                'Agree on time/place with ST.',
                'Prepare components.',
                'Roleplay the process (min. 5 mins for low level).',
                'Receive effect from ST.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Limitations',
              list: [
                'Rituals cannot instantly solve plot conflicts.',
                'Combat rituals are limited in power.',
                'Information rituals provide clues, not direct answers.',
                'No "instant magic" in combat.'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'humanity',
          title: 'Humanity',
          icon: 'heart',
          content: [
            {
              text: 'Scale from 10 (Saint) to 0 (Beast). Neonates start at 6-7. Humanity is your link to your former self. Lower humanity means you are closer to the Beast.',
            },
            {
              subtitle: 'What lowers Humanity',
              list: [
                'Killing innocents',
                'Torture',
                'Mass violence',
                'Violating personal moral code',
                'Cannibalism (Diablerie)'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Frenzy',
              text: 'When the Beast breaks free. Triggers: Fire/Sunlight (Panic), Hunger, Provocation (Rage), Critical Humanity failure. In Frenzy, you lose control.',
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'economy',
          title: 'Economy of Favors',
          icon: 'coins',
          content: [
            {
              text: 'Money is secondary. Influence, favors (Boons), and debts are the currency of the night.',
            },
            {
              subtitle: 'Values',
              list: [
                'Favors (Boons) — "You owe me" is worth more than gold',
                'Information — Knowledge is power',
                'Contacts — The right person at the right time',
                'Territory — Hunting grounds',
                'Blood — Especially rare or potent',
                'Status — Reputation'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Influence Spheres',
              text: 'Bureaucracy, Church, Finance, Health, High Society, Industry, Legal, Media, Occult, Police, Politics, Underworld, University, Street, Transportation.',
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'forbidden',
          title: 'Prohibitions',
          icon: 'shield',
          content: [
            {
              subtitle: 'Absolute Bans 🚫',
              list: [
                'Raiding player havens without consent',
                'Attacking players during off-game time',
                'Ignoring safe words',
                'Real violence',
                'Cheating'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Game Restrictions ⚠️',
              list: [
                'Diablerie (Possible, but severe consequences)',
                'Siring (Only with Prince permission, violation = Final Death)',
                'Masquerade Breach (Big trouble if mortals find out)',
                'Violence in Elysium (Punishable by death)',
                'Killing PCs (Possible, but needs reason and consequences)'
              ],
              listType: 'warning'
            },
            {
              subtitle: 'Metagaming ❌',
              list: [
                'Do not use player knowledge your character lacks',
                'Do not coordinate off-game without ST knowledge',
                'Do not read others\' secrets'
              ],
              listType: 'cross'
            }
          ]
        }
      ]
    },
    schedule: {
      title: "Rhythm of the Night",
      description: "The game lasts from sunset to sunrise. While personal intrigues are eternal, the City demands your service during specific hours. Do not miss mandatory gatherings.",
      adviceTitle: "Keeper's Advice",
      adviceText: "\"Events can be adapted to your coterie or personal story. We are not villains; we won't drag you into the abyss right before dawn... usually. But remember: The City won't wait for you to get ready.\"",
      adviceFooter: "* Check Elysium location with the Harpy.",
      items: [
        { time: 'Sunset - 20:00', title: 'Awakening', description: 'Rise. Gather at Elysium. Exchange rumors and prepare for the night.', type: 'downtime' },
        { time: '20:00 - 22:00', title: 'Prince\'s Mandate', description: 'Mandatory group events. Sheriff or Primogen will assign tasks. Absence will be noted.', type: 'mandatory' },
        { time: '22:00 - 00:00', title: 'Shadows & Secrets', description: 'Free time. Pursue personal goals, trade information, or plot in the corners of Elysium.', type: 'optional' },
        { time: '00:00 - 02:00', title: 'Witching Hour', description: 'Second wave of mandatory operations. The city sleeps, but Kindred work.', type: 'mandatory' },
        { time: '02:00 - Dawn', title: 'The Long Night', description: 'Personal plots, dangerous deals. We try not to send you to your death this late, but be careful.', type: 'downtime' }
      ]
    },
    apply: {
      title: 'Become Part of the Story',
      text1: 'Know the lore? Want to create cinematic moments for others rather than seeking glory for yourself?',
      text2: 'We are looking for dedicated storytellers for Court roles (NPCs). We will coordinate your appearance, triggers, and secrets.',
      button: 'APPLY FOR NPC'
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Do I need LARP experience or VTM knowledge?',
          a: 'No. We welcome newcomers and will help you understand the rules and setting.'
        },
        {
          q: 'Can I play a Sabbat character?',
          a: 'No, all players are Camarilla neonates. But your character can have a history with the Sabbat in the past.'
        },
        {
          q: 'How dangerous is the game? Can my character die?',
          a: 'Yes, death is possible. But we don\'t kill characters without reason — there are always ways to avoid fatality if you play carefully or find allies.'
        },
        {
          q: 'What is the game schedule?',
          a: 'Every evening after sunset (approx. 18:00-19:00). Game time runs from sunset to sunrise. Daytime is off-game, time for sleep, work, etc.'
        },
        {
          q: 'Do I need a costume?',
          a: 'Atmospheric modern clothing is encouraged. Not necessarily gothic style, the main thing is that your character looks appropriate in the night city of 2026.'
        },
        {
          q: 'Where to sleep and live during the game?',
          a: 'Each player arranges their own accommodation (hotel, hostel, AirBnb, tent). We can help with recommendations and coordination if players want to rent something together.'
        },
        {
          q: 'How much does it cost?',
          a: '40 Euro'
        },
        {
          q: 'What is the application deadline?',
          a: 'September 1st'
        },
        {
          q: 'How to contact you?',
          a: 'Telegram: ',
          link: 'https://t.me/DanubeShadows?direct'
        }
      ]
    },
    footer: {
      text: 'Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. This is a fan site for a specific live action game.'
    },
    schrecknet: {
      welcome: 'Connection established. Welcome to SchreckNET, Neonate. Query the database for upcoming nights.',
      inputPlaceholder: 'Enter command or query...',
      processing: 'Processing request...',
      accessDenied: 'ACCESS DENIED: API Key missing.',
      networkError: 'Network error.',
      button: 'SchreckNET'
    }
  },
  ru: {
    nav: [
      { label: 'Об игре', href: '#about' },
      { label: 'Сеттинг', href: '#setting' },
      { label: 'Правила', href: '#rules' },
      { label: 'Расписание', href: '#schedule' },
      { label: 'Роли', href: '#casting' },
      { label: 'FAQ', href: '#faq' },
    ],
    hero: {
      titleStart: 'VTM:',
      titleEnd: 'ТЕНИ НАД ДУНАЕМ',
      subtitle: 'Городской ЛАРП. Мистический детектив и экшн по Миру Тьмы.',
      details: {
        whenLabel: 'Когда',
        when: '11 - 15 Ноября 2026',
        whereLabel: 'Где',
        where: 'Нови-Сад',
        mgLabel: 'МГ',
        mg: 'Птица, Кайре, Тиль и Макс Горин @GorinMY'
      },
      buttonRules: 'ЧИТАТЬ ЗАКОНЫ',
      buttonJoin: 'ВСТУПИТЬ ВО ДВОР',
    },
    pitch: {
      title: 'Последствия',
      context: 'Три года назад Камарилья отбила Нови-Сад у Шабаша. Война закончена, но город все еще помнит вкус крови.',
      role: 'Ты — Неонат. Вчерашний птенец или опытный хищник? Город полон возможностей для тех, кто готов платить цену.',
      genre: 'Детектив, экшн или мрачные интриги — ты сам выбираешь свой путь. Никаких рельс. Только твои решения, их последствия и реакция мира.',
      question: 'На что ты готов ради своей цели?',
      cta: 'ПОДАТЬ ЗАЯВКУ'
    },
    aboutPage: {
      title: 'Об Игре',
      intro: {
        title: 'Нови-Сад. 2026.',
        text: 'Город на Дунае, где старые мосты помнят больше, чем должны. Три года назад здесь была война. Камарилья во главе с Принцем Будапешта выбила Шабаш. Баррикады разобрали, тела убрали, Маскарад восстановили. Теперь здесь правят Законы Традиций, и все относительно спокойно. Относительно.',
        subText: 'Вы — неонат. Возможно, недавно обращенный, еще привыкающий к Голоду. Или, может быть, вы пережили войну и ищете свое место в новом порядке. Город открыт для амбициозных. Или пожрет тех, кто неосторожен.'
      },
      atmosphere: {
        title: 'Атмосфера и Концепт',
        list: [
          'Ночной город с его барами, складами, особняками и подвалами.',
          'Послевоенная Камарилья: новая иерархия, старые обиды.',
          'Тени прошлого: не все последователи Шабаша ушли.',
          'Голод, политика, выживание.'
        ]
      },
      expectations: {
        title: 'Чего Ожидать',
        items: [
          'Песочница без рельс — ваши действия формируют историю',
          'Реактивный мир — NPC реагируют на ваши дела и бездействие',
          'Значимые выборы — каждое решение имеет последствия',
          'Экшн-ориентированная игра — 5 ночей живой игры в городе',
          'Атмосферные локации — бары, клубы, руины, особняки',
          'Бой и Интриги — в зависимости от ваших решений',
          'Личные истории — ваш персонаж, ваши цели, ваш путь'
        ]
      },
      limitations: {
        title: 'Чего НЕ Ожидать',
        items: [
          'Макро-карт и массовых сражений',
          'Свободного ритуализма — только одобренное Мастерами',
          'Игроков-Старейшин — все играют Неонатов',
          'Сложных ментальных/обфускейт моделей — упрощенная механика',
          'Рейдов на убежища игроков — ваше личное пространство безопасно',
          'Гарантированного выживания — смерть возможна, но честна'
        ]
      },
      roles: {
        title: 'Иерархия',
        npc: {
          title: 'Двор',
          subtitle: 'НЕИГРОВЫЕ ПЕРСОНАЖИ',
          list: 'Принц, Сенешаль, Гарпия, Старейшины и Анциллы',
          desc: 'Эти могущественные фигуры — Технические Персонажи (NPC). Они служат повествованию. Они не стремятся "победить" в игре, и не подыгрывают друзьям. У них есть триггеры, секреты и паттерны поведения, но они существуют, чтобы создавать фон для ВАШЕЙ истории.',
          quote: '"Убийство Старейшины требует большего, чем острый кол. Вам, вероятно, понадобится помощь другого Старейшины, мощные артефакты или очень долгая ночь."'
        },
        pc: {
          title: 'Исполнитель',
          subtitle: 'ОГРАНИЧЕННЫЙ ПЕРСОНАЖ ИГРОКА',
          list: 'Шериф',
          desc: 'Шериф — это персонаж игрока, но связанный определенными механическими ограничениями и обязательствами перед Двором. Он — рука закона, но все же играет в игру вместе с вами.'
        }
      },
      ageLimits: {
        title: 'Возрастные Ограничения Персонажа',
        mortal: {
          title: 'Возраст Смертного при Становлении',
          min: 'Минимум: 18 лет',
          typical: 'Типично: 20-40 лет',
          reason: '(Это и правило безопасности, и требование сеттинга — вампиры не обращают детей)'
        },
        vampire: {
          title: 'Возраст Вампира',
          fledgling: 'Птенцы: 0-10 лет (Свежие, еще привыкают к Голоду)',
          neonate: 'Неонаты: 10-50 лет (Основная категория игроков. Уже не птенец, еще не Анцилла)',
          max: 'Максимальный возраст вампира: 50 лет',
          maxReason: '(Старше = уже не Неонат, слишком силен для баланса игры)'
        },
        examples: {
          title: 'Примеры',
          items: [
             { text: 'Персонаж обращен в 25, прошло 5 лет → Птенец', status: 'ok' },
             { text: 'Персонаж обращен в 30, прошло 20 лет → Неонат', status: 'ok' },
             { text: 'Персонаж обращен в 35, прошло 45 лет → Старший Неонат', status: 'ok' },
             { text: 'Персонаж обращен в 40, прошло 100 лет → Слишком стар (Анцилла)', status: 'fail' }
          ]
        },
        justification: {
          title: 'Почему такие лимиты?',
          items: [
            { title: 'Баланс', text: 'Старые вампиры слишком сильны и ломают экономику игры.' },
            { title: 'Фокус', text: 'Игра про Неонатов, про тех, кто только начинает свой путь.' },
            { title: 'Актуальность', text: 'Вы — свидетели и участники недавних событий (война 3 года назад).' }
          ]
        }
      }
    },
    castingPage: {
      title: 'Кастинг',
      description: 'Проверьте доступные роли.',
      teamSection: {
        title: 'Мастерская Группа',
        members: [
          { name: 'Птица', role: 'Главный Мастер, Сюжет, Механика', telegram: '@liseren' },
          { name: 'Кайре', role: 'Сюжет, Атмосфера', telegram: '@kyirevanity' },
          { name: 'Тиль', role: 'IT и Поддержка МГ', telegram: '' },
          { name: 'Макс Горин', role: 'Мастер Логистики (АХЧ)', telegram: '@GorinMY' }
        ]
      },
      helpersSection: {
        title: 'Помощники и Консультанты',
        intro: 'Если вы хотите помочь с организацией, у нас есть роли для:',
        roles: [
          'Помощников по локациям',
          'Техническую помощь',
          'Фотографов',
          'Игротехников (особенно со знанием лора)'
        ],
        cta: 'Отметьте в заявке, если готовы помочь!'
      },
      applyButton: 'ПОДАТЬ ЗАЯВКУ'
    },
    settingPage: {
      title: 'Сеттинг',
      history: {
        title: 'Нови-Сад: Послевоенный',
        intro: 'Краткая История',
        timeline: [
          {
            year: 'До 2010-х',
            title: 'Меч Каина',
            description: 'Нови-Сад под контролем Шабаша. Город служил оплотом Меча Каина на Балканах — точильным камнем, где тактика оттачивалась против Камарильи, Анархов и Люпинов.'
          },
          {
            year: 'Осень 2023',
            title: 'Война за Город',
            description: 'Камарилья, во главе с Принцем Будапешта, начала масштабную операцию по зачистке города. Война была короткой, но кровавой. Последователи Шабаша либо пали, либо отступили, либо... ушли в подполье.'
          },
          {
            year: 'Зима 2023',
            title: 'Домен Камарильи',
            description: 'Нови-Сад официально вошел в домен Камарильи.'
          },
          {
            year: '2024-2025',
            title: 'Восстановление',
            description: 'Новый Шериф и его команда навели порядок. Традиции были установлены, остатки Шабаша выслежены, а Маскарад восстановлен после хаоса войны. Начали прибывать Неонаты из других доменов — молодые, амбициозные, жаждущие куска нового пирога.'
          },
          {
            year: 'Ноябрь 2026',
            title: 'Новый Порядок',
            description: 'Относительное спокойствие воцарилось. Иерархия установлена, Элизиум функционирует, Традиции соблюдаются. Но старые обиды не забыты. Странные банды бродят по окраинам. Находят тела со знакомыми метками. Параноики шепчут, что некоторые "новообращенные" Камарильи знают ритуалы Шабаша слишком хорошо.'
          }
        ]
      },
      geography: {
        title: 'География Города',
        locations: [
          { name: 'Стари Град (Центр)', description: 'Старый город у Дуная. Место Элизиума, важных встреч, демонстрации статуса. Строго контролируемая территория.' },
          { name: 'Петроварадинская Крепость', description: 'Древняя крепость на холме. Слухи говорят, что ее подземелья все еще хранят секреты Шабаша.' },
          { name: 'Набережные Дуная', description: 'Бары, клубы, ночная жизнь. Удобные охотничьи угодья и места для встреч "без обязательств".' },
          { name: 'Индустриальная Зона и Окраины', description: 'Заброшенные заводы, склады, трущобы. Здесь правит сила. Иногда сильные — не вампиры.' },
          { name: 'Фрушка-Гора', description: 'Национальный парк с лесами и монастырями на юге. Красиво, уединенно, но там бродят не только обычные волки.' }
        ]
      },
      traditions: {
        title: 'Шесть Традиций',
        intro: 'Вампиры Камарильи клянутся соблюдать шесть легендарных Традиций Каина — законы, которые Каин якобы завещал своим потомкам. Как и другие законы, Традиции часто игнорируются, искажаются или откровенно нарушаются.',
        traditions: [
          { name: 'Маскарад', description: 'Ты не будешь открывать свою истинную природу тем, кто не Твоей Крови. Сделав это, ты отречешься от своих прав Крови.' },
          { name: 'Домен', description: 'Твой домен — твоя забота. Все остальные обязаны уважать тебя, пока находятся в нем. Никто не может оспаривать твое слово в твоем домене.' },
          { name: 'Потомство', description: 'Ты будешь создавать других только с разрешения твоего Старейшины. Если ты создашь другого без дозволения Старейшины, и ты, и твое Потомство будете убиты.' },
          { name: 'Ответственность', description: 'Те, кого ты создаешь — твои собственные дети. Пока твое Потомство не будет Освобождено, ты будешь командовать ими во всем. Их грехи — твои, чтобы их терпеть.' },
          { name: 'Гостеприимство', description: 'Уважай домен другого. Когда ты приходишь в чужой город, ты должен представиться тому, кто правит там. Без слова принятия ты — ничто.' },
          { name: 'Уничтожение', description: 'Тебе запрещено уничтожать других твоего вида. Право уничтожения принадлежит только твоему Старейшине. Только Старейший среди вас призовет Кровавую Охоту.' }
        ]
      },
      clans: {
        title: 'Кланы и Роли',
        intro: 'Все персонажи — Неонаты, принадлежащие к одному из семи кланов Камарильи.',
        items: [
          {
            name: 'Бруха',
            nickname: 'Бунтари',
            stereotype: 'Страстные, идеалистичные, яростные. Философы и уличные бойцы.',
            description: 'Клан противоречий. Когда-то ученые Карфагена, теперь часто яростные борцы за справедливость (как они ее понимают). Другие остаются верны идеалам дебатов. Всех Бруха объединяет страсть. Они чувствуют глубоко — это их сила и их слабость. Ужасающие в гневе, опасные стратеги в спокойствии.',
            disciplines: 'Могущество, Стремительность, Присутствие',
            weakness: 'Труднее сопротивляться Безумию. Зверь близко к поверхности.',
            roles: ['Бойцы и Телохранители', 'Активисты и Идеологи', 'Уличные Бойцы', 'Пережившие Войну'],
            image: '/clan-portraits/brujah.png',
            link: 'https://wod.su/vampire/clans/camarilla/brujah'
          },
          {
            name: 'Гангрел',
            nickname: 'Дикари',
            stereotype: 'Одиночки, выживальщики, звери в человеческом обличье.',
            description: 'Ближе к природе, чем любой другой клан. Им комфортно в диких местах, вдали от городской политики. Многие — бродяги. Однако война привела некоторых в город — защищать территорию или просто потому, что бежать было некуда. Редки в Нови-Саде, обычно держатся окраин.',
            disciplines: 'Анимализм, Стойкость, Превращение',
            weakness: 'Получают черты животного после каждого Безумия.',
            roles: ['Разведчики и Следопыты', 'Связь с Дикой Природой', 'Одинокие Охотники', 'Аполитичные Бродяги'],
            image: '/clan-portraits/gangrel.png',
            link: 'https://wod.su/vampire/clans/camarilla/gangrel'
          },
          {
            name: 'Малкавиан',
            nickname: 'Лунатики',
            stereotype: 'Провидцы, безумцы, те, кто видит то, что не могут другие.',
            description: 'Каждый Малкавиан безумен. Это проклятие их Становления. Но это безумие часто приносит странные прозрения, способность видеть скрытые узоры, чувствовать ложь. Другие вампиры и боятся, и ценят их. Их советы бесценны — если вы сможете их расшифровать.',
            disciplines: 'Прорицание, Помешательство, Затемнение',
            weakness: 'Безумие. У каждого Малкавиана есть специфический психоз, который никогда не проходит.',
            roles: ['Информаторы и Шпионы', 'Советники (Странные, но точные)', 'Провидцы', 'Непредсказуемые Элементы'],
            image: '/clan-portraits/malkavian.png',
            link: 'https://wod.su/vampire/clans/camarilla/malkavian'
          },
          {
            name: 'Носферату',
            nickname: 'Канализационные Крысы',
            stereotype: 'Монстры, информаторы, невидимые наблюдатели.',
            description: 'Становление превращает Носферату в отвратительных монстров. Физически отталкивающие, они вынуждены скрываться. Но в тенях они видят и слышат все. Они строят шпионские сети, контролируют городское подполье и торгуют секретами. Информация — это сила, и они короли шпионажа.',
            disciplines: 'Анимализм, Затемнение, Могущество',
            weakness: 'Ужасающая внешность (App 0). Не могут сойти за человека, даже с магией.',
            roles: ['Торговцы Информацией', 'Шпионы и Диверсанты', 'Контролеры Подполья', 'Хранители Секретов'],
            image: '/clan-portraits/nosferatu.png',
            link: 'https://wod.su/vampire/clans/camarilla/nosferatu'
          },
          {
            name: 'Тореадор',
            nickname: 'Дегенераты',
            stereotype: 'Художники, соблазнители, эстеты, светские львы.',
            description: 'Одержимы красотой. Искусство, музыка, красивые смертные, идеальные моменты — они живут ради этого. Многие были художниками при жизни. В обществе вампиров они короли и королевы светской сцены. Гарпии, организаторы мероприятий, создатели и разрушители репутации.',
            disciplines: 'Прорицание, Стремительность, Присутствие',
            weakness: 'Заворожены красотой. Могут впасть в транс и застыть, наблюдая что-то по-настоящему прекрасное.',
            roles: ['Социальные Манипуляторы', 'Хозяева Элизиума', 'Гарпии', 'Соблазнители'],
            image: '/clan-portraits/toreador.png',
            link: 'https://wod.su/vampire/clans/camarilla/toreador'
          },
          {
            name: 'Тремер',
            nickname: 'Колдуны',
            stereotype: 'Маги крови, иерархи, те, кто превратил магию в науку.',
            description: 'Молодой клан бывших смертных магов, укравших бессмертие. Другие все еще не доверяют им. Но они незаменимы из-за Тауматургии. Их иерархия пирамиды жестка: каждый Тремер отвечает перед старейшинами через мистические узы.',
            disciplines: 'Прорицание, Доминирование, Тауматургия',
            weakness: 'Узы Крови с Кланом. Обязаны пить кровь Совета Семи.',
            roles: ['Ритуалисты', 'Исследователи Оккультизма', 'Клановые Политики', 'Решатели Магических Проблем'],
            image: '/clan-portraits/tremere.png',
            link: 'https://wod.su/vampire/clans/camarilla/tremere'
          },
          {
            name: 'Вентру',
            nickname: 'Голубая Кровь',
            stereotype: 'Короли, лидеры, аристократия Камарильи.',
            description: 'Считают себя правителями общества вампиров. Большинство Принцев — Вентру. Они контролируют, организуют и управляют. Они ценят порядок, традиции и стабильность. Они привыкли командовать — и обычно хороши в этом. Но их высокомерие — их слабость.',
            disciplines: 'Доминирование, Стойкость, Присутствие',
            weakness: 'Избирательный вкус. Могут пить только от определенного типа смертных (напр., только знать, только солдаты, только блондины).',
            roles: ['Лидеры и Организаторы', 'Политики и Дипломаты', 'Бизнес-Управляющие', 'Искатели Власти'],
            image: '/clan-portraits/ventrue.png',
            link: 'https://wod.su/vampire/clans/camarilla/ventrue'
          }
        ]
      },
      basics: {
        title: 'VTM: Основы',
        intro: 'Вы больше не смертный. Вы — Вампир, Дитя Каина, хищник в ночи.',
        concepts: [
          {
            term: 'Вампиры (Сородичи)',
            definition: 'Бессмертные (пока не убиты), пьют кровь для выживания, сгорают на солнце. Владеют сверхъестественными Дисциплинами. Часть общества со своими законами.'
          },
          {
            term: 'Зверь',
            definition: 'Голод, Ярость, живущая внутри вас. Потеряйте контроль, и Зверь возьмет верх.'
          },
          {
            term: 'Человечность',
            definition: 'Единственный способ не стать монстром — держаться за то, что делает вас человеком. Каждое чудовищное действие отдаляет вас от прежнего "я".'
          },
          {
            term: 'Камарилья',
            definition: 'Секта, правящая большинством городов мира. Главный принцип: Маскарад.',
            details: ['Нарушишь Традиции — рискуешь головой. Буквально.']
          },
          {
            term: 'Элизиум',
            definition: 'Нейтральная территория, где насилие запрещено (Театры, Музеи). Место для политики.',
          },
          {
            term: 'Иерархия',
            definition: 'Принц (Правитель), Примоген (Совет), Шериф (Исполнитель), Гарпии (Арбитры Статуса), Бич (Охотник на чужаков). Вы — Неонат в самом низу.'
          },
          {
            term: 'Враги',
            definition: 'Шабаш (Фанатики), Оборотни (Реальные и смертоносные), Охотники (Организованные смертные), Другие Вампиры (Ваши соперники).'
          }
        ]
      },
      adaptations: {
        title: 'Адаптации Лора',
        disclaimer: 'Мы вольно обращаемся с каноном World of Darkness. Это атмосферный опыт, а не строгая симуляция учебника.',
        items: [
          'Используем правила V20, но сеттинг 2026 года.',
          'События V5 (Дневник Джихада Беккета, уход Старейшин, Вторая Инквизиция) НЕ произошли.',
          'Геенна не наступила.',
          'Мафусаилы комфортно спят.',
          'История Нови-Сада вымышлена для игры.',
          'Некоторые NPC могут не соответствовать канону.'
        ],
        reason: 'Мы хотим предоставить классический опыт VTM — политику, интриги, выживание — без глобальных апокалиптических событий, затмевающих личные истории.',
        conclusion: 'Если вы знаток лора — отлично. Если что-то не совпадает с книгами — это не баг, это фича.'
      },
    },
    rulesPage: {
      title: 'Правила Игры',
      sections: [
        {
          id: 'general',
          title: 'Общие Принципы',
          icon: 'scroll',
          content: [
            {
              text: 'Система: Vampire: The Masquerade 20th Anniversary Edition (V20) адаптированная для ЛАРП.',
              list: [
                'Игровое Время: Вечера после заката. Игровое время идет от заката до рассвета. Днем персонажи спят/прячутся — вне игры.',
                'Игровой Период: 5 вечеров (11-15 Ноября 2026).',
                'Безопасность: Мы используем систему "Стоп-слов" и жесты безопасности. Детали при принятии заявки.'
              ],
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'combat',
          title: 'Боевая Система',
          icon: 'sword',
          content: [
            {
              subtitle: 'Тип: Live Action Role Play (LARP) бой.',
              text: 'Бой проходит в режиме легкого касания (light-touch). Удары и захваты симулируются, а не наносятся на самом деле. Успех определяется комбинацией заявленных способностей и отыгрыша. В спорных ситуациях зовется Мастер.',
            },
            {
              subtitle: 'Разрешено ✅',
              list: [
                'Отыгрываемые удары и захваты (без реального контакта)',
                'Использование Дисциплин (объявляется голосом)',
                'Тактическое отступление',
                'Использование окружения (укрытия, высота)',
                'Холодное оружие (безопасные ЛАРП реплики)'
              ],
              listType: 'check'
            },
            {
              subtitle: 'Запрещено ❌',
              list: [
                'Реальный физический контакт сильнее легкого касания',
                'Огнестрел (даже реплики) — строго голосом',
                'Рейды на убежища игроков без согласия',
                'Нападение на игроков во внеигровое время'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Уровни Здоровья (V20)',
              list: [
                'Здоров',
                'Ушиблен',
                'Ранен (-1 штраф)',
                'Травмирован (-1 штраф)',
                'Избит (-2 штраф)',
                'Искалечен (-2 штраф)',
                'Обезможен (-5 штраф)',
                'Недееспособен (Бессознание)',
                'Торпор/Смерть'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Типы Урона',
              list: [
                'Башинг (Ударный): Лечится быстро',
                'Летал (Смертельный): Опасен, требует крови для лечения',
                'Аггравированный: Огонь, солнце, когти оборотней/клыки, магия — лечится очень медленно'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'disciplines',
          title: 'Дисциплины',
          icon: 'flame',
          content: [
            {
              text: 'Мы используем Дисциплины V20, адаптированные для ЛАРП. Использование: Объявить название и уровень, потратить кровь (если нужно), отыграть эффект.',
            },
            {
              subtitle: 'Клановые Дисциплины',
              list: [
                'Бруха: Могущество, Стремительность, Присутствие',
                'Гангрел: Анимализм, Стойкость, Превращение',
                'Малкавиан: Прорицание, Помешательство, Затемнение',
                'Носферату: Анимализм, Затемнение, Могущество',
                'Тореадор: Прорицание, Стремительность, Присутствие',
                'Тремер: Прорицание, Доминирование, Тауматургия',
                'Вентру: Доминирование, Стойкость, Присутствие'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Важные Правила',
              list: [
                'Доминирование не работает на персонажей с Прорицанием равного или более высокого уровня.',
                'Затемнение спадает при агрессивных действиях.',
                'Тауматургия требует одобрения Мастера для каждого ритуала.',
                'Дисциплины не делают вас неуязвимым — отыгрыш и тактика важнее.'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'rituals',
          title: 'Ритуалы',
          icon: 'book',
          content: [
            {
              text: 'Тауматургия доступна только Тремерам. Нет "свободного" ритуализма. Все ритуалы должны быть одобрены Мастерами заранее.',
              list: [
                'Выберите ритуал, доступный вашему уровню.',
                'Согласуйте время/место с Мастером.',
                'Подготовьте компоненты.',
                'Отыграйте процесс (мин. 5 минут для низкого уровня).',
                'Получите эффект от Мастера.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Ограничения',
              list: [
                'Ритуалы не могут мгновенно решать сюжетные конфликты.',
                'Боевые ритуалы ограничены по силе.',
                'Информационные ритуалы дают подсказки, а не прямые ответы.',
                'Никакой "мгновенной магии" в бою.'
              ],
              listType: 'warning'
            }
          ]
        },
        {
          id: 'humanity',
          title: 'Человечность',
          icon: 'heart',
          content: [
            {
              text: 'Шкала от 10 (Святой) до 0 (Зверь). Неонаты начинают с 6-7. Человечность — это ваша связь с прежним "я". Низкая человечность означает, что вы ближе к Зверю.',
            },
            {
              subtitle: 'Что снижает Человечность',
              list: [
                'Убийство невиновных',
                'Пытки',
                'Массовое насилие',
                'Нарушение личного морального кодекса',
                'Каннибализм (Диаблери)'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Безумие (Frenzy)',
              text: 'Когда Зверь вырывается на свободу. Триггеры: Огонь/Солнце (Паника), Голод, Провокация (Ярость), Критический провал Человечности. В Безумии вы теряете контроль.',
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'economy',
          title: 'Экономика Услуг',
          icon: 'coins',
          content: [
            {
              text: 'Деньги вторичны. Влияние, услуги (Долги) и связи — валюта ночи.',
            },
            {
              subtitle: 'Ценности',
              list: [
                'Услуги (Boons) — "Ты мне должен" стоит дороже золота',
                'Информация — Знание это сила',
                'Контакты — Нужный человек в нужное время',
                'Территория — Охотничьи угодья',
                'Кровь — Особенно редкая или мощная',
                'Статус — Репутация'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Сферы Влияния',
              text: 'Бюрократия, Церковь, Финансы, Здравоохранение, Высшее Общество, Промышленность, Закон, Медиа, Оккультизм, Полиция, Политика, Криминал, Университет, Улица, Транспорт.',
              listType: 'bullet'
            }
          ]
        },
        {
          id: 'forbidden',
          title: 'Запреты',
          icon: 'shield',
          content: [
            {
              subtitle: 'Абсолютные Запреты 🚫',
              list: [
                'Рейды на убежища игроков без согласия',
                'Нападение на игроков во внеигровое время',
                'Игнорирование стоп-слов',
                'Реальное насилие',
                'Читерство'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Игровые Ограничения ⚠️',
              list: [
                'Диаблери (Возможно, но с тяжелыми последствиями)',
                'Создание потомства (Только с разрешения Принца, нарушение = Окончательная Смерть)',
                'Нарушение Маскарада (Большие проблемы, если смертные узнают)',
                'Насилие в Элизиуме (Карается смертью)',
                'Убийство ПК (Возможно, но нужна причина и последствия)'
              ],
              listType: 'warning'
            },
            {
              subtitle: 'Метагейм ❌',
              list: [
                'Не используйте знания игрока, которых нет у персонажа',
                'Не координируйтесь вне игры без ведома Мастеров',
                'Не читайте чужие секреты'
              ],
              listType: 'cross'
            }
          ]
        }
      ]
    },
    schedule: {
      title: "Ритм Ночи",
      description: "Игра длится от заката до рассвета. Личные интриги вечны, но Город требует вашей службы в определенные часы. Не пропускайте обязательные собрания.",
      adviceTitle: "Совет Хранителя",
      adviceText: "\"События могут быть адаптированы под вашу котерию или личную историю. Мы не злодеи; мы не потащим вас в бездну прямо перед рассветом... обычно. Но помните: Город не будет ждать, пока вы соберетесь.\"",
      adviceFooter: "* Уточняйте местоположение Элизиума у Гарпии.",
      items: [
        { time: 'Закат - 20:00', title: 'Пробуждение', description: 'Подъем. Сбор в Элизиуме. Обмен слухами и подготовка к ночи.', type: 'downtime' },
        { time: '20:00 - 22:00', title: 'Мандат Принца', description: 'Обязательные групповые события. Шериф или Примоген раздадут задачи. Отсутствие будет замечено.', type: 'mandatory' },
        { time: '22:00 - 00:00', title: 'Тени и Секреты', description: 'Свободное время. Преследуйте личные цели, торгуйте информацией или плетите интриги в углах Элизиума.', type: 'optional' },
        { time: '00:00 - 02:00', title: 'Час Ведьм', description: 'Вторая волна обязательных операций. Город спит, но Сородичи работают.', type: 'mandatory' },
        { time: '02:00 - Рассвет', title: 'Долгая Ночь', description: 'Личные сюжеты, опасные сделки. Мы стараемся не отправлять вас на смерть так поздно, но будьте осторожны.', type: 'downtime' }
      ]
    },
    apply: {
      title: 'Стать частью истории',
      text1: 'Знаешь лор? Хочешь создавать кинематографичные моменты для других, а не искать славы для себя?',
      text2: 'Мы ищем посвященных игротехников на роли примогенов и других персонажей игры. Мы вместе с вами создадим уникальную историю для всех игроков.',
      button: 'ПОДАТЬ ЗАЯВКУ НА ИГРОТЕХНИКА'
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Нужен ли опыт в LARP или знание VTM?',
          a: 'Нет. Мы принимаем новичков и поможем разобраться с правилами и сеттингом.'
        },
        {
          q: 'Можно ли играть персонажа из Шабаша?',
          a: 'Нет, все игроки — неонаты Камарильи. Но твой персонаж может иметь историю с Шабашем в прошлом.'
        },
        {
          q: 'Насколько опасна игра? Может ли мой персонаж умереть?',
          a: 'Да, смерть возможна. Но мы не убиваем персонажей просто так — всегда есть способы избежать фатала, если ты играешь осторожно или находишь союзников.'
        },
        {
          q: 'Как проходит игра по времени?',
          a: 'Каждый вечер после заката солнца (примерно с 18:00-19:00). Игровое время идёт от заката до рассвета. Днём — вне игры, время для сна, работы и т.д.'
        },
        {
          q: 'Нужен ли костюм?',
          a: 'Приветствуется атмосферная современная одежда. Необязательно готический стиль, главное — чтобы твой персонаж выглядел уместно в ночном городе 2026 года.'
        },
        {
          q: 'Где спать и жить во время игры?',
          a: 'Каждый игрок организует себе жильё сам (отель, хостел, AirBnb, палатка). Мы можем помочь с рекомендациями и координацией, если игроки хотят снять что-то вместе.'
        },
        {
          q: 'Сколько стоит участие?',
          a: '40 евро'
        },
        {
          q: 'До какого числа принимаются заявки?',
          a: '1 сентября'
        },
        {
          q: 'Как с вами связаться?',
          a: 'Telegram: ',
          link: 'https://t.me/DanubeShadows?direct'
        }
      ]
    },
    footer: {
      text: 'Части материалов являются объектами авторского права и торговыми марками Paradox Interactive AB и используются с разрешения. Все права защищены. Это фанатский сайт для конкретной игры живого действия.'
    },
    schrecknet: {
      welcome: 'Соединение установлено. Добро пожаловать в ШрекНЕТ, Неонат. Запрашивай базу данных о грядущих ночах.',
      inputPlaceholder: 'Введите команду или запрос...',
      processing: 'Обработка запроса...',
      accessDenied: 'ОТКАЗАНО В ДОСТУПЕ: Отсутствует ключ API.',
      networkError: 'Ошибка сети.',
      button: 'ШрекНЕТ'
    }
  }
};
