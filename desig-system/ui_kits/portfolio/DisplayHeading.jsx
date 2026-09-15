function DisplayHeading({ children, color, align = 'left', size = 200 }) {
  return (
    <h2 style={{
      margin: 0, font: `400 ${size}px/100% var(--font-display)`, color,
      textAlign: align, whiteSpace: 'nowrap', letterSpacing: '-0.005em',
    }}>{children}</h2>
  );
}

Object.assign(window, { DisplayHeading });
