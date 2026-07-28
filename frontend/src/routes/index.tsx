import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

function HomePage() {
  return (
    <div style={gridStyle}>
      {/* Left: Value Prop */}
      <div style={leftColStyle}>
        <div style={heroBlockStyle}>
          <p style={overlineStyle}>Lean Six Sigma &middot; Industry 4.0</p>
          <h1 style={headlineStyle}>
            Industrial technology and AI,<br />
            implemented by people who&rsquo;ve<br />
            actually run the floor
          </h1>
          <p style={subheadStyle}>
            Brand-agnostic by design &mdash; we integrate the best-fit tools
            for your floor, backed by the operational discipline to make it stick.
          </p>
          <div style={ctaRowStyle}>
            <a href="/contact" style={ctaStyle}>
              Talk to us
            </a>
            <Link to="/products" style={secondaryCtaStyle}>
              View our products
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Highlight Cards */}
      <div style={rightColStyle}>
        <Card
          title="AI-Enabled Products"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 3H8s-2-1-2-3a4 4 0 0 1 4-4Z"/><path d="M16 9v1a4 4 0 0 1-8 0V9"/><path d="M12 16v3"/><path d="M8 22h8"/>
            </svg>
          }
          body="OpexAI for predictive analytics and OpexMX for real-time MES — purpose-built tools that integrate with whatever stack you already run."
          linkTo="/products"
          linkLabel="Explore products"
        />
        <Card
          title="Our Ecosystem"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><circle cx="4" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>
            </svg>
          }
          body="200+ ISV technology partners integrated through a vendor-neutral ecosystem. Connect MES, ERP, IoT, and analytics into one source of truth."
          linkTo="/products"
          linkLabel="See integration"
        />
        <Card
          title="Proven Methodology"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          }
          body="Assessment &rarr; Improvement &rarr; Solutioning &rarr; Implementation. Lean Six Sigma methodology paired with measurable outcomes."
          linkTo="/experience"
          linkLabel="View case studies"
        />
      </div>
    </div>
  );
}

function Link({ to, children, ...props }: { to: string; children: React.ReactNode; style?: React.CSSProperties }) {
  // Use native anchor for navigation — TanStack Router Link in-page
  return <a href={to} {...props}>{children}</a>;
}

function Card({ title, icon, body, linkTo, linkLabel }: { title: string; icon: React.ReactNode; body: string; linkTo: string; linkLabel: string }) {
  return (
    <div style={cardStyle}>
      <div style={cardIconStyle}>{icon}</div>
      <div style={cardContentStyle}>
        <h3 style={cardTitleStyle}>{title}</h3>
        <p style={cardBodyStyle}>{body}</p>
        <a href={linkTo} style={cardLinkStyle}>
          {linkLabel} &rarr;
        </a>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '32px',
  height: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const leftColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const heroBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.75rem',
  fontWeight: 700,
  lineHeight: 1.2,
  color: 'var(--dark-text)',
  letterSpacing: '-0.02em',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: 'var(--muted)',
  maxWidth: '440px',
};

const ctaRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '12px',
  marginTop: '8px',
};

const ctaStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--brand)',
  color: 'var(--white)',
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.8125rem',
  padding: '10px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  transition: 'background 0.15s ease',
};

const secondaryCtaStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'var(--font-heading)',
  fontWeight: 500,
  fontSize: '0.8125rem',
  padding: '10px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  color: 'var(--brand)',
  border: '1px solid var(--brand)',
  transition: 'background 0.15s ease',
};

const rightColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '16px 20px',
  display: 'flex',
  gap: '14px',
  alignItems: 'flex-start',
  transition: 'border-color 0.15s ease',
};

const cardIconStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '8px',
  background: 'rgba(23, 165, 220, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--brand)',
  flexShrink: 0,
};

const cardContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
};

const cardTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.9375rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const cardBodyStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
};

const cardLinkStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--brand)',
  textDecoration: 'none',
  marginTop: '2px',
};
