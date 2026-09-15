function Hero({ lang, onLang }) {
  return (
    <header style={{ position: 'relative', paddingTop: 176, paddingBottom: 120, overflow: 'hidden' }}>
      <img src="../../assets/green-scribble.svg" alt="" style={{ position: 'absolute', left: -20, top: 176, width: 1483.762, height: 392.231, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', paddingTop: 384, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <h1 style={{ margin: 0, font: '400 40px/100% var(--font-body)', color: 'var(--text-body)', textAlign: 'center' }}>
          andrea natalia<br />naranjo chávez
        </h1>
        <p style={{ margin: '18px 0 0', font: '400 40px/100% var(--font-body)', letterSpacing: 'var(--tracking-role)', color: 'var(--text-body)' }}>PRODUCT ENGINEER</p>
        <div style={{ marginTop: 36, display: 'flex', gap: 7, alignItems: 'center' }}>
          {['EN', 'ES'].map((code) => {
            const active = lang === code;
            return (
              <span key={code} style={{ position: 'relative', display: 'inline-flex', borderRadius: 'var(--radius-chip)', background: active ? 'var(--surface-chip)' : 'transparent', padding: 1 }}>
                <button onClick={() => onLang(code)} style={{
                  border: 0, cursor: 'pointer', borderRadius: 'var(--radius-pill)', padding: 8,
                  font: '400 16px/1 var(--font-ui)',
                  background: active ? 'var(--pink-500)' : 'transparent',
                  color: active ? 'var(--white)' : 'var(--gray-300)',
                  minWidth: 34, transition: 'background 120ms linear, color 120ms linear',
                }}>{code}</button>
              </span>
            );
          })}
        </div>
        <p style={{ margin: '240px 0 0', width: 731, font: '400 24px/1.4 var(--font-body)', color: 'var(--text-body)', textAlign: 'center', textWrap: 'pretty' }}>
          {lang === 'EN'
            ? 'I was born among volcanoes, 2,754 m above sea level. I studied journalism and eight years ago I changed profession and country. In Spain I took a Master in Information Management and started programming at a self-managed school in Valencia, la Devescola. For six years I have built software for ClimateTrade, QueryLayer and Passporter. An advocate of agile methodologies and Lean UX, I research independently into the integration of design in web platforms.'
            : 'Nací entre volcanes, a 2,754 m sobre el nivel del mar. Estudié periodismo y hace 8 años cambié de profesión y país. Estudié en España un Master en Gestión de la Información y empecé a programar con una escuela autogestionada en Valencia, la Devescola. Hace 6 años he desarrollado software para ClimateTrade, QueryLayer y Passporter. Defensora de las metodologías ágiles y el Lean UX, investigo de forma autónoma por la integración del diseño en plataformas web.'}
        </p>
      </div>
    </header>
  );
}

Object.assign(window, { Hero });
