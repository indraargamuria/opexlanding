import { Outlet, createRootRoute, createRouter, createRoute } from '@tanstack/react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Products } from './components/Products';
import { ProductsToEcosystemBridge } from './components/ProductsToEcosystemBridge';
import { TechnologyPartners } from './components/TechnologyPartners';
import { HowWeDeliver } from './components/HowWeDeliver';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Founders } from './components/Founders';
import { Clients } from './components/Clients';
import { Faq } from './components/Faq';
import { ClosingCta } from './components/ClosingCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const rootRoute = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <Hero />

      <TrustBar />

      {/* AI-enabled products */}
      <Products />

      <ProductsToEcosystemBridge />

      {/* Technology ecosystem */}
      <TechnologyPartners />

      {/* How we deliver — merged Framework + What we do */}
      <HowWeDeliver />

      <Experience />

      <Testimonials />

      <Founders />
      <Clients />

      <Faq />

      <ClosingCta />

      <Contact />
    </>
  );
}

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
