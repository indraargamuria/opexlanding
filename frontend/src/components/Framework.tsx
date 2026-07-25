import { useEffect, useRef, useState } from 'react';

const phases = [
  {
    number: '01',
    title: 'Assessment',
    description: 'Map your current state, quantify waste, and identify the highest-impact improvement opportunities across people, process, and technology.',
    imageLabel: 'Assessment — gemba walk photo placeholder',
  },
  {
    number: '02',
    title: 'Improvement',
    description: 'Apply Lean Six Sigma methodology to eliminate root causes, streamline workflows, and build a culture of continuous improvement.',
    imageLabel: 'Improvement — workshop session photo placeholder',
  },
  {
    number: '03',
    title: 'Solutioning',
    description: 'Select and design the best-fit Industry 4.0 tools for your floor — brand-agnostic, vendor-neutral, matched to your real constraints.',
    imageLabel: 'Solutioning — system design photo placeholder',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Deploy, train, and sustain. We stay through the transition to ensure adoption sticks and measurable results compound.',
    imageLabel: 'Implementation — go-live support photo placeholder',
  },
];

export function Framework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(-1);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (prefersReduced) {
          setActivePhase(phases.length - 1);
          return;
        }

        let phase = 0;
        setActivePhase(0);

        const advance = () => {
          phase += 1;
          if (phase < phases.length) {
            setActivePhase(phase);
            timers.push(setTimeout(advance, 450));
          }
        };
        timers.push(setTimeout(advance, 450));
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={sectionStyle}
      aria-label="Our 4-phase approach"
    >
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>How we work</p>
          <h2 style={headingStyle}>One framework. Four phases.</h2>
          <p style={subheadStyle}>
            A structured path from diagnosis to sustained results — no black boxes,
            no perpetual consulting loops.
          </p>
        </div>

        <div style={gridWrapperStyle}>
          {/* Continuous connecting line behind all phases */}
          <div style={lineTrackContainerStyle}>
            <div
              style={{
                ...lineFillStyle,
                width: activePhase >= 0 ? `${((activePhase + 1) / phases.length) * 100}%` : '0%',
              }}
            />
          </div>

          <div style={gridStyle}>
            {phases.map((phase, i) => {
              const isActive = i <= activePhase;
              const isCurrent = i === activePhase;

              return (
                <div key={phase.number} style={cardStyle}>
                  <div
                    style={{
                      ...imageStyle,
                      opacity: isActive ? 1 : 0.4,
                      transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    }}
                    role="img"
                    aria-label={phase.imageLabel}
                  >
                    {phase.title} photo placeholder
                  </div>
                  <div style={numberRowStyle}>
                    <span
                      style={{
                        ...numberStyle,
                        color: isActive ? 'var(--brand)' : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {phase.number}
                    </span>
                  </div>
                  <h3
                    style={{
                      ...titleStyle,
                      color: isActive ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      ...descStyle,
                      color: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    {phase.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  padding: '96px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '64px',
  maxWidth: '640px',
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
  color: 'var(--white)',
  lineHeight: 'var(--leading-heading)',
  marginBottom: '16px',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '1.0625rem',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.55)',
};

const gridWrapperStyle: React.CSSProperties = {
  position: 'relative',
};

const lineTrackContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '126px',
  left: '24px',
  right: '24px',
  height: '2px',
  background: 'rgba(255, 255, 255, 0.1)',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0',
  alignItems: 'start',
};

const cardStyle: React.CSSProperties = {
  padding: '0 16px',
  transition: 'opacity 0.4s ease-out, border-color 0.3s ease',
  borderTop: '2px solid transparent',
  paddingTop: '20px',
};

const lineFillStyle: React.CSSProperties = {
  height: '100%',
  background: 'var(--brand)',
  transition: 'width 0.4s ease-out',
};

const numberRowStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px dashed rgba(255, 255, 255, 0.2)',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.35)',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  lineHeight: 1.4,
  marginBottom: '16px',
  transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
};

const numberStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h2)',
  fontWeight: 700,
  lineHeight: 1,
  display: 'block',
  marginBottom: '12px',
  transition: 'color 0.3s ease',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 600,
  marginBottom: '12px',
  transition: 'color 0.3s ease',
};

const descStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.6,
  transition: 'color 0.3s ease',
};
