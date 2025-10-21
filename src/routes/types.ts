import type { FC, LazyExoticComponent } from 'react';
import { PathRouteProps } from 'react-router-dom';

import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { ComponentType } from 'react';

/**
 * Pages enum updated to include domain-specific pages requested in Issue #2.
 * These are used as keys in the `Routes` map.
 */
enum Pages {
  Landing,
  Welcome,
  About,
  Beneficiaries,
  Donors,
  Impact,
  Partners,
  Apply,
  Contact,
  Page1,
  Page2,
  Page3,
  Page4,
  NotFound,
}

type RouteComponent = FC | LazyExoticComponent<FC>;

type PathRouteCustomProps = {
  title?: string;
  // allow both plain functional components and React.lazy loaded components
  component: RouteComponent;
  // icons are commonly passed as element types from MUI (e.g. HomeIcon)
  icon?: ComponentType<SvgIconProps>;
};

// Routes can be a partial mapping: not every enum member must be present
type Routes = Partial<Record<Pages, PathRouteProps & PathRouteCustomProps>>;

export type { Routes };
export { Pages };
