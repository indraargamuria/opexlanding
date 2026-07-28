import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const Route = createRootRoute({
  component: () => (
    <div className="app-shell" style={shellStyle}>
      <Header />
      <main className="app-main" style={mainStyle}>
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const shellStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  overflow: 'hidden',
  background: 'var(--light-bg)',
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  overflow: 'hidden',
  padding: '16px 24px',
  minHeight: 0,
};
