import { Outlet, createRootRoute, createRouter, createRoute } from '@tanstack/react-router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Framework } from './components/Framework';
import { WhatWeDo } from './components/WhatWeDo';
import { Founders } from './components/Founders';
import { Experience } from './components/Experience';
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
      <Founders />
      <Experience />
      <div style={{ padding: '0 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <section id="contact" style={sectionStyle}>
          <h2>Contact</h2>
          <p style={placeholderStyle}>Section placeholder — Task 8</p>
        </section>
      </div>
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

const sectionStyle: React.CSSProperties = {
  padding: '48px 0',
  borderBottom: '1px solid var(--border)',
};

const placeholderStyle: React.CSSProperties = {
  color: 'var(--muted)',
  marginTop: '12px',
};
