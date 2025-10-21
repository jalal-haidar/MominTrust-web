import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { Themes } from './types';

// Momin Trust Color Palette
const mominColors = {
  // Primary colors
  teal: {
    main: '#006D77',
    light: '#83C5BE',
    dark: '#004E57',
    contrastText: '#FFFFFF',
  },
  // Secondary colors
  coral: {
    main: '#E29578',
    light: '#FFDDD2',
    dark: '#D26F51',
    contrastText: '#FFFFFF',
  },
  // Neutral colors
  sand: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EDF6F9',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

// Shared theme configuration
const sharedTheme = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 20px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'transform 0.2s ease',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        vertical: {
          marginRight: 10,
          marginLeft: 10,
        },
        middle: {
          marginTop: 10,
          marginBottom: 10,
          width: '80%',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
} as ThemeOptions;

// Theme configurations
const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      primary: mominColors.teal,
      secondary: mominColors.coral,
      background: {
        default: mominColors.sand[100],
        paper: '#FFFFFF',
      },
      text: {
        primary: mominColors.sand[900],
        secondary: mominColors.sand[700],
      },
      info: {
        main: mominColors.teal.main,
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      primary: {
        ...mominColors.teal,
        main: mominColors.teal.light,
      },
      secondary: {
        ...mominColors.coral,
        main: mominColors.coral.light,
      },
      background: {
        default: '#121212',
        paper: '#1E1E1E',
      },
      text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
      info: {
        main: mominColors.teal.light,
      },
    },
  }),
};

export default themes;
