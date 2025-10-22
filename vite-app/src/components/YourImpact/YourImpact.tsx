import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import DonationStreakTracker from '../DonationStreakTracker';
import PersonalImpactMetrics from '../PersonalImpactMetrics';
import DonationHistory from '../DonationHistory';

// Mock data - replace with actual API calls
const mockDonorData = {
  currentStreak: 8,
  longestStreak: 12,
  totalMonths: 18,
  totalDonated: 4500,
  beneficiariesHelped: 36,
  programsSupported: ['Education', 'Healthcare', 'Food Security', 'Clean Water'],
  donations: [
    {
      id: 'd1',
      date: '2025-10-15',
      amount: 250,
      program: 'Education Fund',
      status: 'completed' as const,
    },
    {
      id: 'd2',
      date: '2025-09-15',
      amount: 250,
      program: 'Healthcare Initiative',
      status: 'completed' as const,
    },
    {
      id: 'd3',
      date: '2025-08-15',
      amount: 500,
      program: 'Food Security Program',
      status: 'completed' as const,
    },
    {
      id: 'd4',
      date: '2025-07-15',
      amount: 250,
      program: 'Clean Water Project',
      status: 'completed' as const,
    },
    {
      id: 'd5',
      date: '2025-06-15',
      amount: 250,
      program: 'Education Fund',
      status: 'completed' as const,
    },
    {
      id: 'd6',
      date: '2025-05-15',
      amount: 1000,
      program: 'Healthcare Initiative',
      status: 'completed' as const,
    },
  ],
};

const YourImpact: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Your Impact Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your giving journey and see the difference you&apos;re making
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Streak Tracker - Full Width */}
        <Grid item xs={12}>
          <DonationStreakTracker
            currentStreak={mockDonorData.currentStreak}
            longestStreak={mockDonorData.longestStreak}
            totalMonths={mockDonorData.totalMonths}
          />
        </Grid>

        {/* Impact Metrics - Full Width */}
        <Grid item xs={12}>
          <PersonalImpactMetrics
            totalDonated={mockDonorData.totalDonated}
            beneficiariesHelped={mockDonorData.beneficiariesHelped}
            programsSupported={mockDonorData.programsSupported}
          />
        </Grid>

        {/* Donation History - Full Width */}
        <Grid item xs={12}>
          <DonationHistory donations={mockDonorData.donations} limit={5} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default YourImpact;
