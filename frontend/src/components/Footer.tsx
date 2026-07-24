const offices = [
  {
    city: 'Singapore',
    label: 'Singapore HQ',
    address: '1 One North Crescent, Level 7, Razer Building, Singapore 138538',
    phone: '+65 6640 3178',
  },
  {
    city: 'Jakarta',
    label: 'Jakarta',
    address: 'Centennial Tower Lt. 29 Unit D-F, Jl. Jend Gatot Subroto Kav. 24-25, Jakarta Selatan 12930',
    phone: '+62 21 3042 0660',
  },
  {
    city: 'Penang',
    label: 'Penang',
    address: '1-21-01, Lintang Mayang Pasir 3, Suntech, 11950 Bayan Baru, Penang',
    phone: '+604 202 0971',
  },
];

export function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        <div style={topRowStyle}>
          <div style={logoBlockStyle}>
            <div style={logoStyle}>
              <span style={logoMarkStyle}>Opex</span>CG
            </div>
            <p style={taglineStyle}>
              Industrial transformation consulting.<br />
              Lean Six Sigma &middot; Industry 4.0
            </p>
          </div>

          <div style={officesGridStyle}>
            {offices.map((office) => (
              <div key={office.city} style={officeBlockStyle}>
                <h4 style={officeCityStyle}>{office.label}</h4>
                <p style={officeAddressStyle}>{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} style={phoneStyle}>
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={dividerStyle} />

        <div style={bottomRowStyle}>
          <p style={copyrightStyle}>
            &copy; {new Date().getFullYear()} Opex Consulting Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  color: 'var(--white)',
  padding: '56px 24px 32px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const topRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '48px',
  flexWrap: 'wrap',
};

const logoBlockStyle: React.CSSProperties = {
  maxWidth: '280px',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: '12px',
};

const logoMarkStyle: React.CSSProperties = {
  color: 'var(--brand)',
};

const taglineStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  opacity: 0.7,
};

const officesGridStyle: React.CSSProperties = {
  display: 'flex',
  gap: '40px',
  flexWrap: 'wrap',
  flex: 1,
  justifyContent: 'flex-end',
};

const officeBlockStyle: React.CSSProperties = {
  minWidth: '220px',
  maxWidth: '300px',
};

const officeCityStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 600,
  marginBottom: '8px',
};

const officeAddressStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  opacity: 0.7,
  marginBottom: '4px',
};

const phoneStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  color: 'var(--brand)',
  textDecoration: 'none',
};

const dividerStyle: React.CSSProperties = {
  height: '1px',
  background: 'rgba(255, 255, 255, 0.12)',
  margin: '40px 0 24px',
};

const bottomRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  opacity: 0.5,
};
