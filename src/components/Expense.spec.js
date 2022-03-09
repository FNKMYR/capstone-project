import { render, screen } from '@testing-library/react';
import Expense from './Expense.js';

describe('Expense', () => {
  it('renders title and amount', () => {
    render(<Expense title="Restaurant visit" amount="75.70" />);

    const title = screen.getByText('Restaurant visit');
    expect(title).toBeInTheDocument();

    const amount = screen.getByText('75.70');
    expect(amount).toBeInTheDocument();
  });
});
