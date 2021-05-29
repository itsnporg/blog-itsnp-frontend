import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Renders Home Page', () => {
  const { getByText } = render(<Home />);
  const displayElement = getByText(/Home/i);
  expect(displayElement).toBeInTheDocument();
});
