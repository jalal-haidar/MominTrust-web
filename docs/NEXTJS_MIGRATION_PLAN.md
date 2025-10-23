# 🚀 Next.js 14 Migration Plan - MominTrust PWA
## Comprehensive Guide to Convert Vite React App to Next.js 14 (Pages Router)

**Date:** October 22, 2025  
**Target:** Next.js 14.x with Pages Router  
**Current:** Vite 7.1.5 + React 18.2.0 + TypeScript

---

## 📊 Current Application Analysis

### **Tech Stack (Current)**
- **Build Tool:** Vite 7.1.5
- **Framework:** React 18.2.0
- **Language:** TypeScript
- **Routing:** React Router DOM 6.21.0
- **UI Library:** Material-UI (MUI) v5.15.0
- **State Management:** Recoil (via useRecoilState patterns)
- **PWA:** vite-plugin-pwa
- **Charts:** Chart.js + react-chartjs-2
- **Testing:** Vitest + Playwright
- **Styling:** Emotion (MUI's CSS-in-JS)

### **Application Structure**
```
src/
├── components/           # 48+ reusable components
├── pages/               # 6 page components (Welcome, Page1-4, NotFound)
├── routes/              # Route configuration & types
├── sections/            # Layout sections (Header, Sidebar, etc.)
├── theme/               # MUI theme configuration
├── store/               # Recoil state management
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
├── config/              # App configuration
└── error-handling/      # Error boundaries
```

### **Key Features**
- ✅ Progressive Web App (PWA)
- ✅ Dark/Light theme switching
- ✅ Responsive design (mobile-first)
- ✅ Code splitting & lazy loading
- ✅ Accessibility (a11y) features
- ✅ Hotkey support
- ✅ Service Worker
- ✅ TypeScript strict mode

---

## 🎯 Migration Strategy: Pages Router Approach

### **Why Pages Router?**
1. ✅ **Easier Migration** - Closer to React Router concepts
2. ✅ **Stable & Mature** - Battle-tested in production
3. ✅ **Less Refactoring** - Most components work as-is
4. ✅ **Clear Mental Model** - File = Route (simple)
5. ✅ **Gradual Adoption** - Can migrate to App Router later

---

## 📋 Phase 1: Project Setup (Day 1)

### **Step 1.1: Create Next.js Project Structure**

**Option A: Separate Directory (Recommended for Safety)**
```bash
# Create new Next.js app in parallel
cd "d:\Genesis Engineering\GENESIS\playground"
npx create-next-app@14 MominTrust-nextjs --typescript --tailwind=false --eslint --app=false --src-dir --import-alias="@/*"
```

**Option B: In-Place Conversion (Riskier)**
```bash
# Backup current project first!
git commit -am "Backup before Next.js migration"
git checkout -b feature/nextjs-migration
```

### **Step 1.2: Install Dependencies**

```bash
npm install next@14 react@18 react-dom@18

# MUI dependencies (already compatible)
# Keep: @mui/material, @mui/icons-material, @emotion/react, @emotion/styled

# Next.js specific
npm install next-pwa
npm install @next/bundle-analyzer

# Remove Vite-specific packages
npm uninstall vite @vitejs/plugin-react vite-plugin-pwa
npm uninstall react-router-dom # Next.js has built-in routing

# Update dev dependencies
npm install -D @types/node
```

### **Step 1.3: Update package.json Scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "analyze": "ANALYZE=true next build",
    "type-check": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

---

## 📋 Phase 2: Core Configuration (Day 1-2)

### **Step 2.1: Create next.config.mjs**

```javascript
/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // MUI emotion setup
  compiler: {
    emotion: true,
  },
  
  // Image optimization
  images: {
    domains: ['localhost'],
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Custom webpack config if needed
    return config;
  },
};

const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default pwaConfig(nextConfig);
```

### **Step 2.2: Create tsconfig.json (Update)**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### **Step 2.3: Create pages/_app.tsx (Main App Wrapper)**

```tsx
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import ThemeProvider from '@/theme/Provider';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import Notifications from '@/sections/Notifications';
import HotKeys from '@/sections/HotKeys';
import SW from '@/sections/SW';
import createEmotionCache from '@/utils/createEmotionCache';

// Client-side cache, shared for the whole session
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <Fragment>
          <CssBaseline />
          <Notifications />
          <HotKeys />
          <SW />
          <Header />
          <Sidebar />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default withErrorHandler(MyApp, AppErrorBoundaryFallback);
```

### **Step 2.4: Create pages/_document.tsx (HTML Structure)**

```tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@/utils/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#006D77" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          {/* @ts-ignore */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

### **Step 2.5: Create utils/createEmotionCache.ts**

```typescript
import createCache from '@emotion/cache';

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
```

---

## 📋 Phase 3: Routing Migration (Day 2-3)

### **Current Routes (React Router)**
```
/ → Welcome
/page-1 → Page1
/page-2 → Page2
/page-3 → Page3
/page-4 → Page4
* → NotFound
```

### **Next.js Pages Structure**
```
pages/
├── _app.tsx           # App wrapper (global layout)
├── _document.tsx      # HTML document structure
├── index.tsx          # / (Welcome page)
├── page-1.tsx         # /page-1
├── page-2.tsx         # /page-2
├── page-3.tsx         # /page-3
├── page-4.tsx         # /page-4
└── 404.tsx            # 404 Not Found
```

### **Step 3.1: Convert Welcome Page**

**Create: pages/index.tsx**
```tsx
import Welcome from '@/pages/Welcome/Welcome';

export default function HomePage() {
  return <Welcome />;
}
```

### **Step 3.2: Convert Other Pages**

**Create: pages/page-1.tsx**
```tsx
import Page1 from '@/pages/Page1/Page1';

export default Page1;
```

Repeat for page-2, page-3, page-4...

### **Step 3.3: Create 404 Page**

**Create: pages/404.tsx**
```tsx
import NotFound from '@/pages/NotFound/NotFound';

export default NotFound;
```

### **Step 3.4: Remove React Router Dependencies**

**Files to Update:**
- ❌ Remove: `src/routes/Pages/Pages.tsx`
- ❌ Remove: `src/routes/Pages/utils.ts`
- ✅ Keep: `src/routes/types.ts` (for metadata)
- ✅ Update: `src/routes/index.ts` (remove asyncComponentLoader)

---

## 📋 Phase 4: Component Updates (Day 3-4)

### **Step 4.1: Update Navigation Components**

**Header.tsx Changes:**
```tsx
// Before (React Router)
import { Link } from 'react-router-dom';
<Link to="/page-1">Page 1</Link>

// After (Next.js)
import Link from 'next/link';
<Link href="/page-1">Page 1</Link>
```

**Sidebar.tsx Changes:**
```tsx
// Before
import { Link, useLocation } from 'react-router-dom';
const location = useLocation();
const isActive = location.pathname === '/page-1';

// After
import Link from 'next/link';
import { useRouter } from 'next/router';
const router = useRouter();
const isActive = router.pathname === '/page-1';
```

### **Step 4.2: Mark Client Components**

Most interactive components need `'use client'` directive (though not required in Pages Router, good practice):

```tsx
'use client'; // Add at top of file

import { useState } from 'react';
// ... rest of component
```

**Components Needing Client Directive:**
- ProfileMenu (uses useState, onClick handlers)
- DonationStreakTracker (interactive)
- Theme switcher components
- Form components
- Chart components (Chart.js)

### **Step 4.3: Update Dynamic Imports**

**Before (Vite):**
```tsx
const asyncComponentLoader = (lazyComponent: () => Promise<any>) => {
  return lazy(lazyComponent);
};
```

**After (Next.js):**
```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('@/components/MyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR if component uses window/document
});
```

---

## 📋 Phase 5: Static Assets & PWA (Day 4)

### **Step 5.1: Move Public Assets**

```
# Current: public/
# Next.js: public/

