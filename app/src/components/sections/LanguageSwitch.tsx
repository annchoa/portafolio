import styles from '@/components/sections/LanguageSwitch.module.css';
import { Button } from '@/components/ui/Button';
import { LANGUAGES } from '@/content';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switch} role="group" aria-label="Idioma / Language">
      {LANGUAGES.map((code) => (
        <Button key={code} active={language === code} onClick={() => setLanguage(code)}>
          {code}
        </Button>
      ))}
    </div>
  );
}
