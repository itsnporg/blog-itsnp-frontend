import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';

test('Renders Header Component', () => {
  const { getByText } = render(<MemoryRouter> <Header /> </MemoryRouter>);
  const displayElement = getByText(/Header/i);
  expect(displayElement).toBeInTheDocument();
});
