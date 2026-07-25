import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    client: 'Automotive Parts Manufacturer',
    sector: 'Automotive · Indonesia',
    industry: 'Automotive',
    challenge: 'High defect rate on assembly line causing 12% rework costs and delayed shipments to OEM customers.',
    approach: 'Full DMAIC cycle — value stream mapping, root cause analysis with fishbone and 5-Why, then targeted IoT sensors for real-time defect tracking.',
    outcome: 'Defect rate reduced from 4.2% to 0.8% within 6 months. Rework cost savings of USD 340K annually.',
    photo: '/images/experience-automotive.jpg',
    photoAlt: 'Automotive assembly line factory',
  },
  {
    client: 'FMCG Conglomerate',
    sector: 'Consumer Goods · Malaysia',
    industry: 'Consumer Goods',
    challenge: 'Fragmented production data across 3 factories making it impossible to benchmark OEE or allocate resources efficiently.',
    approach: 'Unified MES integration across all 3 sites with a central analytics dashboard. Brand-agnostic stack built on existing SCADA infrastructure.',
    outcome: 'OEE visibility improved from near-zero to 92% data coverage. Cross-factory benchmarking enabled, yielding 8% throughput gain in Year 1.',
    photo: '/images/experience-fmcg.jpg',
    photoAlt: 'Consumer goods factory production line',
  },
  {
    client: 'Heavy Industry Conglomerate',
    sector: 'Manufacturing · Singapore',
    industry: 'Manufacturing',
    challenge: 'Lean training stuck in classroom mode — low adoption on shop floor, no measurable behavioral change after certification.',
    approach: 'Redesigned Black Belt program with embedded Gemba walks, floor-based projects tied to real KPIs, and 90-day post-training coaching.',
    outcome: 'Project completion rate jumped from 35% to 88%. Certified practitioners delivered measurable cost savings averaging USD 120K per project.',
    photo: '/images/experience-heavy.jpg',
    photoAlt: 'Heavy industry factory workers',
  },
  {
    client: 'Regional Food Producer',
    sector: 'Food & Beverage · Indonesia',
    industry: 'Food & Beverage',
    challenge: 'Batch yield inconsistency across production lines leading to material waste and unpredictable output schedules.',
    approach: 'Lean Six Sigma analysis of critical process parameters, followed by sensor-based monitoring and SPC dashboards for line supervisors.',
    outcome: 'Batch yield variance cut by 62%. Material waste reduction saved USD 210K annually with payback in under 8 months.',
    photo: '/images/experience-food.jpg',
    photoAlt: 'Food beverage factory production',
  },
];

const industries = ['All', 'Automotive', 'Consumer Goods', 'Manufacturing', 'Food & Beverage'];

// Helper component for count-up animation
function CountUpNumber({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.disconnect();

          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(value * easeOut);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, hasStarted]);

  // Format the number based on its value
  const formatNumber = (num: number) => {
    if (Number.isInteger(num)) {
      return Math.round(num).toString();
    }
    return num.toFixed(1);
  };

  return <span ref={ref}>{formatNumber(displayValue)}</span>;
}

// Helper function to parse outcome text and wrap numbers
function parseOutcomeWithCountUp(text: string) {
  const parts: (string | { value: number; isPercentage: boolean })[] = [];
  let lastIndex = 0;

  // Match numbers (including decimals and percentages)
  const regex = /(\d+(?:\.\d+)?%?)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the number
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const matchedText = match[0];
    const isPercentage = matchedText.includes('%');
    const numericValue = parseFloat(matchedText.replace('%', ''));

    parts.push({ value: numericValue, isPercentage });
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

// Component to render parsed outcome with count-up numbers
function OutcomeWithCountUp({ text }: { text: string }) {
  const parts = parseOutcomeWithCountUp(text);

  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={`text-${index}`}>{part}</span>;
        }
        return (
          <span key={`num-${index}`} style={{ fontWeight: 600, color: 'var(--dark-accent)' }}>
            <CountUpNumber value={part.value} />
            {part.isPercentage && '%'}
          </span>
        );
      })}
    </>
  );
}

export function Experience() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.industry === activeFilter);

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

        {/* Industry filter tabs */}
        <div style={filterContainerStyle}>
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry)}
              style={{
                ...filterButtonStyle,
                ...(activeFilter === industry ? filterButtonActiveStyle : {}),
              }}
            >
              {industry}
            </button>
          ))}
        </div>

        <div style={listStyle}>
          {filteredProjects.map((project, i) => (
            <article
              key={project.client}
              style={{
                ...cardStyle,
                gridTemplateColumns: i % 2 === 0 ? '340px 1fr' : '1fr 340px',
              }}
            >
              {i % 2 !== 0 && (
                <div style={photoFirstStyle}>
                  <img
                    src={project.photo}
                    alt={project.photoAlt}
                    style={projectPhotoStyle}
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
                    <p style={outcomeTextStyle}>
                      <OutcomeWithCountUp text={project.outcome} />
                    </p>
                  </div>
                </div>
              </div>

              {i % 2 === 0 && (
                <div style={photoSecondStyle}>
                  <img
                    src={project.photo}
                    alt={project.photoAlt}
                    style={projectPhotoStyle}
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

const projectPhotoStyle: React.CSSProperties = {
  width: '100%',
  height: '280px',
  objectFit: 'cover',
  borderRadius: '6px',
};

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

const filterContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '48px',
  flexWrap: 'wrap',
};

const filterButtonStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  padding: '10px 20px',
  border: '1px solid var(--border)',
  borderRadius: '20px',
  background: 'var(--white)',
  color: 'var(--muted)',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
};

const filterButtonActiveStyle: React.CSSProperties = {
  background: 'var(--brand)',
  color: 'var(--white)',
  borderColor: 'var(--brand)',
};
