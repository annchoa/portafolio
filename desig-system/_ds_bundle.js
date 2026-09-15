/* @ds-bundle: {"format":4,"namespace":"AndreaNaranjoPortfolioDesignSystem_12a2b2","components":[{"name":"NavigationPill","sourcePath":"components/navigation/NavigationPill.jsx"},{"name":"NavigationPillList","sourcePath":"components/navigation/NavigationPillList.jsx"}],"sourceHashes":{"components/navigation/NavigationPill.jsx":"f36b379d653e","components/navigation/NavigationPillList.jsx":"4ad7a6ea4020","ui_kits/portfolio/Community.jsx":"946453de28cf","ui_kits/portfolio/Contact.jsx":"4702cd4d491e","ui_kits/portfolio/DisplayHeading.jsx":"ac558ec26222","ui_kits/portfolio/Footer.jsx":"aafe01e19789","ui_kits/portfolio/Hero.jsx":"7a8e7bea779e","ui_kits/portfolio/Page.jsx":"4f5b4ec67e7d","ui_kits/portfolio/ProjectRow.jsx":"512ddb67667d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AndreaNaranjoPortfolioDesignSystem_12a2b2 = window.AndreaNaranjoPortfolioDesignSystem_12a2b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/navigation/NavigationPill.jsx
try { (() => {
// figma node: 2010:184 Navigation Pill (3 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "state=" + __venc(p.state);
function NavigationPill(_p = {}) {
  const props = {
    ..._p,
    label: _p.label ?? "Link",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--background-brand-tertiary)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-brand-on-brand-secondary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 8,
      backgroundColor: "var(--background-default-default-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: 1,
      color: "var(--text-default-default)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.label));
  const __impls = {
    // figma: State=Active
    "state=active": __body0,
    // figma: State=Default
    "state=default": __body1,
    // figma: State=Hover
    "state=hover": __body2
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
Object.assign(__ds_scope, { NavigationPill, __ds_default_components_navigation_NavigationPill_1am3pp6: NavigationPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationPill.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationPillList.jsx
try { (() => {
// figma node: 2010:196 Navigation Pill List (2 variants)
const __venc = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = p => "direction=" + __venc(p.direction);
function NavigationPillList(_p = {}) {
  const props = {
    ..._p,
    link1: _p.link1 ?? true,
    link6: _p.link6 ?? true,
    slot: _p.slot ?? "",
    link7: _p.link7 ?? true,
    slot2: _p.slot2 ?? "",
    link3: _p.link3 ?? true,
    link2: _p.link2 ?? true,
    link4: _p.link4 ?? true,
    link5: _p.link5 ?? true,
    direction: _p.direction ?? "row"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 377,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "wrap",
      alignContent: "space-between",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.link1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "active"
  })), props.link2 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link3 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    state: "default"
  })), props.link5 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  }), props.link6 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  }), props.link7 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    state: "default"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 115,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.link1 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link2 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "active"
  }), props.link3 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link4 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link5 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  }), props.link6 && /*#__PURE__*/React.createElement(__ds_scope.NavigationPill, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "default"
  })));
  const __impls = {
    // figma: Direction=Row
    "direction=row": __body0,
    // figma: Direction=Column
    "direction=column": __body1
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
Object.assign(__ds_scope, { NavigationPillList, __ds_default_components_navigation_NavigationPillList_1foakk6: NavigationPillList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationPillList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Community.jsx
try { (() => {
const TALKS = ['Speaker — Test-Driven Development, Drupal Camp Spain (2023)', 'Speaker — Extreme Programming, Drupal Camp Spain (2024)', 'Mentor — Technovation Challenge Valencia (2019)', 'Ambassador — Women in Data Science (WiDS) at Stanford University (2019–2020) and WiDS Worldwide (2021–2022)'];
function Community() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      paddingTop: 148
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -80,
      top: 600,
      width: 305,
      height: 179,
      borderRadius: 'var(--radius-block)',
      background: 'var(--surface-block-orange)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 0 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      padding: '0 0 0 0',
      font: '400 180px/100% var(--font-display)',
      color: 'var(--text-display-warn)'
    }
  }, "COMMUNITY &", /*#__PURE__*/React.createElement("br", null), "RECOGNITION")), /*#__PURE__*/React.createElement("ul", {
    style: {
      position: 'relative',
      margin: '74px 0 0',
      padding: 0,
      listStyle: 'none',
      width: 731,
      marginLeft: 355,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, TALKS.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      font: '400 24px/1.4 var(--font-body)',
      color: 'var(--text-body)',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-stat)'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", null, t)))));
}
Object.assign(window, {
  Community
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Community.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
const LINKS = [['linkedin.com/in/annchoa', 'https://linkedin.com/in/annchoa'], ['https://github.com/annchoa', 'https://github.com/annchoa'], ['https://gitlab.com/annchoa/', 'https://gitlab.com/annchoa/']];
function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 148,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 64px/100% var(--font-display)',
      color: 'var(--text-strong)',
      transform: 'rotate(-0.63deg)'
    }
  }, "contact me"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      width: 405,
      font: '400 32px/100% var(--font-display)'
    }
  }, LINKS.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    style: {
      color: 'var(--text-label)',
      textDecoration: 'none'
    }
  }, label))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/DisplayHeading.jsx
