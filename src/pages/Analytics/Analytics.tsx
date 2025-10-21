import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import { SvgIcon } from '@mui/material';
import { Analytics as AnalyticsIcon } from '@mui/icons-material';

export default function Analytics() {
  return <AnalyticsDashboard />;
}

Analytics.icon = function Icon() {
  return <SvgIcon component={AnalyticsIcon} />;
};

Analytics.title = 'Analytics';