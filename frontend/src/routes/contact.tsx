import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const offices = [
  {
    label: 'Singapore HQ',
    address: '1 One North Crescent, Level 7, Razer Building, Singapore 138538',
    phone: '+65 6640 3178',
  },
  {
    label: 'Jakarta',
    address: 'Centennial Tower Lt. 29 Unit D-F, Jl. Jend Gatot Subroto Kav. 24-25, Jakarta Selatan 12930',
    phone: '+62 21 3042 0660',
  },
  {
    label: 'Penang',
    address: '1-21-01, Lintang Mayang Pasir 3, Suntech, 11950 Bayan Baru, Penang',
    phone: '+604 202 0971',
  },
];

function ContactPage() {
  return (
    <div style={pageStyle}>
      <div style={splitStyle}>
        {/* Left: Form */}
        <div style={formColStyle}>
          <h2 style={headingStyle}>Let&apos;s talk about your floor</h2>
          <p style={subheadStyle}>
            Tell us a bit about your operation and we&apos;ll follow up within 48 hours.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={formStyle}>
            <div style={fieldRowStyle}>
              <div style={fieldStyle}>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input id="name" name="name" type="text" className="contact-input" required style={inputStyle} />
              </div>
              <div style={fieldStyle}>
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input id="email" name="email" type="email" className="contact-input" required style={inputStyle} />
              </div>
            </div>
            <div style={fieldStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" name="message" className="contact-input" rows={3} required style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '80px' }} />
            </div>
            <button type="submit" className="contact-btn" style={buttonStyle}>
              Send message
            </button>
          </form>
        </div>

        {/* Right: Offices */}
        <div style={officesColStyle}>
          <h3 style={officesHeadingStyle}>Our offices</h3>
          <div style={officesListStyle}>
            {offices.map((office) => (
              <div key={office.label} style={officeCardStyle}>
                <h4 style={officeLabelStyle}>{office.label}</h4>
                <p style={officeAddressStyle}>{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} style={phoneStyle}>
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const pageStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1024px',
  margin: '0 auto',
};

const splitStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '48px',
  width: '100%',
};

const formColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '0.8125rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const fieldRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px',
};

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8125rem',
  padding: '8px 12px',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  background: 'var(--white)',
  color: 'var(--dark-text)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
};

const buttonStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.8125rem',
  padding: '10px 24px',
  background: 'var(--brand)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  transition: 'background 0.15s ease',
};

const officesColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
};

const officesHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const officesListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const officeCardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '14px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

const officeLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
  marginBottom: '2px',
};

const officeAddressStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  lineHeight: 1.5,
  color: 'var(--muted)',
};

const phoneStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  color: 'var(--brand)',
  textDecoration: 'none',
  marginTop: '2px',
};
