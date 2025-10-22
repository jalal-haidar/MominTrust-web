import { Box, Card, CardContent, Grid, Typography, useTheme } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Define interface for Chart.js animation context
interface ChartAnimationContext {
  dataIndex?: number;
  [key: string]: unknown;
}

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

// Data for charts
const yearlyData = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Children Supported',
      data: [356, 598, 792, 925, 1089, 1247],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3,
    },
  ],
};

const programDistribution = {
  labels: ['Education', 'Health', 'Housing', 'Mentorship', 'Scholarships'],
  datasets: [
    {
      data: [35, 20, 15, 15, 15],
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ageGroupData = {
  labels: ['5-8 years', '9-12 years', '13-15 years', '16-18 years'],
  datasets: [
    {
      label: 'Beneficiaries by Age Group',
      data: [320, 452, 280, 195],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const ImpactVisualizer = () => {
  const theme = useTheme();

  // Chart options with theme colors
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: theme.typography.fontFamily,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Growth Over Time',
        font: {
          family: theme.typography.fontFamily,
          weight: 'bold',
          size: 16,
        },
        color: theme.palette.text.primary,
      },
      tooltip: {
        backgroundColor: theme.palette.primary.main,
        titleFont: {
          family: theme.typography.fontFamily,
          weight: 'bold',
        },
        bodyFont: {
          family: theme.typography.fontFamily,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: `${theme.palette.divider}80`, // 50% opacity
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
          },
        },
      },
      x: {
        grid: {
          color: `${theme.palette.divider}80`, // 50% opacity
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
          },
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            family: theme.typography.fontFamily,
            weight: 'bold',
          },
        },
      },
      title: {
        display: true,
        text: 'Program Distribution',
        font: {
          family: theme.typography.fontFamily,
          weight: 'bold',
          size: 16,
        },
        color: theme.palette.text.primary,
      },
      tooltip: {
        backgroundColor: theme.palette.primary.main,
        titleFont: {
          family: theme.typography.fontFamily,
          weight: 'bold',
        },
        bodyFont: {
          family: theme.typography.fontFamily,
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Beneficiaries by Age Group',
        font: {
          family: theme.typography.fontFamily,
          weight: 'bold',
          size: 16,
        },
        color: theme.palette.text.primary,
      },
      tooltip: {
        backgroundColor: theme.palette.primary.main,
        titleFont: {
          family: theme.typography.fontFamily,
          weight: 'bold',
        },
        bodyFont: {
          family: theme.typography.fontFamily,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: `${theme.palette.divider}80`, // 50% opacity
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: theme.typography.fontFamily,
          },
        },
      },
    },
    animation: {
      delay: (context: ChartAnimationContext | undefined) => {
        // Handle animation delay safely
        if (context && typeof context.dataIndex === 'number') {
          return context.dataIndex * 100;
        }
        return 0;
      },
      duration: 1500,
      easing: 'easeOutQuart',
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Visualization Header */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          component="h3"
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            position: 'relative',
            display: 'inline-block',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: '10%',
              width: '80%',
              height: 3,
              background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 2,
            },
          }}
        >
          Impact Visualization
        </Typography>
      </Box>

      {/* Charts Section with enhanced styling */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Growth Chart */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 50,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1,
                  },
                }}
              >
                Growth Over Time
              </Typography>
              <Box sx={{ height: 350, mt: 3 }}>
                <Line options={lineOptions} data={yearlyData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Program Distribution */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 50,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1,
                  },
                }}
              >
                Program Distribution
              </Typography>
              <Box sx={{ height: 350, mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Doughnut options={doughnutOptions} data={programDistribution} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Age Group Distribution */}
        <Grid item xs={12}>
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 3,
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 50,
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1,
                  },
                }}
              >
                Beneficiaries by Age Group
              </Typography>
              <Box sx={{ height: 350, mt: 3 }}>
                <Bar options={barOptions} data={ageGroupData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImpactVisualizer;
