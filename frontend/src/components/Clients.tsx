import { useState } from 'react';

const clients = [
  { name: 'Toyota', slug: 'toyota', sector: 'Automotive' },
  { name: 'Freyabadi', slug: 'freabadi', sector: 'Food & Beverage' },
  { name: 'Astra International', slug: 'astra', sector: 'Manufacturing' },
  { name: 'Sime Darby', slug: 'simedarby', sector: 'Plantation & Industrials' },
  { name: 'Petronas', slug: 'petronas', sector: 'Energy' },
  { name: 'Wilmar International', slug: 'wilmar', sector: 'Agribusiness' },
  { name: 'IOI Corporation', slug: 'ioi', sector: 'Plantation' },
  { name: 'Tops Safety Wear', slug: 'tops', sector: 'Industrial Safety' },
];

// Duplicate the client list for seamless looping
const marqueeClients = [...clients, ...clients];

// Function to determine badge color based on name
function getBadgeColor(name: string): string {
  const colors = ['var(--brand)', 'var(--dark-accent)', 'var(--muted)', 'var(--border)'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// Text Badge Component (fallback)
function ClientBadge({ name }: { name: string }) {
  const badgeColor = getBadgeColor(name);

  return (
    <div style={{
      ...badgeStyle,
      background: badgeColor,
    }}>
      {name}
    </div>
  );
}

// Logo Component that tries simpleicons, falls back to text badge
function ClientLogo({ client }: { client: { name: string; slug: string } }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <ClientBadge name={client.name} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${client.slug}`}
      alt={`${client.name} logo`}
      style={logoImageStyle}
      onError={() => setImageError(true)}
    />
  );
}

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
                <ClientLogo client={client} />
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '140px',
  opacity: 0.6,
  transition: 'opacity 0.2s ease',
};

const logoImageStyle: React.CSSProperties = {
  maxWidth: '120px',
  maxHeight: '48px',
  objectFit: 'contain',
};

const badgeStyle: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: '20px',
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--white)',
  textAlign: 'center',
  whiteSpace: 'nowrap',
};
