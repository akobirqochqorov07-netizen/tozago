import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'uz';

interface Translations {
    [key: string]: any;
}

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const defaultContext: LanguageContextType = {
    language: 'ru',
    setLanguage: () => { },
    t: (key: string) => key,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

// Extremely simple translation function looking up dot notation
function getNestedValue(obj: any, path: string): string {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
}

export const LanguageProvider = ({
    children,
    translations
}: {
    children: ReactNode;
    translations: Record<Language, Translations>
}) => {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            return (localStorage.getItem('language') as Language) || 'ru';
        }
        return 'ru';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        const currentTranslations = translations[language];
        return getNestedValue(currentTranslations, key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
