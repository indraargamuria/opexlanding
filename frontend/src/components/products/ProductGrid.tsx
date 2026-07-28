import { ProductCard } from './ProductCard';

const products = [
  {
    name: 'OpexAI',
    description: 'AI-powered process optimization and predictive analytics for manufacturing operations. From defect detection to throughput forecasting, OpexAI turns shop-floor data into actionable intelligence — without requiring a data science team on staff.',
    image: '/images/dashboard-1.jpg',
    imageAlt: 'AI-powered analytics dashboard',
    externalUrl: 'https://app.opexcg.com/opexai',
  },
  {
    name: 'OpexMX',
    description: 'Manufacturing execution system with real-time visibility and adaptive workflow management. OpexMX connects your machines, operators, and planning systems into a single source of truth — brand-agnostic, built to integrate with whatever MES/ERP stack you already run.',
    image: '/images/dashboard-3.jpg',
    imageAlt: 'Manufacturing execution dashboard',
    externalUrl: 'https://app.opexcg.com/opexmx',
  },
];

export function ProductGrid() {
  return (
    <div style={gridStyle} className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          description={product.description}
          image={product.image}
          imageAlt={product.imageAlt}
          externalUrl={product.externalUrl}
        />
      ))}
    </div>
  );
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '32px',
  textAlign: 'left',
};
