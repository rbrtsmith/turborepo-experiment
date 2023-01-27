import { render, screen } from '@testing-library/react';

import { Button } from './Button';

test('should work as expected', () => {
  render(<Button>Test</Button>);
  expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
});
