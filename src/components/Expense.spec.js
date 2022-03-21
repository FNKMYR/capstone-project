import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Theme from '../Theme.js';
import Expense from './Expense.js';

describe('Expense', () => {
  it('renders title and amount', () => {
    render(
      <MemoryRouter>
        <Theme>
          <Expense title="Restaurant visit" amount="75.70" />
        </Theme>
      </MemoryRouter>
    );

    const title = screen.getByText('Restaurant visit');
    expect(title).toBeInTheDocument();

    const amount = screen.getByText('75.70');
    expect(amount).toBeInTheDocument();
  });
});
