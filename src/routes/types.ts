import { FC } from "react";

import type { SvgIconProps } from "@mui/material/SvgIcon";

enum Pages {
  Welcome,
  About,
  Contact,
  Page1,
  Page2,
  Page3,
  Page4,
  NotFound,
}

type RouteCustomProps = {
  title?: string;
  path: string;
  icon?: FC<SvgIconProps>;
};

type Routes = Record<Pages, RouteCustomProps>;

export type { Routes };
export { Pages };
