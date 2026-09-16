import { createRoute, Navigate } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

function ExperienceRedirect() {
  return <Navigate to="/case-studies" />;
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperienceRedirect,
});
