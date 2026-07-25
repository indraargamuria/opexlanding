import { PlaceholderImage } from './PlaceholderImage';

const consultancyCapabilities = [
  { name: 'Business Process Re-engineering', detail: 'Map, measure, redesign core workflows for throughput and quality.' },
  { name: 'Lean Six Sigma Training', detail: 'Green Belt, Black Belt, and organizational capability building.' },
  { name: 'Value Stream Mapping', detail: 'End-to-end flow analysis to find where time and value are lost.' },
  { name: 'Operational Excellence', detail: 'Sustained continuous improvement programs rooted in DMAIC.' },
];

const technologyCapabilities = [
  { name: 'IoT & Shop-Floor Sensing', detail: 'Real-time data capture from machines, lines, and processes.' },
  { name: 'MES & ERP Integration', detail: 'Connect your execution layer to your planning layer, brand-agnostic.' },
  { name: 'Analytics & Dashboards', detail: 'Actionable visibility for operators, supervisors, and leadership.' },
  { name: 'Digital Twin & Simulation', detail: 'Model changes before committing capital to the floor.' },
];

export function WhatWeDo() {
  return (
    <section style={sectionStyle} id="services">
      <div style={innerStyle}>
        <div style={leftStyle}>
          <p style={overlineStyle}>What we do</p>
          <h2 style={headingStyle}>
            Consultancy and technology, delivered as one capability
          </h2>
          <p style={leadStyle}>
            We don't split digital transformation into a "strategy deck" and a
            separate "tech implementation." The same team that maps your value
            stream selects the tools, integrates the systems, and trains your
            people to run them. Brand-agnostic by design — we pick what fits
            your floor, not what fills a vendor quota.
          </p>
          <div style={illustrationWrapperStyle}>
            <PlaceholderImage
              label="Brand-agnostic stack illustration — OpexCG between multiple vendor tools"
              height="180px"
            />
          </div>
        </div>

        <div style={rightStyle}>
          <div style={columnGroupStyle}>
            <div style={columnStyleLeft}>
              <h3 style={columnHeadingStyle}>Consultancy</h3>
              <ul style={listStyle}>
                {consultancyCapabilities.map((cap) => (
                  <li key={cap.name} style={listItemStyle}>
                    <div style={iconWrapperStyle}>
                      <PlaceholderImage
                        label={`Icon placeholder — ${cap.name}`}
                        width="48px"
                        height="48px"
                      />
                    </div>
                    <div style={textContentStyle}>
                      <span style={capNameStyle}>{cap.name}</span>
                      <span style={capDetailStyle}>{cap.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div style={verticalDividerStyle} />

            <div style={columnStyleRight}>
              <h3 style={columnHeadingStyle}>Technology</h3>
              <ul style={listStyle}>
                {technologyCapabilities.map((cap) => (
                  <li key={cap.name} style={listItemStyle}>
                    <div style={iconWrapperStyle}>
                      <PlaceholderImage
                        label={`Icon placeholder — ${cap.name}`}
                        width="48px"
                        height="48px"
                      />
                    </div>
                    <div style={textContentStyle}>
                      <span style={capNameStyle}>{cap.name}</span>
                      <span style={capDetailStyle}>{cap.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '80px',
  alignItems: 'start',
};

const leftStyle: React.CSSProperties = {
  position: 'sticky' as const,
  top: '96px',
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
  marginBottom: '24px',
};

const leadStyle: React.CSSProperties = {
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: 'var(--muted)',
  maxWidth: '480px',
};

const illustrationWrapperStyle: React.CSSProperties = {
  marginTop: '24px',
  width: '100%',
  maxWidth: '420px',
};

const rightStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
};

const columnGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0',
  alignItems: 'stretch',
};

const columnStyle: React.CSSProperties = {
  flex: 1,
  padding: '32px 24px',
};

const columnStyleLeft: React.CSSProperties = {
  ...columnStyle,
  background: 'rgba(255, 255, 255, 0.5)',
  borderRadius: '8px 0 0 8px',
};

const columnStyleRight: React.CSSProperties = {
  ...columnStyle,
  background: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '0 8px 8px 0',
};

const columnHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 600,
  color: 'var(--dark-text)',
  marginBottom: '20px',
  letterSpacing: '-0.01em',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const listItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  alignItems: 'flex-start',
};

const iconWrapperStyle: React.CSSProperties = {
  flexShrink: 0,
};

const textContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  flex: 1,
};

const verticalDividerStyle: React.CSSProperties = {
  width: '1px',
  background: 'var(--border)',
  margin: '32px 0',
};

const capNameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-body)',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const capDetailStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  color: 'var(--muted)',
};
