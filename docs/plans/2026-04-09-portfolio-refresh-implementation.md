# Portfolio Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh the site into an exhibition-only portfolio with updated project data and imagery, a visible AI placeholder page, and an About page that keeps only the Milan Studio team.

**Architecture:** Keep the current React/Vite structure and data-driven content model, but replace the exhibition dataset, retire the Interior branch of the information architecture, and add one new AI feature page. Verification will rely on TypeScript/Vite build success plus targeted manual page checks because the repo does not include an automated test framework.

**Tech Stack:** React, TypeScript, Vite, React Router, static data in `src/config/data.ts`

---

### Task 1: Prepare shared types, routes, and translation keys for an exhibition-only site

**Files:**
- Modify: `src/config/routes.tsx`
- Modify: `src/types/project.ts`
- Modify: `src/config/constants.ts`
- Modify: `src/lib/projectMeta.ts`
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/it.ts`
- Create: `src/features/ai/AiPage.tsx`

**Step 1: Write the failing test**

Reference a new `/ai` route and AI navigation labels while removing the old Interior route/type expectations from the shared code paths.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails until the new AI route/page and updated type/translation references exist consistently.

**Step 3: Write minimal implementation**

- Add the AI page component with simple placeholder content.
- Register `/ai` in `src/config/routes.tsx`.
- Add localized navigation and page-copy keys for AI.
- Remove or simplify shared project-type helpers so the app no longer depends on the Interior category being visible.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: route and translation changes compile cleanly.

### Task 2: Remove Interior from shared navigation and homepage structure

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/features/home/HomePage.tsx`

**Step 1: Write the failing test**

Update navigation and homepage references so they point at the new AI route and no longer rely on Interior links or featured Interior content.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails until the components are updated to match the new navigation/data shape.

**Step 3: Write minimal implementation**

- Replace Interior navigation entries with AI in desktop and mobile menus.
- Remove Interior links from the footer.
- Remove the homepage Interior featured section.
- Keep the homepage structure balanced by reflowing the remaining exhibition and CTA sections.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: shared layout and homepage compile without Interior dependencies.

### Task 3: Refresh About page structure and AI page content surfaces

**Files:**
- Modify: `src/features/about/AboutPage.tsx`
- Modify: `src/config/data.ts`
- Modify: `src/features/ai/AiPage.tsx`

**Step 1: Write the failing test**

Update About and AI-page consumers so they expect Milan-only team content and AI-specific page copy/data.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails until the About page and data exports no longer reference the Shanghai team block and the AI page has valid content.

**Step 3: Write minimal implementation**

- Remove the Shanghai Studio section from About.
- Keep Milan team portraits and supporting studio copy.
- Add concise AI-page title, intro, and placeholder service framing that fits the existing site tone.
- Reassign any non-portrait support imagery from `项目图` where needed without altering Milan portraits.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: About and AI pages compile and render with the new data shape.

### Task 4: Replace the exhibition dataset with the refreshed portfolio projects

**Files:**
- Modify: `src/config/data.ts`
- Modify: `src/features/projects/ProjectDetailPage.tsx` if any assumptions depend on old project IDs or image ordering

**Step 1: Write the failing test**

Update consumers to rely on a refreshed nine-project exhibition dataset and remove dependencies on the old exhibition/interior split where no longer needed.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails until `src/config/data.ts` exports the new project set with valid fields and image references.

**Step 3: Write minimal implementation**

- Replace the existing exhibition project entries with nine refreshed portfolio entries based on `ZM portfolio.pdf`.
- Remove `INTERIOR_PROJECTS` and any derived featured Interior exports.
- Keep `PROJECTS` and project-detail rendering working for the exhibition portfolio.
- Rewrite titles, locations, summaries, and body copy to match the refreshed portfolio while preserving the current editorial tone.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: project lists and detail pages compile against the new dataset.

### Task 5: Reassign all site imagery from the refreshed project image pool

**Files:**
- Modify: `src/config/data.ts`
- Modify: any page component that uses hard-coded image paths outside the shared data layer
- Review: `public/images/**`

**Step 1: Write the failing test**

Replace legacy image references in the data layer and page components with the refreshed image assignments so stale images are no longer referenced.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build or manual inspection reveals broken/missing image references until all major image paths are updated.

**Step 3: Write minimal implementation**

- Point homepage hero slots, exhibition covers, project galleries, About support imagery, and AI visuals at the refreshed image set.
- Reuse images intentionally when multiple surfaces need strong visuals.
- Keep Milan portrait paths unchanged.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: the app builds with valid image paths and no TypeScript regressions.

### Task 6: Verify the refreshed site end to end

**Files:**
- Modify: `progress.md`
- Modify: `findings.md` if new mapping/verification notes are useful

**Step 1: Run verification**

Run:
- `npm run build`
- Start the local dev server
- Manually review `/`, `/about`, `/exhibition`, `/exhibition/<two sample project ids>`, and `/ai`

**Step 2: Document results**

Record the build result and manual page-check findings in `progress.md`.

**Step 3: Commit**

```bash
git add docs/plans/2026-04-09-portfolio-refresh-design.md docs/plans/2026-04-09-portfolio-refresh-implementation.md src progress.md findings.md task_plan.md
git commit -m "Refresh portfolio site for exhibition-only structure"
```
