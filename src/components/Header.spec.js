import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.js';
import Theme from '../Theme.js';

describe('Header', () => {
  it('renders a header with an h1', () => {
    render(
      <MemoryRouter>
        <Theme>
          <Header headerText="Sample Heading" />
        </Theme>
      </MemoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
