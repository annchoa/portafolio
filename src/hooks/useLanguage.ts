import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import type { LanguageContextValue } from '@/context/LanguageContext';

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }

  return context;
}
