import { render, screen } from '@testing-library/react';
import ExpenseList from './ExpenseList.js';

describe('ExpenseList', () => {
  it('renders the expenses-array entries into expense list items', () => {
    render(<ExpenseList />);

    const expense = screen.getByText('Chinese food');
    expect(expense).toBeInTheDocument();
  });
});
