import { Box, SxProps, Theme } from '@mui/material';

const HeroIllustration = ({ sx }: { sx?: SxProps<Theme> }) => (
  <Box sx={sx} role="img" aria-label="Illustration of children learning">
    <svg
      width="320"
      height="200"
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="320" height="200" rx="12" fill="#E3F2FD" />
      <circle cx="80" cy="80" r="28" fill="#29B6F6" />
      <circle cx="140" cy="60" r="20" fill="#81D4FA" />
      <rect x="200" y="60" width="80" height="80" rx="8" fill="#B3E5FC" />
      <path d="M40 150c30-20 80-20 110 0" stroke="#0288D1" strokeWidth="6" strokeLinecap="round" />
    </svg>
  </Box>
);

export default HeroIllustration;
