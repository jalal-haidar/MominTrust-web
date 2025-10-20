import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

// Styled AppBar with subtle elevation and transition effects
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  transition: 'all 0.3s ease-in-out',
  borderBottom: theme.palette.mode === 'dark' ? '1px solid rgba(255,255,255,0.1)' : 'none',
}));

// Styled Button specifically for the "Donate" action
const DonateButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: theme.spacing(0.8, 2),
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: theme.shadows[2],
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
}));

// Styled navigation links with underline effect
const NavLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 0.5),
  padding: theme.spacing(1, 1.5),
  fontWeight: 500,
  position: 'relative',
  textTransform: 'none',
  borderRadius: '4px',
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.common.white,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    '&::after': {
      width: '70%',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '8px',
    left: '15%',
    width: '0',
    height: '2px',
    backgroundColor: 'currentColor',
    transition: 'width 0.2s ease-in-out',
  },
}));

export { StyledAppBar, DonateButton, NavLink };
