import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Welcome]: {
    path: '/',
    title: 'Momin Trust',
    icon: HomeIcon,
  },
  [Pages.About]: {
    path: '/about',
    title: 'About',
    icon: InfoIcon,
  },
  [Pages.Contact]: {
    path: '/contact',
    title: 'Contact',
    icon: ContactMailIcon,
  },
  // Coming Soon - Disabled MVP pages
  [Pages.Page1]: {
    path: '#',
    title: 'Beneficiaries',
    icon: PeopleIcon,
    disabled: true,
  },
  [Pages.Page2]: {
    path: '#',
    title: 'Donors',
    icon: VolunteerActivismIcon,
    disabled: true,
  },
  [Pages.Page3]: {
    path: '#',
    title: 'Impact',
    icon: TrendingUpIcon,
    disabled: true,
  },
  [Pages.Page4]: {
    path: '#',
    title: 'Partners',
    icon: HandshakeIcon,
    disabled: true,
  },
  [Pages.NotFound]: {
    path: '/404',
  },
};

// Additional routes for sidebar only (not in main routing)
export const additionalNavItems = [
  {
    path: '#',
    title: 'Apply',
    icon: AssignmentIcon,
    disabled: true,
  },
  {
    path: '#',
    title: 'Analytics',
    icon: BarChartIcon,
    disabled: true,
  },
  {
    path: '#',
    title: 'Your Impact',
    icon: FavoriteIcon,
    disabled: true,
  },
];

export default routes;
