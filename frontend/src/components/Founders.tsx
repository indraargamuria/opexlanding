import { PlaceholderImage } from './PlaceholderImage';

const founders = [
  {
    name: 'Pak Franklin',
    title: 'Founder & Principal Consultant',
    bio: 'Over 20 years driving operational excellence across Southeast Asian manufacturing. Certified Lean Six Sigma Black Belt with deep experience in automotive, FMCG, and heavy industry. Founded OpexCG to bridge the gap between methodology and technology on the factory floor.',
  },
  {
    name: 'Pak Theam Wah',
    title: 'Co-Founder & Technology Director',
    bio: 'Background in industrial automation and systems integration across Singapore and Malaysia. Leads OpexCG\'s brand-agnostic technology practice — evaluating, selecting, and integrating the right Industry 4.0 tools for each client\'s unique operational context.',
  },
  {
    name: 'Pak Raj',
    title: 'Co-Founder & Senior Consultant',
    bio: 'Specialist in training and organizational capability building. Has led Lean Six Sigma certification programs for teams across Indonesia and Malaysia, turning methodology into everyday practice on production floors.',
  },
];

export function Founders() {
  return (
    <section style={sectionStyle} id="founders">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>Our people</p>
          <h2 style={headingStyle}>The team behind the framework</h2>
        </div>

        <div style={listStyle}>
          {founders.map((founder, i) => (
            <article key={founder.name} style={profileStyle}>
              <div style={photoSideStyle}>
                <PlaceholderImage
                  label={`Founder — ${founder.name}, working session photo`}
                  height="320px"
                />
              </div>
              <div style={infoSideStyle}>
                <span style={numberStyle}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={nameStyle}>{founder.name}</h3>
                <p style={titleStyle}>{founder.title}</p>
                <p style={bioStyle}>{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--white)',
  padding: '96px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
};

const headerStyle: React.CSSProperties = {
  marginBottom: '64px',
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
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '56px',
};

const profileStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '280px 1fr',
  gap: '48px',
  alignItems: 'start',
};

const photoSideStyle: React.CSSProperties = {
  width: '100%',
};

const infoSideStyle: React.CSSProperties = {
  paddingTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const numberStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-caption)',
  fontWeight: 700,
  color: 'var(--brand)',
  letterSpacing: '0.04em',
  display: 'block',
  marginBottom: '4px',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h3)',
  fontWeight: 600,
  color: 'var(--dark-text)',
  lineHeight: 1.2,
};

const titleStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--muted)',
  marginBottom: '8px',
};

const bioStyle: React.CSSProperties = {
  fontSize: 'var(--text-body)',
  lineHeight: 1.7,
  color: 'var(--muted)',
  maxWidth: '480px',
};
