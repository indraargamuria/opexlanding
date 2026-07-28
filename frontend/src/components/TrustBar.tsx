import { useEffect, useRef, useState } from 'react';
import { ClientLogo } from './Clients';

/*
 * TrustBar — condensed logo row directly after the hero.
 * Reuses ClientLogo from the full Clients section (size='sm' for reduced
 * visual weight). Visually quiet: no background change, no marquee,
 * standard IntersectionObserver fade-in matching the rest of the page.
 *
 * All logos (both real SVGs and text-badge fallbacks) get a unified
 * grayscale + opacity treatment so they carry equal visual weight.
 */

// 6 logos pulled from the Clients section's existing logo set.
const trustBarClients = [
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Petronas', slug: 'petronas' },
  { name: 'Astra International', slug: 'astra' },
  { name: 'Sime Darby', slug: 'simedarby' },
  { name: 'Wilmar International', slug: 'wilmar' },
  { name: 'IOI Corporation', slug: 'ioi' },
];

export function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={sectionStyle} aria-label="Trusted by">
      <div style={innerStyle}>
        <p style={captionStyle}>Trusted by teams at</p>
        <div style={logoRowStyle}>
          {trustBarClients.map((client) => (
            <div
              key={client.name}
              className="trust-bar-logo"
              style={{
                ...logoItemStyle,
                visibility: isVisible ? 'visible' : 'hidden',
                transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              <ClientLogo client={client} size="sm" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--white)',
  padding: '24px 24px 32px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  textAlign: 'center',
};

const captionStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--muted)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '20px',
};

const logoRowStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',
};

const logoItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40px',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
};
