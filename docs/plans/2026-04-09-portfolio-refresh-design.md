# ZM Studio Portfolio Refresh Design

## Goal
Use the current website copy as the structural base for a new portfolio site: remove the Interior section, remove the Shanghai Studio introduction, add a navigable AI placeholder page, and refresh the exhibition portfolio so the site reflects the projects shown in `ZM portfolio.pdf` and the images in `项目图`.

## Confirmed Scope
- Keep the existing site framework, visual language, page hierarchy, and interaction patterns.
- Continue working in the current copied workspace and current Git repository.
- Replace the exhibition portfolio data and imagery with the refreshed project set represented in `ZM portfolio.pdf`.
- Remove all user-facing Interior navigation and content.
- Remove the Shanghai Studio section from the About page while keeping the Milan Studio team portraits unchanged.
- Add an AI page that appears in the main navigation and functions as a simple placeholder for future expansion.

## Content Strategy
- Treat the refreshed site as an exhibition-only portfolio plus studio, services, news, contact, and AI placeholder pages.
- Replace the current exhibition project titles, summaries, body copy, and image assignments with a new set built around the portfolio PDF's nine project groups:
  - International Boat Show (Düsseldorf)
  - The Elevator Show (Dubai)
  - International Exhibition for Hospitality Industry (Moscow)
  - Integrated Systems Europe (Barcelona)
  - Automechanika (Dubai)
  - MIDO (Milan)
  - A+A (Düsseldorf)
  - Lift Expo (Kazakhstan)
  - Vitafoods Europe
- Use the current data-driven project-detail structure as the editorial shell:
  - concise summary
  - 2-3 paragraph project description
  - cover image plus gallery
- Because Google Drive access is currently blocked by an expired OAuth grant, this pass will use `ZM portfolio.pdf`, the supplied image set, and the current site's existing writing style as the source material for the refreshed project copy.

## Image Strategy
- Use `项目图` as the primary image source for the refreshed portfolio.
- Reassign homepage hero imagery, project covers, project galleries, About hero/supporting imagery, and the AI page visual treatment from that folder.
- Keep Milan team portraits unchanged.
- Reuse high-quality project renders where needed to fill non-project image slots while keeping the overall site structure intact.

## Information Architecture Changes
- Remove `/interior` and `/interior/:projectId` from routing.
- Remove Interior links from header, footer, homepage featured sections, localized nav labels, and any shared metadata helpers that no longer need the category.
- Add a new `/ai` route with a lightweight placeholder page.
- Show the AI page in desktop and mobile navigation.

## Files in Scope
- `src/config/routes.tsx`
- `src/config/data.ts`
- `src/i18n/en.ts`
- `src/i18n/zh.ts`
- `src/i18n/it.ts`
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/features/home/HomePage.tsx`
- `src/features/about/AboutPage.tsx`
- `src/features/projects/ProjectDetailPage.tsx`
- `src/features/interior/InteriorPage.tsx` or route references that can be retired
- `src/features/ai/` (new)
- Any supporting type or helper files touched by removing Interior references

## Non-Goals
- No redesign of the site's overall UI system.
- No CMS or external data integration.
- No attempt to restore Google Drive access inside this pass.
- No changes to the Milan team profile photos.

## Verification
- Run `npm run build`.
- Start the local site and spot-check:
  - Home
  - About
  - Exhibition
  - At least two refreshed project-detail pages
  - AI page
  - Header and footer navigation on desktop/mobile widths