try { (() => {
function DisplayHeading({
  children,
  color,
  align = 'left',
  size = 200
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: `400 ${size}px/100% var(--font-display)`,
      color,
      textAlign: align,
      whiteSpace: 'nowrap',
      letterSpacing: '-0.005em'
    }
  }, children);
}
Object.assign(window, {
  DisplayHeading
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      paddingTop: 380,
      height: 640,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 21,
      top: 380,
      width: 1426.774,
      height: 322,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wave-band.svg",
    alt: "Chimborazo",
    style: {
      width: 1426.774,
      height: 322
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 1086,
      top: 520,
      width: 259,
      textAlign: 'center',
      color: 'var(--text-stat)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 40px/100% var(--font-body)'
    }
  }, "chimborazo"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 60px/100% var(--font-display)',
      marginTop: 18
    }
  }, "6,263.47 m")));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero({
  lang,
  onLang
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      paddingTop: 176,
      paddingBottom: 120,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/green-scribble.svg",
    alt: "",
    style: {
      position: 'absolute',
      left: -20,
      top: 176,
      width: 1483.762,
      height: 392.231,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 384,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 40px/100% var(--font-body)',
      color: 'var(--text-body)',
      textAlign: 'center'
    }
  }, "andrea natalia", /*#__PURE__*/React.createElement("br", null), "naranjo ch\xE1vez"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      font: '400 40px/100% var(--font-body)',
      letterSpacing: 'var(--tracking-role)',
      color: 'var(--text-body)'
    }
  }, "PRODUCT ENGINEER"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, ['EN', 'ES'].map(code => {
    const active = lang === code;
    return /*#__PURE__*/React.createElement("span", {
      key: code,
      style: {
        position: 'relative',
        display: 'inline-flex',
        borderRadius: 'var(--radius-chip)',
        background: active ? 'var(--surface-chip)' : 'transparent',
        padding: 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onLang(code),
      style: {
        border: 0,
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        padding: 8,
        font: '400 16px/1 var(--font-ui)',
        background: active ? 'var(--pink-500)' : 'transparent',
        color: active ? 'var(--white)' : 'var(--gray-300)',
        minWidth: 34,
        transition: 'background 120ms linear, color 120ms linear'
      }
    }, code));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '240px 0 0',
      width: 731,
      font: '400 24px/1.4 var(--font-body)',
      color: 'var(--text-body)',
      textAlign: 'center',
      textWrap: 'pretty'
    }
  }, lang === 'EN' ? 'I was born among volcanoes, 2,754 m above sea level. I studied journalism and eight years ago I changed profession and country. In Spain I took a Master in Information Management and started programming at a self-managed school in Valencia, la Devescola. For six years I have built software for ClimateTrade, QueryLayer and Passporter. An advocate of agile methodologies and Lean UX, I research independently into the integration of design in web platforms.' : 'Nací entre volcanes, a 2,754 m sobre el nivel del mar. Estudié periodismo y hace 8 años cambié de profesión y país. Estudié en España un Master en Gestión de la Información y empecé a programar con una escuela autogestionada en Valencia, la Devescola. Hace 6 años he desarrollado software para ClimateTrade, QueryLayer y Passporter. Defensora de las metodologías ágiles y el Lean UX, investigo de forma autónoma por la integración del diseño en plataformas web.')));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Page.jsx
try { (() => {
function BleedBlock({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      borderRadius: 'var(--radius-block)',
      ...style
    }
  });
}
function PortfolioPage() {
  const [lang, setLang] = React.useState('ES');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1440,
      minHeight: 6453,
      margin: '0 auto',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Hero, {
    lang: lang,
    onLang: setLang
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      paddingTop: 148
    }
  }, /*#__PURE__*/React.createElement(BleedBlock, {
    style: {
      left: -32,
      top: 420,
      width: 148,
      height: 633,
      background: 'var(--surface-block-pink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 0
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    color: "var(--text-display-alt)"
  }, "PROJECTS")), /*#__PURE__*/React.createElement(ProjectRow, {
    label: "passporter",
    cards: [false, true]
  }), /*#__PURE__*/React.createElement(ProjectRow, {
    label: "wiski",
    cards: [true, false]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      paddingTop: 148
    }
  }, /*#__PURE__*/React.createElement(BleedBlock, {
    style: {
      right: -44,
      top: 300,
      width: 87,
      height: 379,
      background: 'var(--surface-block-magenta)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    color: "var(--text-display)",
    align: "right"
  }, "EXPERIENCE")), /*#__PURE__*/React.createElement(ProjectRow, {
    label: "",
    imagery: false
  })), /*#__PURE__*/React.createElement(Community, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  PortfolioPage,
  BleedBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectRow.jsx
try { (() => {
const BODY = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.";
function Shot({
  onCard
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: "../../assets/portrait-tile.png",
    alt: "",
    style: {
      width: 389,
      height: 298,
      objectFit: 'cover',
      display: 'block'
    }
  });
  if (!onCard) return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 589,
      display: 'flex',
      justifyContent: 'center'
    }
  }, img);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 589,
      height: 379,
      borderRadius: 'var(--radius-block)',
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, img);
}
function ProjectRow({
  label,
  labelColor = 'var(--text-label)',
  labelAlign = 'left',
  cards = [false, true],
  imagery = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '0 148px',
      marginTop: 74
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 32px/100% var(--font-display)',
      color: labelColor,
      textAlign: labelAlign,
      marginBottom: 27
    }
  }, label) : null, imagery ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '589px 589px',
      gap: 29
    }
  }, cards.map((onCard, i) => /*#__PURE__*/React.createElement(Shot, {
    key: i,
    onCard: onCard
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '589px 589px',
      gap: 29,
      marginTop: imagery ? 28 : 0
    }
  }, [0, 1].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      font: '400 24px/1.4 var(--font-body)',
      color: 'var(--text-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.4em'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, BODY), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, BODY)))));
}
Object.assign(window, {
  ProjectRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectRow.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NavigationPill = __ds_scope.NavigationPill;

__ds_ns.NavigationPillList = __ds_scope.NavigationPillList;

})();
