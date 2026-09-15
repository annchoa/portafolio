import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { copyByLanguage } from '@/content';
import type { Language } from '@/types/content';

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = 'ES' }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const value = useMemo(
    () => ({ language, setLanguage, copy: copyByLanguage[language] }),
    [language],
  );

  return <LanguageContext value={value}>{children}</LanguageContext>;
}
