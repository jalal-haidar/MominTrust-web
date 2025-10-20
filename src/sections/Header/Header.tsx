import React from 'react';
import ThemeIcon from '@mui/icons-material/InvertColors';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';

import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';

import { StyledAppBar, DonateButton, NavLink } from './styled';

function Header() {
  const [, sidebarActions] = useSidebar();
  const [theme, themeActions] = useTheme();

  // Detect scroll for elevation effect
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  // Navigation items for the organization
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Beneficiaries', path: '/beneficiaries' },
    { name: 'Our Impact', path: '/impact' },
    { name: 'Donors', path: '/donors' },
    { name: 'Apply', path: '/apply' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <StyledAppBar
        color={theme === 'light' ? 'primary' : 'transparent'}
        elevation={scrollTrigger ? 4 : 1}
        position="sticky"
        sx={{
          py: 0.5,
          borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.1)' : 'none',
          backdropFilter: 'blur(8px)',
          backgroundColor: theme === 'light' ? 'rgba(10, 108, 117, 0.95)' : 'rgba(26, 32, 39, 0.9)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 0.5 }}>
            {/* Logo & Organization Name - Mobile & Desktop */}
            <FlexBox sx={{ alignItems: 'center' }}>
              <IconButton
                onClick={sidebarActions.toggle}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open navigation menu"
                sx={{
                  mr: 1,
                }}
              >
                <MenuIcon />
              </IconButton>

              {/* Organization Logo/Title - with better styling */}
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  letterSpacing: '0.5px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: { xs: 1, sm: 1.5 },
                  py: 0.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {title}
              </Button>
            </FlexBox>

            {/* Desktop Navigation Links */}
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
            >
              {navItems.map((item) => (
                <NavLink key={item.name} component={RouterLink} to={item.path} color="inherit">
                  {item.name}
                </NavLink>
              ))}
            </Box>

            {/* Mobile menu removed - using sidebar navigation instead */}

            {/* Right-side Actions */}
            <FlexBox>
              {/* Donate Button */}
              <DonateButton
                component={RouterLink}
                to="/donors"
                variant="contained"
                color="secondary"
                startIcon={<FavoriteIcon />}
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  mr: 2,
                }}
              >
                Donate Now
              </DonateButton>

              {/* Theme Toggle */}
              <Tooltip title="Switch theme" arrow>
                <IconButton
                  color="inherit"
                  edge="end"
                  size="large"
                  onClick={themeActions.toggle}
                  data-pw="theme-toggle"
                  sx={{
                    ml: { xs: 0, sm: 1 },
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'rotate(12deg)' },
                  }}
                >
                  <ThemeIcon />
                </IconButton>
              </Tooltip>

              {/* Removed redundant mobile menu toggle */}
            </FlexBox>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
}

export default Header;
