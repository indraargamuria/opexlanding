import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'OpexAI',
    description: 'AI-powered process optimization and predictive analytics for manufacturing operations.',
    image: '/images/dashboard-1.jpg',
    imageAlt: 'AI-powered analytics dashboard',
  },
  {
    name: 'ProfetAI',
    description: 'Machine learning solutions for demand forecasting and production planning optimization.',
    image: '/images/dashboard-2.jpg',
    imageAlt: 'ML forecasting dashboard',
  },
  {
    name: 'OpexMX',
    description: 'Manufacturing execution system with real-time visibility and adaptive workflow management.',
    image: '/images/dashboard-3.jpg',
    imageAlt: 'Manufacturing execution dashboard',
  },
];

function ProductMockup({ productImage, productAlt }: { productImage: string; productAlt: string }) {
  return (
    <div style={mockupStyle}>
      <div style={windowChromeStyle}>
        <span style={dotStyle} />
        <span style={dotStyle} />
        <span style={dotStyle} />
      </div>
      <img
        src={productImage}
        alt={productAlt}
        style={screenshotStyle}
      />
    </div>
  );
}

export function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={innerStyle}>
        <p style={headingStyle}>AI-enabled products</p>

        <div style={gridStyle}>
          {products.map((product, index) => (
            <div
              key={product.name}
              style={{
                ...cardStyle,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <ProductMockup
                productImage={product.image}
                productAlt={product.imageAlt}
              />
              <h3 style={nameStyle}>{product.name}</h3>
              <p style={descStyle}>{product.description}</p>
              <a href="#" style={linkStyle}>
                Learn more
                <span style={arrowStyle}>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  padding: '80px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '48px',
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '32px',
};

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, border-color 0.2s ease',
};

const mockupStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '280px',
  background: 'rgba(15, 70, 100, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
};

const windowChromeStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  padding: '8px 12px',
  display: 'flex',
  gap: '6px',
};

const dotStyle: React.CSSProperties = {
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.2)',
};

const screenshotStyle: React.CSSProperties = {
  width: '100%',
  height: '120px',
  objectFit: 'cover',
  display: 'block',
};

const nameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h3)',
  fontWeight: 600,
  color: 'var(--white)',
};

const descStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.65)',
};

const linkStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
};

const arrowStyle: React.CSSProperties = {
  transition: 'transform 0.15s ease',
};
