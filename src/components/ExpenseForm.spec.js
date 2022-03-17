import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExpenseForm from './ExpenseForm.js';

describe('ExpenseForm', () => {
  it('renders a form labelled "Add new expenses"', () => {
    render(
      <MemoryRouter>
        <ExpenseForm members={['Jens', 'Peter', 'Max']} />
      </MemoryRouter>
    );
    const form = screen.getByRole('form', {
      name: 'Add new expenses',
    });
    expect(form).toBeInTheDocument();
  });

  it('renders a form with two text input fields, a textarea and a submit button', () => {
    render(
      <MemoryRouter>
        <ExpenseForm members={['Jens', 'Peter', 'Max']} />
      </MemoryRouter>
    );
    const titleInput = screen.getByLabelText('Title:');
    const amountInput = screen.getByLabelText('Amount (€):');
    const submitButton = screen.getByRole('button');

    expect(titleInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('requires both input fields to be filled out', () => {
    render(
      <MemoryRouter>
        <ExpenseForm members={['Jens', 'Peter', 'Max']} />
      </MemoryRouter>
    );
    const titleInput = screen.getByLabelText('Title:');
    const amountInput = screen.getByLabelText('Amount (€):');

    expect(titleInput).toBeRequired();
    expect(amountInput).toBeRequired();
  });
});
