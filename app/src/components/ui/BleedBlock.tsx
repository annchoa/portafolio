import type { CSSProperties } from 'react';
import styles from '@/components/ui/BleedBlock.module.css';

interface BleedBlockProps {
  /** Variable CSS de color, p. ej. `var(--projects-color)` */
  color: string;
  width: number;
  height: number;
  top: number;
  left?: number;
  right?: number;
}

export function BleedBlock({ color, width, height, top, left, right }: BleedBlockProps) {
  const position: CSSProperties = {
    backgroundColor: color,
    width,
    height,
    top,
    left,
    right,
  };

  return <div className={styles.block} style={position} aria-hidden="true" />;
}
