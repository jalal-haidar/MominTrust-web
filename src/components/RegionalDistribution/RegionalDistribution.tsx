import React from 'react';
import { Box, Card, CardContent, Typography, LinearProgress, useTheme } from '@mui/material';

interface RegionData {
  region: string;
  beneficiaries: number;
  percentage: number;
}

interface RegionalDistributionProps {
  data: RegionData[];
}

const RegionalDistribution: React.FC<RegionalDistributionProps> = ({ data }) => {
  const theme = useTheme();

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Regional Distribution
        </Typography>
        {data.map((region) => (
          <Box key={region.region} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">{region.region}</Typography>
              <Typography variant="body2" color="text.secondary">
                {region.beneficiaries} ({region.percentage}%)
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={region.percentage}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.palette.grey[200],
                '& .MuiLinearProgress-bar': {
                  borderRadius: 3,
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default RegionalDistribution;
