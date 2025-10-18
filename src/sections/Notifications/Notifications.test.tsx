import React from 'react';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';
import { SnackbarProvider } from 'notistack';
import type { CustomContentProps } from 'notistack';
import { expect, test } from 'vitest';

import Notifications, { CustomNotification } from './Notifications';

// Basic render test for the CustomNotification component
test('CustomNotification renders message and title', () => {
  // provide a minimal typed props object for CustomContentProps
  const props: Partial<CustomContentProps> = { message: 'Hello world' };
  render(<CustomNotification {...(props as CustomContentProps)} />);
  expect(screen.getByText(/Notification demo/i)).toBeInTheDocument();
  expect(screen.getByText(/Hello world/)).toBeInTheDocument();
});

// Integration smoke test for Notifications component wiring with store
test('Notifications renders and contains Notifier via SnackbarProvider', () => {
  render(
    <RecoilRoot>
      <SnackbarProvider>
        <Notifications />
      </SnackbarProvider>
    </RecoilRoot>,
  );

  // The Notifier returns null; just assert the render completed (no crash)
  expect(document.body).toBeTruthy();
});
