import { Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import { School, People, AttachMoney, TrendingUp } from '@mui/icons-material';

const metrics = [
  {
    id: 'm1',
    label: 'Children Supported',
    value: '7',
    icon: <People fontSize="large" />,
  },
  {
    id: 'm2',
    label: 'Schools Reached',
    value: '1',
    icon: <School fontSize="large" />,
  },
  {
    id: 'm3',
    label: 'Funds Raised',
    value: '100k',
    icon: <AttachMoney fontSize="large" />,
  },
  {
    id: 'm4',
    label: 'Success Rate',
    value: '94%',
    icon: <TrendingUp fontSize="large" />,
  },
];

// Add useEffect to simulate counter animation
import { useEffect, useState } from 'react';

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
  const [animatedValue, setAnimatedValue] = useState('0');

  // Extract numeric part and suffix for animation
  useEffect(() => {
    // Skip animation if it's not a numeric value
    if (typeof value !== 'string') {
      setAnimatedValue(value.toString());
      return;
    }

    // Extract numeric part and suffix (like $, %, etc.)
    const numericMatch = value.match(/^([^\d]*)([\d,]+)(.*)$/);

    if (!numericMatch) {
      setAnimatedValue(value);
      return;
    }

    const prefix = numericMatch[1] || '';
    const numericPart = numericMatch[2].replace(/,/g, '');
    const suffix = numericMatch[3] || '';

    const targetNumber = parseInt(numericPart, 10);
    const duration = 2000; // 2 seconds animation
    const steps = 20;
    const increment = targetNumber / steps;
    let currentStep = 0;

    // Animate from 0 to target value
    const timer = setInterval(() => {
      currentStep += 1;
      const current = Math.min(Math.round(increment * currentStep), targetNumber);

      // Format the number with commas
      const formattedNumber = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setAnimatedValue(`${prefix}${formattedNumber}${suffix}`);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValue(value); // Ensure exact final value
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card
      sx={{
        minHeight: 140,
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
        },
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ width: '100%', position: 'relative' }}>
        {/* Background accent */}
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 120,
            height: 120,
            borderRadius: '50%',
            backgroundColor: `${theme.palette.primary.main}15`, // 15% opacity
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: '20%',
              display: 'grid',
              placeItems: 'center',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: theme.palette.primary.contrastText,
              boxShadow: `0 4px 20px ${theme.palette.primary.main}40`, // 40% opacity
            }}
          >
            {icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {animatedValue}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: theme.palette.text.secondary,
                mt: 0.5,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ImpactMetrics = () => {
  const theme = useTheme();
  // State to track visibility for animations
  const [isVisible, setIsVisible] = useState(false);

  // Effect to trigger animations when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        background: `linear-gradient(180deg, ${theme.palette.background.default}00 0%, ${theme.palette.background.default}30 100%)`,
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background design elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, ${theme.palette.primary.main}00 70%)`,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.main}20 0%, ${theme.palette.secondary.main}00 70%)`,
          zIndex: 0,
        }}
      />

      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          mb: 8,
          textAlign: 'center',
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: '0px 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          Our Impact
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: 400, maxWidth: '800px', mx: 'auto' }}
        >
          Transforming lives through education and mentorship, while maintaining the highest
          standards of privacy and dignity.
        </Typography>
      </Box>

      {/* Metrics Cards with Animation */}
      <Box
        sx={{
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Grid container spacing={3} sx={{ px: { xs: 0, md: 2 }, mb: 8 }}>
          {metrics.map((m, index) => (
            <Grid
              key={m.id}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.7s ease-out ${
                  index * 0.1
                }s, opacity 0.7s ease-out ${index * 0.1}s`,
              }}
            >
              <MetricCard title={m.label} value={m.value} icon={m.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Charts have been moved to ImpactVisualizer component */}
    </Box>
  );
};

export default ImpactMetrics;
