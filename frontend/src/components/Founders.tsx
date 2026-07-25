import { PlaceholderImage } from './PlaceholderImage';

const founders = [
  {
    name: 'Pak Franklin',
    title: 'Founder & Principal Consultant',
    bio: 'Over 20 years driving operational excellence across Southeast Asian manufacturing. Certified Lean Six Sigma Black Belt with deep experience in automotive, FMCG, and heavy industry.',
    pullQuote: 'Founded OpexCG to bridge the gap between methodology and technology on the factory floor.',
  },
  {
    name: 'Pak Theam Wah',
    title: 'Co-Founder & Technology Director',
    bio: 'Background in industrial automation and systems integration across Singapore and Malaysia. Leads OpexCG\'s brand-agnostic technology practice.',
    pullQuote: 'Evaluating, selecting, and integrating the right Industry 4.0 tools for each client\'s unique operational context.',
  },
  {
    name: 'Pak Raj',
    title: 'Co-Founder & Senior Consultant',
    bio: 'Specialist in training and organizational capability building. Has led Lean Six Sigma certification programs for teams across Indonesia and Malaysia.',
    pullQuote: 'Turning methodology into everyday practice on production floors.',
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
          {founders.map((founder, i) => {
            if (i === 0) {
              // Founder 1: image left, text right (original layout)
              return (
                <article key={founder.name} style={profileStyle}>
                  <div style={photoSideStyle}>
                    <PlaceholderImage
                      label={`Founder — ${founder.name}, working session photo`}
                      height="320px"
                    />
                  </div>
                  <div style={infoSideStyle}>
                    <h3 style={nameStyle}>{founder.name}</h3>
                    <p style={titleStyle}>{founder.title}</p>
                    <p style={pullQuoteStyle}>{founder.pullQuote}</p>
                    <p style={bioStyle}>{founder.bio}</p>
                  </div>
                </article>
              );
            }

            if (i === 1) {
              // Founder 2: image right, text left (reversed layout)
              return (
                <article key={founder.name} style={{...profileStyle, ...reversedProfileStyle}}>
                  <div style={infoSideStyle}>
                    <h3 style={nameStyle}>{founder.name}</h3>
                    <p style={titleStyle}>{founder.title}</p>
                    <p style={pullQuoteStyle}>{founder.pullQuote}</p>
                    <p style={bioStyle}>{founder.bio}</p>
                  </div>
                  <div style={photoSideStyle}>
                    <PlaceholderImage
                      label={`Founder — ${founder.name}, working session photo`}
                      height="320px"
                    />
                  </div>
                </article>
              );
            }

            // Founder 3: centered, image above text, full width
            return (
              <article key={founder.name} style={centeredProfileStyle}>
                <div style={centeredPhotoWrapperStyle}>
                  <PlaceholderImage
                    label={`Founder — ${founder.name}, working session photo`}
                    height="280px"
                  />
                </div>
                <div style={centeredInfoStyle}>
                  <h3 style={nameStyle}>{founder.name}</h3>
                  <p style={titleStyle}>{founder.title}</p>
                  <p style={pullQuoteStyle}>{founder.pullQuote}</p>
                  <p style={centeredBioStyle}>{founder.bio}</p>
                </div>
              </article>
            );
          })}
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

const reversedProfileStyle: React.CSSProperties = {
  gridTemplateColumns: '1fr 280px',
};

const centeredProfileStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  textAlign: 'center',
};

const centeredPhotoWrapperStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '400px',
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

const pullQuoteStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  fontWeight: 500,
  lineHeight: 1.5,
  color: 'var(--dark-accent)',
  marginBottom: '12px',
  fontStyle: 'italic',
};

const centeredInfoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
};

const bioStyle: React.CSSProperties = {
  fontSize: 'var(--text-body)',
  lineHeight: 1.7,
  color: 'var(--muted)',
  maxWidth: '480px',
};

const centeredBioStyle: React.CSSProperties = {
  ...bioStyle,
  maxWidth: '560px',
};
