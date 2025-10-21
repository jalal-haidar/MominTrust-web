import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InsightsIcon from '@mui/icons-material/Insights';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import asyncComponentLoader from '@/utils/loader';

import { Pages, Routes } from './types';

const routes: Routes = {
  [Pages.Beneficiaries]: {
    component: asyncComponentLoader(() => import('@/pages/Beneficiaries')),
    path: '/beneficiaries',
    title: 'Beneficiaries',
    icon: PeopleIcon,
  },
  [Pages.Landing]: {
    component: asyncComponentLoader(() => import('@/pages/Landing')),
    path: '/',
    title: 'Momin Trust',
    icon: HomeIcon,
  },

  [Pages.About]: {
    component: asyncComponentLoader(() => import('@/pages/About')),
    path: '/about',
    title: 'Momin Trust',
    icon: InfoIcon,
  },
  [Pages.Donors]: {
    component: asyncComponentLoader(() => import('@/pages/Donors')),
    path: '/donors',
    title: 'Donors',
    icon: VolunteerActivismIcon,
  },
  [Pages.Impact]: {
    component: asyncComponentLoader(() => import('@/pages/Impact')),
    path: '/impact',
    title: 'Impact',
    icon: InsightsIcon,
  },
  [Pages.Partners]: {
    component: asyncComponentLoader(() => import('@/pages/Partners')),
    path: '/partners',
    title: 'Partners',
    icon: HandshakeIcon,
  },
  [Pages.Apply]: {
    component: asyncComponentLoader(() => import('@/pages/Apply')),
    path: '/apply',
    title: 'Apply',
    icon: VolunteerActivismIcon,
  },
  [Pages.Contact]: {
    component: asyncComponentLoader(() => import('@/pages/Contact')),
    path: '/contact',
    title: 'Contact',
    icon: ContactMailIcon,
  },
  [Pages.Analytics]: {
    component: asyncComponentLoader(() => import('@/pages/Analytics')),
    path: '/analytics',
    title: 'Analytics',
    icon: AnalyticsIcon,
  },
  [Pages.NotFound]: {
    component: asyncComponentLoader(() => import('@/pages/NotFound')),
    path: '*',
  },
};

export default routes;
