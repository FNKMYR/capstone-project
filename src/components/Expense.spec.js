import { render, screen } from '@testing-library/react';
import Expense from './Expense.js';

describe('Expense', () => {
  it('renders date, heading and text', () => {
    render(<Expense title="Restaurant visit" amount="75.50" />);

    const title = screen.getByText('Restaurant visit');
    expect(title).toBeInTheDocument();

    const amount = screen.getByText('75.50');
    expect(amount).toBeInTheDocument();
  });
});
