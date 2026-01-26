// i18n index - Language system
import { en } from './en';
import { zh } from './zh';
import { it } from './it';

export type Language = 'en' | 'zh' | 'it';

export const translations = {
    en,
    zh,
    it
} as const;

export const languageNames: Record<Language, string> = {
    en: 'English',
    zh: '中文',
    it: 'Italiano'
};

export type Translations = typeof en;
