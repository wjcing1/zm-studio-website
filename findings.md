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

## Follow-up: Copy Refinement Findings

### New Requirements
- Refine the Chinese copy so it reads like a native architecture/design studio website rather than a direct translation.
- Refine the Italian copy so it feels natural in an Italian design and exhibition context.
- Keep the English copy as the semantic reference and do not change project facts, timelines, or service scope.
- Apply the rewrite across the whole site, not just interface labels.

### Copy Audit Findings
- `src/i18n/zh.ts` contains several UI labels and short marketing lines with direct-translation phrasing such as "开始项目" and "和真实可执行的落地能力".
- `src/i18n/it.ts` is broadly understandable, but several lines still mirror English sentence structure too closely and can be made more idiomatic.
- Most long-form localized copy lives in `src/config/data.ts`, including home sections, project summaries/bodies, services, team bios, and news blurbs.
- The strongest opportunities are consistency of tone, terminology, and sentence rhythm rather than factual corrections.

### Copy Strategy Decisions
| Decision | Rationale |
|----------|-----------|
| Use a professional, restrained studio tone in Chinese | Matches the user's preferred direction and the site's visual identity |
| Use a natural Italian editorial style instead of literal translation | Produces more credible Italian copy for design/exhibition readers |
| Rewrite only `zh` and `it` strings | Keeps scope targeted while preserving the English source meaning |
| Avoid changing data structure or UI behavior | This is a content-quality pass, not a feature change |

### Copy Files in Scope
- `/Users/jiachenwang/Desktop/zm网站/src/i18n/zh.ts`
- `/Users/jiachenwang/Desktop/zm网站/src/i18n/it.ts`
- `/Users/jiachenwang/Desktop/zm网站/src/config/data.ts`

### Copy Verification Findings
- `npm run build` completed successfully after the rewrite.
- Playwright snapshots confirmed that the refreshed copy renders correctly on:
  - Home in Chinese
  - Home in Italian
  - About in Chinese
  - About in Italian
  - Exhibition project detail in Chinese
  - Exhibition project detail in Italian
- No obvious overflow or broken long-paragraph layout issues were observed in those checks.
