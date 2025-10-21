import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  People,
  School,
  AttachMoney,
  VolunteerActivism,
  Refresh,
} from '@mui/icons-material';

import AnalyticsCard from '@/components/AnalyticsCard';
import GoalProgress from '@/components/GoalProgress';
import RegionalDistribution from '@/components/RegionalDistribution';
import RecentDonations from '@/components/RecentDonations';

// Mock data - in a real app, this would come from an API
const mockAnalyticsData = {
  totalDonations: 2345000,
  totalDonors: 1247,
  totalBeneficiaries: 1580,
  totalSchools: 85,
  monthlyGrowth: {
    donations: 12.5,
    donors: 8.3,
    beneficiaries: 15.2,
  },
  recentDonations: [
    { id: 1, amount: 500, donor: 'Anonymous', date: '2 hours ago', type: 'General Fund' },
    { id: 2, amount: 250, donor: 'A.K.', date: '4 hours ago', type: 'Education Support' },
    { id: 3, amount: 1000, donor: 'M.H.', date: '6 hours ago', type: 'Scholarship Fund' },
    { id: 4, amount: 150, donor: 'Anonymous', date: '8 hours ago', type: 'School Supplies' },
    { id: 5, amount: 750, donor: 'S.R.', date: '1 day ago', type: 'Mentorship Program' },
  ],
  goalProgress: {
    currentAmount: 2345000,
    targetAmount: 5000000,
    percentage: 46.9,
  },
  regionalDistribution: [
    { region: 'Lahore', beneficiaries: 450, percentage: 28.5 },
    { region: 'Karachi', beneficiaries: 380, percentage: 24.1 },
    { region: 'Islamabad', beneficiaries: 290, percentage: 18.4 },
    { region: 'Peshawar', beneficiaries: 260, percentage: 16.5 },
    { region: 'Other', beneficiaries: 200, percentage: 12.7 },
  ],
};

const AnalyticsDashboard: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refreshData = () => {
    setLastUpdated(new Date());
    // In a real app, this would trigger a data refresh
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            Analytics Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </Typography>
        </Box>
        <Tooltip title="Refresh data">
          <IconButton onClick={refreshData} sx={{ ml: 2 }}>
            <Refresh />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Key Metrics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="Total Donations"
            value={formatCurrency(mockAnalyticsData.totalDonations)}
            icon={<AttachMoney color="primary" />}
            growth={mockAnalyticsData.monthlyGrowth.donations}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="Active Donors"
            value={mockAnalyticsData.totalDonors.toLocaleString()}
            icon={<VolunteerActivism color="primary" />}
            growth={mockAnalyticsData.monthlyGrowth.donors}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="Beneficiaries"
            value={mockAnalyticsData.totalBeneficiaries.toLocaleString()}
            icon={<People color="primary" />}
            growth={mockAnalyticsData.monthlyGrowth.beneficiaries}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsCard
            title="Schools Reached"
            value={mockAnalyticsData.totalSchools}
            icon={<School color="primary" />}
            subtitle="Across all regions"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Goal Progress & Regional Distribution */}
        <Grid item xs={12} md={8}>
          <GoalProgress
            currentAmount={mockAnalyticsData.goalProgress.currentAmount}
            targetAmount={mockAnalyticsData.goalProgress.targetAmount}
            percentage={mockAnalyticsData.goalProgress.percentage}
          />
          <RegionalDistribution data={mockAnalyticsData.regionalDistribution} />
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <RecentDonations donations={mockAnalyticsData.recentDonations} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnalyticsDashboard;