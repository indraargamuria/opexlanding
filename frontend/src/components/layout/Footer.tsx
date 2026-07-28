import { Link } from '@tanstack/react-router';
import { navLinks } from './Navigation';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
];

export function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={gridStyle} className="footer-grid">
          {/* Col 1: Brand */}
          <div style={brandColStyle}>
            <Link to="/" style={logoStyle}>
              <span style={logoMarkStyle}>Opex</span>CG
            </Link>
            <p style={taglineStyle}>
              Industrial transformation consulting — Lean Six Sigma methodology
              paired with brand-agnostic Industry 4.0 technology integration.
            </p>
            <p style={copyrightStyle}>
              &copy; {new Date().getFullYear()} Opex Consulting Group. All rights reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div style={linksColStyle}>
            <h4 style={colHeadingStyle}>Quick Links</h4>
            <nav style={footerNavStyle}>
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} style={footerLinkStyle}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Social */}
          <div style={socialColStyle}>
            <h4 style={colHeadingStyle}>Follow Us</h4>
            <div style={socialRowStyle}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={socialIconStyle}
                  aria-label={social.label}
                >
                  {social.label === 'LinkedIn' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div style={newsletterColStyle}>
            <h4 style={colHeadingStyle}>Stay Updated</h4>
            <p style={newsletterTextStyle}>
              Get insights on operational excellence and Industry 4.0.
            </p>
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

        <div style={dividerStyle} />

        <div style={bottomBarStyle}>
          <p style={copyrightSmallStyle}>
            &copy; {new Date().getFullYear()} Opex Consulting Group. All rights reserved.
          </p>
          <div style={legalLinksStyle}>
            <a href="#" style={legalLinkStyle}>Privacy Policy</a>
            <a href="#" style={legalLinkStyle}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: '#081E2C',
  color: 'var(--white)',
  padding: '64px 24px 0',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 0.8fr 1.2fr',
  gap: '48px',
};

const brandColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  textDecoration: 'none',
  color: 'var(--white)',
};

const logoMarkStyle: React.CSSProperties = {
  color: 'var(--brand)',
};

const taglineStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.55)',
  maxWidth: '280px',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.35)',
  marginTop: 'auto',
};

const linksColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const colHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-body)',
  fontWeight: 600,
  color: 'var(--white)',
  marginBottom: '4px',
};

const footerNavStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const footerLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  padding: '6px 0',
  transition: 'color 0.15s ease',
  minHeight: '32px',
  display: 'flex',
  alignItems: 'center',
};

const socialColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const socialRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
};

const socialIconStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  transition: 'background 0.15s ease, color 0.15s ease',
  minHeight: '44px',
  minWidth: '44px',
};

const newsletterColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const newsletterTextStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  color: 'rgba(255, 255, 255, 0.55)',
};

const newsletterFormStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0',
};

const emailInputStyle: React.CSSProperties = {
  flex: 1,
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  padding: '10px 14px',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '6px 0 0 6px',
  color: 'var(--white)',
  outline: 'none',
  minWidth: 0,
};

const subscribeBtnStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: 'var(--text-caption)',
  padding: '10px 18px',
  background: 'var(--brand)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '0 6px 6px 0',
  cursor: 'pointer',
  whiteSpace: 'nowrap' as const,
  transition: 'background 0.15s ease',
};

const dividerStyle: React.CSSProperties = {
  height: '1px',
  background: 'rgba(255, 255, 255, 0.1)',
  margin: '48px 0 24px',
};

const bottomBarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '24px',
  flexWrap: 'wrap',
  gap: '12px',
};

const copyrightSmallStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.4)',
};

const legalLinksStyle: React.CSSProperties = {
  display: 'flex',
  gap: '24px',
};

const legalLinkStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'rgba(255, 255, 255, 0.4)',
  textDecoration: 'none',
  transition: 'color 0.15s ease',
};
