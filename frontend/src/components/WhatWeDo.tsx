const consultancyCapabilities = [
  { name: 'Business Process Re-engineering', detail: 'Map, measure, redesign core workflows for throughput and quality.', icon: 'BPR' },
  { name: 'Lean Six Sigma Training', detail: 'Green Belt, Black Belt, and organizational capability building.', icon: 'Training' },
  { name: 'Value Stream Mapping', detail: 'End-to-end flow analysis to find where time and value are lost.', icon: 'VSM' },
  { name: 'Operational Excellence', detail: 'Sustained continuous improvement programs rooted in DMAIC.', icon: 'OpEx' },
];

const technologyCapabilities = [
  { name: 'IoT & Shop-Floor Sensing', detail: 'Real-time data capture from machines, lines, and processes.', icon: 'IoT' },
  { name: 'MES & ERP Integration', detail: 'Connect your execution layer to your planning layer, brand-agnostic.', icon: 'MES' },
  { name: 'Analytics & Dashboards', detail: 'Actionable visibility for operators, supervisors, and leadership.', icon: 'Analytics' },
  { name: 'Digital Twin & Simulation', detail: 'Model changes before committing capital to the floor.', icon: 'DigitalTwin' },
];

// Simple SVG icons for each capability
const Icons = {
  BPR: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12h32M8 24h24M8 36h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="36" cy="24" r="4" fill="currentColor"/>
    </svg>
  ),
  Training: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 38v-8c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v8M24 4v16M18 12l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  VSM: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12h36M6 24h28M6 36h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
      <circle cx="20" cy="24" r="3" fill="currentColor"/>
      <circle cx="28" cy="36" r="3" fill="currentColor"/>
    </svg>
  ),
  OpEx: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L4 16v20l20 12 20-12V16L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 4v40M4 16h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  IoT: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M12 12l4 4M32 32l4 4M12 36l4-4M32 16l4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  MES: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="16" height="32" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="28" y="8" width="16" height="32" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M20 24h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Analytics: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 38h6M18 38h4M30 38h4M42 38h-6M10 30v8M20 22v16M32 14v24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  DigitalTwin: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M12 16c0-4.4 3.6-8 8-8s8 3.6 8 8M20 32c4.4 0 8-3.6 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="16" r="3" fill="currentColor"/>
      <circle cx="28" cy="24" r="3" fill="currentColor"/>
    </svg>
  ),
};

// Brand-agnostic stack SVG illustration
function BrandAgnosticIllustration() {
  return (
    <svg viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '180px' }}>
      {/* Background */}
      <rect width="400" height="180" fill="white" rx="8"/>

      {/* Title */}
      <text x="200" y="25" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1F2937">
        Brand-Agnostic Integration
      </text>

      {/* Your Operation - Central Node */}
      <circle cx="200" cy="90" r="35" fill="#17A5DC" opacity="0.15"/>
      <circle cx="200" cy="90" r="28" fill="#17A5DC"/>
      <text x="200" y="85" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">
        Your
      </text>
      <text x="200" y="97" textAnchor="middle" fontSize="10" fontWeight="600" fill="white">
        Operation
      </text>

      {/* Vendor Tool 1 - Top Left */}
      <rect x="40" y="35" width="80" height="40" rx="4" fill="#F8FBFD" stroke="#E2E8F0" strokeWidth="1.5"/>
      <text x="80" y="53" textAnchor="middle" fontSize="8" fill="#6B7280">Vendor Tool</text>
      <text x="80" y="65" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1F2937">ERP</text>
      {/* Connection line */}
      <line x1="120" y1="55" x2="172" y2="78" stroke="#17A5DC" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>

      {/* Vendor Tool 2 - Top Right */}
      <rect x="280" y="35" width="80" height="40" rx="4" fill="#F8FBFD" stroke="#E2E8F0" strokeWidth="1.5"/>
      <text x="320" y="53" textAnchor="middle" fontSize="8" fill="#6B7280">Vendor Tool</text>
      <text x="320" y="65" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1F2937">MES</text>
      {/* Connection line */}
      <line x1="280" y1="55" x2="228" y2="78" stroke="#17A5DC" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>

      {/* Vendor Tool 3 - Bottom Left */}
      <rect x="40" y="105" width="80" height="40" rx="4" fill="#F8FBFD" stroke="#E2E8F0" strokeWidth="1.5"/>
      <text x="80" y="123" textAnchor="middle" fontSize="8" fill="#6B7280">Vendor Tool</text>
      <text x="80" y="135" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1F2937">IoT</text>
      {/* Connection line */}
      <line x1="120" y1="125" x2="172" y2="102" stroke="#17A5DC" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>

      {/* Vendor Tool 4 - Bottom Right */}
      <rect x="280" y="105" width="80" height="40" rx="4" fill="#F8FBFD" stroke="#E2E8F0" strokeWidth="1.5"/>
      <text x="320" y="123" textAnchor="middle" fontSize="8" fill="#6B7280">Vendor Tool</text>
      <text x="320" y="135" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1F2937">Analytics</text>
      {/* Connection line */}
      <line x1="280" y1="125" x2="228" y2="102" stroke="#17A5DC" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>

      {/* OpexCG Label */}
      <text x="200" y="165" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0F4664">
        OpexCG connects them all
      </text>
    </svg>
  );
}

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
            <BrandAgnosticIllustration />
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
                      <div style={iconBoxStyle} className="what-we-do-icon">
                        {Icons[cap.icon]}
                      </div>
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
                      <div style={iconBoxStyle} className="what-we-do-icon">
                        {Icons[cap.icon]}
                      </div>
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

const iconBoxStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--brand)',
  background: 'rgba(23, 165, 220, 0.08)',
  borderRadius: '8px',
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
