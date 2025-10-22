import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Chip,
  useTheme,
  Divider,
} from '@mui/material';
import { TrendingUp, TrendingDown, CheckCircle, Warning, Error } from '@mui/icons-material';

interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  category: 'Financial' | 'Impact' | 'Operational' | 'Growth';
  trend: number; // percentage change
  status: 'excellent' | 'good' | 'warning' | 'critical';
  period: string;
}

interface KPITrackerProps {
  kpis: KPI[];
  title?: string;
}

const KPITracker: React.FC<KPITrackerProps> = ({ kpis, title = 'Key Performance Indicators' }) => {
  const theme = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return theme.palette.success.main;
      case 'good':
        return theme.palette.info.main;
      case 'warning':
        return theme.palette.warning.main;
      case 'critical':
        return theme.palette.error.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle sx={{ color: theme.palette.success.main, fontSize: 20 }} />;
      case 'good':
        return <CheckCircle sx={{ color: theme.palette.info.main, fontSize: 20 }} />;
      case 'warning':
        return <Warning sx={{ color: theme.palette.warning.main, fontSize: 20 }} />;
      case 'critical':
        return <Error sx={{ color: theme.palette.error.main, fontSize: 20 }} />;
      default:
        return null;
    }
  };

  const formatValue = (value: number, unit: string) => {
    if (unit === '$' || unit === 'USD') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    if (unit === '%') {
      return `${value}%`;
    }
    return `${value.toLocaleString()} ${unit}`;
  };

  const calculateProgress = (value: number, target: number) => {
    return Math.min((value / target) * 100, 100);
  };

  const categorizedKPIs = {
    Financial: kpis.filter((kpi) => kpi.category === 'Financial'),
    Impact: kpis.filter((kpi) => kpi.category === 'Impact'),
    Operational: kpis.filter((kpi) => kpi.category === 'Operational'),
    Growth: kpis.filter((kpi) => kpi.category === 'Growth'),
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          {title}
        </Typography>

        {Object.entries(categorizedKPIs).map(([category, categoryKPIs]) => {
          if (categoryKPIs.length === 0) return null;

          return (
            <Box key={category} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'medium', color: theme.palette.primary.main }}
                >
                  {category} KPIs
                </Typography>
                <Chip
                  label={`${categoryKPIs.length} metrics`}
                  size="small"
                  sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
                />
              </Box>

              <Grid container spacing={2}>
                {categoryKPIs.map((kpi) => {
                  const progress = calculateProgress(kpi.value, kpi.target);

                  return (
                    <Grid item xs={12} sm={6} key={kpi.id}>
                      <Box
                        sx={{
                          p: 2,
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 2,
                          backgroundColor: theme.palette.background.default,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            boxShadow: theme.shadows[2],
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {/* KPI Header */}
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: 1,
                          }}
                        >
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{ fontSize: '0.75rem', mb: 0.5 }}
                            >
                              {kpi.name}
                            </Typography>
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: 'bold', color: getStatusColor(kpi.status) }}
                            >
                              {formatValue(kpi.value, kpi.unit)}
                            </Typography>
                          </Box>
                          {getStatusIcon(kpi.status)}
                        </Box>

                        {/* Target and Progress */}
                        <Box sx={{ mb: 1.5 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                            <Typography variant="caption" color="text.secondary">
                              Target: {formatValue(kpi.target, kpi.unit)}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ fontWeight: 'medium', color: getStatusColor(kpi.status) }}
                            >
                              {progress.toFixed(0)}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: theme.palette.grey[200],
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 3,
                                backgroundColor: getStatusColor(kpi.status),
                              },
                            }}
                          />
                        </Box>

                        {/* Trend Indicator */}
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {kpi.trend > 0 ? (
                              <TrendingUp
                                sx={{ fontSize: 16, color: theme.palette.success.main, mr: 0.5 }}
                              />
                            ) : (
                              <TrendingDown
                                sx={{ fontSize: 16, color: theme.palette.error.main, mr: 0.5 }}
                              />
                            )}
                            <Typography
                              variant="caption"
                              sx={{
                                color:
                                  kpi.trend > 0
                                    ? theme.palette.success.main
                                    : theme.palette.error.main,
                                fontWeight: 'medium',
                              }}
                            >
                              {kpi.trend > 0 ? '+' : ''}
                              {kpi.trend}%
                            </Typography>
                          </Box>
                          <Typography variant="caption" color="text.secondary">
                            {kpi.period}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              {category !== 'Growth' && <Divider sx={{ mt: 3 }} />}
            </Box>
          );
        })}

        {/* Summary */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 'medium', color: theme.palette.primary.dark }}
          >
            📊 KPI Summary
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.primary.dark }}>
            Tracking {kpis.length} key performance indicators across{' '}
            {Object.keys(categorizedKPIs).length} categories.{' '}
            {kpis.filter((k) => k.status === 'excellent' || k.status === 'good').length} metrics on
            track, {kpis.filter((k) => k.status === 'warning').length} need attention,{' '}
            {kpis.filter((k) => k.status === 'critical').length} critical.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default KPITracker;
