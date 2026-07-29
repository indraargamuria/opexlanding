import { Link } from '@tanstack/react-router';
import { navLinks } from './Navigation';

export function Footer() {
  return (
    <footer style={footerStyle} className="app-footer">
      <div style={innerStyle}>
        <div style={leftStyle}>
          <Link to="/" style={brandLogoStyle}>
            <img
              src="/images/opexcglogo.png"
              alt="OpexCG"
              style={footerLogoStyle}
            />
          </Link>
          <span style={separatorStyle} aria-hidden>&nbsp;&middot;&nbsp;</span>
          <span style={copyrightStyle}>&copy; {new Date().getFullYear()} OpexCG</span>
        </div>

        <nav style={centerStyle} className="footer-center-links">
          {navLinks.filter(l => l.to !== '/').map((link) => (
            <Link key={link.to} to={link.to} style={footerLinkStyle}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={rightStyle}>
          <form onSubmit={(e) => e.preventDefault()} style={newsletterFormStyle}>
            <input
              type="email"
              placeholder="Your email"
              style={emailInputStyle}
              required
            />
            <button type="submit" style={subscribeBtnStyle}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  color: 'var(--white)',
  flexShrink: 0,
  height: '48px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
};

const leftStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap' as const,
};

const brandLogoStyle: React.CSSProperties = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

const footerLogoStyle: React.CSSProperties = {
  height: '24px',
  width: 'auto',
  display: 'block',
  filter: 'brightness(0) invert(1)',
};

const separatorStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.3)',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.45)',
};

const centerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const footerLinkStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.5)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
  whiteSpace: 'nowrap' as const,
};

const rightStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const newsletterFormStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0',
};

const emailInputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  padding: '4px 10px',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '4px 0 0 4px',
  color: 'var(--white)',
  outline: 'none',
  width: '130px',
};

const subscribeBtnStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.75rem',
  padding: '4px 12px',
  background: 'var(--brand)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
  whiteSpace: 'nowrap' as const,
  transition: 'background 0.15s ease',
};
