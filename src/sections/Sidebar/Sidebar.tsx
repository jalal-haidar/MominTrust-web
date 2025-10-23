import Link from 'next/link';
import { useRouter } from 'next/router';

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
import Tooltip from '@mui/material/Tooltip';
import { alpha, useTheme } from '@mui/material/styles';

import routes, { additionalNavItems } from '@/routes';
import useSidebar from '@/store/sidebar';

function Sidebar() {
  const [isSidebarOpen, sidebarActions] = useSidebar();
  const router = useRouter();
  const theme = useTheme();

  // Group routes
  const homeRoute = Object.values(routes).find((route) => route.path === '/');
  const mainRoutes = Object.values(routes).filter(
    (route) =>
      route.title &&
      route.path !== '/' &&
      route.path !== '/404' &&
      route.path !== '/about' &&
      route.path !== '/contact',
  );
  const implementedRoutes = Object.values(routes).filter(
    (route) => route.title && (route.path === '/about' || route.path === '/contact'),
  );

  const allMainNavItems = [...implementedRoutes, ...mainRoutes];

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
                href={homeRoute.path as string}
                onClick={sidebarActions.close}
                selected={router.pathname === homeRoute.path}
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    router.pathname === homeRoute.path
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: router.pathname === homeRoute.path ? 'primary.main' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {homeRoute.icon ? <homeRoute.icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={homeRoute.title}
                  primaryTypographyProps={{
                    fontWeight: router.pathname === homeRoute.path ? 700 : 400,
                    color: router.pathname === homeRoute.path ? 'primary.main' : 'text.primary',
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
          {allMainNavItems.map(({ path, title, icon: Icon, disabled }) => {
            const button = (
              <ListItemButton
                component={disabled ? 'div' : Link}
                href={disabled ? undefined : (path as string)}
                onClick={disabled ? undefined : sidebarActions.close}
                selected={!disabled && router.pathname === path}
                disabled={disabled}
                sx={{
                  borderRadius: 2,
                  backgroundColor:
                    !disabled && router.pathname === path
                      ? alpha(theme.palette.primary.main, 0.1)
                      : 'transparent',
                  opacity: disabled ? 0.5 : 1,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  '&:hover': {
                    backgroundColor: disabled
                      ? 'transparent'
                      : alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      !disabled && router.pathname === path ? 'primary.main' : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {Icon ? <Icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    fontWeight: !disabled && router.pathname === path ? 600 : 400,
                    color: !disabled && router.pathname === path ? 'primary.main' : 'text.primary',
                  }}
                />
              </ListItemButton>
            );

            return (
              <ListItem disablePadding sx={{ mb: 1 }} key={path}>
                {disabled ? (
                  <Tooltip title="Coming Soon" placement="right" arrow>
                    {button}
                  </Tooltip>
                ) : (
                  button
                )}
              </ListItem>
            );
          })}
          {additionalNavItems.map(({ path, title, icon: Icon, disabled }) => {
            const button = (
              <ListItemButton
                disabled={disabled}
                sx={{
                  borderRadius: 2,
                  opacity: disabled ? 0.5 : 1,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  '&:hover': {
                    backgroundColor: disabled
                      ? 'transparent'
                      : alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {Icon ? <Icon /> : <DefaultIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    fontWeight: 400,
                    color: 'text.primary',
                  }}
                />
              </ListItemButton>
            );

            return (
              <ListItem disablePadding sx={{ mb: 1 }} key={title}>
                {disabled ? (
                  <Tooltip title="Coming Soon" placement="right" arrow>
                    {button}
                  </Tooltip>
                ) : (
                  button
                )}
              </ListItem>
            );
          })}
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
