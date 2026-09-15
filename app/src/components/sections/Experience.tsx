import styles from '@/components/sections/Experience.module.css';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { BleedBlock } from '@/components/ui/BleedBlock';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { TextColumns } from '@/components/ui/TextColumns';
import { useLanguage } from '@/hooks/useLanguage';

export function Experience() {
  const { copy } = useLanguage();

  return (
    <Section id="experience" labelledBy="experience-heading">
      <BleedBlock color="var(--experience-color)" right={-24} top={450} width={87} height={300} />

      <Container bleed>
        <div className={styles.heading}>
          <DisplayHeading id="experience-heading" color="var(--experience-color)" align="right">
            {copy.sections.experience}
          </DisplayHeading>
        </div>
      </Container>

      <Container>
        <div className={styles.body}>
          <TextColumns paragraphs={copy.experience.paragraphs} />
        </div>
      </Container>
    </Section>
  );
}
