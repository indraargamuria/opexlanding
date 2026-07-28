import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const founders = [
  {
    name: 'Franklin Kurniawan',
    title: 'Founder & Principal Consultant',
    bio: '20+ years in operational excellence across SEA manufacturing. Lean Six Sigma Black Belt.',
  },
  {
    name: 'Lee Theam Wah',
    title: 'Co-Founder & Technology Director',
    bio: 'Industrial automation and systems integration. Leads OpexCG\'s brand-agnostic tech practice.',
  },
  {
    name: 'Rajendra Khrisnan',
    title: 'Co-Founder & Senior Consultant',
    bio: 'Specialist in Lean Six Sigma training and organizational capability building across SEA.',
  },
];

function MemberIllustration({ index }: { index: number }) {
  const illustrations = [
    <svg key="0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <circle cx="60" cy="55" r="48" fill="#17A5DC" opacity="0.08"/>
      <circle cx="60" cy="55" r="14" fill="#17A5DC" opacity="0.25"/>
      <path d="M30 110c0-22 13-40 30-40s30 18 30 40" fill="#0F4664" opacity="0.15"/>
      <path d="M38 110c0-18 10-32 22-32s22 14 22 32" fill="#0F4664" opacity="0.25"/>
      <rect x="78" y="44" width="20" height="26" rx="3" fill="white" stroke="#17A5DC" strokeWidth="1.5"/>
      <line x1="82" y1="52" x2="94" y2="52" stroke="#17A5DC" strokeWidth="1" opacity="0.5"/>
      <line x1="82" y1="56" x2="90" y2="56" stroke="#17A5DC" strokeWidth="1" opacity="0.5"/>
      <line x1="82" y1="60" x2="92" y2="60" stroke="#17A5DC" strokeWidth="1" opacity="0.5"/>
    </svg>,
    <svg key="1" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <circle cx="60" cy="55" r="48" fill="#0F4664" opacity="0.08"/>
      <circle cx="60" cy="55" r="14" fill="#0F4664" opacity="0.2"/>
      <path d="M30 110c0-22 13-40 30-40s30 18 30 40" fill="#17A5DC" opacity="0.12"/>
      <path d="M38 110c0-18 10-32 22-32s22 14 22 32" fill="#17A5DC" opacity="0.2"/>
      <circle cx="85" cy="42" r="12" stroke="#17A5DC" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="85" cy="42" r="5" stroke="#17A5DC" strokeWidth="1.5" fill="none" opacity="0.4"/>
    </svg>,
    <svg key="2" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <circle cx="60" cy="55" r="48" fill="#17A5DC" opacity="0.06"/>
      <circle cx="60" cy="55" r="14" fill="#17A5DC" opacity="0.22"/>
      <path d="M30 110c0-22 13-40 30-40s30 18 30 40" fill="#0F4664" opacity="0.15"/>
      <rect x="80" y="40" width="24" height="18" rx="2" fill="white" stroke="#17A5DC" strokeWidth="1.5" opacity="0.6"/>
      <line x1="84" y1="46" x2="100" y2="46" stroke="#17A5DC" strokeWidth="1" opacity="0.35"/>
      <line x1="84" y1="50" x2="96" y2="50" stroke="#0F4664" strokeWidth="1" opacity="0.25"/>
      <line x1="84" y1="54" x2="98" y2="54" stroke="#17A5DC" strokeWidth="1" opacity="0.35"/>
    </svg>,
  ];
  return <div style={illustrationStyle}>{illustrations[index]}</div>;
}

function AboutPage() {
  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={overlineStyle}>Our Founders</p>
        <h2 style={headingStyle}>Operational expertise behind every recommendation</h2>
      </div>
      <div style={rowStyle}>
        {founders.map((f, i) => (
          <div key={f.name} style={cardStyle}>
            <MemberIllustration index={i} />
            <div style={infoStyle}>
              <h3 style={nameStyle}>{f.name}</h3>
              <p style={titleStyle}>{f.title}</p>
              <p style={bioStyle}>{f.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
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
  marginBottom: '20px',
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

const rowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
};

const cardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  textAlign: 'center',
};

const illustrationStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  background: 'var(--light-bg)',
};

const infoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.9375rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const titleStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--muted)',
};

const bioStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
  maxWidth: '280px',
};
