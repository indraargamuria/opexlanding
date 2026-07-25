import { Outlet, createRootRoute, createRouter, createRoute } from '@tanstack/react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Framework } from './components/Framework';
import { WhatWeDo } from './components/WhatWeDo';
import { TechnologyPartners } from './components/TechnologyPartners';
import { Founders } from './components/Founders';
import { Experience } from './components/Experience';
import { Clients } from './components/Clients';
import { Products } from './components/Products';
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
      <div id="approach">
        <Framework />
      </div>
      <WhatWeDo />
      <TechnologyPartners />
      <Founders />
      <Experience />
      <Clients />
      <Products />
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
