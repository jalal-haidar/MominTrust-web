import { Box, Typography, Grid } from '@mui/material';

type ButtonConfig = {
  text: string;
  link: string;
  primary?: boolean;
  onClick?: () => void;
};

type MultiButtonCTAProps = {
  title: string;
  description: string;
  buttons: ButtonConfig[];
  bgColor?: string;
};

const MultiButtonCTA = ({
  title,
  description,
  buttons,
  bgColor = 'primary.light',
}: MultiButtonCTAProps) => {
  return (
    <Box
      sx={{
        mt: 8,
        mb: 4,
        py: 6,
        px: 3,
        bgcolor: bgColor,
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Typography component="h2" variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
        {description}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {buttons.map((button) => (
          <Grid item key={`${button.text}-${button.link}`}>
            <Typography
              component="a"
              href={button.onClick ? '#' : button.link}
              onClick={button.onClick}
              variant="button"
              sx={{
                display: 'inline-block',
                py: 1.5,
                px: 4,
                bgcolor: button.primary ? 'primary.main' : 'background.paper',
                color: button.primary ? 'primary.contrastText' : 'primary.main',
                borderRadius: 1,
                fontWeight: 'bold',
                textDecoration: 'none',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: button.primary ? 'primary.dark' : 'background.default',
                },
              }}
            >
              {button.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MultiButtonCTA;
