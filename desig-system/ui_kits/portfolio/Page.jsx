function BleedBlock({ style }) {
  return <div style={{ position: 'absolute', borderRadius: 'var(--radius-block)', ...style }} />;
}

function PortfolioPage() {
  const [lang, setLang] = React.useState('ES');
  return (
    <div style={{ position: 'relative', width: 1440, minHeight: 6453, margin: '0 auto', background: 'var(--surface-page)', overflow: 'hidden' }}>
      <Hero lang={lang} onLang={setLang} />

      <section style={{ position: 'relative', paddingTop: 148 }}>
        <BleedBlock style={{ left: -32, top: 420, width: 148, height: 633, background: 'var(--surface-block-pink)' }} />
        <div style={{ paddingLeft: 0 }}>
          <DisplayHeading color="var(--text-display-alt)">PROJECTS</DisplayHeading>
        </div>
        <ProjectRow label="passporter" cards={[false, true]} />
        <ProjectRow label="wiski" cards={[true, false]} />
      </section>

      <section style={{ position: 'relative', paddingTop: 148 }}>
        <BleedBlock style={{ right: -44, top: 300, width: 87, height: 379, background: 'var(--surface-block-magenta)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 0 }}>
          <DisplayHeading color="var(--text-display)" align="right">EXPERIENCE</DisplayHeading>
        </div>
        <ProjectRow label="" imagery={false} />
      </section>

      <Community />
      <Contact />
      <Footer />
    </div>
  );
}

Object.assign(window, { PortfolioPage, BleedBlock });
