/*
 * Founders — 3 founder profiles with vector illustration placeholders.
 * Illustrations are inline SVGs colored to match --brand and --dark-accent.
 * TEMPORARY: illustration placeholders — replace with real founder photo when available.
 */

/* ── Inline SVG illustrations (colored to brand tokens) ── */

// Illustration 1: Confident professional with clipboard — for founder/consultant
function FounderIllustration1() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={illustrationSvgStyle}>
      {/* Background circle */}
      <circle cx="140" cy="140" r="120" fill="#17A5DC" opacity="0.08"/>
      {/* Body */}
      <path d="M80 280c0-44 27-80 60-80s60 36 60 80" fill="#0F4664" opacity="0.15"/>
      <path d="M90 280c0-38 22-68 50-68s50 30 50 68" fill="#0F4664" opacity="0.25"/>
      {/* Shirt collar */}
      <path d="M115 212l25 20 25-20" stroke="#17A5DC" strokeWidth="2" fill="none"/>
      {/* Head */}
      <circle cx="140" cy="150" r="40" fill="#17A5DC" opacity="0.2"/>
      <circle cx="140" cy="150" r="34" fill="#17A5DC" opacity="0.35"/>
      {/* Hair */}
      <path d="M106 140c0-24 15-42 34-42s34 18 34 42c0 2-1 4-3 6-4-14-14-22-31-22s-27 8-31 22c-2-2-3-4-3-6z" fill="#0F4664" opacity="0.6"/>
      {/* Eyes */}
      <circle cx="128" cy="152" r="3" fill="#0F4664" opacity="0.7"/>
      <circle cx="152" cy="152" r="3" fill="#0F4664" opacity="0.7"/>
      {/* Smile */}
      <path d="M130 164c4 4 16 4 20 0" stroke="#0F4664" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Clipboard */}
      <rect x="170" y="180" width="40" height="52" rx="4" fill="white" stroke="#17A5DC" strokeWidth="2"/>
      <rect x="182" y="176" width="16" height="8" rx="3" fill="#17A5DC"/>
      <line x1="178" y1="196" x2="202" y2="196" stroke="#17A5DC" strokeWidth="1.5" opacity="0.5"/>
      <line x1="178" y1="204" x2="196" y2="204" stroke="#17A5DC" strokeWidth="1.5" opacity="0.5"/>
      <line x1="178" y1="212" x2="200" y2="212" stroke="#17A5DC" strokeWidth="1.5" opacity="0.5"/>
      {/* Checkmark */}
      <path d="M180 222l4 4 8-8" stroke="#17A5DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Illustration 2: Person with gear/tech elements — for technology director
function FounderIllustration2() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={illustrationSvgStyle}>
      {/* Background circle */}
      <circle cx="140" cy="140" r="120" fill="#0F4664" opacity="0.08"/>
      {/* Body */}
      <path d="M80 280c0-44 27-80 60-80s60 36 60 80" fill="#17A5DC" opacity="0.12"/>
      <path d="M90 280c0-38 22-68 50-68s50 30 50 68" fill="#17A5DC" opacity="0.2"/>
      {/* Head */}
      <circle cx="140" cy="150" r="40" fill="#0F4664" opacity="0.15"/>
      <circle cx="140" cy="150" r="34" fill="#0F4664" opacity="0.28"/>
      {/* Hair */}
      <path d="M106 138c0-26 15-44 34-44s34 18 34 44c0 2-1 3-2 5-5-16-15-24-32-24s-27 8-32 24c-1-2-2-3-2-5z" fill="#17A5DC" opacity="0.45"/>
      {/* Glasses */}
      <circle cx="126" cy="152" r="10" stroke="#0F4664" strokeWidth="2" fill="none" opacity="0.5"/>
      <circle cx="154" cy="152" r="10" stroke="#0F4664" strokeWidth="2" fill="none" opacity="0.5"/>
      <line x1="136" y1="152" x2="144" y2="152" stroke="#0F4664" strokeWidth="2" opacity="0.5"/>
      {/* Eyes behind glasses */}
      <circle cx="126" cy="152" r="2.5" fill="#0F4664" opacity="0.6"/>
      <circle cx="154" cy="152" r="2.5" fill="#0F4664" opacity="0.6"/>
      {/* Smile */}
      <path d="M132 166c4 3 12 3 16 0" stroke="#0F4664" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45"/>
      {/* Gear icon (tech) */}
      <circle cx="200" cy="120" r="18" stroke="#17A5DC" strokeWidth="2" fill="none" opacity="0.4"/>
      <circle cx="200" cy="120" r="8" stroke="#17A5DC" strokeWidth="2" fill="none" opacity="0.4"/>
      <line x1="200" y1="100" x2="200" y2="106" stroke="#17A5DC" strokeWidth="2" opacity="0.4"/>
      <line x1="200" y1="134" x2="200" y2="140" stroke="#17A5DC" strokeWidth="2" opacity="0.4"/>
      <line x1="180" y1="120" x2="186" y2="120" stroke="#17A5DC" strokeWidth="2" opacity="0.4"/>
      <line x1="214" y1="120" x2="220" y2="120" stroke="#17A5DC" strokeWidth="2" opacity="0.4"/>
      {/* Screen/tablet */}
      <rect x="56" y="190" width="48" height="36" rx="4" fill="white" stroke="#0F4664" strokeWidth="2" opacity="0.5"/>
      <line x1="64" y1="200" x2="96" y2="200" stroke="#17A5DC" strokeWidth="1.5" opacity="0.4"/>
      <line x1="64" y1="206" x2="88" y2="206" stroke="#17A5DC" strokeWidth="1.5" opacity="0.4"/>
      <line x1="64" y1="212" x2="92" y2="212" stroke="#0F4664" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

