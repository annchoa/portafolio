import type { Copy } from '@/types/content';
import { asset } from '@/lib/asset';

const PLACEHOLDER =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.';

export const es: Copy = {
  name: 'andrea natalia\nnaranjo chávez',
  role: 'PRODUCT ENGINEER',
  bio: [
    'Nací entre volcanes, a 2.754 metros sobre el nivel del mar. Estudié periodismo y hace 8 años cambié de profesión y país. Estudié en la ',
    {label: 'UPV', href: 'https://www.upv.es/index-en.html'}, ' el Master en Gestión de la Información, empecé a programar en, ',
    { label: 'Devescola', href: 'https://gitlab.com/devscola' },
    ', una escuela autogestionada en Valencia. Desde hace seis años desarrollo software para empresas como QueryLayer (ahora ',
    { label: 'TrustWorks', href: 'https://trustworks.io' },
    '), Belike Software (adquirida por ',
    { label: 'Sngular', href: 'https://www.sngular.com' },
    ' en 2022), ',
    { label: 'Passporter', href: 'https://passporterapp.com' },
    ' y ',
    { label: 'Digital Tack', href: 'https://www.digitaltack.com/' },
    '. Trabajo con metodologías ágiles y Lean UX: iterar constantemente entre priorizar, escuchar a quien usa el producto, no enamorarse de la primera versión y volver a empezar. Me interesa también el diseño, así que he colaborado en el diseño e interacción de ususario de algunos lugares',
  ],
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
        { src: asset('assets/passporter-itinerary.png'), alt: '', onCard: false },
        { src: asset('assets/passporter-travel-ideas.png'), alt: '', onCard: false },
        { src: asset('assets/passporter-dialog.png'), alt: '', onCard: false },
        { src: asset('assets/passporter-dashboard.png'), alt: '', onCard: false },
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
    paragraphs: ['He trebajado en', 'Me interesa el diseño de marca y de plataformas web. El diseño de este portafolio es de mi autoria. La aplicación ha sido realizada con IA'],
  },
  community: [
    { label: 'Diseñadora — Diseño para web y soportes impresos y digitales — VLC Tech Fest (ediciones 2024 y 2025)', href: 'https://vlctechfest.org/es/'},
    { label: 'Ponente — Test-Driven Development, Drupal Camp Spain (2023)', href: 'https://www.youtube.com/watch?v=V9qjpxck9BE'},
    { label: 'Ponente — Extreme Programming, Drupal Camp Spain (2024)', href: ''},
    { label: 'Mentora — Technovation Challenge Valencia (2019)', href: 'https://technovationchallenge.org/'},
    { label: 'Embajadora — Women in Data Science (WiDS) por la Universidad de Stanford (2019–2020) and WiDS Worldwide (2021–2022)', href: 'https://widsvalencia.vlctechhub.org/'},
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
