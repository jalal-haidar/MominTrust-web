import { Link, useLocation } from 'react-router-dom';

import DefaultIcon from '@mui/icons-material/Deblur';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import routes from '@/routes';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const location = useLocation();
  const theme = useTheme();

  // Group routes by category
  const mainRoutes = Object.values(routes).filter(
    (route) =>
      route.title &&
      ['/beneficiaries', '/donors', '/impact', '/partners', '/apply', '/about'].includes(
        route.path as string,
      ),
  );

  const homeRoute = Object.values(routes).find((route) => route.path === '/');

  return (
    <SwipeableDrawer
      anchor="left"
      open={isSidebarOpen}
      onClose={sidebarActions.close}
      onOpen={sidebarActions.open}
      disableBackdropTransition={false}
      swipeAreaWidth={30}
      data-pw="sidebar"
      PaperProps={{
        sx: {
          boxShadow: '4px 0 10px rgba(0,0,0,0.05)',
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <Box
        sx={{
          width: 280,
          pt: (theme) => `${theme.mixins.toolbar.minHeight}px`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Logo/Title Section */}
        <Box
          sx={{
            p: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="primary">
            MOMIN TRUST
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Home Route */}
        {homeRoute && (
          <List disablePadding sx={{ px: 2 }}>
            <ListItem disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                to={homeRoute.path as string}
                onClick={sidebarActions.close}
                selected={location.pathname === homeRoute.path}
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    location.pathname === homeRoute.path
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === homeRoute.path ? 'primary.main' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {homeRoute.icon ? <homeRoute.icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={homeRoute.title}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === homeRoute.path ? 700 : 400,
                    color: location.pathname === homeRoute.path ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        )}

        <Divider sx={{ my: 1 }} />

        {/* Main Navigation Links */}
        <Typography variant="overline" color="text.secondary" sx={{ px: 3, mb: 1 }}>
          Main Navigation
        </Typography>

        <List sx={{ px: 2, flex: 1 }}>
          {mainRoutes.map(({ path, title, icon: Icon }) => (
            <ListItem disablePadding sx={{ mb: 1 }} key={path}>
              <ListItemButton
                component={Link}
                to={path as string}
                onClick={sidebarActions.close}
                selected={location.pathname === path}
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    location.pathname === path
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: location.pathname === path ? 'primary.main' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {Icon ? <Icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === path ? 600 : 400,
                    color: location.pathname === path ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        {/* Version info at bottom */}
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Momin Trust v1.0.0
          </Typography>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}

export default Sidebar;
