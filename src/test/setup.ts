// Vitest setup file - register jest-dom matchers with Vitest's expect
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect with jest-dom matchers
expect.extend(matchers as any);

export {};
