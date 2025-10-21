import React, { useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  VolunteerActivism as DonateIcon,
  BarChart as AnalyticsIcon,
  ContactMail as ContactIcon,
  Info as InfoIcon,
  Assignment as ApplyIcon,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const MobileNavigation = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [speedDialOpen, setSpeedDialOpen] = useState(false);

  // Main navigation items for bottom navigation
  const mainNavItems = [
    { label: 'Home', value: '/', icon: <HomeIcon /> },
    { label: 'Beneficiaries', value: '/beneficiaries', icon: <PeopleIcon /> },
    { label: 'Impact', value: '/impact', icon: <AnalyticsIcon /> },
    { label: 'Donors', value: '/donors', icon: <DonateIcon /> },
  ];

  // Secondary actions for speed dial
  const speedDialActions = [
    { icon: <ApplyIcon />, name: 'Apply', path: '/apply' },
    { icon: <ContactIcon />, name: 'Contact', path: '/contact' },
    { icon: <InfoIcon />, name: 'About', path: '/about' },
  ];

  const handleNavChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  const handleSpeedDialAction = (path: string) => {
    navigate(path);
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
          value={location.pathname}
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
      <style>
        {`
          @media (max-width: ${theme.breakpoints.values.md}px) {
            body {
              padding-bottom: 85px;
            }
          }
        `}
      </style>
    </>
  );
};

export default MobileNavigation;