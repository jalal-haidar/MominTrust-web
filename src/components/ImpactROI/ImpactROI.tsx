import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  useTheme,
} from '@mui/material';
import { Insights, TrendingUp, AttachMoney, School, Psychology } from '@mui/icons-material';

interface Program {
  name: string;
  costPerBeneficiary: number;
  totalBeneficiaries: number;
  successRate: number;
  roi: number; // Return on investment percentage
  color: string;
}

interface ImpactROIProps {
  programs: Program[];
  overallEfficiency: number;
  totalImpactScore: number;
}

const ImpactROI: React.FC<ImpactROIProps> = ({ programs, overallEfficiency, totalImpactScore }) => {
  const theme = useTheme();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getEfficiencyLabel = (efficiency: number) => {
    if (efficiency > 85) return { label: 'Excellent', color: theme.palette.success.main };
    if (efficiency > 70) return { label: 'Good', color: theme.palette.warning.main };
    return { label: 'Needs Improvement', color: theme.palette.error.main };
  };

  const efficiencyInfo = getEfficiencyLabel(overallEfficiency);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Insights sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Impact ROI & Program Efficiency
          </Typography>
        </Box>

        {/* Overall Metrics */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
              >
                {overallEfficiency}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overall Efficiency
              </Typography>
              <Chip
                label={efficiencyInfo.label}
                size="small"
                sx={{
                  mt: 1,
                  backgroundColor: `${efficiencyInfo.color}20`,
                  color: efficiencyInfo.color,
                  fontWeight: 'medium',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                textAlign: 'center',
                p: 2,
                backgroundColor: theme.palette.background.default,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', color: theme.palette.secondary.main }}
              >
                {totalImpactScore}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Impact Score
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 16, mr: 0.5 }} />
                <Typography variant="caption" sx={{ color: theme.palette.success.main }}>
                  +12% this quarter
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Program Performance */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>
          Program Performance Analysis
        </Typography>

        {programs.map((program) => (
          <Box
            key={program.name}
            sx={{ mb: 3, p: 2, border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}
          >
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {program.name.includes('Education') && (
                  <School sx={{ color: program.color, fontSize: 20 }} />
                )}
                {program.name.includes('Skills') && (
                  <Psychology sx={{ color: program.color, fontSize: 20 }} />
                )}
                {program.name.includes('Support') && (
                  <AttachMoney sx={{ color: program.color, fontSize: 20 }} />
                )}
                <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }}>
                  {program.name}
                </Typography>
              </Box>
              <Chip
                label={`${program.roi}% ROI`}
                size="small"
                sx={{
                  backgroundColor:
                    program.roi > 15 ? theme.palette.success.light : theme.palette.warning.light,
                  color: program.roi > 15 ? theme.palette.success.dark : theme.palette.warning.dark,
                  fontWeight: 'medium',
                }}
              />
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="caption" color="text.secondary">
                  Cost per Beneficiary
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {formatCurrency(program.costPerBeneficiary)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="text.secondary">
                  Total Beneficiaries
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {program.totalBeneficiaries.toLocaleString()}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="text.secondary">
                  Success Rate
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {program.successRate}%
                </Typography>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Program Efficiency
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {program.successRate}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={program.successRate}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: theme.palette.grey[200],
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 3,
                    backgroundColor: program.color,
                  },
                }}
              />
            </Box>
          </Box>
        ))}

        {/* Business Recommendations */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: theme.palette.warning.light, borderRadius: 2 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 'medium', color: theme.palette.warning.dark }}
          >
            📊 Strategic Recommendations
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.warning.dark }}>
            • Focus funding on highest ROI programs ({'>'}15%)
            <br />
            • Consider scaling successful programs with low cost per beneficiary
            <br />• Review programs with success rates below 70%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImpactROI;
