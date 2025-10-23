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
import { TrendingUp, TrendingDown, Group, GroupAdd, PersonOff } from '@mui/icons-material';

interface DonorSegment {
  label: string;
  count: number;
  percentage: number;
  trend: number;
  color: string;
}

interface DonorInsightsProps {
  segments: DonorSegment[];
  retentionRate: number;
  averageDonationGrowth: number;
}

const DonorInsights: React.FC<DonorInsightsProps> = ({
  segments,
  retentionRate,
  averageDonationGrowth,
}) => {
  const theme = useTheme();

  const getBusinessInsight = (rate: number) => {
    if (rate > 75) return 'Excellent donor retention! Focus on expanding reach to new audiences.';
    if (rate > 60) return 'Good retention rate. Consider implementing donor stewardship programs.';
    return 'Low retention needs attention. Review communication strategy and donor experience.';
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Donor Insights & Retention
        </Typography>

        {/* Key Metrics Row */}
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
                {retentionRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Donor Retention Rate
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 16, mr: 0.5 }} />
                <Typography variant="caption" sx={{ color: theme.palette.success.main }}>
                  +5.2% from last year
                </Typography>
              </Box>
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
                {averageDonationGrowth > 0 ? '+' : ''}
                {averageDonationGrowth}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg. Donation Growth
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                {averageDonationGrowth > 0 ? (
                  <TrendingUp sx={{ color: theme.palette.success.main, fontSize: 16, mr: 0.5 }} />
                ) : (
                  <TrendingDown sx={{ color: theme.palette.error.main, fontSize: 16, mr: 0.5 }} />
                )}
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      averageDonationGrowth > 0
                        ? theme.palette.success.main
                        : theme.palette.error.main,
                  }}
                >
                  vs. last quarter
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Donor Segments */}
        <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 2 }}>
          Donor Segments
        </Typography>
        {segments.map((segment) => (
          <Box key={segment.label} sx={{ mb: 2 }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: segment.color,
                  }}
                />
                <Typography variant="body2">{segment.label}</Typography>
                {segment.label === 'New Donors' && (
                  <GroupAdd sx={{ fontSize: 16, color: 'text.secondary' }} />
                )}
                {segment.label === 'Returning Donors' && (
                  <Group sx={{ fontSize: 16, color: 'text.secondary' }} />
                )}
                {segment.label === 'At-Risk Donors' && (
                  <PersonOff sx={{ fontSize: 16, color: 'text.secondary' }} />
                )}
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {segment.count} ({segment.percentage}%)
                </Typography>
                <Chip
                  label={`${segment.trend > 0 ? '+' : ''}${segment.trend}%`}
                  size="small"
                  sx={{
                    height: 18,
                    fontSize: '0.7rem',
                    backgroundColor:
                      segment.trend > 0 ? theme.palette.success.light : theme.palette.error.light,
                    color:
                      segment.trend > 0 ? theme.palette.success.dark : theme.palette.error.dark,
                  }}
                />
              </Box>
            </Box>
            <LinearProgress
              variant="determinate"
              value={segment.percentage}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.palette.grey[200],
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  backgroundColor: segment.color,
                },
              }}
            />
          </Box>
        ))}

        {/* Business Insight */}
        <Box sx={{ mt: 3, p: 2, backgroundColor: theme.palette.info.light, borderRadius: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 'medium', color: theme.palette.info.dark }}>
            💡 Business Insight
          </Typography>
          <Typography variant="caption" sx={{ color: theme.palette.info.dark }}>
            {getBusinessInsight(retentionRate)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonorInsights;
