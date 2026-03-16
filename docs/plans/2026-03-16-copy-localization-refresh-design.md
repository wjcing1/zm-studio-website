# ZM Studio Copy Localization Refresh Design

## Goal
Refine the site's Chinese and Italian copy so both languages read naturally and consistently while preserving the current English meaning, information architecture, and site behavior.

## Confirmed Scope
- Keep the existing routing, components, and data structure unchanged.
- Rewrite Chinese and Italian copy across UI labels, page-level brand copy, project summaries/bodies, team bios, services, and news items.
- Use English as the semantic anchor for facts and intent.
- Maintain the current trilingual switching behavior and persistence.

## Tone Direction
- Chinese: professional, restrained, credible, and execution-oriented, closer to architecture/design studio language than marketing slogans.
- Italian: natural, concise, and idiomatic within design, exhibition, and interior-project contexts.
- Shared principle: avoid literal translation patterns when they sound unnatural in the target language.

## Content Strategy
- Treat short UI copy and long-form content differently:
  - UI copy should be compact, direct, and easy to scan.
  - Brand and project copy should preserve atmosphere while tightening rhythm and terminology.
- Keep facts fixed:
  - Do not change years, locations, project names, team roles, or service scope.
- Prefer terminology consistency:
  - Chinese should consistently use phrases such as "落地执行", "现场统筹", "空间体验", and "材料" when they fit.
  - Italian should prefer natural combinations such as "sviluppo esecutivo", "coordinamento in cantiere", "spazio espositivo", and "materiali" where appropriate.

## Files in Scope
- `src/i18n/zh.ts`
- `src/i18n/it.ts`
- `src/config/data.ts`

## Non-Goals
- No content-model migration or type changes.
- No English copy rewrite in this pass.
- No SEO, routing, or CMS/editorial workflow changes.

## Verification
- Run `npm run build` to confirm the content edits do not break the app.
- Spot-check key pages in Chinese and Italian to ensure the new copy fits the UI and remains internally consistent:
  - Home
  - About
  - Services
  - Exhibition project detail
  - Interior project detail
