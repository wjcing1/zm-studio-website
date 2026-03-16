# ZM Studio Trilingual Site Design

## Goal
Turn the current partial language system into a whole-site English, Chinese, and Italian experience where both interface copy and content data switch instantly with the selected language.

## Confirmed Scope
- Keep the existing route structure unchanged.
- Support `en`, `zh`, and `it`.
- Add a visible language switcher in the header and mobile navigation.
- Translate all major pages, including project list/detail content.
- Persist the user's language choice with the existing local storage approach.

## Architecture
- Keep `LanguageContext` as the single source of truth for current language and translated UI copy.
- Expand `src/i18n/*` to cover reusable UI labels, buttons, placeholders, section headings, filters, and page metadata.
- Convert single-language content in `src/config/data.ts` into localized objects so pages can render content by current language.
- Add a small helper to read localized values consistently from content data.

## UI Behavior
- Desktop: show `EN / 中 / IT` in the header.
- Mobile: show the same options inside the slide-out navigation.
- Language changes should update the current page immediately without navigation or full refresh.
- The selected language should persist across page reloads.

## Implementation Boundaries
- In scope: UI copy, project content, services, news, about content, form placeholders, page titles, detail labels.
- Out of scope: localized URLs, SEO hreflang/canonical matrix, CMS/editor tooling.

## Risks
- `src/config/data.ts` is large and will require careful migration to avoid type breakage.
- Some labels currently come from constants and may need localization-aware rendering rather than static strings.
- Project detail content and summary fields must stay aligned across list/detail views.
