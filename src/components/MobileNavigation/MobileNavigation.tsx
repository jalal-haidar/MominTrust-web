import React, { useState } from 'react';
import { useRouter } from 'next/router';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

const MobileNavigation = () => {
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  // Main navigation items for bottom navigation (MVP pages only)
  const mainNavItems = [
    { label: 'Home', value: '/', icon: <HomeIcon /> },
    { label: 'About', value: '/about', icon: <InfoIcon /> },
    { label: 'Contact', value: '/contact', icon: <ContactMailIcon /> },
  ];

  // Secondary actions for speed dial
  const speedDialActions = [{ icon: <VolunteerActivismIcon />, name: 'Donate', path: '/donate' }];

  const handleNavChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  const handleSpeedDialAction = (path: string) => {
    router.push(path);
    setSpeedDialOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
        elevation={8}
      >
        <BottomNavigation
          value={router.pathname}
          onChange={handleNavChange}
          sx={{
            height: 70,
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '6px 12px 8px',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.75rem',
              '&.Mui-selected': {
                fontSize: '0.75rem',
              },
            },
          }}
        >
          {mainNavItems.map((item) => (
            <BottomNavigationAction
              key={item.value}
              label={item.label}
              value={item.value}
              icon={item.icon}
              sx={{
                color: theme.palette.text.secondary,
                '&.Mui-selected': {
                  color: theme.palette.primary.main,
                },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>

      {/* Speed Dial for additional actions */}
      <SpeedDial
        ariaLabel="More actions"
        sx={{
          position: 'fixed',
          bottom: 85,
          right: 16,
          zIndex: theme.zIndex.speedDial,
          '& .MuiFab-primary': {
            backgroundColor: theme.palette.secondary.main,
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark,
            },
          },
        }}
        icon={<SpeedDialIcon />}
        onClose={() => setSpeedDialOpen(false)}
        onOpen={() => setSpeedDialOpen(true)}
        open={speedDialOpen}
        direction="up"
      >
        {speedDialActions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleSpeedDialAction(action.path)}
            sx={{
              '& .MuiSpeedDialAction-fab': {
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              },
            }}
          />
        ))}
      </SpeedDial>

      {/* Add bottom padding to main content to account for fixed navigation */}
      <style jsx global>{`
        @media (max-width: ${theme.breakpoints.values.md}px) {
          body {
            padding-bottom: 85px;
          }
        }
      `}</style>
    </>
  );
};

export default MobileNavigation;
