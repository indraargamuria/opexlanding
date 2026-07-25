import { useState } from 'react';

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

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section style={sectionStyle} id="contact">
      <div style={innerStyle}>
        <div style={leftStyle}>
          <p style={overlineStyle}>Get in touch</p>
          <h2 style={headingStyle}>Let's talk about your floor</h2>
          <p style={subheadStyle}>
            Whether you're exploring Lean Six Sigma for the first time or looking
            to integrate Industry 4.0 tools into an existing operation, we're
            happy to talk through where you are and where you want to go.
          </p>

          <div style={officesStyle}>
            {offices.map((office) => (
              <div key={office.label} style={officeBlockStyle}>
                <h4 style={officeLabelStyle}>{office.label}</h4>
                <p style={officeAddressStyle}>{office.address}</p>
                <a href={`tel:${office.phone.replace(/\s/g, '')}`} style={phoneStyle}>
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={rightStyle}>
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={fieldStyle}>
              <label htmlFor="contact-name" style={labelStyle}>Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="contact-input"
                style={inputStyle}
                required
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="contact-email" style={labelStyle}>Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="contact-input"
                style={inputStyle}
                required
              />
            </div>
            <div style={fieldStyle}>
              <label htmlFor="contact-message" style={labelStyle}>Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="contact-input"
                style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '120px' }}
                required
              />
            </div>
            <button type="submit" className="contact-btn" style={buttonStyle}>
              Send message
            </button>
          </form>
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
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '80px',
  alignItems: 'start',
};

const leftStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h2)',
  fontWeight: 'var(--weight-h2)',
  lineHeight: 'var(--leading-heading)',
  color: 'var(--dark-text)',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '1.0625rem',
  lineHeight: 1.65,
  color: 'var(--muted)',
  maxWidth: '480px',
};

const officesStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '8px',
};

const officeBlockStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const officeLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-body)',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const officeAddressStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.5,
  color: 'var(--muted)',
};

const phoneStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  color: 'var(--brand)',
  textDecoration: 'none',
};

const rightStyle: React.CSSProperties = {};

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const inputStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-body)',
  padding: '12px 14px',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  background: 'var(--light-bg)',
  color: 'var(--dark-text)',
  outline: 'none',
  transition: 'border-color 0.15s ease',
};

const buttonStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: 'var(--text-body)',
  padding: '12px 28px',
  background: 'var(--brand)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  alignSelf: 'flex-start',
  transition: 'background 0.15s ease',
};
