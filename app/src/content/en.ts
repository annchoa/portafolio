import type { Copy } from '@/types/content';
import { asset } from '@/lib/asset';
import { es } from '@/content/es';

const PLACEHOLDER =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.';

export const en: Copy = {
  ...es,
  role: 'PRODUCT ENGINEER',
  bio: [
    'I was born among volcanoes, 2,754 meters above sea level. I studied journalism, and 8 years ago I changed both my career and my country. I did a Master\'s in Information Management at the ',
    { label: 'UPV', href: 'https://www.upv.es/index-en.html' },
    ', and started coding at ',
    { label: 'Devscola', href: 'https://gitlab.com/devscola' },
    ', a self-managed school in Valencia. For the last six years, I have been building software for companies like QueryLayer (now ',
    { label: 'TrustWorks', href: 'https://trustworks.io' },
    '), Belike Software (acquired by ',
    { label: 'Sngular', href: 'https://www.sngular.com' },
    ' in 2022), ',
    { label: 'Passporter', href: 'https://passporterapp.com' },
    ' and ',
    { label: 'Digital Tack', href: 'https://www.digitaltack.com/' },
    '.',
  ],
  sections: {
    projects: 'PROJECTS',
    experience: 'EXPERIENCE',
    community: 'COMMUNITY &\nRECOGNITION',
    contact: 'contact me',
  },
  projects: [
    {
      label: 'passporter',
      paragraphs: [PLACEHOLDER, PLACEHOLDER],
      shots: [
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: false },
        { src: asset('assets/portrait-tile.png'), alt: '', onCard: false },
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
    { label: 'Designer — Web and print/digital materials designer — VLC Tech Fest (2024 and 2025 editions)', href: 'https://vlctechfest.org/es/'},
    { label: 'Speaker — Test-Driven Development, Drupal Camp Spain (2023)', href: 'https://www.youtube.com/watch?v=V9qjpxck9BE'},
    { label: 'Speaker — Extreme Programming, Drupal Camp Spain (2024)', href: ''},
    { label: 'Mentor — Technovation Challenge Valencia (2019)', href: 'https://technovationchallenge.org/'},
    { label: 'Ambassador — Women in Data Science (WiDS) at Stanford University (2019–2020) and WiDS Worldwide (2021–2022)', href: 'https://widsvalencia.vlctechhub.org/'},
  ],
  links: [
    { icon: 'linkedin', label: 'linkedin.com/in/annchoa', href: 'https://linkedin.com/in/annchoa' },
    { icon: 'github', label: 'github.com/annchoa', href: 'https://github.com/annchoa' },
    { icon: 'gitlab', label: 'gitlab.com/annchoa/', href: 'https://gitlab.com/annchoa/' },
  ],
  footer: {
    place: 'chimborazo',
    elevation: '6,263.47 m',
  },
};
