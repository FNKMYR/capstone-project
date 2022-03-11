import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExpenseList from './ExpenseList.js';

describe('ExpenseList', () => {
  it('renders the expenses-array entries into expense list items', () => {
    const expenses = [
      { title: 'Restaurant visit', amount: 71.5 },
      { title: 'Cinema', amount: 42.0 },
    ];
    render(
      <MemoryRouter>
        <ExpenseList expenses={expenses} />
      </MemoryRouter>
    );

    const expense = screen.getByText('Restaurant visit');
    expect(expense).toBeInTheDocument();
  });
});
