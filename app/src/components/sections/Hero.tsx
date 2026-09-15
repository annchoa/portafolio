import styles from '@/components/sections/Hero.module.css';
import { asset } from '@/lib/asset';
import { LanguageSwitch } from '@/components/sections/LanguageSwitch';
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { copy } = useLanguage();

  return (
    <header className={styles.hero}>
      <img className={styles.scribble} src={asset('assets/green-scribble.svg')} alt="" aria-hidden="true" />

      <div className={styles.content}>
        <h1 className={styles.name}>{copy.name}</h1>
        <p className={styles.role}>{copy.role}</p>

        <p className={styles.bio}>
          {copy.bio.map((segment) =>
            typeof segment === 'string' ? (
              segment
            ) : (
              <a
                className={styles.link}
                key={segment.href}
                href={segment.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {segment.label}
              </a>
            ),
          )}
        </p>
        <LanguageSwitch />
      </div>
    </header>
  );
}
