import { render, screen } from '@testing-library/react';

import { HelloWorld } from './HelloWorld';

test('should work as expected', () => {
  render(<HelloWorld />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
