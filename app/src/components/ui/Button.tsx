import type { ButtonHTMLAttributes } from 'react';
import styles from '@/components/ui/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estado activo: aplica el relleno de color primario y el chip de fondo */
  active?: boolean;
}

export function Button({ active = false, children, ...props }: ButtonProps) {
  return (
    <span className={`${styles.chip} ${active ? styles.chipActive : ''}`}>
      <button
        type="button"
        className={`${styles.button} ${active ? styles.active : ''}`}
        aria-pressed={active}
        {...props}
      >
        {children}
      </button>
    </span>
  );
}
