// Vitest setup file - register jest-dom matchers with Vitest's expect
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// extend Vitest's expect with jest-dom matchers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
expect.extend(matchers as any);

export {};