public/
├── manifest.json       # PWA manifest
├── favicon.ico
├── robots.txt
├── assets/
│   ├── hero.json
│   └── hero-placeholder.json
└── sw.js              # Service worker (auto-generated by next-pwa)
```

### **Step 5.2: Update manifest.json**

```json
{
  "name": "Momin Trust",
  "short_name": "MominTrust",
  "description": "Educational support for underprivileged children",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#006D77",
  "theme_color": "#006D77",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### **Step 5.3: Update Image Imports**

**Before (Vite):**
```tsx
import logo from '@/assets/logo.png';
<img src={logo} alt="Logo" />
```

**After (Next.js):**
```tsx
import Image from 'next/image';
<Image src="/assets/logo.png" alt="Logo" width={200} height={100} />
```

---

## 📋 Phase 6: State Management (Day 5)

### **Recoil Compatibility**

Recoil works with Next.js but needs client-side initialization:

**Update: pages/_app.tsx**
```tsx
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* ... rest of app */}
    </RecoilRoot>
  );
}
```

**Note:** Recoil state won't persist across SSR. Consider:
- Keep state management for client-side only features
- Or migrate to Zustand/Jotai (better Next.js integration)

---

## 📋 Phase 7: Environment & Config (Day 5)

### **Step 7.1: Environment Variables**

**Create: .env.local**
```bash
NEXT_PUBLIC_API_URL=https://api.momintrust.org
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXXXX-X
```

**Access in Code:**
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### **Step 7.2: Update Config Files**

**Move: src/config/index.ts → src/config/index.ts (no changes needed)**

Config utilities should work as-is in Next.js.

---

## 📋 Phase 8: Testing Setup (Day 6)

### **Step 8.1: Update Vitest Config**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### **Step 8.2: Update Playwright for Next.js**

```typescript
// playwright.config.ts
export default defineConfig({
  webServer: {
    command: 'npm run dev',
    port: 3000, // Next.js default
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000',
  },
});
```

---

## 📋 Phase 9: Build & Deployment (Day 7)

### **Step 9.1: Build Configuration**

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Analyze bundle
npm run analyze
```

### **Step 9.2: Output Structure**

```
.next/
├── static/
│   ├── chunks/        # JavaScript bundles
│   ├── css/           # CSS files
│   └── media/         # Images, fonts
└── server/
    └── pages/         # Server-rendered pages
```

### **Step 9.3: Deployment Options**

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Static Export (for other hosting):**
```javascript
// next.config.mjs
export default {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

```bash
npm run build
# Output: out/
```

---

## 🚨 Breaking Changes & Gotchas

### **1. Router Hooks**
```tsx
// ❌ React Router
import { useNavigate, useLocation, useParams } from 'react-router-dom';

// ✅ Next.js
import { useRouter } from 'next/router';
const router = useRouter();
router.push('/page-1');       // navigate
router.pathname;              // current path
router.query;                 // query params
```

### **2. Link Component**
```tsx
// ❌ React Router
<Link to="/about">About</Link>

// ✅ Next.js
<Link href="/about">About</Link>
```

### **3. Window/Document Access**
```tsx
// ❌ Direct access causes SSR errors
const width = window.innerWidth;

// ✅ Use useEffect or disable SSR
useEffect(() => {
  const width = window.innerWidth;
}, []);

// Or disable SSR for component
const NoSSR = dynamic(() => import('@/components/ClientOnly'), { ssr: false });
```

### **4. Environment Variables**
```tsx
// ❌ Vite
import.meta.env.VITE_API_KEY

// ✅ Next.js
process.env.NEXT_PUBLIC_API_KEY
```

---

## 📊 Migration Checklist

### **Setup Phase**
- [ ] Create Next.js project structure
- [ ] Install dependencies
- [ ] Update package.json scripts
- [ ] Create next.config.mjs
- [ ] Update tsconfig.json
- [ ] Create _app.tsx
- [ ] Create _document.tsx
- [ ] Setup Emotion cache

### **Routing Phase**
- [ ] Convert all page routes (6 pages)
- [ ] Create 404 page
- [ ] Update Header navigation
- [ ] Update Sidebar navigation
- [ ] Remove React Router dependencies
- [ ] Test all route transitions

### **Components Phase**
- [ ] Update all Link imports (Header, Sidebar, etc.)
- [ ] Update useRouter usage
- [ ] Mark client components
- [ ] Update dynamic imports
- [ ] Test component interactivity

### **Assets & PWA**
- [ ] Move public assets
- [ ] Update manifest.json
- [ ] Configure next-pwa
- [ ] Test PWA installation
- [ ] Update image imports

### **Configuration**
- [ ] Setup environment variables
- [ ] Update config files
- [ ] Configure MUI theme
- [ ] Setup Recoil (if keeping)

### **Testing**
- [ ] Update Vitest config
- [ ] Update Playwright config
- [ ] Run unit tests
- [ ] Run E2E tests
- [ ] Test PWA features

### **Build & Deploy**
- [ ] Test development build
- [ ] Test production build
- [ ] Test bundle size
- [ ] Deploy to Vercel/other
- [ ] Test deployed version

---

## 🎯 Estimated Timeline

| Phase | Task | Duration | Risk |
|-------|------|----------|------|
| 1 | Project Setup | 2-3 hours | 🟢 Low |
| 2 | Core Config | 3-4 hours | 🟡 Medium |
| 3 | Routing | 4-6 hours | 🟡 Medium |
| 4 | Components | 6-8 hours | 🟠 High |
| 5 | Assets/PWA | 2-3 hours | 🟢 Low |
| 6 | State Mgmt | 2-4 hours | 🟡 Medium |
| 7 | Config/Env | 1-2 hours | 🟢 Low |
| 8 | Testing | 3-4 hours | 🟡 Medium |
| 9 | Build/Deploy | 2-3 hours | 🟢 Low |
| **Total** | **Full Migration** | **25-37 hours** | **~3-5 days** |

---

## 💡 Recommendations

### **Do This:**
1. ✅ **Create separate Next.js project first** - Safer, allows comparison
2. ✅ **Migrate page by page** - Test each route before moving on
3. ✅ **Keep component structure** - No need to refactor working components
4. ✅ **Use TypeScript strict mode** - Catch errors early
5. ✅ **Test PWA features thoroughly** - Different plugin, needs validation

### **Avoid This:**
1. ❌ **Don't refactor everything at once** - Migrate first, optimize later
2. ❌ **Don't change state management yet** - Keep Recoil, migrate later if needed
3. ❌ **Don't optimize prematurely** - Get it working first
4. ❌ **Don't skip testing** - Especially routing and navigation

---

## 🔄 Rollback Plan

If migration fails or issues arise:

1. **Separate Project Approach:**
   - Keep Vite version running
   - Continue development on Next.js separately
   - Switch when ready

2. **In-Place Approach:**
   ```bash
   git checkout main
   git branch -D feature/nextjs-migration
   ```

---

## 📚 Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [MUI Next.js Integration](https://mui.com/material-ui/guides/next-js/)
- [next-pwa Documentation](https://github.com/shadowwalker/next-pwa)
- [React Router to Next.js Migration](https://nextjs.org/docs/app/building-your-application/upgrading/from-react-router)

---

## ❓ Decision Point

**Which approach do you prefer?**

### **Option D: Separate Next.js Version (Recommended)**
**Pros:**
- ✅ Safe - keeps current app running
- ✅ Can compare both versions
- ✅ Easy rollback
- ✅ Learn Next.js without pressure

**Cons:**
- ⚠️ Duplicate code temporarily
- ⚠️ Need to maintain both
- ⚠️ More disk space

### **Option B: In-Place Conversion**
**Pros:**
- ✅ Clean transition
- ✅ No duplicate code
- ✅ Force commit to Next.js

**Cons:**
- ⚠️ Higher risk
- ⚠️ Harder to rollback
- ⚠️ Could break current dev flow

---

**Ready to proceed?** Let me know which option you prefer and I can start the migration immediately! 🚀
