import { createRouter } from '@tanstack/react-router';
import { Route as rootRoute } from './routes/__root';
import { Route as homeRoute } from './routes/index';
import { Route as opexmxRoute } from './routes/opexmx';
import { Route as productsRoute } from './routes/products';
import { Route as experienceRoute } from './routes/experience';
import { Route as aboutRoute } from './routes/about';
import { Route as contactRoute } from './routes/contact';
import { Route as solutionsRoute } from './routes/solutions';
import { Route as blogRoute } from './routes/blog';
import { Route as blogPostRoute } from './routes/blog.$slug';
import { Route as caseStudiesRoute } from './routes/case-studies';
import { Route as caseStudyRoute } from './routes/case-studies.$slug';
import { Route as adminRoute } from './routes/admin';

const routeTree = rootRoute.addChildren([
  homeRoute,
  opexmxRoute,
  productsRoute,
  solutionsRoute,
  experienceRoute,
  caseStudiesRoute,
  caseStudyRoute,
  blogRoute,
  blogPostRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
