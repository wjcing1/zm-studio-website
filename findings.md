# Findings & Decisions

## Requirements
- Provide whole-site language switching, not just navigation labels.
- Support three languages: English, Chinese, Italian.
- Persist the selected language across refreshes.
- Translate UI copy, content sections, project data, services, news, forms, and detail-page labels.

## Research Findings
- The app already has `LanguageContext` with persisted language state and browser-language fallback.
- The app already has `src/i18n/en.ts`, `src/i18n/zh.ts`, and `src/i18n/it.ts`, but coverage is partial.
- Most pages still use hard-coded English strings directly in TSX files.
- Most content data in `src/config/data.ts` is single-language and must be migrated to localized fields.
- Header and footer currently do not consume the language context.

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| Add a shared localized-text type/helper | Avoids ad hoc `language === 'zh' ? ...` branches throughout the app |
| Migrate data objects incrementally in `src/config/data.ts` | Centralizes content translation work in one source of truth |
| Expand translation dictionaries for page-level UI strings | Keeps component code readable and avoids repeating literals |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| Existing i18n only covers a small subset of UI | Expand dictionaries and wire all pages to context |

## Resources
- `/Users/jiachenwang/Desktop/zm网站/src/contexts/LanguageContext.tsx`
- `/Users/jiachenwang/Desktop/zm网站/src/config/data.ts`
- `/Users/jiachenwang/Desktop/zm网站/src/i18n/en.ts`
- `/Users/jiachenwang/Desktop/zm网站/src/i18n/zh.ts`
- `/Users/jiachenwang/Desktop/zm网站/src/i18n/it.ts`

## Visual/Browser Findings
- None needed for this implementation phase.
