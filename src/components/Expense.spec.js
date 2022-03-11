import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Expense from './Expense.js';

describe('Expense', () => {
  it('renders title and amount', () => {
    render(
      <MemoryRouter>
        <Expense title="Restaurant visit" amount="75.70" />
      </MemoryRouter>
    );

    const title = screen.getByText('Restaurant visit');
    expect(title).toBeInTheDocument();

    const amount = screen.getByText('75.70');
    expect(amount).toBeInTheDocument();
  });
});
