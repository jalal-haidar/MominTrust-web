import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Hero = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  padding: theme.spacing(2),
  maxWidth: 960,
}));

const Section = styled(Box)(() => ({
  width: '100%',
  maxWidth: 960,
  padding: '12px 8px',
}));

export { Hero, Section };
