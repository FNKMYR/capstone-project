import { render, screen } from '@testing-library/react';
import Header from './Header.js';

describe('Header', () => {
  it('renders a header with an h1', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
