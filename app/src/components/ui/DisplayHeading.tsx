import type { ReactNode } from 'react';
import styles from '@/components/ui/DisplayHeading.module.css';

interface DisplayHeadingProps {
  children: ReactNode;
  /** Variable CSS de color de sección, p. ej. `var(--projects-color)` */
  color?: string;
  align?: 'left' | 'right';
  /** `alt` usa el tamaño de display secundario (180px en el diseño) */
  size?: 'default' | 'alt';
  id?: string;
}

export function DisplayHeading({
  children,
  color = 'var(--title-color)',
  align = 'left',
  size = 'default',
  id,
}: DisplayHeadingProps) {
  return (
    <h2
      id={id}
      className={`${styles.heading} ${styles[align]} ${size === 'alt' ? styles.alt : ''}`}
      style={{ color }}
    >
      {children}
    </h2>
  );
}
