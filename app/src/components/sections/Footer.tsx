import styles from '@/components/sections/Footer.module.css';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className={styles.footer}>
      <img className={styles.outline} src="/assets/wave-band.svg" alt="" aria-hidden="true" />

      <p className={styles.stat}>
        <span className={styles.place}>{copy.footer.place}</span>
        <span className={styles.elevation}>{copy.footer.elevation}</span>
      </p>
    </footer>
  );
}
