import type { ReactNode } from 'react';
import styles from '@/components/layout/Page.module.css';

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <main className={styles.page}>{children}</main>;
}
