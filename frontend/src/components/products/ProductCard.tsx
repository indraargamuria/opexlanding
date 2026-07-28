import { useEffect, useRef, useState } from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  externalUrl: string;
}

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

export function ProductCard({ name, description, image, imageAlt, externalUrl }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
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
    <div
      ref={cardRef}
      style={{
        ...cardStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, border-color 0.2s ease',
      }}
    >
      <ProductMockup productImage={image} productAlt={imageAlt} />
      <div style={cardContentStyle}>
        <h3 style={nameStyle}>{name}</h3>
        <p style={descStyle}>{description}</p>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Launch Platform
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const cardContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const mockupStyle: React.CSSProperties = {
  width: '100%',
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
  height: '180px',
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
  fontSize: 'var(--text-body)',
  lineHeight: 1.65,
  color: 'rgba(255, 255, 255, 0.65)',
};

const linkStyle: React.CSSProperties = {
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  marginTop: '4px',
  transition: 'color 0.15s ease',
};
