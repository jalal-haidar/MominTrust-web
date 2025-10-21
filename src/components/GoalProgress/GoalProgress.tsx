import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  useTheme,
} from '@mui/material';
import { Timeline } from '@mui/icons-material';

interface GoalProgressProps {
  currentAmount: number;
  targetAmount: number;
  percentage: number;
}

const GoalProgress: React.FC<GoalProgressProps> = ({
  currentAmount,
  targetAmount,
  percentage,
}) => {
  const theme = useTheme();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Timeline sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Annual Fundraising Goal
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Progress: {percentage}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatCurrency(currentAmount)} / {formatCurrency(targetAmount)}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.palette.grey[200],
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
              },
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary">
          Remaining: {formatCurrency(targetAmount - currentAmount)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GoalProgress;