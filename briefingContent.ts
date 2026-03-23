import { Language } from './types';

export interface BriefingSection {
  title: string;
  paragraphs: string[];
}

export interface BriefingContent {
  title: string;
  subtitle: string;
  warning: string;
  metadata: { label: string; value: string }[];
  lead: string;
  sections: BriefingSection[];
  outro: string;
  signature: string;
  footer: string;
  epigraph: string;
}

export const BRIEFING_CONTENT: Record<Language, BriefingContent> = {
  ru: {
    subtitle: 'Узел PETROVARADIN_FORTRESS // вводный брифинг для неонатов',
    warning: 'Читай. Запоминай. Не копируй.',
    metadata: [
      { label: 'Автор', value: 'Gutter_Sage' },
      { label: 'Узел', value: 'PETROVARADIN_FORTRESS' },
      { label: 'Доступ', value: 'НЕОНАТ+' },
      { label: 'Создан', value: '2026.08.XX' },
      { label: 'Класс', value: 'ОРИЕНТИРОВКА / БРИФИНГ' },
      { label: 'Шифрование', value: 'AES-256-NOS' },
      { label: 'Редакций', value: '4' }
    ],
    sections: [
      {
        title: 'Мир за пределами',
        paragraphs: [
          'Смертные научили свои машины запоминать лица. Москва, Лондон, Шанхай — в крупных городах Сородич не может выйти на улицу, не подарив свою физиономию какому-нибудь серверу. Старейшины, пережившие настоящую Инквизицию с кострами и крестами, гибнут потому, что парень с кофеином вместо крови заметил нестареющую аномалию в базе данных.',
          'Нови Сад, как и Балканы в целом, место, где камер мало, а бумажная бюрократия теряется между этажами так надёжно, будто ей за это платят. По нынешним временам это не отсталость, а единственная причина, по которой ты сейчас читаешь эти строки, а не горишь.',
          'Один знаменитый Малкавиан когда-то нашептал дату Геенны. Не случилось. Потому что истолковали неверно или изначально озвучили не тот год, кто знает. Будешь открыто говорить о конце света и в Элизиуме тебя поднимут на смех в лучшем случае. Будешь пытаться доказывать, тобой заинтересуются Архонты. Так что мой совет: считай конец света сказкой, но на всякий случай не строй планов на вечность. Никто из нас не должен.'
        ]
      },
      {
        title: '2022. Как мы здесь оказались',
        paragraphs: [
          'Старый Клан Тзимицу позволял Шабашу жить на Балканах. До тех пор, пока Шабаш не забыл, что он не дома, а в гостях. Я бы мог рассказать, что произошло, но предпочитаю, чтобы ты выяснял это сам. Очень полезный навык для немёртвых: научиться отделять ложь от правды в череде спекуляций. Главное, что тебе нужно знать: Белградский Шабаш или его часть проштрафились, и Старый Клан сделал выводы. И когда существа, помнящие времена до основания Белграда, делают выводы не в твою пользу, это не скандал, это тектонический сдвиг, после которого перерисовываются карты.',
          'Камарилья Будапешта во главе с Князем Венселем Рикардом увидела возможность и взяла город, по меркам обычных завоеваний почти бескровно. Кто-то открыл тоннели. Кто-то знал расположение каждого гарнизона. Подкрепления из Белграда дошли поздно и скорее жидкие, как будто Белграду было совсем не до нас. Когда операция проходит настолько гладко, это не везение. Но победители редко анализируют, откуда пришла удача.',
          'Князем Рикард поставил своего чайлда, Виктора Варади. Около ста сорока лет, амбициозен, до зубовного скрежета не хочет разочаровать сира. Поверь, ты бы тоже не хотел. Рикард, Вентру, возрастом более тысячи лет. Для тебя это абстракция, поэтому переведу на понятный язык: он помнит, как закладывали фундаменты тех замков, которые ты считаешь старинными. Он пережил чуму, две Инквизиции, промышленную революцию и появление интернета. Существо с такой перспективой не злится, оно разочаровывается. И когда тысячелетний Вентру в тебе разочаровывается, ты, как правило, не получаешь второй шанс. В общем, ходят слухи, что весь домен это экзамен: Рикард вручил мальчику кризисный город и смотрит, что получится.',
          'Примогены все старше Князя и все с амбициями. Пост Примогена Носферату заняла Тень из Милана. Почему итальянский Носферату получил место в сербском городе при венгерском завоевании, я знаю ответ. Ты нет. Если придумаешь хорошую гипотезу, приходи, обсудим.'
        ]
      },
      {
        title: '2023–2024. Мирные годы',
        paragraphs: [
          'Два года относительного покоя. Каждый клан обустраивался по-своему и по-своему показывал зубы.',
          'Примоген Вентру Маркович взялся за город так, как Вентру берутся за всё: методично и с документами. Связи со смертными структурами, бюрократические рычаги.',
          'Крестин, Тореадор и Примоген, устраивал культурные мероприятия, галереи, вечера в Элизиуме. За этим фасадом амбиции не меньше, чем у Вентру, просто упакованные в шёлк и бархат. У них с Марковичем, скажем так, было лёгкое несовпадение взглядов на то, кому принадлежит город.',
          'Илинка Домнешти, Примоген Малкавиан, делал то, что делают Малкавиане, и никто не спрашивал подробностей. Мудро. Время от времени она произносила вещи, от которых у присутствующих менялось выражение лица, но поскольку половину из сказанного можно трактовать четырьмя способами, это удобно списывали на клановые особенности.',
          'Тремер обустраивали капеллу под началом Стефана Рахнича. Мы, Носферату, картографировали подземелья, что было легче для тех из нас, кто помнил каждый поворот задолго до Камарильи. Гангрел и Бруджа патрулировали округу: Вук и Яна не любят красивых слов, но свою работу делают, и без таких, как они, обычно всё разваливается.',
          'Нови Сад начал становиться Камарильским доменом. Не образцовым, наверное, но вполне устойчивым, учитывая наших соседей.',
          'Я наблюдал. В мирные годы данные скучные: кто с кем торгует, кто кому должен, кому везёт чуть чаще, чем полагается по статистике. Мелочи. Я собираю мелочи.'
        ]
      },
      {
        title: 'Конец 2024 — 2025. Плохой год',
        paragraphs: [
          'Шабаш Белграда перестал воевать сам с собой и посмотрел на своих врагов, то есть на нас. И начались изматывающие месяцы. Рейды на окраинах, поджоги, взрывы, жертвы среди смертных и бессмертных. Удары были весьма точны: достаточно больно, чтобы мы кричали, но недостаточно громко для Инквизиции. Может, Шабашу везло. У меня есть мнение на этот счёт, но мнения я бесплатно не раздаю.',
          'По всем правилам военных городов Камарильи старейшины наплодили птенцов, чтобы тут же поставить их на передовую. Кому-то из этих птенцов даже удалось выжить, кому-то не повезло.',
          'Где-то посреди этого хаоса регент Рахнич проводил ритуал в заброшенном здании на окраине. Вспышка, огонь. Официально погиб, забрав с собой атакующих. Героическая смерть. Я занимаюсь информацией четыре века и научился относиться к таким формулировкам с осторожностью.',
          'Героические смерти без свидетелей и без тела это не данные. И, кажется, с этим утверждением согласна новый регент Тремер. Франческа Орсини копает. Задаёт вопросы о Рахниче, такие, которые не задают о покойнике, если действительно верят, что он покойник. Вообще многие ожидали очередного назначения из Будапешта. Примоген Маркович, например, ждал. Он вообще многого ждёт и не всегда получает, в этом его трагедия. Но Рим прислал свою Белую Ведьму. И когда я говорю "белую", это про цвет. С остальным у Тремер, как правило, всё интереснее. Почему из Рима? "Внутренние дела клана Тремер", как обычно.',
          'Этот год оставил у каждой котерии свой шрам: в виде потери товарища, лучшего врага, или утраченной части Человечности.'
        ]
      },
      {
        title: 'Май — ноябрь 2026. Тишина',
        paragraphs: [
          'Относительная тишина несколько месяцев, и это нервирует больше, чем бои.',
          'Стаи ещё бегают, достаточно, чтобы Шериф и его котерия не скучали, но недостаточно для внеплановых заседаний. Версия первая: у Шабаша очередные распри. Версия вторая: копят силы. Обе неприятны.',
          'Вот тебе совет. В этом городе у каждого есть то, чего он не рассказывает. У Примогенов. У твоих соседей по котерии. У приятного Сородича, с которым ты вчера пил в Элизиуме. Это не паранойя, это всего лишь арифметика: чем дольше кто-то не-жив, тем больше у него накапливается скелетов в шкафу.',
          'Приходи ко мне с гипотезами. Я люблю гипотезы и плачу информацией за хорошие. Но если наткнёшься на что-то, от чего у тебя сведёт внутренности, не беги к первому, кого считаешь другом. Сперва дважды подумай.',
          'Я дал тебе стартовые данные. Мне интересно, какие выводы ты сделаешь. И постарайся не умереть окончательно в процессе. Старые Сородичи не любят перемен. Особенно когда они касаются источников информации.'
        ]
      }
    ],
    signature: 'Gutter_Sage // ИНФОБРОКЕР // УЗЕЛ PETROVARADIN',
    footer: 'SchreckNET v4.2.1 // NODE: NOVI_SAD // ПОСЛЕДНЕЕ ОБНОВЛЕНИЕ: 2026-03-02 21:01:27 UTC',
    epigraph: '«Мы видим всё. Мы помним всё.»'
  },
  en: {
    title: 'Gutter_Sage Briefing',
    subtitle: 'PETROVARADIN_FORTRESS node // neonate orientation dossier',
    warning: 'Read. Remember. Do not copy.',
    metadata: [
      { label: 'Author', value: 'Gutter_Sage' },
      { label: 'Node', value: 'PETROVARADIN_FORTRESS' },
      { label: 'Access', value: 'NEONATE+' },
      { label: 'Created', value: '2026.08.XX' },
      { label: 'Class', value: 'ORIENTATION / BRIEFING' },
      { label: 'Encryption', value: 'AES-256-NOS' },
      { label: 'Revisions', value: '4' }
    ],
    lead: 'This page is styled as a SchreckNET dossier rather than a literal terminal. The interface references the clan aesthetic, while the long-form copy stays highly readable.',
    sections: [
      {
        title: 'The World Outside',
        paragraphs: [
          'Mortals taught their machines to remember faces. In Moscow, London, or Shanghai, a Kindred can no longer walk outside without handing their features to some server. Elders who survived the old Inquisition of fire and crosses now die because some caffeine-blooded clerk noticed an ageless anomaly in a database.',
          'Novi Sad, like the Balkans in general, is a place where there are few cameras and paper bureaucracy vanishes between floors so reliably it feels paid for. By modern standards that is not backwardness. It is the reason you are reading this instead of burning.',
          'A famous Malkavian once whispered a date for Gehenna. It did not happen. Perhaps the prophecy was interpreted wrong, perhaps the wrong year was spoken in the first place. Who knows. Speak too openly about the end of the world and Elysium will laugh at you. Try to prove it and the Archons will become interested. My advice: treat apocalypse as a story, but do not make eternal plans just in case. None of us should.'
        ]
      },
      {
        title: '2022. How We Ended Up Here',
        paragraphs: [
          'The Old Clan Tzimisce let the Sabbat live in the Balkans, right up until the Sabbat forgot it was a guest rather than a host. I could tell you what happened, but I would rather you learn to untangle truth from speculation yourself. It is a useful skill for the undead. What matters is simple: the Belgrade Sabbat, or part of it, overstepped. The Old Clan drew conclusions. And when creatures who remember times before Belgrade itself draw conclusions against you, that is not a scandal. That is a tectonic shift.',
          'The Camarilla of Budapest, led by Prince Wenceslas Rikard, saw an opening and took the city with remarkably little bloodshed. Someone opened the tunnels. Someone knew every garrison position. Reinforcements from Belgrade arrived late and thin, almost as if Belgrade had better things to worry about. When an operation goes that smoothly, it is not luck. But victors rarely ask where good fortune came from.',
          'Rikard installed his own childe, Viktor Varadi, as Prince. About one hundred and forty years old, ambitious, and grinding his teeth at the thought of disappointing his sire. You would not want that either. Rikard is a Ventrue over a thousand years old. That sounds abstract, so let me translate: he remembers the foundations of castles you call ancient. He survived plague, two Inquisitions, industrialization, and the internet. A creature with that perspective does not get angry. It becomes disappointed. And when a thousand-year-old Ventrue is disappointed in you, there is rarely a second chance. Rumor says the whole domain is an exam: Rikard handed the boy a crisis city and is watching the results.',
          'Every Primogen is older than the Prince and each of them is ambitious. The Nosferatu seat went to Shadow from Milan. Why an Italian Nosferatu received such a post in a Serbian city after a Hungarian conquest, I know. You do not. Bring me a good hypothesis and we can discuss it.'
        ]
      },
      {
        title: '2023–2024. Quiet Years',
        paragraphs: [
          'Two years of relative calm. Every clan settled in differently, and every clan showed its teeth in its own way.',
          'Ventrue Primogen Markovic took to the city the way Ventrue take to everything: methodically and with paperwork. Connections to mortal institutions. Bureaucratic leverage.',
          'Krestin, Toreador Primogen, organized cultural evenings, galleries, and Elysium events. Behind the silk and velvet stood ambition equal to any Ventrue. He and Markovic disagreed, quietly but consistently, on who the city truly belonged to.',
          'Ilinca Domnesti, Malkavian Primogen, did what Malkavians do and no one was foolish enough to demand details. Wise of them. Sometimes she said things that changed the expressions of everyone in the room, but since half of it could be interpreted four different ways, that was conveniently filed under clan eccentricity.',
          'The Tremere established their chantry under Stefan Rahnic. We Nosferatu mapped the underground, which was easier for those of us who remembered every turn from long before the Camarilla arrived. Gangrel and Brujah patrolled the outskirts. Vuk and Jana dislike fine words, but they do the work. Cities collapse quickly when people like them are missing.',
          'Novi Sad was becoming a Camarilla domain. Not exemplary, perhaps, but stable enough, considering the neighborhood.',
          'I watched. In peaceful years the data is dull: who trades with whom, who owes whom, who gets luck slightly more often than statistics would suggest. Little things. I collect little things.'
        ]
      },
      {
        title: 'Late 2024 to 2025. The Bad Year',
        paragraphs: [
          'The Sabbat of Belgrade stopped fighting itself and looked at its enemies, meaning us. Then came the exhausting months: raids on the outskirts, fires, explosions, casualties among the living and the dead. Their strikes were precise, painful enough to make us scream, quiet enough to avoid attracting the Inquisition. Perhaps the Sabbat was lucky. I have an opinion on that. I do not give opinions away for free.',
          'As every Camarilla city at war does, the elders created neonates only to push them immediately to the front line. Some survived. Others did not.',
          'Somewhere in the middle of that chaos, Regent Rahnic performed a ritual in an abandoned building on the edge of the city. Flash. Fire. Officially he died and took the attackers with him. Heroic death. I have worked in information for four centuries and I have learned to treat such phrasing with caution.',
          'A heroic death without witnesses and without a body is not data. The new Tremere regent seems to agree. Francesca Orsini is digging. She asks questions about Rahnic that people do not ask about a corpse if they truly believe it is a corpse. Many expected another appointment from Budapest. Primogen Markovic certainly did. He expects many things and does not always receive them, which is his tragedy. Instead Rome sent its White Witch. And when I say white, I mean the color. Everything else about the Tremere remains more complicated. Why Rome? "Internal Tremere matters," as usual.',
          'That year left every coterie scarred, through the loss of a companion, a best enemy, or some fragment of Humanity.'
        ]
      },
      {
        title: 'May to November 2026. Silence',
        paragraphs: [
          'A few months of relative quiet, and it is more unnerving than open fighting.',
          'The packs still run, enough that the Sheriff and his coterie are not bored, but not enough to trigger emergency councils. Theory one: the Sabbat is fighting among itself again. Theory two: it is building strength. Both are unpleasant.',
          'Here is advice worth keeping. Everyone in this city has something they do not tell. The Primogen. Your coterie-mates. The pleasant Kindred you drank with in Elysium last night. This is not paranoia. It is arithmetic: the longer someone has been un-dead, the more skeletons accumulate in the closet.',
          'Bring me hypotheses. I like hypotheses, and I pay in information for good ones. But if you stumble over something that turns your insides cold, do not run to the first person you think is a friend. Think twice first.',
          'I have given you the starting data. I am interested in what conclusions you draw from it. And try not to die permanently in the process. Old Kindred dislike change, especially when it affects their information sources.'
        ]
      }
    ],
    outro: 'What follows is presented as an active node dossier: metadata, observation packets, and personal remarks from Gutter_Sage. The delivery leans technical, but the layout is built for comfortable reading.',
    signature: 'Gutter_Sage // INFOBROKER // PETROVARADIN NODE',
    footer: 'SchreckNET v4.2.1 // NODE: NOVI_SAD // LAST UPDATE: 2026-03-02 21:01:27 UTC',
    epigraph: '"We see everything. We remember everything."'
  }
};
