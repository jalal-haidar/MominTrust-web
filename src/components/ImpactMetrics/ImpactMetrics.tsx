import { Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { School, People, AttachMoney, TrendingUp } from '@mui/icons-material';

const metrics = [
  { id: 'm1', label: 'Children Supported', value: '1,247', icon: <People fontSize="large" /> },
  { id: 'm2', label: 'Schools Reached', value: '85', icon: <School fontSize="large" /> },
  { id: 'm3', label: 'Funds Raised', value: '$2.3M', icon: <AttachMoney fontSize="large" /> },
  { id: 'm4', label: 'Success Rate', value: '94%', icon: <TrendingUp fontSize="large" /> },
];

const MetricCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Card sx={{ minHeight: 140, display: 'flex', alignItems: 'center' }}>
      <CardContent sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              display: 'grid',
              placeItems: 'center',
              bgcolor: theme.palette.primary.light,
              color: theme.palette.primary.main,
            }}
          >
            {icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography component="div" variant="h5" sx={{ fontWeight: 600 }}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ImpactMetrics = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
        Our Impact
      </Typography>
      <Grid container spacing={2} sx={{ px: { xs: 1, md: 2 } }}>
        {metrics.map((m) => (
          <Grid key={m.id} item xs={12} sm={6} md={3}>
            <MetricCard title={m.label} value={m.value} icon={m.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImpactMetrics;
