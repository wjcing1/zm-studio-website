# Task Plan: Whole-site Trilingual Language Switch

## Goal
Implement full-site English, Chinese, and Italian language switching so all UI text and content data change with the selected language and persist across refreshes.

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
- [ ] Deliver outcome to user
- **Status:** in_progress

## Key Questions
1. Should language routing be URL-based? No, keep routes unchanged.
2. Which languages should ship now? English, Chinese, and Italian.

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| Keep current route structure | Avoids SEO/routing scope creep and keeps rollout focused on working language switching |
| Use translated UI dictionaries plus localized content objects | Separates reusable UI copy from page/project content and scales better |
| Place language switcher in header and mobile sheet | Makes language control visible on all pages and screen sizes |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| None yet | 1 | N/A |

## Notes
- Preserve existing behavior while replacing hard-coded copy.
- Reuse current `LanguageContext` instead of introducing a second i18n system.
- Verify that project lists and project detail pages both switch content language.
