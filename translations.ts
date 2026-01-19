
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
    hidden?: boolean;
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
      subtitle: 'Urban LARP.\n Mystical detective & action based on World of Darkness.',
      details: {
        whenLabel: 'When',
        when: 'November 11 - 15, 2026',
        whereLabel: 'Where',
        where: 'Novi Sad',
        mgLabel: 'Team',
        mg: 'Ptica, Kaire, Til, Grisha & Max Gorin'
      },
      buttonRules: 'READ THE RULES',
      buttonJoin: 'JOIN THE GAME',
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
        text: 'A city on the Danube, where old bridges remember more than they should. Three years ago, there was war. The Camarilla, led by the Knez of Budapest, drove the Sabbat out. Barricades were dismantled, bodies removed, the Masquerade restored. Now the Laws of Traditions rule here, and everything is relatively calm. Relatively.',
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
      video: {
        title: 'Watch the Teaser',
        description: 'Short mood piece for VTM: Shadows over Danube.',
        url: 'https://www.youtube.com/embed/x6w9RNsL0GE'
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
          list: 'Knez, Seneschal, Harpy, Elders & Ancillae',
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
      description: 'Check the available roles and current casting status in the official registry. The casting is loading slowly for the first time, please wait.',
      teamSection: {
        title: 'Master Group',
        members: [
          { name: 'Ptiсa', role: 'Head Master, Plot, Mechanics', telegram: '@liseren' },
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
          'Game Coordinators',
          'Photographers',
          'Game Techs (especi/ally with Lore knowledge)'
        ],
        cta: 'Mark in the application if you are ready to help!'
      },
      applyButton: 'SUBMIT APPLICATION'
    },
    settingPage: {
      title: 'The Setting',
      recommendations: {
        question: 'What to play to understand the setting?',
        games: ['Coteries of New York', 'Shadows of New York', 'VTM Bloodlines']
      },
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
      warning: {
        title: 'Work in Progress',
        text: 'These rules are still under development, but you can see the current stage of our work and provide feedback. Rules for economy and services are currently being drafted.'
      },
      sections: [
        {
          id: 'general',
          title: 'General Principles',
          icon: 'scroll',
          content: [
            {
              text: 'Thanks to the Rostov VTM Storyteller team and all participants who helped develop and test the rules. We welcome feedback, especially suggestions for rule improvements. In our game, the most important thing is the game itself; we ask you to follow the rules and respect each other.',
              list: [
                'Game Time: Evenings after sunset. Game time runs from sunset to sunrise. During the day, characters sleep/hide — out of game.',
                'Game Period: 4 evenings (November 11-15, 2026).',
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
              subtitle: 'Basics',
              text: 'Rules are standard — please refresh them. We use the “step outside” marker to move conflict away from crowds.',
            },
            {
              subtitle: 'Core rules',
              list: [
                'Each player has 3 hits; some characters may have extra.',
                'Maximum hits for most players is 5, even with armor/disciplines (unless specified otherwise by a discipline like Setite Golems or Zulo form).',
                'Hit zone: torso and limbs. Do NOT hit head, hands, feet, or groin.',
                'Damage only with unpainted Nerf blasters or foam/protector weapons marked “in game item”.',
                'Follow weapon safety. The less realistic your weapon looks, the fewer problems on city streets.',
                'Without Celerity you cannot dual‑wield.',
                'After combat, read the Discipline rules — they are linked.'
              ]
            },
            {
              subtitle: 'Taking wounds',
              text: 'Each hit to a valid zone removes 1 hit and assigns a wound status.',
              list: [
               'Light — no gameplay restrictions. Wound roleplaying is encouraged.',
               'Medium — 1 hit point remaining. Walking only (unless you have Celerity or a suitable enhancement); with the help of a healthy Kindred, you can run.',
               'Heavy — Zero hit points. Independent movement is prohibited. Carrying a heavily wounded character is only possible with two people, unless you have Potence or a suitable artifact. Conversation is permitted. The next hit puts the character into Torpor.',
               'Torpor is a state of unconsciousness in which you cannot see, hear, or move. You can only emerge from it if you are given a blood pack.'
              ],
            },
            {
              subtitle: 'While wounded',
              list: [
                'Must roleplay pain (groans, cries, etc.).',
                'After combat, vampires and ghouls (if not in heavy injury/torpor) restore all hits automatically if not Hungry.',
                'Losing the 3rd hit and going heavy blocks regen without a blood pack.',
                'Ghouls can be brought out of heavy injury by drinking vampire blood or surgery.',
                'Vampires exit torpor from wounds after a period determined by their Humanity/Path level.'
              ]
            },
            {
              subtitle: 'Death & Finishing Off',
              list: [
                'Losing the last hit puts you in heavy injury, then torpor if another hit is dealt.',
                'A character in torpor (vampire) or heavy injury (human/ghoul) can be finished off. Loudly and clearly say "Finishing off" and roleplay it with a weapon/claws.',
                'Final killing of a Camarilla Kindred is a violation of the Tradition of Destruction unless a Blood Hunt is active.',
                'Death conditions: Vampires in torpor die if not transported to safety by the end of the night. Humans die if not given the Embrace or ghouled within an hour.',
                'After death: stay for 10 minutes roleplaying a corpse (longer if the scene needs it).',
                'During this time you may inform others about the nature of your wounds.',
                'Then contact GMs to get a new role.'
              ]
            },
            {
              subtitle: 'Physical interaction',
              listType: 'warning',
              list: [
                'No grappling or real violence.',
                'Any contact must be mutually agreed and clearly understood.',
                'Be gentle; do not raid player havens without agreement.'
              ]
            },
            {
              subtitle: 'Attack process (“step outside”)',
              list: [
                'In crowded places attacker touches the victim and says “Let’s step outside”. In quiet places you may attack normally.',
                'The victim may try to solve it verbally, but attacker can repeat the marker and insist.',
                'Victim chooses: surrender (follow attacker, accept search/wound/death) or fight and go find a proper spot.'
              ]
            },
            {
              subtitle: 'Marker “Let’s step outside”',
              list: [
                'If you hear it and feel a hand on your shoulder — that is a punch.',
                'First marker gives you a chance to talk your way out.',
                'On the second marker you must follow to a safe place for the fight or surrender.'
              ]
            },
            {
              subtitle: 'Weapon Mechanics',
              list: [
                'For melee weapons and claws, a hit is a clear, amplitude touch of the target zone with a swing (wrist hits and "sewing machine" style strikes are forbidden).',
                'For a stake, it is a clear touch of the chest or back with the HAND in which the stake is held (not the stake itself).'
              ]
            },
            {
              subtitle: 'Staking',
              list: [
                'A vampire stake immobilizes the target. The vampire remains in this state until the stake is removed.',
                'In the "immobilized" state, the character cannot perform any game actions.',
                'If you do not interact with the staked character for more than an hour, they may contact the GMs and will likely receive a sudden technical rescue.',
                'Please use staking for gameplay, not to shove an opponent into a closet for the rest of the night.',
                'Characters with level 2 Celerity or level 2 Fortitude are immune to firearms (see discipline rules for details).'
              ]
            }
          ]
        },
        {
          id: 'hunger',
          title: 'Hunger Rules',
          icon: 'droplet',
          content: [
            {
              text: 'At the beginning of each night, a vampire wakes up Hungry. A hungry vampire is severely limited in their capabilities. To fix this, they need to inform the Storyteller once per night and specify how they satisfy their Hunger, choosing one of the methods.'
            },
            {
              subtitle: 'A Hungry Vampire:',
              list: [
                'Cannot use Skills or active Disciplines.',
                'Does not restore health over time after being wounded (and cannot restore it in any other way).',
                'Cannot give their blood to another vampire to create Blood Bonds or Embrace.'
              ],
              listType: 'warning'
            },
            {
              text: 'A hungry vampire behaves accordingly — they are irritable, nervous, talk about food, etc. We rely on player roleplay here.'
            },
            {
              text: 'In rare cases, a vampire may fall into a state of Hunger again during the same night (if brought out of torpor, used specific disciplines, or the Storyteller says so) — then they will have to find food again.'
            },
            {
              subtitle: 'IMPORTANT',
              text: 'If a vampire remains hungry by dawn, something bad will ultimately happen to them when they wake up the next night (e.g., they will break the Masquerade, owe a Blood favor for a blood pack, or kill a human). Do not let this situation happen.',
              listType: 'warning'
            },
            {
              subtitle: 'Methods of Feeding',
              subsections: [
                {
                  title: 'Herd',
                  text: 'The easiest way, available only to Toreador and Ventrue. Allows feeding twice per night for oneself or treating friends.'
                },
                {
                  title: 'Blood Packs',
                  text: 'Medical blood bags with a code sticker. Message the GM: "Name drank bag code X14R". Can be bought from NPCs or found. Beware of fake or tainted blood!'
                },
                {
                  title: 'Rats',
                  text: 'Similar to blood packs, found in the city. May have side effects. Ventrue cannot feed this way.'
                },
                {
                  title: 'City Hunt',
                  text: 'The GM gives a task - to find and photograph a person with a specific description (young man in jeans, or a grandmother with bags). The difficulty of the task depends on different factors (violation of the masquerade, belonging to the Ventrue clan, extreme values of humanity and others). The photo must be sent to the GM by Hunger or, at the last resort, shown to the nearest GM. Always send a photo of any person on the street to the GM and say that you are hunting without observing the masquerade. Quick and easy feeding! Remember that violating the masquerade is bad for you and the Domain where you do this.'
                },
                {
                  title: 'Diablerie',
                  text: 'Solves hunger for one night and boosts disciplines. See Diablerie rules.'
                },
                {
                  title: 'Animalism Discipline',
                  text: 'Lure and eat animals. Can treat others (need name and joint photo). Ventrue cannot use this.'
                }
              ]
            }
          ]
        },
        {
          id: 'disciplines',
          title: 'Disciplines',
          icon: 'flame',
          content: [
            {
              text: 'There are three types of Disciplines:',
              list: [
                'activated',
                'mental',
                'passive'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Usage rules',
              list: [
                'Each Discipline has 2 levels.',
                'To activate: announce the power name and dots; for mental powers also state your status; meet required conditions (touch, cover, etc.) or it fails.',
                'In combat each dot can be used no more than once (passives are continuous).',
                'If Hungry you can use only passive Disciplines and rituals.',
                'Mental powers work only on targets not above your status: Ghoul → mortals/ghouls; Neonate → mortals/ghouls/neonates; Ancilla → mortals/ghouls/neonates/ancillae; Elder → everyone.',
                'A higher-status target may say “block, <status>”, and the effect fails (they may also pretend to be affected).',
                'The same mental dot can affect the same target at most twice per night.',
                'While a dot’s effect is on a target, you cannot use that dot on others; you may end your own effect at any time.',
                'Passive Disciplines are always on at your highest available dot.',
                'For “on a target” effects, state the in-game name so they know it’s on them.',
                'Miscalling status/level/effects or skipping conditions may be penalized by STs.',
                'Non-clan Disciplines from the list below cannot be taken at start; they are only gained via diablerie.'
              ]
            },
            {
              subtitle: 'Discipline spread by status',
              list: [
                'Neonate: one clan Discipline at level 1 and one clan Discipline at level 2, or all three clan Disciplines at level 1.',
                'Ancilla: one clan Discipline at level 2, two clan Disciplines at level 1, and one non-clan Discipline at level 1.',
                'Base spread may change by sect specifics.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Clan Disciplines',
              list: [
                'Ventrue: Dominate, Fortitude, Presence.',
                'Tremere: Thaumaturgy, Auspex, Dominate.',
                'Toreador: Presence, Auspex, Celerity.',
                'Malkavian: Dementation, Auspex, Obfuscate.',
                'Brujah: Potence, Celerity, Presence.',
                'Nosferatu: Obfuscate, Animalism, Potence.',
                'Gangrel (rural): Animalism, Fortitude, Protean.',
                'Gangrel (urban): Celerity, Obfuscate, Protean.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Disciplines',
              subsections: [
                {
                  title: 'Obfuscate (activated)',
                  text: 'Invisibility: visible only to characters with Auspex; firearms cannot be used; attacks, powers, or obvious noise break it.',
                  list: [
                    'Marker: white sash over the shoulder. No marker — no effect.',
                    'Activate by donning the sash and declaring; remove anytime. Re-enter only after the combat scene and not sooner than 1 minute; cannot enter mid-attack/defense.',
                    'Cloak of Shadows (dot 1): must first leave line of sight. Walk only; noise, collisions, dropped objects reveal you. Cameras do not see you.',
                    {
                      text: 'Unseen Presence (dot 2): may vanish in plain sight; can speak and move without dropping the effect, otherwise as Cloak of Shadows. Marker: see image.',
                      image: '/white-ribbon.png'
                    },
                    'The Mask of a Thousand Faces is an additional effect for the Abrupt Disappearance ability—a Nosferatu appears human, and its appearance does not violate the Masquerade. Without the Mask of a Thousand Faces, you should not ride in a taxi with your face uncovered, unless you wish to violate the Traditions.'
                  ]
                },
                {
                  title: 'Potence (passive)',
                  text: 'Physical dominance and holds.',
                  list: [
                    'Hold: hand on shoulder, say “hold, Potence X”. If your Potence is higher, target is immobilized but may use Disciplines; if equal/higher, release them.',
                    'Hold is not used in combat.',
                    'Dot 1: allows carrying immobilized players in-game (they move under own power following you).',
                    'Dot 2 (red ribbon on wrist): melee hit removes 2 hits (works vs Fortitude 2) + dot 1 effects.'
                  ]
                },
                {
                  title: 'Animalism (activated)',
                  text: 'Bond with the Beast.',
                  list: [
                    'Whispers to the Beast (dot 1): once per night removes “Hunger” from self or another (not Ventrue; touch required). Grants one investigation answer but puts you into Hunger.',
                    'Quell/Bestial Influence (dot 2, mental if attacking): remove or inflict frenzy/rotschreck. Line of sight, no touch. Can be blocked by Humanity/Path 3+ or mental rules. Max 2 uses per night and 1 per target per night.'
                  ]
                },
                {
                  title: 'Fortitude (passive)',
                  text: 'Toughness boost.',
                  list: [
                    'Dot 1: +1 hit; immune to staking by characters without Potence.',
                    'Dot 2: +2 hits; immune to firearms (red head marker recommended); immune to stakes from Potence 1.'
                  ]
                },
                {
                  title: 'Dominate (mental)',
                  text: 'Overrides Blood Bonds, Vinculum, and Presence while active. Victim perceives the order as their own decision and won’t realize they were influenced.',
                  list: [
                    'Hypnosis (dot 1, touch + eye contact, not in combat): immediate single command or one trigger for the night. No direct suicide orders. If target sees an attack coming, effect ends. Ongoing simple actions last 1 minute.',
                    'Oblivion (dot 2, touch + eye contact, not in combat): 5 minutes of memory reading with truthful answers. Can erase/replace memories of the current night with facts (cannot change feelings/goals). Victim forgets the influence. If harmed during use, effect ends but implanted memories stay; conversation cannot end before 5 minutes.'
                  ]
                },
                {
                  title: 'Auspex (passive/mental)',
                  text: 'See the hidden and block any Obfuscate level.',
                  list: [
                    'Heightened Senses/See the Unseen (dot 1, passive): perceives beings in Obfuscate/invisibility, ghosts, illusions; detects hidden presence.',
                    'Telepathy (dot 2, mental, not in combat): converse at least a minute. Learn thoughts/plans; target cannot lie but can evade. Lasts 5 minutes; target cannot leave early. Harm ends effect. Can read residual auras from items (info from GM).'
                  ]
                },
                {
                  title: 'Presence (mental)',
                  text: 'Emotional sway.',
                  list: [
                    'Awe (dot 1, touch, not in combat): for 2 hours target is a willing servant within line of sight/50 m, obeying non–self-harm orders. Cannot override 3rd Blood Bond. Dangerous orders may be refused with warning. Target forgets the effect but may suspect.',
                    'Summoning (2 dots): Any character seen this night can be summoned to any distance. The target must arrive as quickly as possible, avoiding unnecessary suspicion among friends, endangering themselves, or committing suicidal acts. The summoning ends when the victim comes within 3 meters of the summoner or when the summoner attacks the victim. One summoning can be active at a time; it can be canceled. A second summoning from a different source will not work. If the scene is in a crowded place, GMs/players can reschedule it using the "Let\'s go outside" rule.'
                  ]
                },
                {
                  title: 'Celerity (passive/activated)',
                  text: 'Super-speed.',
                  list: [
                    'Dot 1: passive dual-wield allowed. Active: declare “Celerity 1” to exit combat; only Celerity 1 can chase, declaring it.',
                    'Dot 2: passive immunity to firearms (blue head marker recommended). Active: “Celerity 2”; only Celerity 2 can chase.'
                  ]
                },
                {
                  title: 'Thaumaturgy — Path of Blood (activated)',
                  text: 'Blood manipulation.',
                  list: [
                    'Taste of Blood (dot 1, needs target’s blood): determines status, clan, Discipline spread. Success by GM. Do not Create Blood Bonds.',
                    'Blood Might (dot 2, touch): for the night raises one vampire’s status (or self) by +1. Number of Disciplines doesn’t grow, but mental powers use new status. Humans don’t become ghouls; ghouls don’t become neonates; elders stay elders.'
                  ]
                },
                {
                  title: 'Thaumaturgy — Path of Flames (activated)',
                  text: 'Removes rotschreck from the caster; their fireballs do not cause rotschreck in others.',
                  list: [
                    'Flame (dot 1): red prop ball as fireball, on hit deals 2 hits. One fireball per combat.',
                    'Inferno (dot 2): same effect, but two fireballs per combat.'
                  ]
                },
                {
                  title: 'Protean (activated)',
                  text: 'Beast forms.',
                  list: [
                    'Claws (dot 1, wear claw gloves): last until dawn or deactivation. Hit deals 1 hit (Potence bonuses apply). Cannot use other weapons, but may block. Can attack with both hands without Celerity.',
                    'Mist Form (dot 2): white cloth 1x1.5 m over shoulders. Incorporeal; immune to physical damage and Disciplines except Summoning/Dementation; vulnerable to Thaumaturgy, sun, fire (incl. Path of Flames). Cannot speak, use Disciplines, or interact physically; move only at a walk; may pass any doorway (doors opened in real life). Duration 1 hour, cooldown 30 minutes. Bonus for second dot - claws deal 2 hits.'
                  ]
                },
                {
                  title: 'Dementation (mental)',
                  text: 'Manipulating madness.',
                  list: [
                    'Eyes of Chaos (dot 1, see target, not in combat): learn clan, derangements, diablerie, Humanity/Path; may track target’s location/actions (via GM). Track only one at a time. Cooldown 1 hour after ending.',
                    'Total Madness (dot 2, see target): inflicts 3 random derangements for 3 hours. 2 uses per night; works on a target once per night. Derangements chosen by GM.',
                    'Possible derangements include: blood bulimia, anatidaephobia, agoraphobia, aversion to blood, acrophobia, memory loss, spectrophobia, fixation on an item, paranoia, Tourette’s, androphobia, bibliomania, Fregoli syndrome, nomophobia, schizophrenia, and others per GM.'
                  ]
                }
              ]
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
                'Agree on time/place with GM.',
                'Prepare components.',
                'Roleplay the process (min. 5 mins for low level).',
                'Receive effect from GM.'
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
              text: 'Humanity is a scale from 1 to 5. Most players start with a value of 3-4. It is easy to lose Humanity, but very hard to regain it. Evaluation occurs once per night.',
            },
            {
              subtitle: 'Sins and Effects',
              text: 'Higher Humanity implies following all previous sins. Committing a sin may lead to a decrease in Humanity.',
              subsections: [
                {
                  title: 'Level 5 (Saint)',
                  list: [
                    'Sin: Harming another, even in self-defense.',
                    'Wake up at 20:00.',
                    'Feeding difficulty: Decreased.',
                    'Torpor time: 0.5 hours.'
                  ]
                },
                {
                  title: 'Level 4',
                  list: [
                    'Sin: Violence is the norm. Scuffles without murder. Torture without pleasure. Use of mental disciplines (Dominate/Presence).',
                    'Wake up at 20:30.',
                    'Feeding difficulty: Decreased.'
                  ]
                },
                {
                  title: 'Level 3',
                  list: [
                    'Sin: Putting a Kindred into torpor and/or killing a mortal in self-defense. Violation of personal moral code. Torture with pleasure.',
                    'Wake up at 21:00.',
                    'Torpor time: 1 hour.'
                  ]
                },
                {
                  title: 'Level 2',
                  list: [
                    'Sin: Death of a Kindred or mortal NOT in self-defense. Diablerie.',
                    'Wake up at 21:30.',
                    'Feeding difficulty: Increased.'
                  ]
                },
                {
                  title: 'Level 1',
                  list: [
                    'Sin: Nowhere lower.',
                    'Wake up at 22:00.',
                    'Torpor time: 2 hours.',
                    'Feeding difficulty: Increased.'
                  ]
                }
              ]
            },
            {
              subtitle: 'Additional Effects',
              list: [
                'Rotschreck Protection: Humanity 3 and higher provides protection from supernatural terror of fire.',
                'Animalism Protection: Humanity 3 and higher allows blocking the "Quell the Beast" power.',
                'Detection: Humanity level can be revealed by "Eyes of Chaos" or Auspex (aura).',
                'Diablerie: Committing diablerie permanently lowers Humanity and leaves black streaks in the aura.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Frenzy',
              text: 'A vampire in frenzy loses control to the Beast. Triggered by Hunger, Rage.',
              list: [
                'The vampire must attack the nearest vampire or human, put them in torpor/heavy injury, and drink their blood.',
                'Only melee weapons can be used.',
                'Only physical disciplines (Potence, Fortitude, Celerity) can be used.',
                'Immune to mental disciplines; all active mental effects fall off.',
                'Ends when the vampire feeds from a victim or falls into torpor.'
              ]
            },
            {
              subtitle: 'Rotschreck',
              text: 'Supernatural terror of open fire (any fire larger than the flame of a match/lighter).',
              list: [
                'Any vampire approaching open fire falls into uncontrolled terror and must run away at least 10 meters.',
                'Immunity: Thaumaturges with the Path of Flames, some Sabbat members, and vampires with Humanity 3 or higher (Humanity specifically, not Path).'
              ]
            }
          ]
        },
        {
          id: 'blood',
          title: 'Blood & Bonds',
          icon: 'droplet',
          content: [
            {
              subtitle: 'Blood Bonds',
              text: 'Any vampire who drinks the blood of another vampire experiences the effect of the Blood Bond.',
              list: [
                '1 Sip – The character feels a strong affinity for the one whose blood they drank.',
                '2 Sips – The character feels love and sexual attraction toward the one whose blood they drank. However, the character still values their own life, can keep secrets, and will not obey orders that directly lead to their death.',
                '3 Sips – The character becomes a slave to the one whose blood they drank. They will tell and do anything that does not directly threaten their life.'
              ]
            },
            {
              text: 'The bond level can only increase by one step per night. Vampires sometimes voluntarily drink each other\'s blood to strengthen emotional ties or pledge mutual loyalty. The simplest way to bond a Kindred is to feed them your blood while they are in torpor.',
            },
            {
              subtitle: 'Rumors',
              list: [
                'Rumors suggest that Sabbat vampires know how to break Blood Bonds.',
                'It is said that the Tremere may know ways to release someone from a bond.'
              ]
            },
            {
              subtitle: 'Diablerie',
              text: 'In the Camarilla, Diablerie (consuming another Kindred) is considered a grave crime. It is typically detected via Auspex; black streaks in the aura will surely raise questions from the Sheriff.',
              list: [
                'Consuming Essence: By performing a "Feeding Attack", a vampire can consume not only the soul but the very essence of the victim, taking their abilities and flaws. After committing diablerie, the player calls the Storyteller, and the Storyteller informs them what pros and cons they received from the diablerie, and also makes changes to their aura.',
                'Consequences: After committing diablerie, the character falls into a trance after 5 minutes and lies in a state similar to torpor, immobilized for half an hour.',
                'Roleplay: Diablerie is the ultimate violation — the consumption of the soul itself. As the predator drains the last drops of the victim\'s blood, their essence is violently torn away and merged with the diabolist\'s own, leaving behind nothing but cold ash and a stained aura.'
              ]
            },
            {
              subtitle: 'Blood Replenishment',
              text: 'You can replenish your blood by feeding on Tech-Characters (NPCs). A roleplayed feeding scene with an NPC allows you to restore your Hunger status to "Sated".',
              list: [
                'Feeding Attack: Any vampire can perform a "Feeding Attack" using the intoxicating property of the "Vampire\'s Kiss" (the process is pleasurable for the victim). A Feeding Attack can only be performed on immobilized characters. To do this, the attacker approaches the victim, hugs them by the shoulders, says "Bite", and starts counting aloud to ten. Vampires can use disciplines that are allowed while immobilized. If the feeding is not interrupted, after 10 seconds the victim falls into torpor. If the attacker releases the victim before 10 seconds, no hits are removed, but the victim receives the "Hungry" status.'
              ]
            }
          ]
        },
        {
          id: 'economy',
          title: 'Economy of Favors',
          icon: 'coins',
          content: [
            {
              text: 'Money is secondary. Influence, favors (Boons), and connections are the currency of the night.',
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
//            {
//              subtitle: 'Influence Spheres',
//              text: 'Bureaucracy, Church, Finance, Health, High Society, Industry, Legal, Media, Occult, Police, Politics, Underworld, University, Street, Transportation.',
//              listType: 'bullet'
//            }
          ]
        },
        {
          id: 'investigations',
          title: 'Infobroker Rules',
          icon: 'message-square',
          content: [
            {
              text: 'It is known that there is an infobroker in the city. He exists online under the nickname Gutter_Sage. Rumors say he is a Nosferatu and older than the Shadow, while others claim the opposite — that she is his sire. Either way, it is known that Gutter_Sage never appears in public. But everyone knows you can write him a question. And get an answer.'
            },
            {
              subtitle: 'Attitude toward Nosferatu',
              text: 'They say he is more lenient toward young Nosferatu. He may even forgive them for answering "I don\'t know" to one of his questions. Or even a mistake. For others — no.\n\nYou can write to him as much as you want, but until your current request is closed (you received your 3-5 questions and answered them), he won\'t respond to your next question. There are rare cases when the Infobroker cannot answer your request. He will tell you directly, before he starts asking his own questions.',
              list: [
                'Exception to "1 unanswered request per neonate": Nosferatu can have 2 open requests at the same time.'
              ],
              listType: 'check'
            },
            {
              subtitle: 'Exchange Principles',
              text: 'Gutter_Sage will ask questions in return. The harder your question is to answer (in his opinion), the harder his counter-questions will be. He is a collector of information. He is not interested in hastily fabricated rumors, blood, money, or generally Favors. There are known exceptions regarding Favors — he will tell you about them himself.',
              list: [
                'Expects specific questions accompanied by your hypotheses (1 to 3). Sage appreciates good hypotheses; for them, he is willing to overlook some inaccuracies in your answers.',
                'Tends to ignore yes-no questions and overly general requests like "Send me some dirt on the Ventrue Primogen."',
                'The Infobroker is not a telepath. He won\'t answer whether that Malk really sees spirits or whether your friend is thinking about signing a contract with infernal forces.',
                'But if you ask whether your friend performed any shady rituals yesterday before midnight, or yelled that Baphomet would soon grant him great power — that\'s a different conversation.',
                'Asking "List everyone the Prince met with in the last week" also won\'t work, but you can specify a reasonable time window within a night, and it\'s better to specify a location too. Gutter_Sage will determine what\'s reasonable.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Mechanics and How It Works',
              text: 'If you\'ve hit a dead end, don\'t know where to look for a piece of information you need, or you\'ve just decided with other neonates at 4 AM to dig into a Primogen\'s turbulent youth or that shady neonate from another coterie — message the Infobroker on Telegram.',
              list: [
                'Your message should contain: character name, clan, briefly what you already know and what you want to find out.',
                'The question must be specific about a place, Kindred, or event, reflecting what you\'ve already dug up, your hypothesis (1 to 3).',
                'We encourage you to maintain your character\'s communication style. The Infobroker has a sense of humor and appreciates creativity.',
                'You cannot introduce yourself under someone else\'s name — the request is sent on behalf of the account owner.',
                'If you\'re asking about a character, you\'ll need at least one recent photo (taken during the game) of that character. Photos must be clear — the old Nosferatu understands about night photography, but it should be clear who it is.'
              ],
              listType: 'warning'
            },
            {
              subtitle: 'Information Retrieval Process',
              text: 'In response, you will receive 3 to 5 questions of varying difficulty. Base is 3 — for an easy request. Secrets of Primogen or the Tremere Chantry will cost significantly more.',
              list: [
                'A smart and cautious neonate can easily deduce from the question difficulty that they\'re digging into a dangerous topic and back off.',
                'Questions may not arrive instantly (usually within an hour or two, or at the beginning of the next night if asked toward dawn).',
                'Questions will be about different Kindred, events, or locations in the city, not directly related to your query\'s subject. You may need to negotiate with other neonates.',
                'Among the Kindred mentioned, there may be Council members and even the Prince. We advise talking to neonates of the relevant clans — a Primogen is more likely to answer a clanmate.',
                'Gutter_Sage will not answer a repeated question from the same character if you answered at least 1 incorrectly (for Nosferatu — 2).',
                'The question can be resent by another Kindred. Usually, questions that have already been correctly answered are not asked again by Sage.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Example of Use',
              subsections: [
                {
                  title: '1. Andrey\'s Request (Brujah)',
                  text: 'Brujah Andrey suspects that the Ventrue Primogen may be indirectly involved in the disappearance of his clanmate and friend Danila. Because Danila mentioned that the Primogen had called him for a talk. Then he came back, looking glum, and dodged all questions. Then he vanished.\n\nOf course, the Camarilla is not a place where you can throw around such accusations freely, and you can\'t ask directly either. So Andrey first secretly takes a photo of the Primogen in Elysium. Then he goes and takes a photo of the building where his friend Danila was last seen — Hotel Pupin.\n\nHe writes:\n"Hey, Gutter_Sage. I\'m Andrey from clan Brujah. Recently my bro Danila from clan Gangrel disappeared. He was last seen near Hotel Pupin around midnight. A couple of days before disappearing, he mentioned that the Ventrue Primogen invited him for a talk. And after the talk, but before disappearing, he was sullen and dodged all my questions.\n\nMy hypotheses:',
                  list: [
                    '1) Danila saw something near the "Pupin" that he shouldn\'t have seen.',
                    '2) OR I\'m not accusing the Primogen of killing him personally, of course, but I think Danila may have encountered someone acting on his behalf — or using his name as cover.',
                    'Can you tell me which Kindred were hanging around that night from 10 PM to 2 AM near Hotel Pupin?'
                  ]
                },
                {
                  title: '2. Sage\'s Counter-Questions',
                  text: 'Sage replies: "Hey, little bro. Let\'s go:"',
                  list: [
                    '1. Who is the favorite childe of Nosferatu Primogen Shadow?',
                    '2. Who did Brujah Valentina meet in the abandoned house at midnight?',
                    '3. What were the Tremere doing in Limanski Park yesterday at 10 PM?'
                  ]
                },
                {
                  title: '3. Gathering Answers',
                  text: 'Andrey thinks it over. The questions aren\'t that hard, except maybe the first one. And there are only 3. So neither the Prince, nor the Council, nor the Regent are involved, or they simply don\'t think this piece of information is worth spending significant resources to hide.\n\nAsking Valentina will be easy, they\'re buddies. He thinks he\'ll approach the Tremere with a simple offer — he\'ll honestly tell them this question is for the Infobroker. If they help with this question, he\'ll share the info from Sage about who was near the Ventrue Primogen\'s hotel. They probably won\'t refuse if there wasn\'t some mega-secret sorcery involved.\n\nAbout who\'s Shadow\'s favorite childe — he has no idea. He easily gets info from Valentina. Then he writes to or finds one of the Tremere neonates, and they\'re indeed willing to help if he shares the result. The childe question remains.\n\nHe finds Nosferatu Milan at the tea house where neonates often gather. Milan laughs at the question and is sure he knows the answer. Says it\'s him. Andrey is skeptical; he understands that if it\'s wrong — Sage won\'t forgive the mistake and Andrey won\'t get another chance to ask this question personally. He tries to get Milan to just call Shadow and ask, but Milan isn\'t keen, even though he\'s the favorite childe.\n\nIn the end, they agree that if the answer is correct — Andrey owes Milan a Minor Favor. If wrong — Milan sends the request to Sage under his own name.'
                },
                {
                  title: '4. Answer and Failure',
                  text: 'Andrey writes a response to the Infobroker:',
                  list: [
                    '1) Milan from clan Nosferatu,',
                    '2) Valentina met with Katarina from clan Toreador. She said they were just exchanging gossip. But I don\'t think that\'s true — why exchange gossip in an abandoned house.',
                    '3) Recently, scratches like claw marks of strange shape have been appearing on trees. There are also rumors that Neo-pagans gather there — because people find bloody marks on trees. They decided to investigate. They found several symbols drawn in human blood. And they say the claw marks are strange — probably not a Kindred and unlikely an animal.'
                  ]
                },
                {
                  title: '5. Result of the Error',
                  text: 'Half an hour later, Andrey receives a response: "One of the answers is fundamentally wrong, young one."\n\nThat\'s it. Andrey\'s question is closed by the Infobroker. Andrey can write him another question about a different place, event, or Kindred immediately. But not the one he\'s most interested in right now, the one he already failed. Andrey can never ask this question again.\n\nBut another Kindred can ask the same question. For example, Milan, because of whom this happened.'
                },
                {
                  title: '6. Milan\'s Second Attempt',
                  text: 'Milan\'s heart is broken that he\'s not the favorite childe, but he has to fulfill his part of the deal. Milan writes:\n"Hey, boss. I\'m Milan from clan Nosferatu. Andrey (the Brujah) lost his buddy — Danila (from clan Gangrel). He was last seen near Hotel Pupin around midnight. A couple of days before disappearing, he said the Ventrue Primogen invited him to discuss something. After that, until he disappeared, he was sullen and didn\'t answer Andrey\'s questions.\n\nThe hypotheses are as follows, boss:\n1) Danila saw something near the "Pupin" that he shouldn\'t have seen.\n2) OR I\'m not accusing the Primogen of killing him personally, of course, but I think Danila may have encountered someone acting on his behalf — or using his name as cover.\n3) OR (Milan decided to add his own) Someone wants to frame the Ventrue Primogen with this disappearance.\n\nCan you tell me which Kindred were around that night from 10 PM to 2 AM near Hotel Pupin?"'
                },
                {
                  title: '7. New Questions',
                  text: 'He gets a response: "Hey, kid. Let\'s go:"',
                  list: [
                    '1) Where and why did the Sheriff go with his coterie tonight around 8 PM and what did he do there,',
                    '2) Name a former or current lover of Tremere Regent Francesca Orsini,',
                    '3) Which Toreador specifically accompanied their Primogen the day before yesterday before the Ball, and (optional) was there among them someone who recently had a conflict with Brujah?'
                  ]
                },
                {
                  title: '8. Gathering Information',
                  text: 'Milan is generally friendly with a Kindred from the Sheriff\'s Coterie and bets he\'ll get this information. Andrey says he won\'t go to the Tremere neonates again — he already owes them info they\'re currently trying to get, from the first attempt. But he\'s ready to find out about the conflict with Brujah clanmates.\n\nThey spend some time gathering information and Milan writes his answer. He knows he can fail one question without consequences; he\'s quite confident about the rest.'
                },
                {
                  title: '9. Result',
                  text: 'Milan writes his answer:',
                  list: [
                    '1) They went to the outskirts of the city. To cover up traces of a Masquerade breach. There was a small skirmish with Shovelheads there. Seems like no one was badly hurt. They found traces of some shady ritual. Now he went to consult with the Tremere.',
                    '2) Boss, why you gotta do me like this. I dunno. Toreador Primogen?',
                    '3) He was accompanied by his childe Anna and a visitor from Hungary named Zoltan. And yes, Zoltan recently had a beef with the Brujah.'
                  ]
                },
                {
                  title: '10. Finale',
                  text: 'The answer comes an hour later:\n"One of the answers is wrong, Milan. Moreover, it\'s teeth-grindingly banal. You can do better. But overall, pass. Here\'s the list, even with approximate time breakdown. I\'m feeling generous today."\n\nResult — The information goes to Milan. But if Milan weren\'t Nosferatu — the question would simply be closed without an answer.'
                }
              ]
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
                'Raiding player havens',
                'Attacking players during off-game time',
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
              ],
              listType: 'warning'
            },
            {
              subtitle: 'Metagaming ❌',
              list: [
                'Do not use player knowledge your character lacks',
                'Do not coordinate off-game without GM knowledge',
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
      hidden: true,
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
          a: 'We are tentatively expecting a cost of 40 euros.'
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
      subtitle: 'Городская Ролевая Игра.\nМистический детектив и экшн на основе Мира Тьмы.',
      details: {
        whenLabel: 'Когда',
        when: '11 - 15 Ноября 2026',
        whereLabel: 'Где',
        where: 'Нови-Сад',
        mgLabel: 'МГ',
        mg: 'Птица, Кайре, Тиль, Гриша и Макс Горин'
      },
      buttonRules: 'ЧИТАТЬ ПРАВИЛА',
      buttonJoin: 'ВСТУПИТЬ В ИГРУ',
    },
    pitch: {
      title: 'Последствия',
      context: 'Три года назад Камарилья отбила Нови-Сад у Шабаша.Война закончена, но город все еще помнит вкус крови.',
      role: 'Ты — Неонат. Вчерашний птенец или опытный хищник? Город полон возможностей для тех, кто готов платить цену.',
      genre: 'Детектив, экшн или мрачные интриги — ты сам выбираешь свой путь. Никаких рельс. Только твои решения, их последствия и реакция мира.',
      question: 'На что ты готов ради своей цели?',
      cta: 'ПОДАТЬ ЗАЯВКУ'
    },
    aboutPage: {
      title: 'Об Игре',
      intro: {
        title: 'Нови-Сад. 2026.',
        text: 'Город на Дунае, где старые мосты помнят больше, чем должны. Три года назад здесь была война. Камарилья во главе с Князем Будапешта выбила Шабаш. Баррикады разобрали, тела убрали, Маскарад восстановили. Теперь здесь правят Законы Традиций, и все относительно спокойно. Относительно.',
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
      video: {
        title: 'Смотри тизер',
        description: 'Короткое атмосферное видео к «VTM:Тени над Дунаем».',
        url: 'https://www.youtube.com/embed/BZgbzV9rcn4'
      },
      expectations: {
        title: 'Чего Ожидать',
        items: [
          'Песочница без рельс — ваши действия формируют историю',
          'Реактивный мир — NPC реагируют на ваши дела и бездействие',
          'Значимые выборы — каждое решение имеет последствия',
          'Экшн-ориентированная игра — 4 ночи живой игры в городе',
          'Атмосферные локации — бары, клубы, забросы, особняки',
          'Бой и Интриги — в зависимости от ваших решений',
          'Личные истории — ваш персонаж, ваши цели, ваш путь'
        ]
      },
      limitations: {
        title: 'Чего НЕ Ожидать',
        items: [
          'Макро-карт и сбора крышечек',
          'Свободного ритуализма — только по правилам',
          'Игроков-Старейшин — все играют Неонатов',
          'Сложных моделей — упрощенная механика',
          'Рейдов на убежища игроков — ваше личное пространство безопасно',
          'Гарантированного выживания — смерть возможна, но эта камарилья и тут не принято так'
        ]
      },
      roles: {
        title: 'Иерархия',
        npc: {
          title: 'Двор',
          subtitle: 'НЕИГРОВЫЕ ПЕРСОНАЖИ',
          list: 'Примогены, Сенешаль, Гарпия, Старейшины',
          desc: 'Эти могущественные фигуры — Игротехники. Они служат повествованию. Они не стремятся "победить" в игре, и не подыгрывают друзьям. У них есть триггеры, секреты и паттерны поведения, но они существуют, чтобы создавать фан для ВАШЕЙ истории.',
          quote: '"Убийство Старейшины требует большего, чем острый кол. Вам, вероятно, понадобится помощь других игроков, мощные артефакты или очень долгая ночь."'
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
          fledgling: 'Птенцы: 0-2 года (Свежие, еще привыкают к Голоду)',
          neonate: 'Неонаты: 2-20 лет (Основная категория игроков. Уже не птенец, еще не Анцилла)',
          max: 'Максимальный возраст вампира: 20 лет',
          maxReason: '(Старше = уже не Неонат, слишком силен для баланса игры)'
        },
        examples: {
          title: 'Примеры',
          items: [
             { text: 'Персонаж обращен в 25, прошло 1 год → Птенец', status: 'ok' },
             { text: 'Персонаж обращен в 30, прошло 5 лет → Неонат', status: 'ok' },
             { text: 'Персонаж обращен в 35, прошло 15 лет → Старший Неонат', status: 'ok' },
             { text: 'Персонаж обращен в 40, прошло 100 лет → Слишком стар (Анцилла)', status: 'fail' }
          ]
        },
        justification: {
          title: 'Почему такие лимиты?',
          items: [
            { title: 'Баланс', text: 'Старые вампиры слишком сильны и ломают дизайн игры.' },
            { title: 'Фокус', text: 'Игра про Неонатов, про тех, кто только начинает свой путь.' },
            { title: 'Актуальность', text: 'Вы — свидетели и участники недавних событий (война 3 года назад).' }
          ]
        }
      }
    },
    castingPage: {
      title: 'Сетка Ролей',
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
      recommendations: {
        question: 'Во что поиграть чтобы понять сеттинг?',
        games: ['Coteries of New York', 'Shadows of New York', 'VTM Bloodlines']
      },
      history: {
        title: 'Нови-Сад: Послевоенный',
        intro: 'Краткая История',
        timeline: [
          {
            year: 'До 2020-х',
            title: 'Меч Каина',
            description: 'Нови-Сад держал Шабаш. Город был одной из их балканских баз — тут обкатывали тактику против Камарильи, тут готовили кадры.'
          },
          {
            year: 'Осень 2023',
            title: 'Война за Город',
            description: 'Камарилья решила вычистить город. Князь Будапешта лично возглавил операцию. Месяц боёв — и Шабаш сломлен. Кто-то погиб, кто-то отступил на юг, а кто-то... просто исчез с радаров.'
          },
          {
            year: 'Зима 2023',
            title: 'Домен Камарильи',
            description: 'Нови-Сад перешёл под контроль Камарильи. Князь Будапешта назначил Князем своего птенца. Теперь его задача — держать город и не дать старым врагам вернуться..'
          },
          {
            year: '2024-2025',
            title: 'Наведение порядка',
            description: 'Новый Шериф взялся за дело всерьёз. Традиции ввели, Маскарад восстановили после военного беспредела, остатки Шабаша повыловили. К середине 2025-го в город начали подтягиваться Неонаты из соседних доменов — молодняк, который хочет урвать своё в новом месте.'
          },
          {
            year: 'Ноябрь 2026',
            title: 'Мы здесь',
            description: 'Вроде как утряслось. Иерархия работает, Элизиум функционирует, правила соблюдаются. Но не всё чисто. На окраинах шастают странные банды. Иногда находят трупы с узнаваемым почерком. Есть слухи, что некоторые "новые" Камарильцы слишком хорошо знают ритуалы Шабаша. Старые враги не забывают обид.'
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
        ]
      },
      traditions: {
        title: 'Шесть Традиций',
        intro: 'Вампиры Камарильи клянутся соблюдать шесть Традиций Каина — законы, которые Каин якобы завещал своим потомкам. Как и другие законы, Традиции часто игнорируются, искажаются или откровенно нарушаются.',
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
            description: 'Клан противоречий. Клан неистовых, не признающих авторитетов вампиров, провозглашающих свободу от законов общества! Всех Бруха объединяет страсть. Они чувствуют глубоко — это их сила и их слабость. Ужасающие в гневе, опасные стратеги в спокойствии.',
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
            description: 'Клан одиноких ловких бродяг, предпочитающих дикую природу городам. Им комфортно в диких местах, вдали от городской политики. Многие — бродяги. Однако война привела некоторых в город — защищать территорию или просто потому, что бежать было некуда. Редки в Нови-Саде, обычно держатся окраин. (Не покинули Камарилью в 1998 году)',
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
            description: 'Считают себя правителями общества вампиров. Большинство Князей — Вентру. Они контролируют, организуют и управляют. Они ценят порядок, традиции и стабильность. Они привыкли командовать — и обычно хороши в этом. Но их высокомерие — их слабость.',
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
            definition: 'Князь (Правитель), Примоген (Совет), Шериф (Исполнитель), Гарпии (Арбитры Статуса), Бич (Охотник на чужаков). Вы — Неонат в самом низу.'
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
          'События V5 (Дневник Джихада Беккета, уход Старейшин, Вторая Инквизиция, Гагрелы вышли из Камарильи) НЕ произошли.',
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
      warning: {
        title: 'Правила в разработке',
        text: 'Правила еще в разработке, но вы можете увидеть стадию нашей работы и дать обратную связь. Правила по экономике и услугам пока в разработке.'
      },
      sections: [
        {
          id: 'general',
          title: 'Общие Принципы',
          icon: 'scroll',
          content: [
            {
              text: 'Спасибо мастерской группе Ростовских VTM и всем участникам, которые помогали в разработке и тестировании правил. Мы принимаем обратную связь, особенно предложения к улучшению правил. В нашей игре самое важное это игра, просим вас соблюдать правила и уважать друг друга.',
              list: [
                'Игровое Время: Вечера после заката. Игровое время идет от заката до рассвета. Днем персонажи спят/прячутся — вне игры.',
                'Игровой Период: 4 вечера (11-15 Ноября 2026).',
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
              subtitle: 'Базовые принципы',
              text: 'Правила боёвки стандартные, но обновите их в голове. Используем маркер «пойдем выйдем», чтобы увести конфликт из людных мест.'
            },
            {
              subtitle: 'Основные правила',
              list: [
                'У каждого игрока 3 хита; некоторые персонажи могут иметь дополнительные.',
                'Максимальное количество хитов большинства игроков — 5, если не указано иного в дисциплине (големы сеттитов и форма Зуло тзимицу).',
                'Зона поражения: туловище и конечности. Бить нельзя по голове, кистям, стопам и паху.',
                'Повреждения наносятся только некрашеными Nerf-бластерами или мягким оружием из протектора, маркированным как «предмет в игре».',
                'Соблюдайте технику безопасности. Чем менее антуражно выглядит оружие, тем меньше проблем на улицах.',
                'Без Стремительности нельзя использовать два оружия одновременно.',
                'После боёвки перечитайте правила дисциплин — они связаны.'
              ]
            },
            {
              subtitle: 'Получение ранений',
              text: 'Каждое попадание игровым оружием в зону поражения снимает 1 хит и присваивает статус ранения.',
              list: [
                'Лёгкое — нет игротехнических ограничений. Приветствуется отыгрыш ранения.',
                'Среднее — 1 хит остался. Передвижение только шагом (если нет Стремительности или подходящего усиления); при помощи здорового сородича может бежать.',
                'Тяжёлое — ноль хитов. Самостоятельное движение запрещено. Переносить тяжелораненого можно только вдвоем, если нет Мощи или подходящего артефакта. Можно разговаривать. Следующий удар погружает персонажа в Торпор.',
                'Торпор — это состояние бессознательное, в нем нельзя видеть, слышать и двигаться. Выйти из него можно только при использовании блад пакета.'
              ]
            },
            {
              subtitle: 'Поведение при ранении',
              list: [
                'Обязаны имитировать боль (стон, крики и т. д.).',
                'По завершении боевки вампир и гуль, если не впали в тяжран/торпор, восстанавливают все хиты автоматически, если не голодны.',
                'Потеря третьего хита и тяжёлое ранение блокируют восстановление без блад пакета.',
                'Гуля можно вывести из тяжрана, напоив кровью вампира или проведя операцию.',
                'Вампиры выходят из торпора по ранению по прошествию времени, определяемого уровнем человечности/пути.'
              ]
            },
            {
              subtitle: 'Смерть и добивание',
              list: [
                'Потеря последнего хита переводит в тяжёлое ранение, затем в торпор если был на несен еще один удар.',
                'Персонажа в торпоре (вампир) или тяжелом ранении (человек/гуль) можно добить. Требуется громко и четко сказать «Добиваю» и отыграть это оружием или когтями.',
                'Убийство Сородича Камарильи — прямое нарушение Традиции Уничтожения, если не объявлена Кровавая Охота.',
                'Условия смерти: Вампир в торпоре умирает, если не будет транспортирован в безопасное место к концу ночи. Человек — если в течение часа не получил становление/гуление.',
                'После смерти игрок 10 минут отыгрывает труп (можно дольше ради сцены).',
                'В это время можно сообщить другим о характере ранений.',
                'Затем связывайтесь с Мастерами для получения новой роли.'
              ]
            },
            {
              subtitle: 'Физическое взаимодействие',
              listType: 'warning',
              list: [
                'Запрещены приёмы борьбы и любое реальное насилие.',
                'Любой контакт отыгрывайте только по взаимному согласию и чёткому пониманию действий.',
                'Отыгрывайте бережно; убежища игроков без договорённости не штурмуем.'
              ]
            },
            {
              subtitle: 'Процесс нападения («пойдем выйдем»)',
              list: [
                'В людном месте нападающий касается жертвы и произносит «Пойдем выйдем». В безлюдных местах можно нападать сразу.',
                'Жертва может попытаться решить конфликт разговором, но нападающий вправе повторить маркер и настоять.',
                'Жертва выбирает: сдаться (следовать за нападающим и принять обыск/ранение/смерть) или принять бой и найти место для отыгрыша.'
              ]
            },
            {
              subtitle: 'Маркер «Пойдем выйдем»',
              list: [
                'Если услышали фразу и почувствовали руку на плече — это удар.',
                'Первый маркер даёт шанс уговорить нападающего не бить.',
                'При повторном маркере нужно пойти за нападающим к безопасному месту для боёвки или сдаться.'
              ]
            },
            {
              subtitle: 'Механика ударов',
              list: [
                'Для холодного оружия и когтей попадание — четкое амплитудное касание поражаемой зоны, с замахом (кистевые удары, «швейная машинка» запрещена).',
                'Для кола — четкое касание грудной клетки или спины РУКОЙ, в которой зажат кол (а не самим колом).'
              ]
            },
            {
              subtitle: 'Колирование',
              list: [
                'Кол вампиров обездвиживает. В таком состоянии вампир находится до тех пор, пока не вытащат кол.',
                'В состоянии «обездвижен» персонаж не может совершать никаких игровых действий.',
                'Если вы никак не взаимодействуете с колированным персонажем больше часа, он может написать МГ и его очень вероятно ждет внезапное игротехническое спасение.',
                'Просим использовать кол для игры, а не для того чтобы до конца ночи запихать соперника в шкаф.',
                'Персонажи, обладающие вторым уровнем дисциплины Стремительность или вторым уровнем дисциплины Стойкость, иммунны к огнестрелу (подробности в правилах по дисциплинам).'
              ]
            }
          ]
        },
        {
          id: 'hunger',
          title: 'Правила по Голоду',
          icon: 'droplet',
          content: [
            {
              text: 'На начало каждой ночи вампир просыпается Голодным. Голодный вампир серьезно ограничен в своих возможностях. Чтобы исправить это, ему нужно один раз за ночь сообщить мастеру и указать как он утоляет Голод, выбрав один из способов.'
            },
            {
              subtitle: 'Голодный вампир:',
              list: [
                'Не может использовать Навыки и активируемые Дисциплины',
                'Не восстанавливает хиты со временем после ранения (и вообще никак не может их восстановить)',
                'Не может поить своей кровью другого вампира для создания Уз Крови и не может давать Становления'
              ],
              listType: 'warning'
            },
            {
              text: 'Голодный вампир ведет себя соответственно -- он раздражен, нервничает, говорит о еде и т.п. Тут мы рассчитываем на отыгрыш игроков.'
            },
            {
              text: 'В редких случая вампир может впасть в состояние Голода той же ночью ещё раз (если его вывели из торпора, он применял специфичные дисциплины или мастер сказал ему об этом) -- тогда придется находить пропитание заново.'
            },
            {
              subtitle: 'ВАЖНО',
              text: 'Если вампир к моменту наступления утра остаётся голоден, то на следующую ночь при пробуждении с ним ультимативно случится что-то плохое (например, нарушит Маскарад, или задолжает услугу Крови за бладпак, или убьет человека). Не доводите до такой ситуации.',
              listType: 'warning'
            },
            {
              subtitle: 'Способы питания',
              subsections: [
                {
                  title: 'Стадо',
                  text: 'Самый простой способ, есть только у Тореадоров и Вентру. Позволяет два раза за ночь попитаться самому или угостить друзей.'
                },
                {
                  title: 'Бладпаки',
                  text: 'Медицинские пакеты с кровью с кодом. Сообщение мастеру: "Вася выпил пакет с кодом Х14Р". Можно купить у NPC или найти. Остерегайтесь подделок!'
                },
                {
                  title: 'Крысы',
                  text: 'Аналогичны пакетам, можно найти в городе. Могут иметь неприятные эффекты. Вентру не могут так питаться.'
                },
                {
                  title: 'Городская Охота',
                  text: 'Мастер дает задание - найти и сфотографировать человека с определенным описанием (молодой парень в джинсах, или старушка с пакетами). Сложность задания зависит от разных факторов (нарушение маскарада, принадлежность к клану вентру, крайние значения человечности и т.п.). Фото надо прислать мастеру по Голоду или, на крайний случай, показать ближайшему мастеру. Всегда можно прислать мастеру фото любого человека на улице и сказать, что ты охотишься не соблюдая Маскарад. Быстрое и простое питание! Помните, что нарушение маскарада плохо и для вас и для Домена, где вы это делаете.'
                },
                {
                  title: 'Диаблери',
                  text: 'Решает проблему с голодом на одну ночь и дает прирост дисциплин. См. подробнее правила по диаблери.'
                },
                {
                  title: 'Дисциплина «Анимализм»',
                  text: 'Приманивание животных. Можно угощать других (имя + совместное фото). Вентру не могут так питаться.'
                }
              ]
            }
          ]
        },
        {
          id: 'disciplines',
          title: 'Дисциплины',
          icon: 'flame',
          content: [
            {
              text: 'Существуют следующие типы дисциплин:',
              list: [
                'активируемые',
                'ментальные',
                'пассивные'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Правила применения',
              list: [
                'Каждая дисциплина имеет 2 уровня.',
                'Для активации объявите название способности и число точек; для ментальных дополнительно озвучьте свой статус; соблюдайте условия (касание, укрытие и т.п.), иначе способность не сработает.',
                'В бою каждую точку дисциплины можно применить не более одного раза (пассивы — без ограничений). Мвркеры обязаны быть видны на ивентах и боевках, в социальных сценах их можно не носить.',
                'Если напали внезапно, игрок может заявить свои дисциплины и показать маркер который в этот момент был не на нем. Дисциплина пасивная все еще с ним была.',
                'В состоянии "голоден" доступны только пассивные дисциплины и ритуалы.',
                'Ментальные дисциплины действуют только на цели не выше вашего статуса: Гуль → люди/гули; Неонат → люди/гули/неонаты; Анцила → люди/гули/неонаты/анцила; Старейшина → на всех.',
                'Цель выше статусом может сказать "блокирую, <статус>", и эффект не сработает (может и не раскрывать блок).',
                'Одним и тем же уровнем ментальной дисциплины по одной цели за ночь можно действовать максимум два раза.',
                'Пока эффект одной точки висит на цели, этой же точкой нельзя воздействовать на других; кастер может снять эффект по желанию.',
                'Пассивная дисциплина всегда активна на максимальной доступной точке.',
                'Для способностей "на цель" желательно называть игровое имя, чтобы цель понимала, что эффект применён к ней .',
                'Игроки, неверно объявляющие статус/уровень/условия, получают наказание от мастеров.',
                'У игротехов и мастеров могут быть более высокие уровни дисциплин чем описаны в правилах, например массовое воздействие. Мастера озвучат эффект.',
                'Неклановые дисциплины из списка ниже нельзя брать на старте; их можно получить только через диаблери.'
              ]
            },
             {
              text: 'Маркер Затемнения  ОЧЕНЬ Высокого уровня! Не доступен игрокам!! Используется мастерами и игротехами. Ваше 2 прорицание его не пробивает!',
              list: [
                'Маркер - белая светящаяся гирлянда на голове (будет похожа на венок).',
                'В случае метаигровых вопросов можно обращаться к людям с этим маркером. "Могу ли я взять этот предмет?", "Могу ли я применить на это такую дисциплину?" и т.д. Как персонажи вы его не видите, если маркер будет выключен - с этого момента вы видите "кого-то". Если гирлянда включилась - этот "кто-то" исчез.'
              ], 
              listType: 'bullet'
            },
            {
              subtitle: 'Распределение дисциплин по статусу',
              list: [
                'Неонат: одна клановая 1 уровня и одна клановая 2 уровня, либо все три клановые по 1.',
                'Анцила: одна клановая 2 уровня, две клановые 1 уровня и одна внеклановая 1 уровня.',
                'Базовая раскидка может быть изменена по сеттингу секты.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Клановые дисциплины',
              list: [
                'Вентру: Доминирование, Стойкость, Присутствие.',
                'Тремер: Тауматургия, Прорицание, Доминирование.',
                'Тореадор: Присутствие, Прорицание, Стремительность.',
                'Малкавиан: Помешательство, Прорицание, Затемнение.',
                'Бруха: Мощь, Стремительность, Присутствие.',
                'Носферату: Затемнение, Анимализм, Мощь.',
                'Гангрел (сельский): Анимализм, Стойкость, Превращение.',
                'Гангрел (городской): Стремительность, Затемнение, Превращение.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Дисциплины',
              subsections: [
                {
                  title: 'Затемнение (активируемая)',
                  text: 'Невидимость: видимы только для персонажей с Прорицанием; огнестрел использовать нельзя; атаки, применение способностей или заметный шум снимают эффект.',
                  list: [
                    'Маркер: белая лента через плечо. Без маркера дисциплина не действует.',
                    'Активация: надеть ленту и заявить. Снять можно в любой момент; повторно включить после боевой ситуации, но не раньше чем через минуту. Войти в Затемнение прямо во время активной атаки/защиты нельзя.',
                    'Незримое присутствие (1 точка): нужно скрыться из поля зрения. Передвижение шагом; шум, столкновения, падение предметов делают видимым. Не видно на камерах.',
                    {
                      text: 'Внезапное исчезновение (2 точки): можно исчезнуть на глазах. Можно говорить и двигаться, не боясь снять эффект, остальное как у Незримого присутствия. Маркер: см. изображение.',
                      image: '/white-ribbon.png'
                    },
                    'Маска тысячи лиц это дополнительный эффект для Внезапного исчезновения - Носферату похож на человека, его появление не нарушает Маскарад. Без Маски Тысячи Лиц не стоит ездить на такси с открытм лицом, если не хотите нарушать Традиции.'
                  ]
                },
                {
                  title: 'Мощь (пассивная)',
                  text: 'Физическое превосходство и удержание.',
                  list: [
                    'Мощь позволяет использовать Удержание на персонажей с меньшим значением мощи. Игрок кладет жертве руку на плечо, говорит «удержание, Мощь Х», где Х — значение его Мощи. Если значение Мощи у нападающего выше, чем у жертвы, жертва обездвижена, но может применять дисциплины. Если у жертвы Мощь выше или равна- отпустите ее плечо.',
                    'Удержание не используется в бою.',
                    '1 точка: Персонаж обретает физическую силу, превосходящую возможности смертного. Это позволяет переносить обездвиженных игроков (включая игроков в тяжране, торпоре и захвате) «по игре» бегом. Обездвиженный игрок может передвигаться самостоятельно, пока держит персонажа с Мощью за руку (не имеет права сопротивляться «переносу»). Позволяет атаковать колом персонажей с первой Стойкостью.',
                    '2 точки (красная лента на запястье): Позволяет атаковать колом персонажей со 2 Стойкостью + эффект Мощи 1. Удар оружием ближнего боя снимает два хита. Необходим видимый маркер - красная лента, повязанная на руку.'
                  ]
                }, 
                {
                  title: 'Анимализм (активируемая)',
                  text: 'Связь с Зверем.',
                  list: [
                    'Шепот Зверя (1 точка): раз за ночь снимает состояние "Голод" себе или другому (кроме Вентру; нужен контакт для цели). Шепот зверя позволяет получить бонус к расследованию в виде одного ответа на вопрос расследования. Если персонаж применяет Шепот Зверя для расследования, то считается, что он отправлял своих животных для добычи информации. Переводит в состояние Голожден.',
                    'Управление зверем (2 точки, ментальная для атаки): снимает или вызывает безумие/ротшрек. Линия зрения, без контакта. Может быть заблокировано человечностью/Путём 3+ или по правилам ментальных дисциплин. Не более 2 применений за ночь и 1 на цель за ночь.'
                  ]
                },
                {
                  title: 'Стойкость (пассивная)',
                  text: 'Повышает живучесть.',
                  list: [
                    '1 точка: +1 хит, иммунитет к атаке колом от персонажей без Мощи.',
                    '2 точки: +2 хита, иммунитет к огнестрелу (рекомендуется красный маркер на голове), иммунитет к колу от Мощи 1.'
                  ]
                },
                {
                  title: 'Доминирование (ментальная)',
                  text: 'Внимание! Эффекты дисциплины Доминирование перекрывают на время своего действия эффект воздействия дисциплины Присутствие. Жертва воспринимает приказы Доминирования как свои собственные желания и не понимает, что на неё воздействовали дисциплиной даже после прекращения действия доминирования. Рекомендация: пожалуйста завуалируйте применение дисциплины. Делайте это красиво!',
                  list: [
                    'Гипноз (1 точка, касание и зрительный контакт, вне боя): Вне боевой ситуации игрок, касаясь цели ладонью, произносит команду, которой требуется подчиниться немедленно. Приказ должен подразумевать разовое действие в течение ближайших 24 часов,  быть четким и однозначно трактуемым — отдай мне все свои деньги, напади на него и т.д.. Цель обязана совершить это действие, однако если жертва видит, что ее собираются атаковать, действие Доминирования тут же прекращается. Игроку нельзя приказать совершить нечто, способное причинить ему прямой вред (не защищаться, умереть). Кроме того можно задать триггер для активации действия: “если я скажу “конь”, “когда он возьмет предмет”. и т.д. Триггер может быть активирован один раз в течение игровой ночи. Выполнение приказа, направленного на однообразное действие, протяженное во времени (замри, бегай, отжимайся, закрой глаза) длится в течение 5 минут и может быть прервано по тем же правилам, что и любой другой приказ этой способности. При помощи этой способности можно потребовать от жертвы рассказать какую-либо информацию, но один заданный вопрос уже считается полноценной командой, подразумевающей разовое действие. Убей Князя можно считать самоубийственным приказом.',
                    'Забвение (2 точки, касание и зрительный контакт, вне боя): После активации жертва не сопротивляется действию Забвения. В течение 5 минут вы можете читать воспоминания человека, задавая вопросы, на которые тот обязан отвечать правдиво и максимально подробно (запрещается лгать или отвечать уклончиво). Вы можете стирать воспоминания событий нынешней дня/ночи, оставляя вместо них амнезию, либо надиктовав ложные воспоминания. Под понятие «воспоминания» попадают исключительно факты – что видел, слышал, делал, но не мысли и планы жертвы. Нельзя изменить чувства, цели и взгляды жертвы. Если жертва вас ненавидит, то нельзя ей внушить, что за последнюю ночь она вас внезапно полюбила, если жертва планирует стать кем-то значимым, нельзя внушить ей, что ровно час назад она передумала и т.д. Жертва не помнит, что находилась под действием Забвения. Если жертву во время применения на неё дисциплины пытаются убить или причинить ей какой-либо вред, действие дисциплины прекращается, но все уже продиктованные воспоминания остаются в памяти жертвы. Цель не сможет добровольно закончить разговор до истечения 5 минут после использования дисциплины.'
                  ] 
                },
                {
                  title: 'Прорицание (пассивная/ментальная)',
                  text: 'Позволяет видеть скрытое и блокировать Затемнение соответственно вашему уровню.',
                  list: [
                    'Узреть незримое (1 точка, пассивная): видит существ в Затемнении/невидимости, призраков, иллюзии; позволяет заметить скрытое присутствие.',
                    'Телепатия (2 точки, ментальная, вне боя): вести диалог не менее минуты. Узнаёт мысли/планы; цель не может лгать, но может юлить. Беседа длится 5 минут, цель не может уйти раньше. Если причинён вред — эффект прекращается. Можно считывать остаточные ауры предметов (информацию выдаёт мастер). Цель не сможет добровольно закончить разговор до истечения 5 минут после использования дисциплины. Жертва не помнит о воздействии дисциплины. Если жертву во время применения на неё дисциплины пытаются убить или причинить ей какой-либо вред – действие дисциплины прекращается. Человек под телепатией не может напасть на телепатирующего. Если вы владеете дисциплиной, вы все равно ей поддаетесь, но помните что на вас воздейстовали как то ментально, но не помните кто. Телепатию не найти телепатией. Кроме того, Прорицание на этом уровне позволяет считывать остаточные ауры с предметов. В случае игрового предмета можно получить информацию у мастера о событиях, происходивших с этим предметом.'
                  ]
                },
                {
                  title: 'Присутствие (ментальная)',
                  text: 'Эмоциональное подчинение.',
                  list: [
                    'Восторг (1 точка, касание, вне боя): 2 часа цель — добровольный слуга в зоне прямой видимости до 50 м, выполняет приказы без прямого физического вреда. Не может нарушать Третьи Узы Крови. Опасный приказ можно игнорировать, предупредив. Жертва не помнит эффекта, но может догадаться.',
                    'Призыв (2 точки): можно призвать любого персонажа, увиденного этой ночью, на любое расстояние. Цель обязана как можно быстрее прийти не создавай лишних подозрений у друзей, не подвергая себя опасности и не совершая самоубийственные действия; Призыв заканчивается после того как жертыва подошла на 3 метра к призывающему или с нападаением призывающего на жертву. Одновременно держится один призыв; можно отменить. Второй призыв от другого источника не сработает. Если сцена в людном месте — мастера/игроки могут перенести её по правилу "Пойдем выйдем".'
                  ]
                },
                {
                  title: 'Стремительность (пассивная/активируемая)',
                  text: 'Сверхскорость.',
                  list: [
                    '1 точка: пассивный эффект - можно использовать оружие в каждой руке. Активный эффект — объявить "Стремительность 1" и выйти из боя; догнать может только персонаж со Стремительностью 1 по жизни, персонаж со Стремительностью 2 - автоматически догоняет, тоже объявив дисциплину. ',
                    '2 точки: пассивный эффект - иммунитет к огнестрелу (маркер синяя лента на голове). Активный эффект — "Стремительность 2"; догнать может только Стремительность 2.'
                  ]
                },
                {
                  title: 'Тауматургия — Путь крови (активируемая)',
                  text: 'Манипуляция кровью.',
                  list: [
                    'Вкус крови (1 точка, нужна кровь цели): определяет статус, клан и раскидку дисциплин. Успех определяет мастер. Не создавайте Узы Крови.',
                    'Сила крови (2 точки, касание): до конца ночи повышает статус выбранного вампира (или себя) на +1. Количество дисциплин не растёт, но ментальные работают по новому статусу. Люди не становятся гулями, гули — не неонатами, старейшины остаются старейшинами.'
                  ]
                },
                {
                  title: 'Тауматургия — Путь привлечения огней (активируемая)',
                  text: 'Снимает ротшрек с колдуна; его файерболы не вызывают ротшрек у других.',
                  list: [
                    'Пламя (1 точка): антуражный красный мяч как файербол (игрок самостоятельно обеспечивает себя фаерболами), при попадании 2 хита. 2 файербола за боестолкновение.',
                    'Пожар (2 точки): даёт тот же эффект, но 4 файербола за боестолкновение.' 
                  ]
                },
                {
                  title: 'Превращение (активируемая)',
                  text: 'Звериные формы.',
                  list: [
                    'Когти (1 точка, надеть перчатки-когти): держатся до рассвета или деактивации. Удар снимает 1 хит (бонусы от Мощи добавляются). Нельзя использовать другое оружие, но можно блокировать. Можно атаковать двумя руками без Стремительности.',
                    'Форма тумана (2 точки): белая ткань 1x1.5 м на плечи. Нематериален, иммунен к физическому урону и дисциплинам, кроме Призыва и Помешательства; уязвим к тауматургии, солнцу и огню (включая путь огней). Нельзя говорить, применять дисциплины или взаимодействовать физически; движение только шагом; можно входить/выходить в помещения (двери открывают по жизни). Длительность 1 час, кулдаун 30 минут. Бонус второй точки - когти наносят 2 хита.'
                  ]
                },
                {
                  title: 'Помешательство (ментальная)',
                  text: 'Работа с безумием.',
                  list: [
                    'Глаза Хаоса (1 точка, видеть цель, вне боя): Игрок получает возможность отслеживать узоры души цели. Можно определить клан персонажа, психозы, диаблери, уровень человечности или пути просветления и в течение ночи от мастера получить информацию о местонахождении и действиях объекта. Любая полученная информация может быть не всегда верной. Успешность действия зависит от уровня помешательства и определяется мастером. Единовременно можно отслеживать только одного персонажа.  Кулдаун Глаз Хаоса - час с момента деактивации.',
                    'Абсолютное Безумие (2 точки, видеть цель):Игрок извлекает сумасшествие из самых укромных уголков разума жертвы, сконцентрировав его во всепоглощающую волну безумия. Жертва получает 3 случайных психоза, выбирает 1 из них и обязана 3 часа действовать полностью в соответствии с ними, в ущерб всему остальному: здравому смыслу, интересам котерии и даже собственной безопасности. Игрок знает, какие именно психозы получает жертва. Использовать эту способность можно не более 2 раз за ночь, при этом на одного персонажа она подействует лишь один раз за ночь.',
                    'Возможные психозы: кровавая булимия; анатидаефобия; агорафобия; отвращение к крови; акрофобия; провалы в памяти; спектрофобия; фиксация на предмете; паранойя; синдром Туретта; андрофобия; библиомания; синдром Фреголи; номофобия; шизофрения; иные от мастера.'
                  ]
                }
              ]
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
              text: 'Человечность разделена на 5 пунктов. Большая часть игроков будет начинать игру с 3-4 значением человечности. Уронить человечность легко, поднять тяжело. Время оценки — ночь.',
            },
            {
              subtitle: 'Грехи и Свойства',
              text: 'Более высокое значение Человечности предполагает «следование» всем предыдущим грехам. При совершении греха может произойти падение значения.',
              subsections: [
                {
                  title: 'Уровень 5 (Святой)',
                  list: [
                    'Грех: Не причинять вред другому, даже в случае самообороны.',
                    'Просыпаетесь в 20:00.',
                    'Сложность питания: Уменьшена.',
                    'Время торпора: 0,5 часа.'
                  ]
                },
                {
                  title: 'Уровень 4',
                  list: [
                    'Грех: Совершение насилия — это норма. Потасовка без убийств. Пытки без удовольствия. Применение ментальных дисциплин (Доминирование\\Присутствие).',
                    'Просыпаетесь в 20:30.',
                    'Сложность питания: Уменьшена.'
                  ]
                },
                {
                  title: 'Уровень 3',
                  list: [
                    'Грех: Торпор сородича и/или убийство смертного при самообороне. Нарушение личного морального кодекса. Пытки с удовольствием.',
                    'Просыпаетесь в 21:00.',
                    'Время торпора: 1 час.'
                  ]
                },
                {
                  title: 'Уровень 2',
                  list: [
                    'Грех: Смерть сородича или смертного не в случае самообороны. Диаблери.',
                    'Просыпаетесь в 21:30.',
                    'Сложность питания: Увеличена.'
                  ]
                },
                {
                  title: 'Уровень 1',
                  list: [
                    'Грех: Ниже уже некуда.',
                    'Просыпаетесь в 22:00.',
                    'Время торпора: 2 часа.',
                    'Сложность питания: Увеличена.'
                  ]
                }
              ]
            },
            {
              subtitle: 'Дополнительные эффекты',
              list: [
                'Защита от Ротшрека: Человечность 3 и выше дает защиту от сверхъестественного ужаса перед огнем.',
                'Защита от Анимализма: Человечность 3 и выше позволяет блокировать воздействие способности «Управление зверем».',
                'Обнаружение: уровень Человечности может быть узнан с помощью дисциплины «Глаза Хаоса» или Прорицания (аура).',
                'Диаблери: совершение диаблери навсегда снижает Человечность и оставляет черные полосы в ауре.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Безумие (Frenzy)',
              text: 'Вампир, впавший в состояние френзи, теряет контроль над Зверем. Триггеры: Голод, Ярость.',
              list: [
                'Обязан атаковать любого ближайшего вампира или человека, ввести его в торпор/тяжран и выпить его кровь.',
                'Можно пользоваться только оружием ближнего боя.',
                'Нельзя использовать никакие дисциплины, кроме Мощи, Стойкости и Стремительности.',
                'Неуязвим к ментальным дисциплинам; все ранее висевшие ментальные воздействия спадают.',
                'Состояние спадает, когда вампир попитается из жертвы или когда впадет в торпор.'
              ]
            },
            {
              subtitle: 'Ротшрек (Rotschreck)',
              text: 'Состояние сверхъестественного ужаса перед открытым огнем (любой огонь, крупнее пламени спички/зажигалки).',
              list: [
                'Любой вампир, подошедший к открытому огню, впадает в неконтролируемый ужас и должен убежать от источника огня на расстояние около 10 метров.',
                'Иммунитет имеют тауматурги с путем Привлечения Огней, некоторые шабашиты и вампиры с человечностью 3 или выше (именно человечностью, не путем).'
              ]
            }
          ]
        },
        {
          id: 'blood',
          title: 'Кровь и Узы',
          icon: 'droplet',
          content: [
            {
              subtitle: 'Узы крови',
              text: 'Любой вампир, испивший крови другого вампира, испытывает на себе эффект Уз Крови.',
              list: [
                '1 Глоток — Персонаж чувствует приязнь к тому, чьей крови он испил.',
                '2 Глотка — Персонаж чувствует любовь и сексуальное влечение к тому, чьей крови он испил. Но персонаж все же дорожит своей жизнью, может хранить секреты и не выполнять приказы напрямую влияющие на возможность умереть.',
                '3 Глотка — Персонаж становится рабом того, чей крови он испил. Он расскажет и выполнит все, что прямо не угрожает его жизни.'
              ]
            },
            {
              text: 'В течение одной ночи можно повысить уровень уз только на один шаг. Иногда вампиры добровольно могут испить крови друг друга для усиления эмоциональной связи или обещания взаимной верности. Самый простой способ посадить Сородича на узы — отпоить его своей кровью в состоянии торпора.',
            },
            {
              subtitle: 'Слухи',
              list: [
                'Ходят слухи, что вампиры Шабаша умеют разрывать Узы Крови.',
                'Говорят, что Тремеры также могут знать способы освободить от Уз.'
              ]
            },
            {
              subtitle: 'Диаблери',
              text: 'В Камарилье Диаблери другого Сородича считается тяжким преступлением. Оно выявляется, как правило, Прорицанием; черные полосы в ауре непременно вызовут вопросы у Шерифа.',
              list: [
                'Поглощение сути: Совершая «Атаку испитием», вампир может поглотить не только душу, но и саму суть жертвы, забрав его способности и изъяны. После совершения диаблери игрок делает звонок мастеру, и мастер сообщает ему какие плюсы и минусы он получил от диаблери, а также вносит изменения в его ауру.',
                'Последствия: Совершив диаблери, персонаж через 5 минут впадает в транс и лежит в состоянии, аналогичном состоянию торпор, обездвиженный в течение получаса.',
                'Отыгрыш: Диаблери — это абсолютное нарушение всех законов, поглощение самой души. Когда хищник выпивает последние капли крови жертвы, её сущность насильственно вырывается и сливается с кровью диаблериста, оставляя после себя лишь холодный пепел и запятнанную ауру.'
              ]
            },
            {
              subtitle: 'Пополнение крови',
              text: 'Вы можете пополнить запас крови, питаясь игротехническими персонажами (NPC). Отыгрыш сцены питания с NPC позволяет восстановить статус Голода до «Сыт».',
              list: [
                'Атака испитием: Любой вампир может провести «Атаку испитием», используя одурманивающее свойство «Поцелуя вампира» (жертве процесс приятен). Атаку испитием можно провести только на обездвиженных персонажей. Для этого он подходит к жертве, обнимает за плечи, говорит: «Укус» и начинает считать вслух до десяти. Вампиры могут воспользоваться дисциплинами, которыми можно пользоваться в обездвиженном состоянии. Если испитие не прервано, через 10 секунд жертва падает в торпор. Если атакующий испитием отпускает жертву до истечения 10 секунд, хиты у нее не снимаются, но при этом жертва получает состояние “голоден”.'
              ]
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
//            {
//              subtitle: 'Сферы Влияния',
//              text: 'Бюрократия, Церковь, Финансы, Здравоохранение, Высшее Общество, Промышленность, Закон, Медиа, Оккультизм, Полиция, Политика, Криминал, Университет, Улица, Транспорт.',
//              listType: 'bullet'
//            }
          ]
        },
        {
          id: 'investigations',
          title: 'Правила по Инфоброкеру',
          icon: 'message-square',
          content: [
            {
              text: 'Известно, что в городе есть инфоброкер. Он существует в сети, под ником Gutter_Sage. Слухи говорят, что он Носферату и что он старше Тени, а другие наоборот — что она его сир. Так или иначе известно, что Gutter_Sage никогда не показывается на публике. Но все знают, что ему можно написать вопрос. И получить ответ.'
            },
            {
              subtitle: 'Отношение к Носферату',
              text: 'Говорят, он более доброжелателен к молодыми Носферату. Может даже простить им “я не знаю” при ответе на один из своих вопросов. Или даже ошибку. Остальным — нет.\n\nПисать можно ему сколько угодно, но пока не будет закрыт один ваш запрос (вы получили свои 3-5 вопросов и не ответили на них), на следующий вопрос от вас он не ответит. Известны редкие случаи, когда Инфоброкер не сможет ответить на ваш запрос. Он вам об этом скажет прямо, до того как начнет задавать свои.',
              list: [
                'Исключение из “1 неотвеченный запрос на неоната”: Носферату могут иметь 2 одновременных открытых запроса.'
              ],
              listType: 'check'
            },
            {
              subtitle: 'Принципы обмена',
              text: 'Gutter_Sage будет задавать вопросы в ответ. Чем сложнее по его мнению ответить на ваш вопрос, тем сложнее будут его встречные. Он — коллекционер информации. Его не интересуют сфабрикованные на коленке слухи, кровь, деньги и, как правило, Услуги. В плане услуг известны исключения, он вам об этом сам сообщит.',
              list: [
                'Ожидает конкретные вопросы, сопровождаемые вашими гипотезами (от 1 до 3). Сейдж любит хорошие гипотезы, за них он готов закрыть глаза на некоторые неточности при ваших ответах.',
                'Склонен игнорировать закрытые вопросы (да-нет) и слишком общие запросы типа “Пришлите какой-нибудь компромат на Примогена Вентру”.',
                'Инфоброкер — не телепат. Он не ответит на вопрос, правда ли тот малк видит духов или не думает ли ваш товарищ подписать контракт с инфернальными силами.',
                'Но вот если спросить, не проводил ли ваш товарищ стремных ритуалов вчера до полуночи или не орал ли, что скоро Бафомет даст ему великих сил — это другой разговор.',
                'Спросить “Перечисли всех, с кем Князь встречался за последнюю неделю” тоже не прокатит, но можно брать вменяемый временной отрезок в пределах ночи, и лучше б еще и место указать. Вменяемость определит Gutter_Sage.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Механика и как это работает',
              text: 'Если вы зашли в тупик, не знаете, где искать кусок информации и считаете, что он вам нужен, или вы просто решили с другими неонатами в 4 утра посидеть и покопать про бурную молодость Примогена или вон того мутного неоната из другой котерии — пишите в Telegram Инфоброкеру.',
              list: [
                'Сообщение должно содержать: имя персонажа, клан, кратко то, что вам уже известно и то, что вы хотите узнать.',
                'Вопрос должен быть конкретным про место, Сородича или событие, отражать то, что вы уже накопали, вашу гипотезу (от 1 до 3).',
                'Мы призываем вас сохранять стиль общения вашего персонажа. У инфоброкера есть чувство юмора и он ценит креативность.',
                'Представляться чужим именем нельзя — запрос ему отправляется от имени того, кому принадлежит аккаунт.',
                'Если спрашиваете о персонаже, то потребуется минимум одна свежая фотография (сделанная на игре) этого персонажа. Фото должны быть разборчивыми — старый Носферату все понимает про ночную съемку, но должно быть понятно, кто это.'
              ],
              listType: 'warning'
            },
            {
              subtitle: 'Процесс получения информации',
              text: 'В ответ вам придет от 3 до 5 вопросов разной сложности. Базово 3 — при запросе легкой сложности. Секреты Примогенов или Капеллы Тремер обойдутся кратно дороже.',
              list: [
                'Умный и осторожный неонат по сложности вопросов может легко догадаться, что копает опасную тему, и отступить.',
                'Вопросы могут прийти не мгновенно (обычно в течение часа или двух, или в начале следующей ночи, если были заданы к утру).',
                'Вопросы будут о разных Сородичах, событиях или местах в городе, напрямую не связанных с объектом вопроса. Возможно, придется договариваться с другими неонатами.',
                'Среди Сородичей могут попадаться члены Совета и даже Князь. Мы советуем общаться с неонатами соответствующих кланов — примоген охотнее ответит соклановцу.',
                'Gutter_Sage не ответит на заданный повторно вопрос от одного и того же персонажа, если вы ответили неверно хотя бы на 1 (для Носферату — 2).',
                'Вопрос может быть повторно отправлен другим Сородичем. Обычно вопросы, на которые уже был получен верный ответ, Сейдж не задает снова.'
              ],
              listType: 'bullet'
            },
            {
              subtitle: 'Пример использования',
              subsections: [
                {
                  title: '1. Запрос Андрея (Бруха)',
                  text: 'Бруха Андрей подозревает, что примоген Вентру косвенно может быть причастен к исчезновению его соклановца и друга Данилы. Потому что Данила упомянул, что тот его зовет на разговор. Потом вернулся, какой-то смурной и на все распросы слился. А потом исчез.\n\nРазумеется, Камарилья не то место, где можно разбрасываться такими обвинениями просто так, и напрямую тоже не спросишь. Потому Андрей первым делом скрытно делает фотографию Примогена в Элизиуме. А потом идет еще делает фотографию здания, возле которого по его информации видели его друга Данилу незадолго до исчезновения — Отель Пупина.\n\nОн пишет сам:\n“Привет; Gutter_Sage. Я Андрей из клана Бруха. Недавно мой бро Данила из клана Гангрел пропал. Его последний раз видели возле отеля Пупин около 12 ночи. За пару дней до исчезновения он проболтался, что его зовет Примоген Вентру на разговор. И после разговора, но до исчезновения, ходил смурной и на все вопросы сливался.\n\nМои гипотезы:',
                  list: [
                    '1) Данила видел что-то возле “Пупина”, чего не должен был видеть.',
                    '2) ИЛИ Я не обвиняю, конечно, что Примоген завалил его лично, но считаю, что Данила мог столкнуться с кем-то, кто действует от его имени — или прикрывается этим именем.',
                    'Можешь сказать, кто из Сородичей крутился в ту ночь с 22 до 2 ночи возле отеля Пупин?'
                  ]
                },
                {
                  title: '2. Встречные вопросы Сейджа',
                  text: 'Сейдж отвечает: “Привет, братишка. Поехали:”',
                  list: [
                    '1. Кто самый любимый птенец Примогена Носферату Тени?',
                    '2. С кем общалась Бруха Валентина в заброшенном доме в полночь?',
                    '3. Что Тремеры делали в Лиманском Парке вчера в 10 вечера?'
                  ]
                },
                {
                  title: '3. Сбор ответов',
                  text: 'Андрей задумывается. Вопросы не сказать что бы сложные, кроме первого разве что. И их всего 3. То есть ни Князь, ни Совет, ни Регент тут не при чем, или просто не считают, что этот кусок информации стоит того, чтобы тратить значимые ресурсы на сокрытие.\n\nРасспросить Валентину будет легко, они кореша. К Тремерам он думает подкатить с простым предложением — он расскажет им честно, что этот вопрос нужен инфоброкеру. Если они помогут с этим вопросом, он перешлет им информацию от Сейджа про личностей возле отеля примогена Вентру. Скорее всего они не откажут, если там не было какого-то мега секретного колдунства.\n\nПро кто любимый птенец Тени он вообще без понятия. Он выясняет информацию у Валентины легко. Потом пишет или идет к одному из неонатов Тремер и они ему действительно готовы помочь, если он поделится результатом. Остался вопрос про птенца.\n\nОн находит в чайной, где часто собираются неонаты, Носферату Милана. Милан ржет над вопросом и уверен, что знает ответ. Говорит, что это он. Андрей как-то скептичен, он понимает, что если это неверно — Сейдж ему не простит ошибки и шанса задать этот вопрос лично у Андрея больше не будет. Он пытается развести Милана просто позвонить Тени и спросить, но Милан как-то не горит желанием, хоть и любимый птенец.\n\nВ итоге они договариваются, что если ответ верный — Андрей должен Милану Малую услугу. Если неверный — Милан отправит запрос Сейджу от своего имени.'
                },
                {
                  title: '4. Ответ и провал',
                  text: 'Андрей пишет сообщение-ответ инфоброкеру:',
                  list: [
                    '1) Милан из клана Носферату,',
                    '2) Валентина встречалась с Катариной из Клана Тореадор. Она сказала, что просто обменивались сплетнями. Но не думаю, что это правда — зачем обмениваться сплетнями в заброшеном доме.',
                    '3) Недавно на деревьях стали появляться царапины как от когтей, странной формы. Ходят слухи также, что там собираются Неоязычники — потому что люди находят на деревьях кровавые отметины. Они решили проверить. Они нашли несколько знаков, нарисованных человеческой кровью. И говорят, следы когтей странные — это не Сородич вероятно и вряд ли животное.'
                  ]
                },
                {
                  title: '5. Результат ошибки',
                  text: 'Через полчаса Андрею приходит ответ: “Один из ответов в корне неверен, юноша.”\n\nЭто все. Вопрос Андрея Инфоброкером закрыт. Андрей может написать ему другой вопрос, про другое место или событие/Сородича хоть немедленно. Но не тот, который его сейчас интересует больше всего и инфообмен по которому он уже завалил. Этот вопрос Андрей не сможет задать уже никогда.\n\nЗато этот же вопрос может написать другой Сородич. Например, Милан, из-за которого это и произошло.'
                },
                {
                  title: '6. Вторая попытка Милана',
                  text: 'Сердце Милана разбито тем, что он не самый любимый птенец, но часть сделки свою выполнять надо. Милан пишет :\n“Привет, босс. Я — Милан из клана Носферату. Тут Андрей (Бруха который) потерял своего другана — Данилу (из клана Гангрел). Его последний раз видели возле отеля Пупин около 12 ночи. За пару дней до исчезновения он говорил что его зовет Примоген Вентру чето там обсудить. Потом до исчезновения, ходил смурной и на распросы Андрею не ответил.\n\nГипотезы таковы, босс:\n1) Данила видел что-то возле “Пупина”, чего не должен был видеть.\n2) ИЛИ Я не обвиняю, конечно, что Примоген завалил его лично, но считаю, что Данила мог столкнуться а с кем-то, кто действует от его имени — или прикрывается этим именем.\n3) ИЛИ (Милан решил добавить свою) Кто-то хочет подставить Примогена Вентру этим исчезновением\n\nМожешь сказать, кто из Сородичей крутился в ту ночь с 22 до 2 ночи возле отеля Пупин?”'
                },
                {
                  title: '7. Новые вопросы',
                  text: 'Ему приходит ответ: “Привет, малой. Поехали:”',
                  list: [
                    '1) Куда и зачем этой ночью примерно с 20 уехал Шериф со своей котерией и что он там делал,',
                    '2) Назови бывшего или нынешнего любовника Регента Тремер Франчески Орсини,',
                    '3) Кто именно из Тореадор сопровождал своего Примогена позавчера перед Балом, и (опционально) был ли среди них тот, кто недавно конфликтовал с Бруха?'
                  ]
                },
                {
                  title: '8. Сбор информации',
                  text: 'Милан в целом дружен с Сородичем из Котерии Шерифа и ставит на то, что он эту информацию добудет. Андрей говорит, что не пойдет с вопросом к неонатом Тремер еще раз, он им и так инфу торчит, которую они щас добыть пытаются, еще за первую попытку. Но про конфликт с соклановцами Бруха готов выяснить.\n\nОни какое-то время собирают информацию и Милан пишет ответ. Он знает, что может завалить один вопрос без последствий, в остальных он вполне уверен.'
                },
                {
                  title: '9. Итог',
                  text: 'Милан пишет ответ:',
                  list: [
                    '1) Они ездили на окраины города. Заметать следы нарушения Маскарада. Там случилась небольшая стычка с лопатоголовыми. Вроде никого сильно не ранили. Нашли следы какого-то стремного ритуала. Теперь поехал консультироваться к Тремер.',
                    '2) Босс, ну за чтооо. Я хз. Примоген Тореадор?',
                    '3) Его сопровождала его чайлд Анна и приезжий из Венгрии Золтан. И да, Золтан недавно с Бруха поцапался.'
                  ]
                },
                {
                  title: '10. Финал',
                  text: 'Ответ приходит через час:\n“Один из ответов не верен, Милан. К тому же, прямо до зубовного скрежета банален. Можешь лучше. Но в целом, зачет. Лови список, даже с примерной раскладкой по времени. Я сегодня добрый.”\n\nИтог — Информация уходит Милану. Но был бы Милан не из Носферату — вопрос попросту закрылся без ответа.'
                }
              ]
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
                'Рейды на убежища игроков',
                'Нападение на игроков во внеигровое время',
                'Реальное насилие',
                'Читерство'
              ],
              listType: 'cross'
            },
            {
              subtitle: 'Игровые Ограничения ⚠️',
              list: [
                'Диаблери (Возможно, но с тяжелыми последствиями)',
                'Создание потомства (Только с разрешения Князя, нарушение = Окончательная Смерть)',
                'Нарушение Маскарада (Большие проблемы, если смертные узнают)',
                'Насилие в Элизиуме (Карается смертью)',
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
      hidden: true,
      description: "Игра длится от заката до рассвета. Личные интриги вечны, но Город требует вашей службы в определенные часы. Не пропускайте обязательные собрания.",
      adviceTitle: "Совет Хранителя",
      adviceText: "\"События могут быть адаптированы под вашу котерию или личную историю. Мы не злодеи; мы не потащим вас в бездну прямо перед рассветом... обычно. Но помните: Город не будет ждать, пока вы соберетесь.\"",
      adviceFooter: "* Уточняйте местоположение Элизиума у Гарпии.",
      items: [
        { time: 'Закат - 20:00', title: 'Пробуждение', description: 'Подъем. Сбор в Элизиуме. Обмен слухами и подготовка к ночи.', type: 'downtime' },
        { time: '20:00 - 22:00', title: 'Мандат Князя', description: 'Обязательные групповые события. Шериф или Примоген раздадут задачи. Отсутствие будет замечено.', type: 'mandatory' },
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
          a: 'Да, смерть возможна. Но мы не убиваем персонажей просто так — всегда есть способы избежать смерти, если ты играешь осторожно или находишь союзников.'
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
          a: 'Приедворительно, мы рассчитваем на стоимость 40 евро'
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
