import { useState } from 'react';

const partnerCategories = [
  {
    name: 'Vertical Integration',
    partners: [
      { name: 'Epicor', slug: 'epicor', isOwn: false },
      { name: 'Siemens (Opcenter)', slug: 'siemens', isOwn: false },
      { name: 'OpexMX', slug: 'opexmx', isOwn: true },
      { name: 'Largo', slug: 'largo', isOwn: false },
    ],
  },
  {
    name: 'Digitalization & Automation',
    partners: [
      { name: 'Mendix', slug: 'mendix', isOwn: false },
      { name: 'SICK', slug: 'sick', isOwn: false },
      { name: 'Zebra Technologies', slug: 'zebra', isOwn: false },
      { name: 'UiPath', slug: 'uipath', isOwn: false },
    ],
  },
  {
    name: 'AI, ML & Agentic AI',
    partners: [
      { name: 'Opex AI', slug: 'opexai', isOwn: true },
      { name: 'Profet AI', slug: 'profetai', isOwn: false },
      { name: 'RapidMiner', slug: 'rapidminer', isOwn: false },
    ],
  },
  {
    name: 'Horizontal Integration',
    partners: [
      { name: 'Kinaxis', slug: 'kinaxis', isOwn: false },
      { name: 'RELEX Solutions', slug: 'relex', isOwn: false },
      { name: 'Geotab', slug: 'geotab', isOwn: false },
    ],
  },
];

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
function TextBadge({ name, isOwn }: { name: string; isOwn: boolean }) {
  const badgeColor = isOwn ? 'var(--brand)' : getBadgeColor(name);
  const textColor = isOwn ? 'var(--white)' : 'var(--white)';

  return (
    <div style={{
      ...badgeStyle,
      background: badgeColor,
      color: textColor,
    }}>
      {name}
      {isOwn && <span style={ownLabelStyle}>Ours</span>}
    </div>
  );
}

// Logo Component that tries simpleicons, falls back to text badge
function PartnerLogo({ partner }: { partner: { name: string; slug: string; isOwn: boolean } }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <TextBadge name={partner.name} isOwn={partner.isOwn} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${partner.slug}`}
      alt={partner.name}
      style={logoImageStyle}
      onError={() => setImageError(true)}
    />
  );
}

// export function TechnologyPartners() {
//   return (
//     <section style={sectionStyle}>
//       <div style={innerStyle}>
//         <p style={overlineStyle}>Technology partners</p>
//         <h2 style={headingStyle}>Our technology ecosystem</h2>

//         <div style={categoriesStyle}>
//           {partnerCategories.map((category) => (
//             <div key={category.name} style={categoryBlockStyle}>
//               <p style={categoryLabelStyle}>{category.name}</p>
//               <div style={logosGridStyle}>
//                 {category.partners.map((partner) => (
//                   <div key={partner.name} style={logoItemStyle}>
//                     <PartnerLogo partner={partner} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export function TechnologyPartners() {
//   return (
//     <section style={sectionStyle}>
//       <div style={innerStyle}>
//         <p style={overlineStyle}>Technology partners</p>
//         <h2 style={headingStyle}>Our technology ecosystem</h2>

//         <div style={categoriesStyle}>
//           {partnerCategories.map((category) => (
//             <div key={category.name} style={categoryBlockStyle}>
//               <p style={categoryLabelStyle}>{category.name}</p>
//               <div style={logosGridStyle}>
//                 {category.partners.map((partner) => (
//                   <div key={partner} style={logoItemStyle}>
//                     {/* <PlaceholderImage
//                       label={`Technology partner logo — ${partner}`}
//                       height="48px"
//                     /> */}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '48px',
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
  textAlign: 'center',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
};

const ownLabelStyle: React.CSSProperties = {
  fontSize: '0.65rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  opacity: 0.8,
  padding: '2px 6px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,0.2)',
};
