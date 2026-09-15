import type { Copy } from '@/types/content';
import { es } from '@/content/es';

/**
 * El .fig sólo contiene la versión en español; la biografía inglesa es su
 * traducción. El resto del contenido (etiquetas, enlaces, cifras) no cambia.
 */
export const en: Copy = {
  ...es,
  bio: 'I was born among volcanoes, 2,754 m above sea level. I studied journalism and eight years ago I changed profession and country. In Spain I took a Master in Information Management and started programming at a self-managed school in Valencia, la Devescola. For six years I have built software for ClimateTrade, QueryLayer and Passporter. An advocate of agile methodologies and Lean UX, I research independently into the integration of design in web platforms.',
};
