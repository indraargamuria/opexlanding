const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Founders', href: '#founders' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        <a href="/" style={logoStyle}>
          <span style={logoMarkStyle}>Opex</span>CG
        </a>

        <nav style={navStyle}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const headerStyle: React.CSSProperties = {
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  background: 'var(--white)',
  borderBottom: '1px solid var(--border)',
  zIndex: 100,
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--dark-text)',
  textDecoration: 'none',
  letterSpacing: '-0.02em',
};

const logoMarkStyle: React.CSSProperties = {
  color: 'var(--brand)',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: 'var(--muted)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};
