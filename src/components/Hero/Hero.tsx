import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroLottie from './HeroLottie';

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        bgcolor: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography component="h1" variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          Momin Trust — Empowering Talented Children
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 720, mx: 'auto' }}
        >
          We identify brilliant students from underprivileged backgrounds and provide the financial
          support they need to pursue their education.
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/donate"
            aria-label="Donate to Momin Trust"
            sx={{ px: 4, py: 1.5, boxShadow: 3 }}
          >
            Donate
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/apply"
            aria-label="Apply for support"
            sx={{ px: 3, py: 1.5 }}
          >
            Apply for Support
          </Button>
        </Box>

        <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
          {/*
            Using the helping-hands Lottie hosted locally for CI/dev.
            The large JSON lives at public/assets/hero.json and is served
            at /assets/hero.json at runtime.
          */}
          <HeroLottie
            path="/assets/hero-placeholder.json"
            style={{ width: '100%', maxWidth: 560, minHeight: 280 }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
