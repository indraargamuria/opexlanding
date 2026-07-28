import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const products = [
  {
    name: 'OpexAI',
    features: [
      'Predictive analytics for manufacturing operations',
      'Defect detection with computer vision',
      'Throughput forecasting without a data science team',
      'Real-time dashboards for operators & leadership',
    ],
    image: '/images/dashboard-1.jpg',
    imageAlt: 'AI-powered analytics dashboard',
    externalUrl: 'https://app.opexcg.com/opexai',
  },
  {
    name: 'OpexMX',
    features: [
      'Real-time manufacturing execution system',
      'Connect machines, operators & planning systems',
      'Brand-agnostic — works with existing MES/ERP',
      'Single source of truth for the factory floor',
    ],
    image: '/images/dashboard-3.jpg',
    imageAlt: 'Manufacturing execution dashboard',
    externalUrl: 'https://app.opexcg.com/opexmx',
  },
];

function ProductCard({ name, features, image, imageAlt, externalUrl }: typeof products[0]) {
  return (
    <div style={cardStyle}>
      <img src={image} alt={imageAlt} style={imgStyle} />
      <div style={cardContentStyle}>
        <h3 style={nameStyle}>{name}</h3>
        <ul style={featureListStyle}>
          {features.map((f, i) => (
            <li key={i} style={featureItemStyle}>{f}</li>
          ))}
        </ul>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Launch Platform
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div style={pageStyle}>
      <div style={gridStyle}>
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});

const pageStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 0',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
  maxWidth: '960px',
  width: '100%',
  margin: '0 auto',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
};

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: '140px',
  objectFit: 'cover',
  display: 'block',
};

const cardContentStyle: React.CSSProperties = {
  padding: '16px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const featureListStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const featureItemStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
  paddingLeft: '14px',
  position: 'relative',
};

const linkStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--brand)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  marginTop: '8px',
  transition: 'color 0.15s ease',
};
