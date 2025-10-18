import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';

import Notifications, { CustomNotification } from './Notifications';

// Basic render test for the CustomNotification component
test('CustomNotification renders message and title', () => {
  // cast to any to avoid strict notistack CustomContentProps requirements in the test
  render(<CustomNotification {...({ message: 'Hello world' } as any)} />);
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
