// Language Context - manages app language state
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, languageNames, type Language, type Translations } from '@/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    languageNames: typeof languageNames;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'zm-studio-language';

function getInitialLanguage(): Language {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (stored === 'en' || stored === 'zh' || stored === 'it')) {
        return stored;
    }
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('it')) return 'it';
    return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    useEffect(() => {
        // Sync with localStorage on mount
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && (stored === 'en' || stored === 'zh' || stored === 'it')) {
            setLanguageState(stored);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            t: translations[language],
            languageNames
        }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
