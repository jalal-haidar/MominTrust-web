import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
import Hero from './Hero';
import { MemoryRouter } from 'react-router-dom';

describe('Hero', () => {
  it('renders title and CTAs', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /donate/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /apply for support/i })).toBeInTheDocument();
  });
});
