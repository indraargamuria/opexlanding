import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const projects = [
  {
    client: 'Automotive Parts Manufacturer',
    sector: 'Automotive',
    metric: '4.2% &rarr; 0.8% defect rate',
    outcome: '$340K annual rework savings',
    flag: 'Indonesia',
  },
  {
    client: 'FMCG Conglomerate',
    sector: 'Consumer Goods',
    metric: '92% OEE data coverage',
    outcome: '8% throughput gain in Year 1',
    flag: 'Malaysia',
  },
  {
    client: 'Heavy Industry Conglomerate',
    sector: 'Manufacturing',
    metric: '35% &rarr; 88% completion rate',
    outcome: '$120K avg savings per project',
    flag: 'Singapore',
  },
  {
    client: 'Regional Food Producer',
    sector: 'Food & Beverage',
    metric: '62% yield variance reduction',
    outcome: '$210K annual waste savings',
    flag: 'Indonesia',
  },
];

function ExperiencePage() {
  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={overlineStyle}>Experience</p>
        <h2 style={headingStyle}>Proven results across the floor</h2>
      </div>
      <div style={gridStyle}>
        {projects.map((p) => (
          <div key={p.client} style={cardStyle}>
            <div style={cardTopStyle}>
              <span style={sectorBadgeStyle}>{p.sector}</span>
              <span style={flagStyle}>{p.flag}</span>
            </div>
            <h3 style={clientNameStyle}>{p.client}</h3>
            <div style={metricBadgeStyle} dangerouslySetInnerHTML={{ __html: p.metric }} />
            <p style={outcomeStyle} dangerouslySetInnerHTML={{ __html: p.outcome }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
});

const pageStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '960px',
  margin: '0 auto',
  padding: '8px 0',
};

const headerStyle: React.CSSProperties = {
  marginBottom: '16px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '4px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '14px',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const cardTopStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const sectorBadgeStyle: React.CSSProperties = {
  fontSize: '0.6875rem',
  fontWeight: 500,
  color: 'var(--brand)',
  background: 'rgba(23, 165, 220, 0.08)',
  padding: '2px 8px',
  borderRadius: '4px',
};

const flagStyle: React.CSSProperties = {
  fontSize: '0.6875rem',
  color: 'var(--muted)',
};

const clientNameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
  lineHeight: 1.3,
};

const metricBadgeStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--dark-accent)',
  background: 'rgba(15, 70, 100, 0.06)',
  padding: '4px 10px',
  borderRadius: '6px',
  display: 'inline-block',
  alignSelf: 'flex-start',
};

const outcomeStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
  marginTop: 'auto',
};
