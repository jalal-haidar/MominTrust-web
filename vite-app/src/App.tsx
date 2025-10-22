import { Fragment } from 'react';
// Enable a11y checks in development
if (import.meta.env.DEV) {
  // Dynamically import axe & react in the browser environment and use top-level await.
  // Top-level await avoids then/catch promise chains and satisfies lint rules.
  (async () => {
    try {
      const [axeModule, ReactModule] = await Promise.all([
        import('@axe-core/react'),
        import('react'),
      ]);
      const axeCandidate: unknown = axeModule;
      const reactCandidate: unknown = ReactModule;

      // Helper: if a module has a `default` export, prefer it; otherwise use module itself.
      const resolveDefault = (mod: unknown): unknown => {
        if (mod && typeof mod === 'object' && 'default' in (mod as Record<string, unknown>)) {
          return (mod as Record<string, unknown>)['default'];
        }
        return mod;
      };

      const axeFuncUnknown = resolveDefault(axeCandidate);
      const reactImplUnknown = resolveDefault(reactCandidate);

      // axe initializer has the runtime shape (React, options) => void
      if (typeof axeFuncUnknown === 'function') {
        const axeInitializer = axeFuncUnknown as (...args: unknown[]) => unknown;
        try {
          axeInitializer(reactImplUnknown, { rules: [{ id: 'color-contrast', enabled: true }] });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn('Axe failed to initialize', e);
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load axe for accessibility checks', err);
    }
  })();
}
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Header from '@/sections/Header';
import HotKeys from '@/sections/HotKeys';
import Notifications from '@/sections/Notifications';
import Sw from '@/sections/SW';
import Sidebar from '@/sections/Sidebar';
import MobileNavigation from '@/components/MobileNavigation';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <HotKeys />
      <Sw />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
        <MobileNavigation />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
