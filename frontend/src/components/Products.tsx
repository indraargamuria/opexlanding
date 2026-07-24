const products = [
  {
    name: 'OpexMX',
    description: 'AI-enabled manufacturing execution — real-time visibility, predictive scheduling, and adaptive workflow management.',
  },
  {
    name: 'OpexDX',
    description: 'Digital transformation readiness assessment — benchmark your Industry 4.0 maturity and map the path forward.',
  },
  {
    name: 'OpexIQ',
    description: 'Shop-floor analytics and dashboarding — turn raw machine data into actionable insight for operators and leadership.',
  },
];

export function Products() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={headingStyle}>AI-enabled products</p>

        <div style={listStyle}>
          {products.map((product) => (
            <div key={product.name} style={itemStyle}>
              <h3 style={nameStyle}>{product.name}</h3>
              <p style={descStyle}>{product.description}</p>
              <a href="#" style={linkStyle}>
                Learn more
                <span style={arrowStyle}>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--white)',
  padding: '64px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 500,
  color: 'var(--muted)',
  marginBottom: '32px',
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

const itemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  alignItems: 'center',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-body)',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const descStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  color: 'var(--muted)',
  maxWidth: '520px',
};

const linkStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const arrowStyle: React.CSSProperties = {
  transition: 'transform 0.15s ease',
};
