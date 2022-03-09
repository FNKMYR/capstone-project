import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import ExpenseList from './ExpenseList.js';

describe('ExpenseList', () => {
  it('renders the expenses-array entries into expense list items', () => {
    const expenses = [
      { title: 'Restaurant visit', amount: 71.5 },
      { title: 'Cinema', amount: 42.0 },
    ];
    render(<ExpenseList expenses={expenses} />);

    const expense = screen.getByText('Restaurant visit');
    expect(expense).toBeInTheDocument();
  });
});
