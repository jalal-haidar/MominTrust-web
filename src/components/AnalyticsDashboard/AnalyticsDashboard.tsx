import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton, Tooltip } from '@mui/material';
import { People, School, AttachMoney, VolunteerActivism, Refresh } from '@mui/icons-material';

import AnalyticsCard from '@/components/AnalyticsCard';
import GoalProgress from '@/components/GoalProgress';
import RegionalDistribution from '@/components/RegionalDistribution';
import RecentDonations from '@/components/RecentDonations';
import DonorInsights from '@/components/DonorInsights';
import ImpactROI from '@/components/ImpactROI';
import KPITracker from '@/components/KPITracker';
import KPIComparison from '@/components/KPIComparison';

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
  // Business Intelligence Data
  donorSegments: [
    { label: 'New Donors', count: 287, percentage: 23, trend: 15.3, color: '#4CAF50' },
    { label: 'Returning Donors', count: 756, percentage: 60.6, trend: 8.2, color: '#2196F3' },
    { label: 'Major Donors', count: 89, percentage: 7.1, trend: -2.1, color: '#FF9800' },
    { label: 'At-Risk Donors', count: 115, percentage: 9.2, trend: -12.5, color: '#F44336' },
  ],
  programs: [
    {
      name: 'Education Support',
      costPerBeneficiary: 125,
      totalBeneficiaries: 890,
      successRate: 87,
      roi: 22.5,
      color: '#2196F3',
    },
    {
      name: 'Skills Development',
      costPerBeneficiary: 275,
      totalBeneficiaries: 420,
      successRate: 78,
      roi: 18.3,
      color: '#4CAF50',
    },
    {
      name: 'Emergency Support',
      costPerBeneficiary: 89,
      totalBeneficiaries: 270,
      successRate: 92,
      roi: 8.7,
      color: '#FF9800',
    },
  ],
  // KPI Data
  kpis: [
    // Financial KPIs
    {
      id: 'kpi-1',
      name: 'Monthly Donations',
      value: 195000,
      target: 200000,
      unit: 'USD',
      category: 'Financial' as const,
      trend: 12.5,
      status: 'good' as const,
      period: 'vs. last month',
    },
    {
      id: 'kpi-2',
      name: 'Donor Retention Rate',
      value: 78.5,
      target: 80,
      unit: '%',
      category: 'Financial' as const,
      trend: 5.2,
      status: 'good' as const,
      period: 'vs. last year',
    },
    {
      id: 'kpi-3',
      name: 'Avg. Donation Amount',
      value: 156,
      target: 150,
      unit: 'USD',
      category: 'Financial' as const,
      trend: 8.3,
      status: 'excellent' as const,
      period: 'vs. last quarter',
    },
    {
      id: 'kpi-4',
      name: 'Fundraising Efficiency',
      value: 92,
      target: 85,
      unit: '%',
      category: 'Financial' as const,
      trend: 3.1,
      status: 'excellent' as const,
      period: 'vs. target',
    },

    // Impact KPIs
    {
      id: 'kpi-5',
      name: 'Beneficiaries Served',
      value: 1580,
      target: 1500,
      unit: 'people',
      category: 'Impact' as const,
      trend: 15.2,
      status: 'excellent' as const,
      period: 'vs. last month',
    },
    {
      id: 'kpi-6',
      name: 'Program Success Rate',
      value: 87,
      target: 80,
      unit: '%',
      category: 'Impact' as const,
      trend: 4.5,
      status: 'excellent' as const,
      period: 'vs. target',
    },
    {
      id: 'kpi-7',
      name: 'Cost per Beneficiary',
      value: 125,
      target: 150,
      unit: 'USD',
      category: 'Impact' as const,
      trend: -8.2,
      status: 'excellent' as const,
      period: 'vs. last year',
    },
    {
      id: 'kpi-8',
      name: 'Schools Reached',
      value: 85,
      target: 75,
      unit: 'schools',
      category: 'Impact' as const,
      trend: 13.3,
      status: 'excellent' as const,
      period: 'vs. target',
    },

    // Operational KPIs
    {
      id: 'kpi-9',
      name: 'Application Processing Time',
      value: 5,
      target: 7,
      unit: 'days',
      category: 'Operational' as const,
      trend: -15.5,
      status: 'excellent' as const,
      period: 'vs. last month',
    },
    {
      id: 'kpi-10',
      name: 'Administrative Overhead',
      value: 12,
      target: 15,
      unit: '%',
      category: 'Operational' as const,
      trend: -2.1,
      status: 'excellent' as const,
      period: 'vs. target',
    },
    {
      id: 'kpi-11',
      name: 'Volunteer Engagement',
      value: 68,
      target: 75,
      unit: '%',
      category: 'Operational' as const,
      trend: -3.2,
      status: 'warning' as const,
      period: 'vs. last quarter',
    },

    // Growth KPIs
    {
      id: 'kpi-12',
      name: 'New Donor Acquisition',
      value: 287,
      target: 250,
      unit: 'donors',
      category: 'Growth' as const,
      trend: 18.7,
      status: 'excellent' as const,
      period: 'vs. target',
    },
    {
      id: 'kpi-13',
      name: 'Website Conversion Rate',
      value: 3.2,
      target: 4,
      unit: '%',
      category: 'Growth' as const,
      trend: 1.8,
      status: 'warning' as const,
      period: 'vs. last month',
    },
    {
      id: 'kpi-14',
      name: 'Geographic Expansion',
      value: 4,
      target: 5,
      unit: 'regions',
      category: 'Growth' as const,
      trend: 0,
      status: 'good' as const,
      period: 'vs. target',
    },
  ],
  // Period Comparison Data
  periodComparison: {
    current: {
      month: 'October 2025',
      donations: 195000,
      donors: 1247,
      beneficiaries: 1580,
      programs: 12,
    },
    previous: {
      month: 'September 2025',
      donations: 173000,
      donors: 1150,
      beneficiaries: 1370,
      programs: 11,
    },
    yearAgo: {
      month: 'October 2024',
      donations: 145000,
      donors: 980,
      beneficiaries: 1210,
      programs: 9,
    },
  },
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

      {/* Key Metrics Cards - Executive Summary */}
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

      {/* KPI Period Comparison - Trend Analysis */}
      <Box sx={{ mb: 4 }}>
        <KPIComparison
          currentMonth={mockAnalyticsData.periodComparison.current}
          previousMonth={mockAnalyticsData.periodComparison.previous}
          yearAgo={mockAnalyticsData.periodComparison.yearAgo}
        />
      </Box>

      {/* Business Intelligence Section - Strategic Insights */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <DonorInsights
            segments={mockAnalyticsData.donorSegments}
            retentionRate={78.5}
            averageDonationGrowth={12.3}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImpactROI
            programs={mockAnalyticsData.programs}
            overallEfficiency={82.4}
            totalImpactScore={847}
          />
        </Grid>
      </Grid>

      {/* Comprehensive KPI Tracking - Detailed Metrics */}
      <Box sx={{ mb: 4 }}>
        <KPITracker kpis={mockAnalyticsData.kpis} />
      </Box>

      {/* Operational Details & Activity */}
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
