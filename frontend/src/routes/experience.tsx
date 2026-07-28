import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Experience as ExperienceSection } from '../components/Experience';

function ExperiencePage() {
  return <ExperienceSection />;
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/experience',
  component: ExperiencePage,
});
