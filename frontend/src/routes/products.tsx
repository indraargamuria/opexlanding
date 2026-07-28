import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { ProductGrid } from '../components/products/ProductGrid';
import { HowWeDeliver } from '../components/HowWeDeliver';
import { Faq } from '../components/Faq';

function ProductsPage() {
  return (
    <>
      <section style={heroSectionStyle}>
        <div style={heroInnerStyle}>
          <p style={overlineStyle}>Products</p>
          <h1 style={headingStyle}>AI-enabled tools built for the floor</h1>
          <p style={subheadStyle}>
            From predictive analytics to real-time manufacturing execution — our products
            are designed to integrate with your existing stack and deliver measurable impact.
          </p>
        </div>
      </section>

      <section style={productsSectionStyle}>
        <div style={productsInnerStyle}>
          <ProductGrid />
        </div>
      </section>

      <HowWeDeliver />
      <Faq />
    </>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
});

const heroSectionStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  padding: '96px 24px 64px',
  textAlign: 'center',
};

const heroInnerStyle: React.CSSProperties = {
  maxWidth: '720px',
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
  fontSize: 'var(--text-h1)',
  fontWeight: 700,
  lineHeight: 'var(--leading-heading)',
  color: 'var(--white)',
  marginBottom: '16px',
};

const subheadStyle: React.CSSProperties = {
  fontSize: '1.125rem',
  lineHeight: 1.65,
  color: 'rgba(255, 255, 255, 0.65)',
};

const productsSectionStyle: React.CSSProperties = {
  background: 'var(--dark-accent)',
  padding: '0 24px 80px',
};

const productsInnerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
};
