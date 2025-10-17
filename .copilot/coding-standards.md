# Coding Standards for MominTrust PWA

## TypeScript Guidelines

- Use strict TypeScript settings
- Define proper interfaces for all props and state
- Avoid `any` type - use proper typing
- Use type imports: `import type { ComponentProps } from 'react'`

## React Component Patterns

### Functional Components

```typescript
import type { FC } from 'react';

interface ComponentProps {
  title: string;
  isVisible?: boolean;
}

export const Component: FC<ComponentProps> = ({ title, isVisible = true }) => {
  // Component logic
};
```

### Custom Hooks

- Prefix with `use`
- Return object for multiple values: `{ data, loading, error }`
- Use proper TypeScript return types

### Error Boundaries

- Wrap route components in error boundaries
- Provide fallback UI components
- Use React Error Boundary library patterns

## MUI/Styling Patterns

### Use sx prop for styling

```typescript
<Box sx={{ display: 'flex', gap: 2, p: 3 }}>
```

### Styled components with Emotion

```typescript
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));
```

### Theme usage

- Access theme via `useTheme()` hook
- Use theme tokens for consistency
- Support multiple themes

## State Management with Recoil

### Atom Definition

```typescript
import { atom } from 'recoil';
import type { AtomType } from './types';

export const atomName = atom<AtomType>({
  key: 'uniqueAtomKey',
  default: initialValue,
});
```

### Selector Pattern

```typescript
import { selector } from 'recoil';

export const derivedState = selector({
  key: 'derivedStateKey',
  get: ({ get }) => {
    const baseState = get(atomName);
    return baseState.transformedValue;
  },
});
```

## File Organization

### Barrel Exports (index.ts)

```typescript
export { ComponentName } from './ComponentName';
export type { ComponentProps } from './types';
```

### Types File Structure

```typescript
// types.ts
export interface ComponentProps {
  // ... properties
}

export interface ComponentState {
  // ... state shape
}

export type ComponentVariant = 'primary' | 'secondary';
```

## Routing Patterns

### Route Definition

```typescript
import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorFallback />,
    children: [
      // ... child routes
    ],
  },
]);
```

## Testing Patterns

### Component Tests (Vitest)

- Test user interactions
- Test component rendering
- Mock external dependencies
- Use Testing Library best practices

### E2E Tests (Playwright)

- Test complete user workflows
- Test across different browsers
- Test PWA functionality

## Performance Guidelines

- Use React.memo for expensive components
- Implement proper loading states
- Lazy load routes and heavy components
- Optimize bundle size with proper imports

## Accessibility

- Use semantic HTML elements
- Provide proper ARIA labels
- Test with keyboard navigation
- Ensure proper color contrast
- Use MUI's accessibility features
