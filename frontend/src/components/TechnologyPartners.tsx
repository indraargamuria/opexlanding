import { PlaceholderImage } from './PlaceholderImage';

const partnerCategories = [
  {
    name: 'ERP',
    partners: ['Epicor', 'SAP', 'Oracle', 'Microsoft Dynamics'],
  },
  {
    name: 'MES',
    partners: ['Siemens Opcenter', 'Rockwell Automation', 'Dassault Systèmes'],
  },
  {
    name: 'Low-code Platforms',
    partners: ['Mendix', 'OutSystems', 'Microsoft Power Apps'],
  },
  {
    name: 'IoT & Connectivity',
    partners: ['AWS IoT', 'Azure IoT', 'Cisco Industrial'],
  },
];

export function TechnologyPartners() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={overlineStyle}>Technology partners</p>
        <h2 style={headingStyle}>Our technology ecosystem</h2>

        <div style={categoriesStyle}>
          {partnerCategories.map((category) => (
            <div key={category.name} style={categoryBlockStyle}>
              <p style={categoryLabelStyle}>{category.name}</p>
              <div style={logosGridStyle}>
                {category.partners.map((partner) => (
                  <div key={partner} style={logoItemStyle}>
                    <PlaceholderImage
                      label={`Technology partner logo — ${partner}`}
                      height="48px"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--white)',
  padding: '80px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1000px',
  margin: '0 auto',
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
  marginBottom: '48px',
};

const categoriesStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
};

const categoryBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const categoryLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 600,
  color: 'var(--muted)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
};

const logosGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: '20px',
};

const logoItemStyle: React.CSSProperties = {
  opacity: 0.6,
};
