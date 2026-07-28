import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Founders } from '../components/Founders';

function AboutPage() {
  return <Founders />;
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
