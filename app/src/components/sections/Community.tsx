import styles from '@/components/sections/Community.module.css';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { BleedBlock } from '@/components/ui/BleedBlock';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { useLanguage } from '@/hooks/useLanguage';

export function Community() {
  const { copy } = useLanguage();

  return (
    <Section id="community" labelledBy="community-heading">

      <BleedBlock color="var(--community-color)" left={-20} top={550} width={305} height={179} />

      <Container bleed>
        <DisplayHeading id="community-heading" color="var(--community-color)" size="alt">
          {copy.sections.community}
        </DisplayHeading>
      </Container>

      <Container>
        <ul className={styles.list}>
          {copy.community.map((entry) => (
            <li className={styles.item} key={entry}>
              <span className={styles.bullet} aria-hidden="true">
                •
              </span>
              <span>{entry}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
