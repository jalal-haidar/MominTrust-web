import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import createEmotionCache from '@/utils/createEmotionCache';
import CustomThemeProvider from '@/theme/Provider';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import MobileNavigation from '@/components/MobileNavigation';
import Notifications from '@/sections/Notifications';
import HotKeys from '@/sections/HotKeys';
import ServiceWorker from '@/sections/SW';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import { getPageHeight } from '@/utils/page-height';

// Client-side cache, shared for the whole session
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  readonly emotionCache?: EmotionCache;
}

function MyApp(props: Readonly<MyAppProps>) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Momin Trust</title>
      </Head>
      <RecoilRoot>
        <CustomThemeProvider>
          <HelmetProvider>
            <Fragment>
              <CssBaseline />
              <Notifications>
                <HotKeys />
                <ServiceWorker />
                <Header />
                <Sidebar />
                <MobileNavigation />
                <Box sx={{ height: (theme) => getPageHeight(theme) }}>
                  <Component {...pageProps} />
                </Box>
              </Notifications>
            </Fragment>
          </HelmetProvider>
        </CustomThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}

export default withErrorHandler(MyApp, AppErrorBoundaryFallback);
