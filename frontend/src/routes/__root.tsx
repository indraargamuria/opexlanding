import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <span className="text-[3rem] font-heading font-bold text-border">404</span>
      <h1 className="text-[1.25rem] font-heading font-semibold text-dark-text">Page not found</h1>
      <p className="text-[0.875rem] text-muted">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="mt-2 text-[0.8125rem] font-heading font-semibold text-blue hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}

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
  notFoundComponent: NotFound,
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
  // Desktop: no scroll, content should fit viewport
  // Mobile: will be overridden in media query to allow scrolling
};
