import { Box, Grid, Paper, Typography } from '@mui/material';

interface ImpactStat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ImpactStatsProps {
  stats: ImpactStat[];
  animationVisible: boolean;
}

const ImpactStats = ({ stats, animationVisible }: ImpactStatsProps) => {
  return (
    <Box
      sx={{
        mb: 6,
        opacity: animationVisible ? 1 : 0,
        transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
      }}
    >
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={6} md={3} key={stat.id}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? 'background.paper' : '#fff',
                boxShadow: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 4,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 1.5,
                }}
              >
                {stat.icon}
              </Box>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImpactStats;
