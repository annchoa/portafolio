import styles from '@/components/ui/TextColumns.module.css';

interface TextColumnsProps {
  /** Dos columnas de copy, tal y como las dispone el diseño original */
  paragraphs: [string, string];
}

export function TextColumns({ paragraphs }: TextColumnsProps) {
  return (
    <div className={styles.columns}>
      {paragraphs.map((paragraph, index) => (
        <div className={styles.column} key={index}>
          <p>{paragraph}</p>
          <p>{paragraph}</p>
        </div>
      ))}
    </div>
  );
}
