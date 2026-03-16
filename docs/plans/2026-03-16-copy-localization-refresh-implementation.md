# Copy Localization Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine all Chinese and Italian site copy so it reads naturally and consistently without changing facts, behavior, or data shape.

**Architecture:** Keep the existing trilingual data structure intact and update only localized string values. Use the English copy as the semantic reference, then rewrite `zh` and `it` strings in place across UI dictionaries and content data so every page continues to render through the current language helpers.

**Tech Stack:** React, TypeScript, Vite, static localized content in `src/i18n/*.ts` and `src/config/data.ts`

---

## Notes Before Execution
- This is a content-quality pass, not a feature change.
- No new automated tests are needed; verification relies on `npm run build` plus targeted page review.
- Keep edits ASCII-only unless the file already uses non-ASCII text, which these localization files do.

### Task 1: Refresh shared UI copy

**Files:**
- Modify: `src/i18n/zh.ts`
- Modify: `src/i18n/it.ts`

**Step 1: Rewrite navigation, CTA, filter, contact, and detail labels in `src/i18n/zh.ts`**

Focus on removing direct-translation phrasing and tightening the overall studio voice.

**Step 2: Rewrite the corresponding labels in `src/i18n/it.ts`**

Favor natural Italian wording over English-shaped sentence structure.

**Step 3: Review both files for terminology consistency**

Check repeated terms such as project actions, filters, and section headings.

### Task 2: Refresh homepage and brand-introduction copy

**Files:**
- Modify: `src/config/data.ts`

**Step 1: Rewrite Chinese and Italian copy in `HOME_SECTIONS`**

Update headings, subtitles, and body text so the homepage voice is concise and consistent.

**Step 2: Rewrite Chinese and Italian copy in `ABOUT_STUDIO_PARAGRAPHS` and `ABOUT_KEYWORDS`**

Keep the studio positioning consistent with the approved tone.

**Step 3: Rewrite Chinese and Italian copy in `ABOUT_SERVICE_CARDS`, `ABOUT_MUTUAL_CONDUCT_PARAGRAPHS`, `ABOUT_QUALITY_PARAGRAPHS`, and `ABOUT_QUALITY_BULLETS`**

Preserve factual meaning while improving readability and professional tone.

### Task 3: Refresh team, services, and news copy

**Files:**
- Modify: `src/config/data.ts`

**Step 1: Rewrite Chinese and Italian `specialty` text in `MILAN_TEAM` and `SHANGHAI_TEAM`**

Keep each role distinct while aligning the overall voice.

**Step 2: Rewrite Chinese and Italian text in `SERVICES`**

Make each service description tighter and more natural in both locales.

**Step 3: Rewrite Chinese and Italian `title` and `desc` values in `NEWS` where needed**

Keep titles punchy and descriptions concise.

### Task 4: Refresh project summaries and detail copy

**Files:**
- Modify: `src/config/data.ts`

**Step 1: Rewrite Chinese and Italian `summary` fields across `EXHIBITION_PROJECTS` and `INTERIOR_PROJECTS`**

Keep summaries short, polished, and consistent in tone.

**Step 2: Rewrite Chinese and Italian `body` fields across `EXHIBITION_PROJECTS`**

Preserve each project's narrative while improving rhythm, terminology, and idiomatic phrasing.

**Step 3: Rewrite Chinese and Italian `body` fields across `INTERIOR_PROJECTS`**

Keep the interior project language calm, precise, and materially grounded.

### Task 5: Verify build and do targeted review

**Files:**
- Review: `src/i18n/zh.ts`
- Review: `src/i18n/it.ts`
- Review: `src/config/data.ts`

**Step 1: Run the production build**

Run: `npm run build`
Expected: Vite build completes successfully with no TypeScript errors.

**Step 2: Spot-check the rendered copy in Chinese and Italian**

Review Home, About, Services, and one project detail page per category to ensure the new wording fits the UI and remains internally consistent.

**Step 3: Summarize notable terminology choices and any remaining copy risks**

Document any areas that might still merit a second editorial pass.
