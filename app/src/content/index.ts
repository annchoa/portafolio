import type { Copy, Language } from '@/types/content';
import { es } from '@/content/es';
import { en } from '@/content/en';

export const copyByLanguage: Record<Language, Copy> = { ES: es, EN: en };

export const LANGUAGES: Language[] = ['EN', 'ES'];
