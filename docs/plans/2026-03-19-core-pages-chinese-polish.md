# Core Pages Chinese Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the Chinese copy on the four core pages so it reads naturally in context, matches the site's visual rhythm, and feels like a mature Chinese architecture/design studio website.

**Architecture:** Keep the current localization system and page structure unchanged. Use browser-based review to inspect the actual rendering of the Chinese homepage, About page, Exhibition page, and Interior page, then make targeted copy edits in `src/i18n/zh.ts` and `src/config/data.ts` so wording, hierarchy, and page rhythm feel coherent in the rendered UI.

**Tech Stack:** React, TypeScript, Vite, static localized content in `src/i18n/zh.ts` and `src/config/data.ts`, Playwright CLI for visual page review

---

### Task 1: Review rendered Chinese pages

**Files:**
- Review: `src/features/home/HomePage.tsx`
- Review: `src/features/about/AboutPage.tsx`
- Review: `src/features/exhibition/ExhibitionPage.tsx`
- Review: `src/features/interior/InteriorPage.tsx`

**Step 1: Start a local preview server**

Run a local Vite server so the pages can be inspected in the browser.

**Step 2: Open the Chinese homepage and take notes**

Check hero, CTA, section headings, project-card text, and button tone.

**Step 3: Open the Chinese About, Exhibition, and Interior pages**

Capture page-specific issues such as sentence length, section-title fit, and repeated terminology.

### Task 2: Polish shared Chinese copy and page-level copy

**Files:**
- Modify: `src/i18n/zh.ts`
- Modify: `src/config/data.ts`

**Step 1: Tighten homepage and shared UI wording**

Adjust navigation labels, section headings, CTA text, and any repeated phrases that feel too generic or too literal in-page.

**Step 2: Tighten About page wording**

Refine hero statement, studio introduction, service-card framing, and policy copy so it feels more editorial and less translated.

**Step 3: Tighten Exhibition and Interior page wording**

Refine page subtitles, list-page labels, and project list summaries so they read naturally at card/list scale.

### Task 3: Verify the rendered result

**Files:**
- Review: `src/i18n/zh.ts`
- Review: `src/config/data.ts`

**Step 1: Rebuild the site**

Run: `npm run build`
Expected: Build succeeds with no TypeScript or Vite errors.

**Step 2: Re-open the four Chinese pages**

Confirm that the revised copy fits the page layout and that no section feels overly long or tonally inconsistent.

**Step 3: Summarize any remaining editorial gaps**

Identify any last wording that may still benefit from a future brand-level pass.
