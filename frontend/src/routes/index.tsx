import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ProductsToEcosystemBridge } from '../components/ProductsToEcosystemBridge';
import { TechnologyPartners } from '../components/TechnologyPartners';
import { HowWeDeliver } from '../components/HowWeDeliver';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import { ClosingCta } from '../components/ClosingCta';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductsToEcosystemBridge />
      <TechnologyPartners />
      <HowWeDeliver />
      <Testimonials />
      <Clients />
      <ClosingCta />
    </>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
