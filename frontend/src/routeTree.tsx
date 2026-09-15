import { createRouter } from '@tanstack/react-router';
import { Route as rootRoute } from './routes/__root';
import { Route as homeRoute } from './routes/index';
import { Route as opexmxRoute } from './routes/opexmx';
import { Route as productsRoute } from './routes/products';
import { Route as experienceRoute } from './routes/experience';
import { Route as aboutRoute } from './routes/about';
import { Route as contactRoute } from './routes/contact';
import { Route as solutionsRoute } from './routes/solutions';

const routeTree = rootRoute.addChildren([
  homeRoute,
  opexmxRoute,
  productsRoute,
  solutionsRoute,
  experienceRoute,
  aboutRoute,
  contactRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
