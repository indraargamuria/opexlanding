import { PlaceholderImage } from './PlaceholderImage';

const clients = [
  { name: 'Toyota', sector: 'Automotive' },
  { name: 'Freyabadi', sector: 'Food & Beverage' },
  { name: 'Astra International', sector: 'Manufacturing' },
  { name: 'Sime Darby', sector: 'Plantation & Industrials' },
  { name: 'Petronas', sector: 'Energy' },
  { name: 'Wilmar International', sector: 'Agribusiness' },
  { name: 'IOI Corporation', sector: 'Plantation' },
  { name: 'Tops Safety Wear', sector: 'Industrial Safety' },
];

// Duplicate the client list for seamless looping
const marqueeClients = [...clients, ...clients];

export function Clients() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={headingStyle}>Trusted by manufacturers across Southeast Asia</p>

        <div style={marqueeContainerStyle}>
          <div style={marqueeTrackStyle} className="client-marquee-track">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                style={logoItemStyle}
                className="client-logo-item"
              >
                <PlaceholderImage
                  label={`Client logo — ${client.name}`}
                  height="48px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--light-bg)',
  padding: '64px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 500,
  color: 'var(--muted)',
  marginBottom: '32px',
};

const marqueeContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%',
};

const marqueeTrackStyle: React.CSSProperties = {
  display: 'flex',
  gap: '24px',
  width: 'max-content',
};

const logoItemStyle: React.CSSProperties = {
  opacity: 0.6,
  transition: 'opacity 0.2s ease',
};

const logoItemHoverStyle: React.CSSProperties = {
  opacity: 1,
};
