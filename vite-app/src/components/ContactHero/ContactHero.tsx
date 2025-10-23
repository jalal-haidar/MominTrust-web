import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { PageTitle } from '@/components/styled';

type ContactHeroProps = {
  title?: string;
  subtitle?: string;
};

const ContactHero: React.FC<ContactHeroProps> = ({
  title = 'Contact Us',
  subtitle = "We'd love to hear from you. Reach out to discuss educational support, donations, or collaboration opportunities.",
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 5, textAlign: 'center' }}>
      <Box
        sx={{
          py: 4,
          px: 2,
          background:
            theme.palette.mode === 'light'
              ? `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
              : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
          color: 'white',
          borderRadius: 2,
          boxShadow: 2,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <PageTitle id="contact-hero-title" variant="h3">
            {title}
          </PageTitle>
          <Typography variant="h6" component="p" sx={{ mt: 2, maxWidth: 800, mx: 'auto' }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHero;
