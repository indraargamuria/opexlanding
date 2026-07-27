import { useEffect, useRef, useState } from 'react';
import { PlaceholderImage } from './PlaceholderImage';

/*
 * Testimonials — 3 placeholder cards between Experience and Founders.
 * All copy is DRAFT and needs real client sign-off before launch.
 * Visually calm: simple cards, standard IntersectionObserver fade-in.
 */

const testimonials = [
  {
    // DRAFT COPY — needs real client quote + sign-off before launch
    quote:
      'The team didn\u2019t just recommend software \u2014 they understood our floor before they touched a single system.',
    name: 'Plant Director',
    role: 'Automotive Parts Manufacturer',
  },
  {
    // DRAFT COPY — needs real client quote + sign-off before launch
    quote:
      'We\u2019d tried two other vendors before. This was the first time implementation actually matched what was promised.',
    name: 'Head of Operations',
    role: 'FMCG Conglomerate',
  },
  {
    // DRAFT COPY — needs real client quote + sign-off before launch
    quote:
      'Brand-agnostic wasn\u2019t just a pitch \u2014 they genuinely pushed back when we suggested a tool that wasn\u2019t the right fit.',
    name: 'VP Manufacturing',
    role: 'Heavy Industry Group',
  },
];

export function Testimonials() {
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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>What clients say</p>
          {/* DRAFT COPY — needs review before launch */}
          <h2 style={headingStyle}>Voices from the floor</h2>
        </div>

        <div style={gridStyle}>
          {testimonials.map((t, i) => (
            <figure
              key={i}
              style={{
                ...cardStyle,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div style={headshotRowStyle}>
                <div style={headshotWrapStyle}>
                  <PlaceholderImage
                    label="Headshot placeholder"
                    width="48px"
                    height="48px"
                  />
                </div>
                <figcaption style={attributionStyle}>
                  <span style={nameStyle}>{t.name}</span>
                  <span style={roleStyle}>{t.role}</span>
                </figcaption>
              </div>
              <blockquote style={quoteStyle}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--light-bg)',
  padding: '96px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '56px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '16px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h2)',
  fontWeight: 'var(--weight-h2)',
  lineHeight: 'var(--leading-heading)',
  color: 'var(--dark-text)',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '24px',
  alignItems: 'stretch',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '32px 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
};

const headshotRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
};

const headshotWrapStyle: React.CSSProperties = {
  flexShrink: 0,
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  overflow: 'hidden',
};

const attributionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-body)',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const roleStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  color: 'var(--muted)',
};

const quoteStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.0625rem',
  lineHeight: 1.6,
  color: 'var(--dark-text)',
  margin: 0,
};
