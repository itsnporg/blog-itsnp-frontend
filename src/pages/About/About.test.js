import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('Renders About Page', () => {
  const { getByText } = render(<About />);
  const displayElement = getByText(/About me/i);
  expect(displayElement).toBeInTheDocument();
});
