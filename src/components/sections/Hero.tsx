import styles from '@/components/sections/Hero.module.css';
import { LanguageSwitch } from '@/components/sections/LanguageSwitch';
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { copy } = useLanguage();

  return (
    <header className={styles.hero}>
      <img className={styles.scribble} src="/assets/green-scribble.svg" alt="" aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.name}>{copy.name}</h1>
        <p className={styles.role}>{copy.role}</p>

        <LanguageSwitch />

        <p className={styles.bio}>{copy.bio}</p>
      </div>
    </header>
  );
}
