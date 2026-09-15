import type { Copy } from '@/types/content';
import { asset } from '@/lib/asset';

const PLACEHOLDER =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.';

export const es: Copy = {
  name: 'andrea natalia\nnaranjo chávez',
  role: 'PRODUCT ENGINEER',
  bio: 'Nací entre volcanes, a 2,754 m sobre el nivel del mar. Estudié periodismo y hace 8 años cambié de profesión y país. Estudié en España un Master en Gestión de la Información y empecé a programar con una escuela autogestionada en Valencia, la Devescola. Hace 6 años he desarrollado software para ClimateTrade, QueryLayer y Passporter. Defensora de las metodologías ágiles y el Lean UX, investigo de forma autónoma por la integración del diseño en plataformas web.',
  sections: {
    projects: 'PROYECTOS',
    experience: 'EXPERIENCIA',
    community: 'COMUNIDAD y\nRECONOCIMIENTOS',
    contact: 'contáctame',
  },
  projects: [
    {
      label: 'passporter',
      paragraphs: [PLACEHOLDER, PLACEHOLDER],
      shots: [
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: false },
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: true },
      ],
    },
    {
      label: 'wiski',
      paragraphs: [PLACEHOLDER, PLACEHOLDER],
      shots: [
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: true },
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: false },
      ],
    },
  ],
  experience: {
    paragraphs: [PLACEHOLDER, PLACEHOLDER],
  },
  community: [
    'Speaker — Test-Driven Development, Drupal Camp Spain (2023)',
    'Speaker — Extreme Programming, Drupal Camp Spain (2024)',
    'Mentor — Technovation Challenge Valencia (2019)',
    'Ambassador — Women in Data Science (WiDS) at Stanford University (2019–2020) and WiDS Worldwide (2021–2022)',
  ],
  links: [
    { icon: 'linkedin', label: 'linkedin.com/in/annchoa', href: 'https://linkedin.com/in/annchoa' },
    { icon: 'github', label: 'github.com/annchoa', href: 'https://github.com/annchoa' },
    { icon: 'gitlab', label: 'gitlab.com/annchoa', href: 'https://gitlab.com/annchoa/' },
  ],
  footer: {
    place: 'chimborazo',
    elevation: '6,263.47 m',
  },
};
