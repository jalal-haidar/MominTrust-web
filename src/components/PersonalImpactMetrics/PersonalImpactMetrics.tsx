import React from 'react';
import { Paper, Typography, Box, Grid, useTheme, Avatar } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  LocalHospital as HealthIcon,
  Restaurant as FoodIcon,
} from '@mui/icons-material';

interface ImpactMetric {
  label: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface PersonalImpactMetricsProps {
  totalDonated: number;
  beneficiariesHelped: number;
  programsSupported: string[];
}

const PersonalImpactMetrics: React.FC<PersonalImpactMetricsProps> = ({
  totalDonated,
  beneficiariesHelped,
  programsSupported,
}) => {
  const theme = useTheme();

  const metrics: ImpactMetric[] = [
    {
      label: 'Total Contributed',
      value: `$${totalDonated.toLocaleString()}`,
      description: 'Your lifetime giving',
      icon: <TrendingUpIcon />,
      color: theme.palette.success.main,
    },
    {
      label: 'Lives Impacted',
      value: beneficiariesHelped,
      description: "People you've helped",
      icon: <PeopleIcon />,
      color: theme.palette.primary.main,
    },
    {
      label: 'Children Educated',
      value: Math.floor(beneficiariesHelped * 0.4),
      description: 'Students supported',
      icon: <SchoolIcon />,
      color: '#2196f3',
    },
    {
      label: 'Healthcare Visits',
      value: Math.floor(beneficiariesHelped * 0.3),
      description: 'Medical treatments funded',
      icon: <HealthIcon />,
      color: '#f44336',
    },
    {
      label: 'Meals Provided',
      value: Math.floor(beneficiariesHelped * 12).toLocaleString(),
      description: 'Nutritious meals served',
      icon: <FoodIcon />,
      color: '#ff9800',
    },
  ];

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Your Impact Summary
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        See the real difference your donations are making
      </Typography>

      <Grid container spacing={2}>
        {metrics.map((metric) => (
          <Grid item xs={12} sm={6} md={4} key={metric.label}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                  borderColor: metric.color,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: `${metric.color}20`,
                    color: metric.color,
                    width: 48,
                    height: 48,
                    mr: 2,
                  }}
                >
                  {metric.icon}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" fontWeight="bold" color={metric.color}>
                    {metric.value}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {metric.label}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {metric.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
        }}
      >
        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
          Programs You&apos;re Supporting
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {programsSupported.map((program) => (
            <Box
              key={program}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 20,
                bgcolor: 'background.paper',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography variant="caption">{program}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default PersonalImpactMetrics;
