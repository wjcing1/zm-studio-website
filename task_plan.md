# Task Plan: Whole-site Trilingual Language & Copy Refinement

## Goal
Maintain full-site English, Chinese, and Italian language switching while refining the Chinese and Italian copy so the site reads naturally, professionally, and consistently across all pages.

## Current Phase
Phase 5

## Phases

### Phase 1: Requirements & Discovery
- [x] Understand user intent
- [x] Identify constraints and requirements
- [x] Document findings in findings.md
- **Status:** complete

### Phase 2: Planning & Structure
- [x] Define technical approach
- [x] Create implementation structure
- [x] Document decisions with rationale
- **Status:** complete

### Phase 3: Implementation
- [x] Add localized data helpers and migrate content structures
- [x] Add visible language switcher in header/mobile menu
- [x] Replace hard-coded UI copy across pages
- [x] Localize project detail labels and content rendering
- **Status:** complete

### Phase 4: Testing & Verification
- [x] Verify language switching across all key pages
- [x] Run build and document results in progress.md
- [x] Fix any issues found
- **Status:** complete

### Phase 5: Delivery
- [x] Review changed files
- [x] Summarize behavior changes and remaining gaps
- [x] Deliver outcome to user
- **Status:** complete

### Phase 6: Copy Localization Refresh
- [x] Confirm tone direction and scope with the user
- [x] Review the existing Chinese and Italian copy sources
- [x] Write approved design and implementation docs
- [x] Rewrite UI and content copy in `src/i18n/*.ts` and `src/config/data.ts`
- [x] Run build and spot-check key pages
- [x] Deliver the refined copy update to the user
- **Status:** complete

### Phase 7: Native Chinese Tone Refresh
- [x] Research the tone of Chinese architecture and design studio websites
- [x] Rewrite the Chinese UI copy to sound more native and editorial
- [x] Rewrite Chinese homepage, About, services, news, and project copy
- [x] Fix remaining localization leaks in footer, dates, and view-mode labels
- [x] Deliver the native-tone Chinese update to the user
- **Status:** complete

### Phase 8: Core Pages Chinese Polish
- [x] Confirm the user wants page-by-page polishing on the four core pages
- [x] Review current planning files and preview tooling
- [x] Inspect the rendered Chinese Home, About, Exhibition, and Interior pages
- [x] Apply targeted copy edits based on actual page rhythm
- [x] Rebuild and do a second visual pass
- [x] Deliver the page-by-page polish outcome to the user
- **Status:** complete

### Phase 9: Project Detail and News Chinese Polish
- [x] Inspect the rendered Chinese News page and representative project-detail pages
- [x] Tighten project-detail summaries and selected body copy in localized data
- [x] Tighten Chinese News titles and summaries
- [x] Rebuild and re-check rendered output
- [x] Deliver the follow-up polish outcome to the user
- **Status:** complete

## Key Questions
1. Should language routing be URL-based? No, keep routes unchanged.
2. Which languages should ship now? English, Chinese, and Italian.
3. What tone should guide the rewrite? Professional, restrained, and credible for an architecture/design studio site.
4. Which locales need copy refinement now? Chinese and Italian, using English as the semantic anchor.

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Keep current route structure | Avoids SEO/routing scope creep and keeps rollout focused on working language switching |
| Use translated UI dictionaries plus localized content objects | Separates reusable UI copy from page/project content and scales better |
| Place language switcher in header and mobile sheet | Makes language control visible on all pages and screen sizes |
| Rewrite Chinese and Italian against the English source meaning | Improves naturalness without changing project facts or content structure |
| Limit this pass to copy values, not data shape changes | Keeps the update low-risk and avoids unnecessary code churn |
| Use Chinese architecture-studio editorial tone as the new reference style | Better matches the user's request for copy that feels native instead of translated |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| None yet | 1 | N/A |

## Notes
- Preserve existing behavior while replacing hard-coded copy.
- Reuse current `LanguageContext` instead of introducing a second i18n system.
- Verify that project lists and project detail pages both switch content language.
- Keep English copy as the source-of-truth reference for meaning and facts.
- Focus this pass on `src/i18n/zh.ts`, `src/i18n/it.ts`, and localized copy in `src/config/data.ts`.
