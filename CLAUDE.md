# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Fan-made immersive marketing/info site for the **VTM: Shadows over Danube** urban LARP (Vampire: The Masquerade V20). React 19 SPA built with Vite. Originally scaffolded from Google AI Studio (see `metadata.json`, README link).

## Commands

```bash
npm install         # install deps
npm run dev         # vite dev server (port 3000, host 0.0.0.0)
npm run build       # production build to ./dist
npm run preview     # preview built bundle
```

No lint, test, or typecheck scripts are defined. `tsc` runs with `noEmit` via `tsconfig.json` if you need a manual type check.

### Environment

Create `.env.local` in the repo root:
- `GEMINI_API_KEY` — required for the SchreckNet chat and clan portrait generation. Vite injects this into BOTH `process.env.API_KEY` and `process.env.GEMINI_API_KEY` at build time (see `vite.config.ts`).
- `GOOGLE_TRANSLATE_API_KEY` — required for runtime RU→EN translation of the external roles widget. Optional; calls fall back to source text on failure.

These are define-replaced at build time, so changes require a dev server restart.

## Architecture

### Routing — hash-only, in `App.tsx`

There is no router library. `App.tsx` reads `window.location.hash` and switches on a `View` enum (`home | setting | rules | about | casting | briefing`). Anchor patterns matter:

- `#rules`, `#setting`, etc. → switch top-level view, scroll to top.
- `#rules-combat`, `#setting-clans`, `#about-...`, `#casting-...` → regex `^(rules|setting|about|casting)-(.+)$` switches to that view, then scrolls to the element with id `<suffix>` after a 150ms render delay.
- Anything else with a non-empty hash → stay on `home`, scroll to that anchor.

When adding a view, register it in both the `View` type and `VALID_VIEWS` array, then add a `currentView === ...` render branch in `App.tsx`.

### Bilingual content (RU / EN)

UI defaults to `lang = 'ru'`. All user-facing strings live in typed content modules — there is no i18n library. Each major content file exports a `Record<Language, T>`:

- `translations.ts` (~270KB) — the master `TRANSLATIONS` record covering navbar, hero, pitch, schedule, FAQ, footer, SchreckNet, and the four large page content objects (`aboutPage`, `settingPage`, `rulesPage`, `castingPage`). The `Content` interface at the top of the file is the contract; matching shapes between `ru` and `en` is enforced by TypeScript.
- `briefingContent.ts` — Briefing view (separate from `translations.ts` due to size and editing cadence).
- `coteriesContent.ts`, `newPrimogensContent.ts` — also `Record<Language, ...>` content modules, currently RU-heavy.

When adding a translated field: extend the interface in `types.ts` or `translations.ts`, then add the value to both `ru` and `en` blocks. TS will surface any missed branch.

### Types

`types.ts` is the shared shape library for content (clan items, rule sections, schedule items, etc.) and chat messages. Page content interfaces (`SettingContent`, `RulesPageContent`, `AboutPageContent`, `CastingPageContent`) compose into the `Content` interface in `translations.ts`.

### Gemini / Google Translate integration — `services/geminiService.ts`

Three independent functions, all called from the browser:

- `sendMessageToGemini(history, message, lang)` — SchreckNet chat. Uses `gemini-2.5-flash` with an in-character system prompt (Nosferatu-flavored "SchreckNET Administrator"). The prompt embeds game-specific facts (schedule, NPC vs PC role split, Camarilla traditions) — keep it in sync if those facts change.
- `translateTexts(texts, targetLang)` — batched Google Translate v2 calls (chunks of 90). Returns `null` on any failure so callers can fall back to source.
- `generateClanPortrait(clan, stereotype, description)` — uses `gemini-2.5-flash-image`, returns a base64 data URL.

The API key is read from `process.env.API_KEY` (which Vite resolves to `GEMINI_API_KEY`). Missing key → user-facing in-language error string, not a thrown exception.

### External roles widget — `roles.min.js` + `RolesGridWidget.tsx`

`roles.min.js` is a vendored script that POSTs to `https://www.allrpg.info/roles/` and injects the response HTML into a div with id `allrpgRolesListDiv`. `RolesGridWidget` orchestrates the fetch, and when `lang === 'en'` walks the returned HTML's text nodes through `translateTexts` to localize the otherwise-Russian role list. Do not edit `roles.min.js`.

### Styling — Tailwind via CDN

Tailwind is loaded from `https://cdn.tailwindcss.com` in `index.html`, with the theme extension inlined as a `tailwind.config` script tag. There is no `tailwind.config.js`, no PostCSS, no build-time purge. Custom tokens defined there:

- Colors: `blood-red` (#8a0b0b), `blood-dark` (#4a0404), `night-black` (#0a0a0a), `parchment` (#d4d4d4).
- Fonts: `font-serif` Cinzel, `font-sans` Lato, `font-mono` Share Tech Mono — loaded from Google Fonts in `index.html`.
- Animation: `animate-pulse-slow`.

If you add custom tokens, edit the inline config in `index.html` — class names won't resolve otherwise.

### Import map quirk

`index.html` carries an `importmap` pointing react/react-dom/@google/genai/lucide-react at esm.sh CDN URLs. This is a leftover from the AI Studio buildless workflow; the Vite build bundles from `node_modules` instead, so the importmap is effectively dead in production. Leave it unless you're certain nothing else (e.g. AI Studio export) depends on it.

## Conventions

- TypeScript strictness is loose (no strict flag), with `allowImportingTsExtensions: true` and `noEmit: true` — Vite handles the actual transform. Imports use bare paths (e.g. `'./App'`), not `.tsx` extensions.
- Path alias `@/*` maps to repo root (`vite.config.ts` + `tsconfig.json`).
- Components are colocated under `components/`, content data in repo root, services under `services/`.
- Page views receive `content` props from `App.tsx` (which has already indexed `TRANSLATIONS[lang]`), plus `onBack` to clear the hash. Keep this pattern when adding views.
