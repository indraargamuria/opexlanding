/*
 * TechnologyPartners — single image replacement.
 * The previous logo grid/category structure has been replaced with a single
 * large image at /images/technology-partner.png.
 * Section heading and background kept; content below heading is the image only.
 */
export function TechnologyPartners() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={overlineStyle}>Technology partners</p>
        <h2 style={headingStyle}>Our technology ecosystem</h2>

        <div style={imageContainerStyle}>
          <img
            src="/images/technology-partner.png"
            alt="OpexCG technology partner ecosystem — integration platforms, ERP, MES, IoT, and AI tools"
            style={imageStyle}
          />
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
  textAlign: 'center',
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

const imageContainerStyle: React.CSSProperties = {
  maxWidth: '960px',
  margin: '0 auto',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
};
