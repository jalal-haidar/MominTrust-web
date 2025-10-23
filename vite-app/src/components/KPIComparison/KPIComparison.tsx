import React from 'react';
import { Box, Card, CardContent, Typography, Grid, useTheme, Chip } from '@mui/material';
import { Timeline, CompareArrows } from '@mui/icons-material';

interface MonthlyKPI {
  month: string;
  donations: number;
  donors: number;
  beneficiaries: number;
  programs: number;
}

interface KPIComparisonProps {
  currentMonth: MonthlyKPI;
  previousMonth: MonthlyKPI;
  yearAgo: MonthlyKPI;
}

const KPIComparison: React.FC<KPIComparisonProps> = ({ currentMonth, previousMonth, yearAgo }) => {
  const theme = useTheme();

  const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const metrics = [
    {
      name: 'Total Donations',
      current: currentMonth.donations,
      previous: previousMonth.donations,
      yearAgo: yearAgo.donations,
      format: formatCurrency,
      color: theme.palette.primary.main,
    },
    {
      name: 'Active Donors',
      current: currentMonth.donors,
      previous: previousMonth.donors,
      yearAgo: yearAgo.donors,
      format: (val: number) => val.toLocaleString(),
      color: theme.palette.secondary.main,
    },
    {
      name: 'Beneficiaries Served',
      current: currentMonth.beneficiaries,
      previous: previousMonth.beneficiaries,
      yearAgo: yearAgo.beneficiaries,
      format: (val: number) => val.toLocaleString(),
      color: theme.palette.success.main,
    },
    {
      name: 'Active Programs',
      current: currentMonth.programs,
      previous: previousMonth.programs,
      yearAgo: yearAgo.programs,
      format: (val: number) => val.toString(),
      color: theme.palette.info.main,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CompareArrows sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            KPI Period Comparison
          </Typography>
        </Box>

        <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            icon={<Timeline />}
            label={`Current: ${currentMonth.month}`}
            sx={{ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.dark }}
          />
          <Chip
            label={`Previous: ${previousMonth.month}`}
            sx={{ backgroundColor: theme.palette.grey[200] }}
          />
          <Chip
            label={`Year Ago: ${yearAgo.month}`}
            sx={{ backgroundColor: theme.palette.grey[200] }}
          />
        </Box>

        <Grid container spacing={2}>
          {metrics.map((metric) => {
            const momChange = calculateChange(metric.current, metric.previous);
            const yoyChange = calculateChange(metric.current, metric.yearAgo);

            return (
              <Grid item xs={12} sm={6} md={3} key={metric.name}>
                <Box
                  sx={{
                    p: 2,
                    border: `2px solid ${metric.color}20`,
                    borderRadius: 2,
                    backgroundColor: `${metric.color}05`,
                    height: '100%',
                  }}
                >
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                    {metric.name}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: metric.color, my: 1 }}>
                    {metric.format(metric.current)}
                  </Typography>

                  {/* Month over Month */}
                  <Box sx={{ mb: 1.5 }}>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.65rem' }}
                    >
                      vs. Last Month
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {metric.format(metric.previous)}
                      </Typography>
                      <Chip
                        label={`${momChange > 0 ? '+' : ''}${momChange.toFixed(1)}%`}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: '0.65rem',
                          backgroundColor:
                            momChange >= 0
                              ? theme.palette.success.light
                              : theme.palette.error.light,
                          color:
                            momChange >= 0 ? theme.palette.success.dark : theme.palette.error.dark,
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Year over Year */}
                  <Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: '0.65rem' }}
                    >
                      vs. Last Year
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {metric.format(metric.yearAgo)}
                      </Typography>
                      <Chip
                        label={`${yoyChange > 0 ? '+' : ''}${yoyChange.toFixed(1)}%`}
                        size="small"
                        sx={{
                          height: 18,
                          fontSize: '0.65rem',
                          backgroundColor:
                            yoyChange >= 0
                              ? theme.palette.success.light
                              : theme.palette.error.light,
                          color:
                            yoyChange >= 0 ? theme.palette.success.dark : theme.palette.error.dark,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Insights */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: theme.palette.info.light, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: theme.palette.info.dark }}>
            💡 Trend Analysis
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.info.dark }}>
            {calculateChange(currentMonth.donations, previousMonth.donations) > 0
              ? '✅ Donation growth is positive month-over-month. Maintain current fundraising momentum.'
              : '⚠️ Donations decreased from last month. Review recent campaigns and donor engagement.'}{' '}
            {calculateChange(currentMonth.beneficiaries, yearAgo.beneficiaries) > 10
              ? 'Strong year-over-year beneficiary growth shows program expansion success.'
              : 'Consider scaling successful programs to increase beneficiary reach.'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPIComparison;
