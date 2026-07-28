import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX: 'hidden' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});
