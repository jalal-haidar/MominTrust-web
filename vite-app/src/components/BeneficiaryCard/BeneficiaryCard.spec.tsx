import { render, screen } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);

import BeneficiaryCard from './BeneficiaryCard';

describe('BeneficiaryCard', () => {
  it('renders initials and grade', () => {
    render(<BeneficiaryCard b={{ id: '1', initials: 'A.B', grade: 8 }} />);
    expect(screen.getByText(/Grade 8/i)).toBeInTheDocument();
    expect(screen.getByText(/Unknown region/i)).toBeInTheDocument();
  });
});
