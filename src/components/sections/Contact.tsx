import styles from '@/components/sections/Contact.module.css';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { useLanguage } from '@/hooks/useLanguage';

export function Contact() {
  const { copy } = useLanguage();

  return (
    <Section id="contact" labelledBy="contact-heading">
      <Container>
        <div className={styles.contact}>
          <h2 id="contact-heading" className={styles.heading}>
            {copy.sections.contact}
          </h2>

          <div className={styles.links}>
            {copy.links.map((link) => (
              <a
                className={styles.link}
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
