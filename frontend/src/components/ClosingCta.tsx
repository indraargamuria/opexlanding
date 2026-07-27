/*
 * ClosingCta — short full-width band between FAQ and Contact.
 * --dark-accent background (consistent with AI products section treatment)
 * for visual weight as a closing beat. Headline + 1 line + 1 button.
 * Short by design: punctuation mark before the contact form.
 */
export function ClosingCta() {
  return (
    <section style={sectionStyle} aria-label="Closing call to action">
      <div style={innerStyle}>
        {/* DRAFT COPY — needs review before launch */}
        <h2 style={headingStyle}>
          Ready to see what&rsquo;s actually slowing your floor down?
        </h2>
        {/* DRAFT COPY — needs review before launch */}
        <p style={subheadStyle}>
          One conversation. No pitch deck, no obligation.
        </p>
        <a href="#contact" className="hero-cta" style={ctaStyle}>
          Talk to us
        </a>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  padding: '72px 24px',
  textAlign: 'center',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '720px',
  margin: '0 auto',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h2)',
  fontWeight: 'var(--weight-h2)',
  lineHeight: 'var(--leading-heading)',
  color: 'var(--white)',
  marginBottom: '16px',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '1.0625rem',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.65)',
  marginBottom: '32px',
};

const ctaStyle: React.CSSProperties = {
  // Inherits from .hero-cta class; only adjusts display centering.
  display: 'inline-block',
};
