import React from 'react';
import {
  ArrowLeft,
  Send,
  Users,
  PenTool,
  Camera,
  MapPin,
  Shirt,
  Shield,
  Image as ImageIcon,
  ExternalLink,
  Crown,
  Footprints,
  ScrollText,
} from 'lucide-react';
import { CastingPageContent, Language } from '../types';
import RolesGridWidget from './RolesGridWidget';
import { NEW_PRIMOGENS_CONTENT } from '../newPrimogensContent';
import { COTERIES_CONTENT } from '../coteriesContent';

interface CastingViewProps {
  content: CastingPageContent;
  lang: Language;
  onBack: () => void;
}

const CastingView: React.FC<CastingViewProps> = ({ content, onBack, lang }) => {
  const primogensContent = NEW_PRIMOGENS_CONTENT[lang];
  const coteriesContent = COTERIES_CONTENT[lang];
  const applicationFormUrl =
    'https://www.allrpg.info/myapplication/act=add&project_id=1365&character_id=63741&application_type=0';
  const rolesGridUrl = 'https://www.allrpg.info/roles/1365/';

  const labels =
    lang === 'ru'
      ? {
          back: 'Вернуться на главную',
          heroKicker: 'Роли / Камарилья Нового Сада',
          heroLead:
            'Страница теперь собрана как единый кастинг-досье: сначала примогены и векторы игры, затем котерии, после этого живая сетка ролей и набор в команду.',
          primaryAction: 'Открыть форму заявки',
          secondaryAction: 'Перейти к сетке ролей',
          primogensBadge: 'Совет домена',
          coteriesBadge: 'Котерии и фокусы игры',
          liveRolesTitle: 'Сетка ролей',
          liveRolesIntro:
            'Официальная сетка ролей доступна на AllRPG. Ниже по-прежнему встроена живая выгрузка, но кнопки и верхняя навигация теперь ведут сразу на страницу ролей.',
          teamBadge: 'Команда проекта',
          helpersBadge: 'Набор помощников',
          mobilityScale: 'Шкала бегательности',
          currentStatus: 'Текущий статус',
          currentStatusText: 'Актуальная сетка ролей и подача заявок.',
          primogenCount: 'Примогены',
          coterieCount: 'Котерии',
          registryState: 'Сетка ролей',
          registryStateText: 'allrpg',
          primogenJump: 'Кланы и их Примогены',
          coterieJump: 'Навигация по котериям',
          openRolesSite: 'Открыть сетку ролей на AllRPG',
          coterieSlotsLabel: 'Свободно мест',
          coterieSlotsValue: '0 из 5',
        }
      : {
          back: 'Return to Main',
          heroKicker: 'Roles / Novi Sad Camarilla',
          heroLead:
            'This page is now structured as a single casting dossier: primogens and play vectors first, coteries next, then the live roles registry and staffing needs.',
          primaryAction: 'Open Application Form',
          secondaryAction: 'Jump to Roles Registry',
          primogensBadge: 'Domain Council',
          coteriesBadge: 'Coteries and Play Focus',
          liveRolesTitle: 'Roles Grid',
          liveRolesIntro:
            'The official roles grid is available on AllRPG. The embedded live feed remains below, but the buttons and top navigation now lead directly to the external roles page.',
          teamBadge: 'Project Team',
          helpersBadge: 'Helpers Wanted',
          mobilityScale: 'Mobility Scale',
          currentStatus: 'Current Status',
          currentStatusText: 'Primogens, coterie options, and the live roles feed are collected in one view.',
          primogenCount: 'Primogens',
          coterieCount: 'Coteries',
          registryState: 'Roles Grid',
          registryStateText: 'allrpg',
          primogenJump: 'Clan anchors',
          coterieJump: 'Coterie navigation',
          openRolesSite: 'Open AllRPG Roles Grid',
          coterieSlotsLabel: 'Open slots',
          coterieSlotsValue: 'x of 5',
        };

  const spotlightCards = [
    {
      label: labels.primogenCount,
      value: String(primogensContent.entries.length).padStart(2, '0'),
      note: primogensContent.subtitle,
      icon: Crown,
      href: '#casting-primogen-0',
      external: false,
    },
    {
      label: labels.coterieCount,
      value: String(coteriesContent.options.length).padStart(2, '0'),
      note: coteriesContent.title,
      icon: Users,
      href: '#casting-coteries-index',
      external: false,
    },
    {
      label: labels.registryState,
      value: labels.registryStateText,
      note: labels.currentStatusText,
      icon: ScrollText,
      href: rolesGridUrl,
      external: true,
    },
  ];

  const coterieSlotsByIndex: Partial<Record<number, string>> =
    lang === 'ru'
      ? {
          0: '1 из 5',
          1: '2 из 5',
          4: '3 из 5',
          5: '1 из 5',
        }
      : {
          0: '1 of 5',
          1: '2 of 5',
          4: '3 of 5',
          5: '1 of 5',
        };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(138,11,11,0.28),transparent_36%),radial-gradient(circle_at_18%_24%,rgba(120,119,198,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_52%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <button
          onClick={onBack}
          className="group mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-blood-red"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-mono text-sm uppercase tracking-[0.28em]">{labels.back}</span>
        </button>

        <section className="relative overflow-hidden border border-white/10 bg-[linear-gradient(145deg,rgba(18,18,18,0.96),rgba(6,6,6,0.98))] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,11,11,0.18),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_40%)]" />
          <div className="relative grid gap-10 px-6 py-8 md:px-10 md:py-12 xl:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 border border-blood-red/40 bg-blood-red/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-blood-red">
                <Shield className="h-4 w-4" />
                {labels.heroKicker}
              </div>

              <h1 className="max-w-4xl text-4xl font-serif leading-none text-white md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
                {labels.heroLead}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={applicationFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-blood-red bg-blood-red px-7 py-4 font-serif text-sm uppercase tracking-[0.24em] text-white transition-all hover:-translate-y-0.5 hover:bg-red-800"
                >
                  {labels.primaryAction}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="#roles-registry"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 bg-white/5 px-7 py-4 font-serif text-sm uppercase tracking-[0.24em] text-gray-100 transition-all hover:-translate-y-0.5 hover:border-blood-red/50 hover:bg-white/10"
                >
                  {labels.secondaryAction}
                  <ScrollText className="h-4 w-4 text-blood-red" />
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              <div className="border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-blood-red">
                  {labels.currentStatus}
                </div>
                <p className="mt-3 text-base leading-7 text-gray-300">{content.description}</p>
              </div>

              {spotlightCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                    className="relative overflow-hidden border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-0.5 hover:border-blood-red/35 hover:bg-white/[0.06]"
                  >
                    <div className="absolute right-0 top-0 h-20 w-20 bg-[radial-gradient(circle,rgba(138,11,11,0.22),transparent_65%)]" />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
                          {card.label}
                        </div>
                        <div className="mt-3 text-3xl font-serif uppercase text-white">{card.value}</div>
                      </div>
                      <Icon className="h-5 w-5 text-blood-red" />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-400">{card.note}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="mt-16 space-y-16">
          <section className="relative overflow-hidden border border-white/10 bg-[linear-gradient(135deg,rgba(16,16,16,0.96),rgba(7,7,7,0.98))] p-6 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood-red/60 to-transparent" />
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-3 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-blood-red">
                  <Crown className="h-4 w-4" />
                  {labels.primogensBadge}
                </div>
                <h2 className="text-3xl font-serif tracking-wide text-white md:text-5xl">
                  {primogensContent.title}
                </h2>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.28em] text-gray-500">
                  {primogensContent.subtitle}
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                {primogensContent.intro}
              </p>
            </div>

            <div className="mb-8 border border-white/10 bg-black/35 p-5">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-gray-500">
                {labels.primogenJump}
              </div>
              <div className="flex flex-wrap gap-3">
                {primogensContent.entries.map((entry, index) => (
                  <a
                    key={`${entry.clan}-jump`}
                    href={`#casting-primogen-${index}`}
                    className="inline-flex items-center border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-200 transition-all hover:border-blood-red/40 hover:text-white"
                  >
                    {entry.clan}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              {primogensContent.entries.map((entry, index) => (
                <article
                  key={entry.clan}
                  id={`primogen-${index}`}
                  className="relative overflow-hidden border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 md:p-7"
                >
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-blood-red via-white/10 to-transparent" />
                  <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
                    <div className="space-y-4 xl:sticky xl:top-24 xl:self-start">
                      {entry.imageSrc ? (
                        <div className="aspect-[4/5] overflow-hidden border border-white/15 bg-black/40 shadow-[0_16px_34px_rgba(0,0,0,0.35)]">
                          <img
                            src={entry.imageSrc}
                            alt={entry.photoPlaceholder}
                            className="h-full w-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/5] flex-col items-center justify-center border border-dashed border-white/20 bg-black/30 p-4 text-center">
                          <ImageIcon className="mb-3 h-10 w-10 text-gray-500" />
                          <p className="font-mono text-xs uppercase tracking-[0.28em] text-gray-500">
                            {entry.photoPlaceholder}
                          </p>
                        </div>
                      )}

                      <div className="border border-white/10 bg-black/45 p-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-blood-red">
                          {entry.clan}
                        </div>
                        <p className="mt-2 text-2xl font-serif leading-tight text-white">
                          {entry.primogen}
                        </p>
                        {entry.telegramUrl && (
                          <a
                            href={entry.telegramUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-blood-red transition-colors hover:text-white"
                          >
                            <Send className="h-4 w-4" />
                            {entry.telegramLabel ?? 'Telegram'}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                        <div className="space-y-4">
                          <div className="font-mono text-xs uppercase tracking-[0.28em] text-gray-500">
                            {lang === 'ru' ? 'Примоген' : 'Primogen'}
                          </div>
                          <h3 className="text-3xl font-serif tracking-wide text-white">{entry.clan}</h3>
                          <div className="space-y-4">
                            {entry.opening.map((paragraph) => (
                              <p key={paragraph} className="text-base leading-8 text-gray-300">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-4 self-start">
                          <div className="border border-emerald-800/45 bg-emerald-950/10 p-4">
                            <p className="font-mono text-xs uppercase tracking-[0.24em] text-emerald-400">
                              ♚ Шах
                            </p>
                            <p className="mt-3 text-sm leading-7 text-gray-300">{entry.shah}</p>
                          </div>
                          <div className="border border-amber-700/45 bg-amber-950/10 p-4">
                            <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber-400">
                              ♛ Мат
                            </p>
                            <p className="mt-3 text-sm leading-7 text-gray-300">{entry.mat}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-5 xl:grid-cols-2">
                        <div className="border border-white/10 bg-black/35 p-5">
                          <p className="font-serif text-2xl text-white">
                            {lang === 'ru' ? 'Слухи' : 'Rumors'}
                          </p>
                          <ul className="mt-4 space-y-3 text-gray-400">
                            {entry.rumors.map((rumor) => (
                              <li key={rumor} className="flex gap-3">
                                <span className="mt-1 text-blood-red">•</span>
                                <span className="leading-7">{rumor}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border border-blood-red/20 bg-blood-red/[0.03] p-5">
                          <h4 className="text-2xl font-serif text-white">{entry.clanPitchTitle}</h4>
                          <div className="mt-4 space-y-4">
                            {entry.clanPitch.map((paragraph) => (
                              <p key={paragraph} className="text-base leading-8 text-gray-300">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <a
                          href={entry.applyUrl}
                          className="inline-block border border-red-500 bg-blood-red px-8 py-3 font-serif text-sm uppercase tracking-[0.22em] text-white shadow-[0_0_14px_rgba(138,11,11,0.55)] transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-[0_0_22px_rgba(220,20,60,0.75)]"
                        >
                          {entry.applyLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden border border-white/10 bg-[linear-gradient(140deg,rgba(14,14,14,0.96),rgba(6,6,6,0.98))] p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(138,11,11,0.12),transparent_26%)]" />
            <div className="relative">
              <div className="mb-8 max-w-5xl">
                <div className="mb-3 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-blood-red">
                  <Users className="h-4 w-4" />
                  {labels.coteriesBadge}
                </div>
                <h2 className="text-3xl font-serif tracking-wide text-white md:text-5xl">
                  {coteriesContent.title}
                </h2>
              </div>

              <div id="coteries-index" className="mb-10 border border-white/10 bg-black/30 p-5 md:p-6">
                <div className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-gray-500">
                  {labels.coterieJump}
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {coteriesContent.options.map((option, index) => (
                    <a
                      key={`${option.title}-jump`}
                      href={`#casting-coterie-${index}`}
                      className="inline-flex items-center border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm leading-6 text-gray-200 transition-all hover:border-blood-red/40 hover:bg-white/[0.07] hover:text-white"
                    >
                      {option.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:gap-8">
                <div className="border border-blood-red/20 bg-blood-red/[0.05] p-6 md:p-7">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-blood-red">
                    {coteriesContent.disclaimerTitle}
                  </div>
                  <p className="mt-5 text-base leading-8 text-gray-300 md:text-[17px]">{coteriesContent.disclaimer}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                  {coteriesContent.notes.map((note) => (
                    <div key={note} className="border border-white/10 bg-black/30 p-5 md:p-6">
                      <p className="text-sm leading-7 text-gray-300 md:text-[15px]">{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-8 xl:grid-cols-2">
                {coteriesContent.options.map((option, index) => {
                  const mobilityValue = Number(option.mobility.match(/(\d+)\s+из\s+5/)?.[1] ?? 0);

                  return (
                    <article
                      key={option.title}
                      id={`coterie-${index}`}
                      className="flex h-full flex-col border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-6 md:p-8"
                    >
                      <div className="mb-5 inline-flex w-fit items-center gap-3 border border-blood-red/20 bg-blood-red/[0.05] px-4 py-2">
                        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-blood-red">
                          {labels.coterieSlotsLabel}
                        </span>
                        <span className="font-serif text-lg text-white">
                          {coterieSlotsByIndex[index] ?? labels.coterieSlotsValue}
                        </span>
                      </div>
                      <h3 className="max-w-[26rem] text-2xl font-serif leading-tight text-white md:text-[2rem]">{option.title}</h3>

                      <div className="mt-8 grid gap-6">
                        <div className="border-b border-white/8 pb-5">
                          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
                            {option.compositionLabel}
                          </div>
                          <p className="mt-3 text-base leading-8 text-gray-200 md:text-[17px]">{option.composition}</p>
                        </div>

                        <div className="border-b border-white/8 pb-5">
                          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
                            <Footprints className="h-4 w-4 text-blood-red" />
                            {option.mobilityLabel}
                          </div>
                          <div className="mb-4 flex gap-2" aria-hidden="true">
                            {Array.from({ length: 5 }, (_, index) => (
                              <span
                                key={`${option.title}-${index}`}
                                className={`h-2.5 flex-1 rounded-full ${
                                  index < mobilityValue ? 'bg-blood-red' : 'bg-white/10'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-base leading-8 text-gray-300 md:text-[17px]">{option.mobility}</p>
                        </div>

                        <div className="border-b border-white/8 pb-5">
                          <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-gray-500">
                            {option.disciplinesLabel}
                          </div>
                          <p className="mt-3 text-base leading-8 text-gray-300 md:text-[17px]">{option.disciplines}</p>
                        </div>

                        {option.difference && option.differenceLabel && (
                          <div className="mt-1 border border-blood-red/20 bg-blood-red/[0.04] p-5 md:p-6">
                            <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-blood-red">
                              {option.differenceLabel}
                            </div>
                            <p className="mt-3 text-base leading-8 text-gray-300 md:text-[17px]">{option.difference}</p>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                <Footprints className="h-4 w-4 text-blood-red" />
                {labels.mobilityScale}
              </div>
            </div>
          </section>

          <section
            id="roles-registry"
            className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="border border-white/10 bg-[linear-gradient(140deg,rgba(12,12,12,0.96),rgba(5,5,5,0.98))] p-6 md:p-8">
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-blood-red">
                <ScrollText className="h-4 w-4" />
                {labels.liveRolesTitle}
              </div>
              <h2 className="mt-5 text-3xl font-serif text-white">{labels.liveRolesTitle}</h2>
              <p className="mt-4 text-base leading-8 text-gray-300">{labels.liveRolesIntro}</p>
              <p className="mt-4 text-base leading-8 text-gray-400">{content.description}</p>
              <a
                href={rolesGridUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-blood-red/40 bg-blood-red/10 px-5 py-3 text-sm uppercase tracking-[0.22em] text-white transition-all hover:border-blood-red hover:bg-blood-red/20"
              >
                {labels.openRolesSite}
                <ExternalLink className="h-4 w-4 text-blood-red" />
              </a>
            </div>

            <section className="overflow-hidden border border-white/10 bg-black/45 p-3">
              <RolesGridWidget lang={lang} />
            </section>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-white/10 bg-[linear-gradient(145deg,rgba(12,12,12,0.96),rgba(5,5,5,0.98))] p-6 md:p-8">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-blood-red">
                <Users className="h-4 w-4" />
                {labels.teamBadge}
              </div>
              <h2 className="text-3xl font-serif tracking-wide text-white">
                {content.teamSection.title}
              </h2>

              <div className="mt-6 grid gap-4">
                {content.teamSection.members.map((member, idx) => (
                  <div
                    key={`${member.name}-${idx}`}
                    className="border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-blood-red/25"
                  >
                    <h3 className="text-xl font-serif text-white">{member.name}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gray-400">
                      {member.role}
                    </p>
                    {member.telegram && (
                      <a
                        href={`https://t.me/${member.telegram.replace('@', '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-blood-red transition-colors hover:text-white"
                      >
                        <Send className="h-4 w-4" />
                        {member.telegram}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-[linear-gradient(145deg,rgba(18,18,18,0.96),rgba(8,8,8,0.98))] p-6 md:p-8">
              <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-blood-red">
                <PenTool className="h-4 w-4" />
                {labels.helpersBadge}
              </div>
              <h2 className="text-3xl font-serif text-white">{content.helpersSection.title}</h2>
              <p className="mt-4 border-l-2 border-blood-red pl-4 text-lg italic leading-8 text-gray-300">
                {content.helpersSection.intro}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.helpersSection.roles.map((role, idx) => (
                  <div
                    key={`${role}-${idx}`}
                    className="flex items-center gap-3 border border-white/10 bg-black/35 p-4 text-gray-200"
                  >
                    {idx === 0 && <MapPin className="h-5 w-5 text-blood-red" />}
                    {idx === 1 && <Shirt className="h-5 w-5 text-blood-red" />}
                    {idx === 2 && <Camera className="h-5 w-5 text-blood-red" />}
                    {idx === 3 && <PenTool className="h-5 w-5 text-blood-red" />}
                    <span>{role}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-blood-red">
                {content.helpersSection.cta}
              </p>

              <a
                href={applicationFormUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-red-500 bg-blood-red px-8 py-4 font-serif text-sm uppercase tracking-[0.22em] text-white transition-all hover:-translate-y-0.5 hover:bg-red-800"
              >
                {content.applyButton}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CastingView;
