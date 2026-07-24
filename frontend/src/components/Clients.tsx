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

export function Clients() {
  return (
    <section style={sectionStyle}>
      <div style={innerStyle}>
        <p style={headingStyle}>Trusted by manufacturers across Southeast Asia</p>

        <div style={gridStyle}>
          {clients.map((client) => (
            <div key={client.name} style={logoItemStyle}>
              <PlaceholderImage
                label={`Client logo — ${client.name}`}
                height="48px"
              />
            </div>
          ))}
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

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  alignItems: 'center',
};

const logoItemStyle: React.CSSProperties = {
  opacity: 0.6,
};
