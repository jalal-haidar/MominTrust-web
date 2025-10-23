import { Box, Button, Container, Typography, useTheme, Grid, Paper, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Hero = () => {
  const theme = useTheme();

  // Stats to display in hero section
  const stats = [
    {
      value: '250+',
      label: 'Students Supported',
      icon: SchoolIcon,
      color: theme.palette.primary.main,
    },
    {
      value: '90%',
      label: 'Funds to Education',
      icon: TrendingUpIcon,
      color: theme.palette.secondary.main,
    },
    { value: '5', label: 'Years of Impact', icon: PeopleIcon, color: theme.palette.primary.light },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a4d4d 0%, #0a3d3d 100%)'
            : theme.palette.primary.main,
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1a4d4d 0%, #0a3d3d 100%)'
            : theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            theme.palette.mode === 'dark'
              ? `
              radial-gradient(circle at 20% 30%, rgba(131, 197, 190, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(131, 197, 190, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 40% 90%, rgba(255, 107, 107, 0.1) 0%, transparent 30%)
            `
              : `
              radial-gradient(circle at 20% 30%, ${theme.palette.primary.light}40 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${theme.palette.primary.light}30 0%, transparent 40%),
              radial-gradient(circle at 40% 90%, ${theme.palette.secondary.light}20 0%, transparent 30%)
            `,
          opacity: 0.8,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
          opacity: 0.8,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Hero Text Content */}
          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ position: 'relative', mb: 1 }}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, // Smaller on mobile
                  color:
                    theme.palette.mode === 'dark'
                      ? '#FF8787' // Brighter coral for dark mode
                      : theme.palette.secondary.light,
                  textTransform: 'uppercase',
                  letterSpacing: { xs: '0.8px', md: '1px' }, // Slightly tighter letter spacing on mobile
                  display: 'block',
                  mb: { xs: 0.75, md: 1 }, // Less margin on mobile
                  // Add text shadow on mobile for better readability against background
                  textShadow: '0px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                Educational Support
              </Typography>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3.2rem' }, // Even smaller on mobile
                  lineHeight: { xs: 1.2, md: 1.3 }, // Tighter line height on mobile
                  textShadow: '0px 2px 4px rgba(0,0,0,0.15)',
                  mb: { xs: 1.5, md: 2 }, // Less margin on mobile
                  position: 'relative',
                  display: 'inline-block',
                  // Word-break to help with long words on small screens
                  wordBreak: { xs: 'break-word', md: 'normal' },
                  // Optional hyphenation for very small screens
                  WebkitHyphens: { xs: 'auto', md: 'none' },
                  hyphens: { xs: 'auto', md: 'none' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: { xs: '-8px', md: '-10px' }, // Slightly higher on mobile
                    left: { xs: '50%', md: '0' },
                    transform: { xs: 'translateX(-50%)', md: 'translateX(0)' },
                    width: { xs: '60px', sm: '70px', md: '80px' }, // Shorter line on mobile
                    height: { xs: '3px', md: '4px' }, // Thinner line on mobile
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: '2px',
                  },
                }}
              >
                Momin Trust — Empowering Talented Children
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                mt: 3,
                fontWeight: 400,
                opacity: 0.9,
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.15rem' },
                maxWidth: '600px',
              }}
            >
              We identify brilliant students from underprivileged backgrounds and provide the
              financial support they need to pursue their education and achieve their full
              potential.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, md: 3 },
                flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Stack vertically on very small screens
                flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on very small screens
                width: { xs: '100%', sm: 'auto' }, // Full width on very small screens
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: { xs: 3, md: 4 }, // Less bottom margin on mobile
                mt: { xs: 3, sm: 4, md: 5 }, // Less top margin on mobile
                maxWidth: { xs: '300px', sm: 'none' }, // Limit width on smallest screens
                mx: { xs: 'auto', sm: 0 }, // Center on smallest screens
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                href="/donate"
                aria-label="Donate to Momin Trust"
                size="large"
                sx={{
                  px: { xs: 3, md: 4 }, // Less padding on mobile
                  py: { xs: 1.5, md: 1.8 }, // Less padding on mobile
                  boxShadow: '0 6px 15px rgba(226, 149, 120, 0.4)',
                  fontWeight: 700,
                  fontSize: { xs: '1rem', md: '1.1rem' }, // Smaller font on mobile
                  borderRadius: '30px',
                  width: { xs: '100%', sm: 'auto' }, // Full width on smallest screens
                  '&:hover': {
                    transform: {
                      xs: 'translateY(-2px) scale(1.01)',
                      md: 'translateY(-3px) scale(1.02)',
                    }, // Smaller transform on mobile
                    boxShadow: '0 8px 20px rgba(226, 149, 120, 0.5)',
                    backgroundColor: theme.palette.secondary.dark,
                  },
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'all 0.6s',
                  },
                  '&:hover::after': {
                    left: '100%',
                  },
                  // Improve tap target for mobile
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                Donate Now
              </Button>
              <Button
                variant="outlined"
                href="/apply"
                aria-label="Apply for support"
                size="large"
                sx={{
                  px: { xs: 3, md: 3 },
                  py: { xs: 1.5, md: 1.8 }, // Less padding on mobile
                  borderColor: 'white',
                  borderWidth: { xs: '1.5px', md: '2px' }, // Slightly thinner border on mobile
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { xs: '0.95rem', md: '1rem' }, // Smaller font on mobile
                  borderRadius: '30px',
                  width: { xs: '100%', sm: 'auto' }, // Full width on smallest screens
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: {
                      xs: 'translateY(-1px)',
                      md: 'translateY(-2px)',
                    }, // Smaller transform on mobile
                  },
                  transition: 'all 0.2s',
                  // Improve tap target for mobile
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                Apply for Support
              </Button>
            </Box>
          </Grid>

          {/* Hero Visual Element */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                width: '100%',
                py: { xs: 2, md: 4 },
                mt: { xs: -2, md: 0 }, // Reduce top margin on mobile
                mb: { xs: -1, md: 0 }, // Reduce bottom margin on mobile
              }}
            >
              {/* Visually appealing circle arrangement */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 240, sm: 280, md: 320 },
                  maxWidth: { xs: 300, sm: 420, md: 520 },
                  mx: 'auto',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  // Scale down on mobile for better fit
                  transform: { xs: 'scale(0.9)', sm: 'scale(0.95)', md: 'scale(1)' },
                }}
              >
                {/* Background circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    width: 110,
                    height: 110,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    opacity: 0.4,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    animation: 'float 8s ease-in-out infinite',
                    '@keyframes float': {
                      '0%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                      '100%': { transform: 'translateY(0px)' },
                    },
                  }}
                />

                {/* Middle left circle with pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '10%',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '2px dashed rgba(255, 255, 255, 0.4)',
                    zIndex: 1,
                    animation: 'floatDelay 7s ease-in-out infinite',
                    animationDelay: '1s',
                    '@keyframes floatDelay': {
                      '0%': { transform: 'translateY(0px) rotate(0deg)' },
                      '50%': { transform: 'translateY(-8px) rotate(5deg)' },
                      '100%': { transform: 'translateY(0px) rotate(0deg)' },
                    },
                  }}
                />

                {/* Main center MT circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '15%', sm: '18%', md: '20%' },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 140, sm: 160, md: 180 },
                    height: { xs: 140, sm: 160, md: 180 },
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.secondary.contrastText,
                    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
                    border: {
                      xs: '4px solid rgba(255, 255, 255, 0.3)',
                      md: '6px solid rgba(255, 255, 255, 0.3)',
                    },
                    zIndex: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(-50%) scale(1.05)',
                      boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 700,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      fontSize: { xs: '3rem', sm: '3.5rem' },
                      letterSpacing: '2px',
                    }}
                  >
                    MT
                  </Typography>
                </Box>

                {/* Education circle with icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: '15%', md: '10%' },
                    right: { xs: '10%', sm: '12%' },
                    width: { xs: 110, sm: 120, md: 140 },
                    height: { xs: 110, sm: 120, md: 140 },
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    color: theme.palette.primary.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.15)',
                    border: `3px solid ${theme.palette.primary.main}15`,
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    animation: 'pulse 3s infinite',
                    '@keyframes pulse': {
                      '0%': {
                        boxShadow: `0 0 0 0 ${theme.palette.primary.main}40`,
                      },
                      '70%': {
                        boxShadow: `0 0 0 10px ${theme.palette.primary.main}00`,
                      },
                      '100%': {
                        boxShadow: `0 0 0 0 ${theme.palette.primary.main}00`,
                      },
                    },
                  }}
                >
                  <SchoolIcon
                    sx={{
                      fontSize: { xs: 45, sm: 50, md: 60 },
                      color: theme.palette.primary.main,
                      filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))',
                    }}
                  />
                </Box>

                {/* Small accent circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '40%',
                    right: '8%',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: theme.palette.secondary.light,
                    opacity: 0.7,
                    zIndex: 1,
                    animation: 'floatSmall 5s ease-in-out infinite',
                    '@keyframes floatSmall': {
                      '0%': { transform: 'translate(0px, 0px)' },
                      '50%': { transform: 'translate(-5px, 5px)' },
                      '100%': { transform: 'translate(0px, 0px)' },
                    },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Box
          component={Paper}
          elevation={4}
          sx={{
            mt: { xs: 2, sm: 3, md: 4 }, // Further reduced top margin on mobile
            py: { xs: 1.5, sm: 2, md: 3 }, // Less padding on mobile
            px: { xs: 1.5, sm: 2, md: 4 }, // Less padding on mobile
            borderRadius: { xs: 2, md: 3 }, // Slightly smaller border radius on mobile
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: { xs: '3px', md: '4px' }, // Thinner top border on mobile
              background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.light})`,
            },
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: { xs: 'translateY(-3px)', md: 'translateY(-5px)' }, // Smaller hover movement on mobile
              boxShadow: theme.shadows[6],
            },
            // Add a mobile-optimized drop shadow
            boxShadow: {
              xs: '0px 3px 8px rgba(0, 0, 0, 0.12)',
              md: theme.shadows[4],
            },
          }}
        >
          <Grid container spacing={3} sx={{ pt: 1 }}>
            {stats.map((stat, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={index}
                sx={{
                  position: 'relative',
                  '&:not(:last-child)': {
                    '&::after': {
                      content: {
                        xs: 'none',
                        md: '""',
                      },
                      position: 'absolute',
                      top: '20%',
                      right: 0,
                      height: '60%',
                      width: '1px',
                      backgroundColor: 'divider',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    py: { xs: 1.5, md: 2 },
                    px: 2,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 54, sm: 58, md: 64 }, // Smaller avatar on mobile
                      height: { xs: 54, sm: 58, md: 64 }, // Smaller avatar on mobile
                      bgcolor: stat.color,
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.12)',
                      mb: { xs: 1, md: 1.5 }, // Less margin on mobile
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        transform: { xs: 'scale(1.05)', md: 'scale(1.08)' }, // Smaller scale on mobile
                        border: `2px solid ${stat.color}40`,
                      },
                    }}
                  >
                    <stat.icon sx={{ fontSize: { xs: 'medium', md: 'large' } }} />
                  </Avatar>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: { xs: '1.8rem', sm: '2.0rem', md: '2.5rem' }, // Smaller font on mobile
                      lineHeight: { xs: 1.1, md: 1.2 }, // Tighter line height on mobile
                      mb: 0.5,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-4px', // Slight adjustment for mobile
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: { xs: '24px', md: '30px' }, // Shorter underline on mobile
                        height: { xs: '2px', md: '3px' }, // Thinner underline on mobile
                        backgroundColor: stat.color,
                        borderRadius: '2px',
                      },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
