# Native Chinese Copy Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework the site's Chinese copy so it reads like a native architecture and design studio website rather than a polished direct translation.

**Architecture:** Keep the current localization structure and UI behavior intact, but rewrite Chinese strings in place across `src/i18n/zh.ts` and the Chinese branches of `src/config/data.ts`. Apply a second-pass cleanup to a few component-level localization leaks where hard-coded English or awkward label reuse still shows through.

**Tech Stack:** React, TypeScript, Vite, static localized content in `src/i18n/*.ts` and `src/config/data.ts`

---

### Task 1: Tighten site-wide Chinese UI copy

**Files:**
- Modify: `src/i18n/zh.ts`

**Step 1: Rewrite navigation, CTA, and section labels**

Favor shorter, more editorial wording over literal interface translations.

**Step 2: Rewrite action labels, filters, and detail-page labels**

Make interactive language sound natural in Chinese design websites.

**Step 3: Review terminology consistency**

Align repeated terms such as `服务`, `项目`, `现场统筹`, `落地`, and `空间`.

### Task 2: Rewrite long-form Chinese content

**Files:**
- Modify: `src/config/data.ts`

**Step 1: Rewrite Chinese homepage and About copy**

Shorten sentences, reduce translation-shaped structure, and keep a restrained studio tone.

**Step 2: Rewrite Chinese services, news, and team text**

Make wording cleaner, more human, and more specific where possible.

**Step 3: Rewrite Chinese project summaries, body text, and location formatting**

Prefer concise spatial descriptions, natural Chinese sentence rhythm, and localized place formatting.

### Task 3: Fix remaining localization leaks

**Files:**
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/features/exhibition/ExhibitionPage.tsx`
- Modify: `src/features/interior/InteriorPage.tsx`
- Modify: `src/features/projects/ProjectsPage.tsx`

**Step 1: Replace remaining hard-coded English where visible in Chinese**

Clean up location text and decorative-image alt text.

**Step 2: Separate "view" action wording from "view mode" wording**

Avoid Chinese UI strings like `查看: 网格`.

### Task 4: Verify the copy refresh

**Files:**
- Review: `src/i18n/zh.ts`
- Review: `src/config/data.ts`

**Step 1: Run the production build**

Run: `npm run build`
Expected: Build succeeds with no TypeScript or Vite errors.

**Step 2: Spot-check the most copy-heavy pages**

Review Home, About, Services, News, and one project detail page per category in Chinese.

**Step 3: Summarize remaining editorial risks**

Call out any places that may still want a later brand/editorial pass.
