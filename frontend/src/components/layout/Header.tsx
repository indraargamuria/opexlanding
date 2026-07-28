import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { navLinks } from './Navigation';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      style={{
        ...headerStyle,
        boxShadow: scrolled ? '0 1px 8px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={innerStyle}>
        <Link to="/" style={logoStyle} onClick={() => setMenuOpen(false)}>
          <span style={logoMarkStyle}>Opex</span>CG
        </Link>

        <nav style={desktopNavStyle} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        <div style={desktopRightStyle} className="desktop-right">
          <Link to="/contact" style={ctaStyle}>
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="hamburger-btn"
          style={hamburgerStyle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span style={{ ...hamburgerLineStyle, transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ ...hamburgerLineStyle, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...hamburgerLineStyle, transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          ...drawerOverlayStyle,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        style={{
          ...drawerStyle,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div style={drawerHeaderStyle}>
          <Link to="/" style={logoStyle} onClick={() => setMenuOpen(false)}>
            <span style={logoMarkStyle}>Opex</span>CG
          </Link>
          <button
            style={drawerCloseStyle}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav style={drawerNavStyle}>
          {navLinks.map((link) => (
            <DrawerNavLink key={link.to} to={link.to} label={link.label} onClick={() => setMenuOpen(false)} />
          ))}
        </nav>
        <div style={drawerCtaWrapStyle}>
          <Link to="/contact" style={{ ...ctaStyle, width: '100%', textAlign: 'center', display: 'block' }} onClick={() => setMenuOpen(false)}>
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });
  const isActive = to === '/' ? currentPath === '/' : currentPath.startsWith(to);

  return (
    <Link
      to={to}
      style={{
        ...navLinkStyle,
        color: isActive ? 'var(--brand)' : 'var(--muted)',
      }}
    >
      {label}
      {isActive && <span style={activeIndicatorStyle} />}
    </Link>
  );
}

function DrawerNavLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  const currentPath = useRouterState({ select: (s) => s.location.pathname });
  const isActive = to === '/' ? currentPath === '/' : currentPath.startsWith(to);

  return (
    <Link
      to={to}
      style={{
        ...drawerLinkStyle,
        color: isActive ? 'var(--brand)' : 'var(--dark-text)',
        background: isActive ? 'rgba(23, 165, 220, 0.06)' : 'transparent',
      }}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

const headerStyle: React.CSSProperties = {
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  background: 'var(--white)',
  borderBottom: '1px solid var(--border)',
  zIndex: 100,
  transition: 'box-shadow 0.2s ease',
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

const desktopNavStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
};

const desktopRightStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const navLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9375rem',
  fontWeight: 500,
  textDecoration: 'none',
  transition: 'color 0.15s ease',
  position: 'relative',
  padding: '8px 12px',
};

const activeIndicatorStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-2px',
  left: '12px',
  right: '12px',
  height: '2px',
  background: 'var(--brand)',
  borderRadius: '1px',
};

const ctaStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.875rem',
  padding: '10px 24px',
  background: 'var(--brand)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '24px',
  textDecoration: 'none',
  transition: 'background 0.15s ease',
  whiteSpace: 'nowrap' as const,
};

const hamburgerStyle: React.CSSProperties = {
  display: 'none',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  flexDirection: 'column',
  gap: '5px',
  zIndex: 110,
};

const hamburgerLineStyle: React.CSSProperties = {
  display: 'block',
  width: '22px',
  height: '2px',
  background: 'var(--dark-text)',
  borderRadius: '2px',
  transition: 'transform 0.2s ease, opacity 0.2s ease',
};

const drawerOverlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.3)',
  zIndex: 200,
  transition: 'opacity 0.25s ease',
};

const drawerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '300px',
  maxWidth: '85vw',
  height: '100vh',
  background: 'var(--white)',
  zIndex: 210,
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.25s ease',
  boxShadow: '-4px 0 24px rgba(0,0,0,0.1)',
};

const drawerHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  borderBottom: '1px solid var(--border)',
};

const drawerCloseStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  color: 'var(--muted)',
};

const drawerNavStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 0',
  flex: 1,
};

const drawerLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '14px 20px',
  textDecoration: 'none',
  borderRadius: '0',
  transition: 'background 0.15s ease, color 0.15s ease',
  minHeight: '44px',
  display: 'flex',
  alignItems: 'center',
};

const drawerCtaWrapStyle: React.CSSProperties = {
  padding: '16px 20px',
  borderTop: '1px solid var(--border)',
};
