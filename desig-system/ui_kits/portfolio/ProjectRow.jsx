const BODY = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.";

function Shot({ onCard }) {
  const img = <img src="../../assets/portrait-tile.png" alt="" style={{ width: 389, height: 298, objectFit: 'cover', display: 'block' }} />;
  if (!onCard) return <div style={{ width: 589, display: 'flex', justifyContent: 'center' }}>{img}</div>;
  return (
    <div style={{ width: 589, height: 379, borderRadius: 'var(--radius-block)', background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{img}</div>
  );
}

function ProjectRow({ label, labelColor = 'var(--text-label)', labelAlign = 'left', cards = [false, true], imagery = true }) {
  return (
    <section style={{ position: 'relative', padding: '0 148px', marginTop: 74 }}>
      {label ? (
        <div style={{ font: '400 32px/100% var(--font-display)', color: labelColor, textAlign: labelAlign, marginBottom: 27 }}>{label}</div>
      ) : null}
      {imagery ? (
        <div style={{ display: 'grid', gridTemplateColumns: '589px 589px', gap: 29 }}>
          {cards.map((onCard, i) => <Shot key={i} onCard={onCard} />)}
        </div>
      ) : null}
      <div style={{ display: 'grid', gridTemplateColumns: '589px 589px', gap: 29, marginTop: imagery ? 28 : 0 }}>
        {[0, 1].map((_, i) => (
          <div key={i} style={{ font: '400 24px/1.4 var(--font-body)', color: 'var(--text-body)', display: 'flex', flexDirection: 'column', gap: '1.4em' }}>
            <p style={{ margin: 0 }}>{BODY}</p>
            <p style={{ margin: 0 }}>{BODY}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ProjectRow });
