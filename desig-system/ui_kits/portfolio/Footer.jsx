function Footer() {
  return (
    <footer style={{ position: 'relative', paddingTop: 380, height: 640, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 21, top: 380, width: 1426.774, height: 322, overflow: 'hidden' }}>
        <img src="../../assets/wave-band.svg" alt="Chimborazo" style={{ width: 1426.774, height: 322 }} />
      </div>
      <div style={{ position: 'absolute', left: 1086, top: 520, width: 259, textAlign: 'center', color: 'var(--text-stat)' }}>
        <div style={{ font: '800 40px/100% var(--font-body)' }}>chimborazo</div>
        <div style={{ font: '400 60px/100% var(--font-display)', marginTop: 18 }}>6,263.47 m</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
