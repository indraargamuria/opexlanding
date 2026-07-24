import { PlaceholderImage } from './PlaceholderImage';

export function Hero() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <div style={contentStyle}>
          <p style={overlineStyle} className="hero-fade-in">
            Lean Six Sigma &middot; Industry 4.0
          </p>
          <h1 style={headlineStyle} className="hero-fade-in hero-delay-1">
            Digital transformation grounded in
            methodology, not hype
          </h1>
          <p style={bodyStyle} className="hero-fade-in hero-delay-2">
            We pair Lean Six Sigma discipline with brand-agnostic technology
            selection — integrating the best-fit tools for your floor, not the
            ones with the biggest marketing budget. Assessment through
            implementation, one framework.
          </p>
          <div className="hero-fade-in hero-delay-3">
            <a href="#contact" className="hero-cta">
              Talk to us
            </a>
          </div>
        </div>

        <div style={imageWrapStyle} className="hero-fade-in hero-delay-2">
          <PlaceholderImage
            label="Hero — founder/consultant in working session"
            height="400px"
          />
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--white)',
  padding: '80px 24px 96px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '64px',
  alignItems: 'center',
};

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h1)',
  fontWeight: 'var(--weight-h1)',
  lineHeight: 'var(--leading-heading)',
  color: 'var(--dark-text)',
  letterSpacing: '-0.02em',
};

const bodyStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: 1.65,
  color: 'var(--muted)',
  maxWidth: '520px',
};

const imageWrapStyle: React.CSSProperties = {
  width: '100%',
};
