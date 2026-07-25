const sitemapLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Founders', href: '#founders' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={topRowStyle}>
          <div style={logoBlockStyle}>
            <div style={logoStyle}>
              <span style={logoMarkStyle}>Opex</span>CG
            </div>
            <p style={taglineStyle}>
              Industrial transformation consulting.
            </p>
          </div>

          <nav style={navStyle}>
            {sitemapLinks.map((link) => (
              <a key={link.href} href={link.href} style={navLinkStyle}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={dividerStyle} />

        <div style={bottomRowStyle}>
          <a href="#contact" style={contactLinkStyle}>
            Get in touch
          </a>
          <p style={copyrightStyle}>
            &copy; {new Date().getFullYear()} Opex Consulting Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  color: 'var(--white)',
  padding: '56px 24px 32px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const topRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '48px',
  flexWrap: 'wrap',
};

const logoBlockStyle: React.CSSProperties = {
  flex: 1,
  minWidth: '200px',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: '12px',
};

const logoMarkStyle: React.CSSProperties = {
  color: 'var(--brand)',
};

const taglineStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  opacity: 0.7,
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};

const dividerStyle: React.CSSProperties = {
  height: '1px',
  background: 'rgba(255, 255, 255, 0.12)',
  margin: '40px 0 24px',
};

const bottomRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
};

const contactLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-caption)',
  fontWeight: 600,
  color: 'var(--brand)',
  textDecoration: 'none',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  opacity: 0.5,
};
