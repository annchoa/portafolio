import type { ReactNode } from 'react';
import styles from '@/components/layout/Section.module.css';

interface SectionProps {
  children: ReactNode;
  id?: string;
  labelledBy?: string;
}

export function Section({ children, id, labelledBy }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={labelledBy}>
      {children}
    </section>
  );
}
