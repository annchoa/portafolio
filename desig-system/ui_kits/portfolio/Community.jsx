const TALKS = [
  'Speaker — Test-Driven Development, Drupal Camp Spain (2023)',
  'Speaker — Extreme Programming, Drupal Camp Spain (2024)',
  'Mentor — Technovation Challenge Valencia (2019)',
  'Ambassador — Women in Data Science (WiDS) at Stanford University (2019–2020) and WiDS Worldwide (2021–2022)',
];

function Community() {
  return (
    <section style={{ position: 'relative', paddingTop: 148 }}>
      <div style={{ position: 'absolute', left: -80, top: 600, width: 305, height: 179, borderRadius: 'var(--radius-block)', background: 'var(--surface-block-orange)' }} />
      <div style={{ padding: '0 0 0 0' }}>
        <h2 style={{ margin: 0, padding: '0 0 0 0', font: '400 180px/100% var(--font-display)', color: 'var(--text-display-warn)' }}>
          COMMUNITY &amp;<br />RECOGNITION
        </h2>
      </div>
      <ul style={{ position: 'relative', margin: '74px 0 0', padding: 0, listStyle: 'none', width: 731, marginLeft: 355, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {TALKS.map((t) => (
          <li key={t} style={{ font: '400 24px/1.4 var(--font-body)', color: 'var(--text-body)', display: 'flex', gap: 12 }}>
            <span style={{ color: 'var(--text-stat)' }}>•</span><span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Object.assign(window, { Community });
