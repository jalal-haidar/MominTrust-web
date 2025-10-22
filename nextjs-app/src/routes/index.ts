import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BugReportIcon from "@mui/icons-material/BugReport";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerrainIcon from "@mui/icons-material/Terrain";

import { Pages, Routes } from "./types";

const routes: Routes = {
  [Pages.Welcome]: {
    path: "/",
    title: "Home",
    icon: HomeIcon,
  },
  [Pages.About]: {
    path: "/about",
    title: "About Us",
    icon: InfoIcon,
  },
  [Pages.Contact]: {
    path: "/contact",
    title: "Contact",
    icon: ContactMailIcon,
  },
  [Pages.Page1]: {
    path: "/page-1",
    title: "Page 1",
    icon: GitHubIcon,
  },
  [Pages.Page2]: {
    path: "/page-2",
    title: "Page 2",
    icon: AddTaskIcon,
  },
  [Pages.Page3]: {
    path: "/page-3",
    title: "Page 3",
    icon: TerrainIcon,
  },
  [Pages.Page4]: {
    path: "/page-4",
    title: "Page 4",
    icon: BugReportIcon,
  },
  [Pages.NotFound]: {
    path: "/404",
  },
};

export default routes;
