# Trilingual Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement complete English, Chinese, and Italian switching for all site UI and content.

**Architecture:** Extend the existing language context and translation dictionaries for reusable UI copy, migrate content records in `src/config/data.ts` to localized values, and render everything through a shared localized-value helper. Keep current routes and persistence behavior.

**Tech Stack:** React, TypeScript, Vite, existing `LanguageContext`

---

### Task 1: Add localized content primitives

**Files:**
- Modify: `src/types/*` as needed
- Create: `src/lib/i18n.ts`
- Test: verification by `npm run build`

**Step 1: Write the failing test**

Create a minimal TypeScript usage path that requires localized object support in components.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build would fail once components are updated to require missing helper/types.

**Step 3: Write minimal implementation**

Add a `LocalizedText` type and helper such as `getLocalizedText(value, language)` with fallback behavior.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: helper compiles cleanly.

### Task 2: Expand translation dictionaries

**Files:**
- Modify: `src/i18n/en.ts`
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/it.ts`

**Step 1: Write the failing test**

Identify missing UI strings in header, footer, pages, filters, contact form, and 404.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails after components reference missing translation keys.

**Step 3: Write minimal implementation**

Add translation keys needed for all page-level UI copy.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: dictionaries satisfy all component references.

### Task 3: Migrate content data to localized objects

**Files:**
- Modify: `src/config/data.ts`
- Modify: `src/config/constants.ts` if labels must localize

**Step 1: Write the failing test**

Update one consumer to expect localized content fields.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: single-language data shape no longer satisfies consumers.

**Step 3: Write minimal implementation**

Convert homepage sections, project summaries/details, services, news, and about text into `LocalizedText` or localized arrays.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: data compiles with all updated consumers.

### Task 4: Add visible language switch controls

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Step 1: Write the failing test**

Reference current language controls in header and mobile sheet.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build fails before control wiring exists.

**Step 3: Write minimal implementation**

Use `useLanguage()` in header, render `EN / 中 / IT`, and wire desktop/mobile switching.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: controls compile and render.

### Task 5: Replace hard-coded page copy with localized rendering

**Files:**
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/features/home/HomePage.tsx`
- Modify: `src/features/about/AboutPage.tsx`
- Modify: `src/features/exhibition/ExhibitionPage.tsx`
- Modify: `src/features/interior/InteriorPage.tsx`
- Modify: `src/features/services/ServicesPage.tsx`
- Modify: `src/features/news/NewsPage.tsx`
- Modify: `src/features/contact/ContactPage.tsx`
- Modify: `src/features/projects/ProjectDetailPage.tsx`
- Modify: `src/features/not-found/NotFoundPage.tsx`

**Step 1: Write the failing test**

Update components to consume translation keys/localized data that do not yet exist in code paths.

**Step 2: Run test to verify it fails**

Run: `npm run build`
Expected: build catches missing imports/keys/types until all components are migrated.

**Step 3: Write minimal implementation**

Replace hard-coded strings with `t` and `getLocalizedText(...)` throughout the listed pages.

**Step 4: Run test to verify it passes**

Run: `npm run build`
Expected: all pages compile using localized data.

### Task 6: Verify whole-site switching behavior

**Files:**
- Modify: `progress.md`

**Step 1: Run verification**

Run:
- `npm run build`
- Start local dev server if needed
- Manually spot-check Home, About, Exhibition, Interior, Services, News, Contact, Project Detail, and 404 in all three languages

**Step 2: Document results**

Record verification outcomes in `progress.md`.

**Step 3: Commit**

```bash
git add .
git commit -m "Add full-site trilingual language switching"
```
