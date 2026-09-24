import type { ReactNode } from 'react';
import styles from '@/components/layout/SnakeBackdrop.module.css';
import { asset } from '@/lib/asset';

interface SnakeBackdropProps {
  children: ReactNode;
}

export function SnakeBackdrop({ children }: SnakeBackdropProps) {
  return (
    <div className={styles.backdrop}>
      <img className={styles.snake} src={asset('assets/snake.svg')} alt="" aria-hidden="true" />
      {children}
    </div>
  );
}
