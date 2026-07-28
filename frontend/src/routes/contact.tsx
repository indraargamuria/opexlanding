import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Contact as ContactSection } from '../components/Contact';

function ContactPage() {
  return <ContactSection />;
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});
