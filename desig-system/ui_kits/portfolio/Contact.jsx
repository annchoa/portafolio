const LINKS = [
  ['linkedin.com/in/annchoa', 'https://linkedin.com/in/annchoa'],
  ['https://github.com/annchoa', 'https://github.com/annchoa'],
  ['https://gitlab.com/annchoa/', 'https://gitlab.com/annchoa/'],
];

function Contact() {
  return (
    <section style={{ paddingTop: 148, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ margin: 0, font: '400 64px/100% var(--font-display)', color: 'var(--text-strong)', transform: 'rotate(-0.63deg)' }}>contact me</h2>
      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', width: 405, font: '400 32px/100% var(--font-display)' }}>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} style={{ color: 'var(--text-label)', textDecoration: 'none' }}>{label}</a>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Contact });
