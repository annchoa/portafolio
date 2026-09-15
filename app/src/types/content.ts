export type Language = 'ES' | 'EN';

export interface Project {
  /** Etiqueta en minúscula, tal y como la fija el design system */
  label: string;
  /** Dos columnas de copy por proyecto */
  paragraphs: [string, string];
  /** Dos huecos de imagen; `true` = sobre tarjeta blanca, `false` = a pelo sobre el navy */
  shots: [ProjectShot, ProjectShot];
}

export interface ProjectShot {
  src: string;
  alt: string;
  onCard: boolean;
}

export interface ExperienceEntry {
  paragraphs: [string, string];
}

export type ContactIcon = 'linkedin' | 'github' | 'gitlab';

export interface ContactLink {
  icon: ContactIcon;
  label: string;
  href: string;
}

export interface Community {
  label: string;
  href: string;
}

export interface Copy {
  name: string;
  role: string;
  bio: string;
  sections: {
    projects: string;
    experience: string;
    community: string;
    contact: string;
  };
  projects: Project[];
  experience: ExperienceEntry;
  community: Community[];
  links: ContactLink[];
  footer: {
    place: string;
    elevation: string;
  };
}
