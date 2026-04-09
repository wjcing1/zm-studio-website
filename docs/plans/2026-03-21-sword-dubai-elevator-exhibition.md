# SWORD Dubai Elevator Exhibition Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a new exhibition project entry for SWORD Dubai Elevator Exhibition 2026 with four images and trilingual copy.

**Architecture:** Keep the existing exhibition-project data model unchanged and add one new `EXHIBITION_PROJECTS` entry so the list page and detail page pick it up automatically. Copy the supplied renders into `public/images/exhibition/` and wire the first image as the cover plus the remaining images as gallery assets.

**Tech Stack:** React, TypeScript, Vite, static assets in `public/`, project content in `src/config/data.ts`

---

### Task 1: Add project images

**Files:**
- Create: `public/images/exhibition/p7-cover.png`
- Create: `public/images/exhibition/p7-1.png`
- Create: `public/images/exhibition/p7-2.png`
- Create: `public/images/exhibition/p7-3.png`

**Step 1: Copy the approved source images into the exhibition assets folder**

**Step 2: Confirm the new files exist and match the intended source images**

### Task 2: Add the new exhibition project entry

**Files:**
- Modify: `src/config/data.ts`

**Step 1: Add a new `p7` exhibition project after the existing exhibition entries**

**Step 2: Fill in trilingual title, location, summary, body, tags, year, and gallery paths**

**Step 3: Keep the structure aligned with the current exhibition project schema so list/detail pages work without component changes**

### Task 3: Verify the new project renders cleanly

**Files:**
- Modify: `src/config/data.ts` if verification finds content issues

**Step 1: Run `npm run build`**

**Step 2: Confirm the build succeeds and the new asset paths resolve**

**Step 3: Report the added project name, id, and asset files**
