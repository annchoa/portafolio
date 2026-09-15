import styles from '@/components/sections/Projects.module.css';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { BleedBlock } from '@/components/ui/BleedBlock';
import { DisplayHeading } from '@/components/ui/DisplayHeading';
import { ProjectShot } from '@/components/ui/ProjectShot';
import { TextColumns } from '@/components/ui/TextColumns';
import { useLanguage } from '@/hooks/useLanguage';

export function Projects() {
  const { copy } = useLanguage();

  return (
    <Section id="projects" labelledBy="projects-heading">
      <BleedBlock color="var(--projects-color)" left={-32} top={420} width={148} height={633} />

      <Container bleed>
        <DisplayHeading id="projects-heading" color="var(--projects-color)">
          {copy.sections.projects}
        </DisplayHeading>
      </Container>

      {copy.projects.map((project) => (
        <Container key={project.label}>
          <article className={styles.project}>
            <h3 className={styles.label}>{project.label}</h3>

            <div className={styles.shots}>
              {project.shots.map((shot, index) => (
                <ProjectShot key={index} {...shot} />
              ))}
            </div>

            <TextColumns paragraphs={project.paragraphs} />
          </article>
        </Container>
      ))}
    </Section>
  );
}
