import { Box, Grid, Typography, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

interface FeaturedPartnerProps {
  partner: {
    name: string;
    description: string;
    impact: string;
    website: string;
    image: string;
  };
  onContactClick: () => void;
  animationVisible: boolean;
}

const FeaturedPartner = ({ partner, onContactClick, animationVisible }: FeaturedPartnerProps) => {
  return (
    <Box
      sx={{
        mb: 6,
        p: 4,
        borderRadius: 2,
        backgroundColor: 'primary.light',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 2,
        opacity: animationVisible ? 1 : 0,
        transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            color="primary.dark"
            fontWeight="bold"
          >
            Featured Partner
          </Typography>

          <Typography variant="h5" gutterBottom>
            {partner.name}
          </Typography>

          <Typography variant="body1" paragraph>
            {partner.description}
          </Typography>

          <Typography variant="body1" paragraph fontWeight="medium">
            <Box component="span" fontWeight="bold">
              Impact:{' '}
            </Box>
            {partner.impact}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<OpenInNewIcon />}
            >
              Visit Website
            </Button>
            <Button variant="outlined" onClick={onContactClick} startIcon={<ContactSupportIcon />}>
              Contact Partner
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={partner.image}
            alt={partner.name}
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: 300,
              objectFit: 'contain',
              borderRadius: 2,
              boxShadow: 1,
            }}
          />
        </Grid>
      </Grid>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: 40,
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'secondary.main',
          opacity: 0.1,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default FeaturedPartner;
