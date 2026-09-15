import { createContext } from 'react';
import type { Copy, Language } from '@/types/content';

export interface LanguageContextValue {
  language: Language;
  copy: Copy;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
