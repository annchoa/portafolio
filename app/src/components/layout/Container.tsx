import type { ReactNode } from 'react';
import styles from '@/components/layout/Container.module.css';

interface ContainerProps {
  children: ReactNode;
  /** `true` para el contenido que ignora el gutter (títulos de display) */
  bleed?: boolean;
}

export function Container({ children, bleed = false }: ContainerProps) {
  return (
    <div className={`${styles.container} ${bleed ? styles.bleed : ''}`}>{children}</div>
  );
}
