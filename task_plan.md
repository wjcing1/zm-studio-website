# Task Plan: Whole-site Trilingual Language & Copy Refinement

## Goal
Maintain full-site English, Chinese, and Italian language switching while refining the Chinese and Italian copy so the site reads naturally, professionally, and consistently across all pages.

## Current Phase
Phase 6

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
- [ ] Deliver outcome to user
- **Status:** in_progress

### Phase 6: Copy Localization Refresh
- [x] Confirm tone direction and scope with the user
- [x] Review the existing Chinese and Italian copy sources
- [x] Write approved design and implementation docs
- [x] Rewrite UI and content copy in `src/i18n/*.ts` and `src/config/data.ts`
- [x] Run build and spot-check key pages
- [ ] Deliver the refined copy update to the user
- **Status:** in_progress

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