// Illustration 3: Person presenting/training — for senior consultant/trainer
function FounderIllustration3() {
  return (
    <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={illustrationSvgStyle}>
      {/* Background circle */}
      <circle cx="140" cy="140" r="120" fill="#17A5DC" opacity="0.06"/>
      <circle cx="140" cy="140" r="90" fill="#0F4664" opacity="0.05"/>
      {/* Body */}
      <path d="M85 280c0-42 25-76 55-76s55 34 55 76" fill="#0F4664" opacity="0.15"/>
      <path d="M95 280c0-36 20-64 45-64s45 28 45 64" fill="#0F4664" opacity="0.25"/>
      {/* Head */}
      <circle cx="140" cy="150" r="40" fill="#17A5DC" opacity="0.18"/>
      <circle cx="140" cy="150" r="34" fill="#17A5DC" opacity="0.3"/>
      {/* Hair */}
      <path d="M108 136c2-28 18-46 32-46s30 18 32 46c-3-12-12-20-32-20s-29 8-32 20z" fill="#0F4664" opacity="0.55"/>
      {/* Eyes */}
      <circle cx="128" cy="150" r="3" fill="#0F4664" opacity="0.65"/>
      <circle cx="152" cy="150" r="3" fill="#0F4664" opacity="0.65"/>
      {/* Smile */}
      <path d="M131 162c5 5 13 5 18 0" stroke="#0F4664" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45"/>
      {/* Presentation board */}
      <rect x="170" y="100" width="70" height="50" rx="4" fill="white" stroke="#17A5DC" strokeWidth="2" opacity="0.6"/>
      <line x1="180" y1="114" x2="230" y2="114" stroke="#17A5DC" strokeWidth="1.5" opacity="0.35"/>
      <line x1="180" y1="122" x2="220" y2="122" stroke="#0F4664" strokeWidth="1.5" opacity="0.25"/>
      <line x1="180" y1="130" x2="226" y2="130" stroke="#17A5DC" strokeWidth="1.5" opacity="0.35"/>
      <line x1="180" y1="138" x2="210" y2="138" stroke="#0F4664" strokeWidth="1.5" opacity="0.25"/>
      {/* Raised hand */}
      <path d="M180 180l-20-30" stroke="#17A5DC" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
      <circle cx="158" cy="148" r="6" fill="#17A5DC" opacity="0.2"/>
      {/* Small audience dots */}
      <circle cx="80" cy="260" r="6" fill="#0F4664" opacity="0.12"/>
      <circle cx="100" cy="264" r="6" fill="#0F4664" opacity="0.1"/>
      <circle cx="120" cy="258" r="6" fill="#0F4664" opacity="0.12"/>
    </svg>
  );
}

const founders = [
  {
    name: 'Franklin Kurniawan',
    title: 'Founder & Principal Consultant',
    bio: 'Over 20 years driving operational excellence across Southeast Asian manufacturing. Certified Lean Six Sigma Black Belt with deep experience in automotive, FMCG, and heavy industry.',
    pullQuote: 'Founded OpexCG to bridge the gap between methodology and technology on the factory floor.',
    Illustration: FounderIllustration1,
  },
  {
    name: 'Lee Theam Wah',
    title: 'Co-Founder & Technology Director',
    bio: 'Background in industrial automation and systems integration across Singapore and Malaysia. Leads OpexCG\'s brand-agnostic technology practice.',
    pullQuote: 'Evaluating, selecting, and integrating the right Industry 4.0 tools for each client\'s unique operational context.',
    Illustration: FounderIllustration2,
  },
  {
    name: 'Rajendra Khrisnan',
    title: 'Co-Founder & Senior Consultant',
    bio: 'Specialist in training and organizational capability building. Has led Lean Six Sigma certification programs for teams across Indonesia and Malaysia.',
    pullQuote: 'Turning methodology into everyday practice on production floors.',
    Illustration: FounderIllustration3,
  },
];

export function Founders() {
  return (
    <section style={sectionStyle} id="founders">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>Our Founders</p>
          {/* DRAFT COPY — needs review before launch */}
          <h2 style={headingStyle} className="brand-accent-heading">
            Operational expertise behind every technology recommendation
          </h2>
        </div>

        <div style={listStyle}>
          {founders.map((founder, i) => {
            if (i === 0) {
              return (
                <article key={founder.name} style={profileStyle} className="founder-profile">
                  <div style={photoSideStyle}>
                    {/* illustration placeholder — replace with real founder photo when available */}
                    <div style={illustrationContainerStyle}>
                      <founder.Illustration />
                    </div>
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
              return (
                <article key={founder.name} style={{...profileStyle, ...reversedProfileStyle}} className="founder-profile">
                  <div style={infoSideStyle}>
                    <h3 style={nameStyle}>{founder.name}</h3>
                    <p style={titleStyle}>{founder.title}</p>
                    <p style={pullQuoteStyle}>{founder.pullQuote}</p>
                    <p style={bioStyle}>{founder.bio}</p>
                  </div>
                  <div style={photoSideStyle}>
                    {/* illustration placeholder — replace with real founder photo when available */}
                    <div style={illustrationContainerStyle}>
                      <founder.Illustration />
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article key={founder.name} style={centeredProfileStyle} className="founder-profile">
                <div style={centeredPhotoWrapperStyle}>
                  {/* illustration placeholder — replace with real founder photo when available */}
                  <div style={illustrationContainerStyle}>
                    <founder.Illustration />
                  </div>
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

const illustrationContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '320px',
  borderRadius: '6px',
  overflow: 'hidden',
  background: 'var(--light-bg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const illustrationSvgStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
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
