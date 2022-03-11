import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';

describe('Header', () => {
  it('renders a header with an h1', () => {
    render(
      <MemoryRouter>
        <Header headerText="Sample Heading" />
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
