import styles from '@/components/ui/ProjectShot.module.css';
import type { ProjectShot as ProjectShotData } from '@/types/content';

export function ProjectShot({ src, alt, onCard }: ProjectShotData) {
  return (
    <figure className={`${styles.shot} ${onCard ? styles.onCard : styles.bare}`}>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </figure>
  );
}
