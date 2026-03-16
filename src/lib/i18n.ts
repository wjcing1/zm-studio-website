import type { Language } from "@/i18n";

export type LocalizedText = string | Record<Language, string>;
export type LocalizedTextList = string[] | Record<Language, string[]>;

export function getLocalizedText(value: LocalizedText, language: Language): string {
  if (typeof value === "string") return value;
  return value[language] ?? value.en ?? Object.values(value)[0] ?? "";
}

export function getLocalizedTextList(value: LocalizedTextList, language: Language): string[] {
  if (Array.isArray(value)) return value;
  return value[language] ?? value.en ?? Object.values(value)[0] ?? [];
}
