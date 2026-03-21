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

### Chinese Style Reference Findings
- Chinese architecture and design studio websites tend to use shorter sentences, fewer abstract qualifiers, and more direct references to materials, light, circulation, and execution.
- Navigation and section labels are usually compact, often closer to `工作室`, `项目`, `服务`, and `动态` than to longer marketing phrasing.
- Native-feeling Chinese project text usually describes what the space does and how it is organized, rather than mirroring English sentence structure or stacking conceptual nouns.

### Core Pages Polish Focus
- The next pass should optimize copy in rendered context, not only in isolation.
- The highest-value pages for this pass are Home, About, Exhibition, and Interior because they define the studio voice and are the most likely entry pages for visitors.
- The review should focus on title hierarchy, sentence density, CTA tone, and whether list-page summaries read naturally at card scale.

### Browser Review: Home + About in Chinese
- Home:
  - The homepage hero is visually image-led, so the most important Chinese text is the design-philosophy block and the final CTA rather than the hero subtitle.
  - The current design-philosophy paragraph reads clearly but is still slightly dense on the page; it can be shortened by one clause without losing meaning.
  - The CTA headline works, but the supporting sentence can be made more direct and slightly less explanatory.
  - Project-card titles and metadata read naturally in Chinese and do not currently need structural changes.
- About:
  - The three-line hero statement works visually and tonally, but the third line can be made a little firmer and less abstract.
  - The three studio-introduction paragraphs read professionally, but together they are still slightly text-heavy in the rendered layout; each paragraph can be tightened.
  - Service-card labels and policy headings are now much closer to native Chinese usage, but some body text can be shortened to improve scanning.
  - Team-section titles and role labels already fit the page well and do not need further compression.

### Browser Review: Exhibition + Interior in Chinese
- Exhibition:
  - The page title works well, but the subtitle is still slightly long and wraps with a bit too much explanatory weight for the visual style.
  - The list page itself feels clean; project-card titles and metadata already fit the layout.
  - The filter/search row reads clearly overall, though the top-right collaboration CTA across the site can be made more mature and less generic.
- Interior:
  - The interior page subtitle is close, but it can be tightened slightly so the rhythm matches the stronger typography of the hero title.
  - The grid cards read naturally and do not show obvious overflow or awkward metadata phrasing.
  - The page confirms that the second-pass work should concentrate on hero/subtitle tone and shared CTA language more than on list-card rewriting.

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

### Final Polish Decisions for the Four Core Chinese Pages
- Home:
  - The design-philosophy paragraph benefits from one tighter clause so the section reads with more ease in the centered layout.
  - The shared CTA should sound more grounded and project-oriented, so `项目咨询` and a more direct supporting sentence fit the page better than a generic collaboration prompt.
- About:
  - The hero line is stronger as `构建可感的空间。`, which feels firmer and less abstract in Chinese.
  - The three studio paragraphs work better after removing a little explanatory padding and keeping the emphasis on background, method, and execution network.
  - Service-card outcome lines should stay compact because they are scanned more than they are read in full.
- Exhibition:
  - The subtitle reads better after being shortened to a more direct statement about concept, drawings, coordination, and exhibition experience.
- Interior:
  - The subtitle now matches the page typography more closely by using a shorter, calmer rhythm centered on lifestyle, proportion, and materials.

### Final Browser Check: Core Chinese Pages
- A second rendered-page pass on Home, About, Exhibition, and Interior confirmed the tightened Chinese copy appears in the UI as intended.
- The updated labels `服务` and `项目咨询` sit comfortably in the header without crowding the layout.
- The Home design-philosophy block and About middle section both read lighter than in the previous pass.
- The Exhibition and Interior hero subtitles now feel more proportionate to their page titles and no longer carry excess explanatory weight.
- No new overflow, broken wrapping, or metadata-format issues were observed in the final Chinese screenshots.

### Additional Polish Focus: Project Detail + News
- The next most visible translation-like copy after the four core pages sits in project-detail hero summaries, opening paragraphs, closing paragraphs, and the short items on the News page.
- On project-detail pages, the weakest Chinese lines tended to sound explanatory rather than editorial, especially phrases like `项目想说明的是` and summary lines written too close to the English source structure.
- On the News page, the card layout is clean, but some Chinese titles still read like internal notes rather than public-facing studio updates.

### Rendered Check: Project Detail + News
- Headless Chrome DOM checks on `/news`, `/exhibition/p1`, and `/interior/i3` confirmed the revised Chinese copy is rendering in the app after the latest edits.
- The updated news titles now read more like published studio updates: `快闪展亭方案入围`, `Runway Curve Campus 方案发布`, and `分享会：微型疗愈空间`.
- The Highfield project-detail summary and first paragraph now read more directly in the hero-and-body layout, with less of the original explanatory tone.
- The Xiangyang South Road project-detail summary and closing paragraph now feel more native in Chinese, especially after removing the `项目想说明的是` construction.
