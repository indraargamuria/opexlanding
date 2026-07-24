import { PlaceholderImage } from './PlaceholderImage';

const projects = [
  {
    client: 'Automotive Parts Manufacturer',
    sector: 'Automotive · Indonesia',
    challenge: 'High defect rate on assembly line causing 12% rework costs and delayed shipments to OEM customers.',
    approach: 'Full DMAIC cycle — value stream mapping, root cause analysis with fishbone and 5-Why, then targeted IoT sensors for real-time defect tracking.',
    outcome: 'Defect rate reduced from 4.2% to 0.8% within 6 months. Rework cost savings of USD 340K annually.',
  },
  {
    client: 'FMCG Conglomerate',
    sector: 'Consumer Goods · Malaysia',
    challenge: 'Fragmented production data across 3 factories making it impossible to benchmark OEE or allocate resources efficiently.',
    approach: 'Unified MES integration across all 3 sites with a central analytics dashboard. Brand-agnostic stack built on existing SCADA infrastructure.',
    outcome: 'OEE visibility improved from near-zero to 92% data coverage. Cross-factory benchmarking enabled, yielding 8% throughput gain in Year 1.',
  },
  {
    client: 'Heavy Industry Conglomerate',
    sector: 'Manufacturing · Singapore',
    challenge: 'Lean training stuck in classroom mode — low adoption on shop floor, no measurable behavioral change after certification.',
    approach: 'Redesigned Black Belt program with embedded Gemba walks, floor-based projects tied to real KPIs, and 90-day post-training coaching.',
    outcome: 'Project completion rate jumped from 35% to 88%. Certified practitioners delivered measurable cost savings averaging USD 120K per project.',
  },
  {
    client: 'Regional Food Producer',
    sector: 'Food & Beverage · Indonesia',
    challenge: 'Batch yield inconsistency across production lines leading to material waste and unpredictable output schedules.',
    approach: 'Lean Six Sigma analysis of critical process parameters, followed by sensor-based monitoring and SPC dashboards for line supervisors.',
    outcome: 'Batch yield variance cut by 62%. Material waste reduction saved USD 210K annually with payback in under 8 months.',
  },
];

export function Experience() {
  return (
    <section style={sectionStyle} id="experience">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>Experience</p>
          <h2 style={headingStyle}>Proven results across the floor</h2>
          <p style={subheadStyle}>
            Real projects, real outcomes. Every engagement is grounded in
            methodology and measured in impact.
          </p>
        </div>

        <div style={listStyle}>
          {projects.map((project, i) => (
            <article
              key={project.client}
              style={{
                ...cardStyle,
                gridTemplateColumns: i % 2 === 0 ? '340px 1fr' : '1fr 340px',
              }}
            >
              {i % 2 !== 0 && (
                <div style={photoFirstStyle}>
                  <PlaceholderImage
                    label={`Project — ${project.client}`}
                    height="280px"
                  />
                </div>
              )}

              <div style={infoStyle}>
                <p style={sectorStyle}>{project.sector}</p>
                <h3 style={clientStyle}>{project.client}</h3>

                <div style={detailGroupStyle}>
                  <div style={detailBlockStyle}>
                    <span style={labelStyle}>Challenge</span>
                    <p style={detailTextStyle}>{project.challenge}</p>
                  </div>
                  <div style={detailBlockStyle}>
                    <span style={labelStyle}>Approach</span>
                    <p style={detailTextStyle}>{project.approach}</p>
                  </div>
                  <div style={outcomeBlockStyle}>
                    <span style={labelStyle}>Outcome</span>
                    <p style={outcomeTextStyle}>{project.outcome}</p>
                  </div>
                </div>
              </div>

              {i % 2 === 0 && (
                <div style={photoSecondStyle}>
                  <PlaceholderImage
                    label={`Project — ${project.client}`}
                    height="280px"
                  />
                </div>
              )}
            </article>
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
  maxWidth: '1100px',
  margin: '0 auto',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '64px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
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
  marginBottom: '16px',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '1.0625rem',
  lineHeight: 1.6,
  color: 'var(--muted)',
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
};

const cardStyle: React.CSSProperties = {
  display: 'grid',
  gap: '40px',
  alignItems: 'start',
  background: 'var(--white)',
  borderRadius: '8px',
  padding: '32px',
};

const photoFirstStyle: React.CSSProperties = {
  order: -1,
};

const photoSecondStyle: React.CSSProperties = {};

const infoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
};

const sectorStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.02em',
};

const clientStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h3)',
  fontWeight: 600,
  color: 'var(--dark-text)',
  lineHeight: 1.2,
};

const detailGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '8px',
};

const detailBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'var(--muted)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
};

const detailTextStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.6,
  color: 'var(--dark-text)',
  opacity: 0.8,
};

const outcomeBlockStyle: React.CSSProperties = {
  ...detailBlockStyle,
  marginTop: '4px',
  paddingTop: '16px',
  borderTop: '1px solid var(--border)',
};

const outcomeTextStyle: React.CSSProperties = {
  fontSize: 'var(--text-body)',
  fontWeight: 500,
  lineHeight: 1.6,
  color: 'var(--dark-text)',
};
