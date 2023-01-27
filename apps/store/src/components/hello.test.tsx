import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

test('should work as expected', () => {
  render(<Hello />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
