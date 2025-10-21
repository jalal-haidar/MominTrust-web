import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import axeCore from 'axe-core';

import Landing from '@/pages/Landing';

describe('Landing accessibility', () => {
  it('has no detectable accessibility violations', async () => {
    const { container } = render(<Landing />);
    // axe-core has a runtime `run` method; narrow using unknown to avoid explicit `any`.
    const axeCandidate: unknown = axeCore;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line -- axe-core's `run` is available at runtime
    const resultsUnknown: unknown = await (
      axeCandidate as { run: (node: Node) => Promise<unknown> }
    ).run(container);
    // If there are violations, provide some context in the assertion message
    const violations =
      resultsUnknown &&
      typeof resultsUnknown === 'object' &&
      'violations' in (resultsUnknown as Record<string, unknown>)
        ? ((resultsUnknown as Record<string, unknown>)['violations'] as
            | Array<{ id: string }>
            | undefined)
        : undefined;

    expect(
      violations?.length ?? 0,
      `Accessibility violations: ${violations?.map((v) => v.id).join(', ') ?? ''}`,
    ).toBe(0);
  });
});
