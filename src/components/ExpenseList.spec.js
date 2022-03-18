import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExpenseList from './ExpenseList.js';
import Theme from '../Theme.js';

describe('ExpenseList', () => {
  it('renders the expenses-array entries into expense list items', () => {
    const expenses = [
      { title: 'Restaurant visit', amount: 71.5 },
      { title: 'Cinema', amount: 42.0 },
    ];
    render(
      <MemoryRouter>
        <Theme>
          <ExpenseList expenses={expenses} />
        </Theme>
      </MemoryRouter>
    );

    const expense = screen.getByText('Restaurant visit');
    expect(expense).toBeInTheDocument();
  });
});
