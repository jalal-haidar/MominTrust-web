import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
import ImpactMetrics from './ImpactMetrics';

describe('ImpactMetrics', () => {
  it('renders metric headings', () => {
    render(<ImpactMetrics />);
    expect(screen.getByText(/Our Impact/i)).toBeInTheDocument();
  });
});
