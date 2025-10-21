import React from 'react';
import {
  Paper,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Chip,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  LocalFireDepartment as FireIcon,
  EmojiEvents as TrophyIcon,
  Star as StarIcon,
  Favorite as HeartIcon,
} from '@mui/icons-material';

interface Badge {
  id: string;
  name: string;
  icon: React.ReactNode;
  threshold: number;
  color: string;
  earned: boolean;
  earnedDate?: string;
}

interface DonationStreakTrackerProps {
  currentStreak: number;
  longestStreak: number;
  totalMonths: number;
}

const DonationStreakTracker: React.FC<DonationStreakTrackerProps> = ({
  currentStreak,
  longestStreak,
  totalMonths,
}) => {
  const theme = useTheme();

  const badges: Badge[] = [
    {
      id: 'starter',
      name: 'Getting Started',
      icon: <HeartIcon />,
      threshold: 3,
      color: '#4caf50',
      earned: currentStreak >= 3,
      earnedDate: currentStreak >= 3 ? '2025-08-21' : undefined,
    },
    {
      id: 'committed',
      name: 'Committed Giver',
      icon: <StarIcon />,
      threshold: 6,
      color: '#2196f3',
      earned: currentStreak >= 6,
      earnedDate: currentStreak >= 6 ? '2025-05-21' : undefined,
    },
    {
      id: 'champion',
      name: 'Champion',
      icon: <TrophyIcon />,
      threshold: 12,
      color: '#ff9800',
      earned: currentStreak >= 12,
      earnedDate: currentStreak >= 12 ? '2024-11-21' : undefined,
    },
    {
      id: 'legend',
      name: 'Legend',
      icon: <FireIcon />,
      threshold: 24,
      color: '#f44336',
      earned: currentStreak >= 24,
      earnedDate: currentStreak >= 24 ? '2023-11-21' : undefined,
    },
  ];

  const nextBadge = badges.find((badge) => !badge.earned);
  const progressToNext = nextBadge ? (currentStreak / nextBadge.threshold) * 100 : 100;

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <FireIcon sx={{ fontSize: 40, mr: 2, color: '#ff9800' }} />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Donation Streak
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Keep the momentum going!
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold" sx={{ color: '#ff9800' }}>
              {currentStreak}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Current Streak
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {longestStreak}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Longest Streak
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" fontWeight="bold">
              {totalMonths}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              Total Months
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {nextBadge && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">
              Next: {nextBadge.name} ({nextBadge.threshold} months)
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              {currentStreak}/{nextBadge.threshold}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressToNext}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'rgba(255,255,255,0.3)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#ff9800',
                borderRadius: 4,
              },
            }}
          />
        </Box>
      )}

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.9 }}>
          Your Badges
        </Typography>
        <Grid container spacing={1}>
          {badges.map((badge) => (
            <Grid item xs={6} sm={3} key={badge.id}>
              <Tooltip
                title={
                  badge.earned
                    ? `Earned on ${badge.earnedDate}`
                    : `Donate for ${badge.threshold} consecutive months`
                }
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: badge.earned
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(255,255,255,0.05)',
                    border: badge.earned
                      ? `2px solid ${badge.color}`
                      : '2px solid rgba(255,255,255,0.1)',
                    opacity: badge.earned ? 1 : 0.5,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: badge.earned ? 'scale(1.05)' : 'none',
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: 40,
                      color: badge.earned ? badge.color : 'rgba(255,255,255,0.3)',
                      mb: 1,
                    }}
                  >
                    {badge.icon}
                  </Box>
                  <Typography variant="caption" display="block" fontWeight="bold">
                    {badge.name}
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '0.65rem', opacity: 0.8 }}>
                    {badge.threshold} months
                  </Typography>
                  {badge.earned && (
                    <Chip
                      label="Earned"
                      size="small"
                      sx={{
                        mt: 1,
                        height: 18,
                        fontSize: '0.65rem',
                        backgroundColor: badge.color,
                        color: 'white',
                      }}
                    />
                  )}
                </Box>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default DonationStreakTracker;
