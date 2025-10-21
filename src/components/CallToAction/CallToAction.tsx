import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

type CallToActionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  bgColor?: string;
};

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink = '/donate',
  bgColor,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        px: { xs: 2, md: 4 },
        backgroundColor: bgColor || theme.palette.primary.main,
        color: '#fff',
        borderRadius: 2,
        mb: 6,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography
        variant="h6"
        paragraph
        sx={{ maxWidth: '800px', mx: 'auto', mb: 4, fontWeight: 400 }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        size="large"
        href={buttonLink}
        sx={{
          px: 4,
          py: 1.5,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.primary.main,
          fontWeight: 700,
          '&:hover': {
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default CallToAction;
