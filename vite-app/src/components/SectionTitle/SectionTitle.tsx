import { Box, Typography, useTheme } from '@mui/material';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: centered ? 'center' : 'left',
        mb: 6,
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        align={centered ? 'center' : 'left'}
        sx={{
          fontWeight: 800,
          position: 'relative',
          display: 'inline-block',
          mb: 1,
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: centered ? '25%' : 0,
            width: centered ? '50%' : '70px',
            height: 3,
            background: centered
              ? `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`
              : theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="h6"
          color="text.secondary"
          align={centered ? 'center' : 'left'}
          sx={{
            mt: 3,
            mb: centered ? 5 : 3,
            maxWidth: centered ? 700 : '100%',
            mx: centered ? 'auto' : 0,
            px: centered ? 2 : 0,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
