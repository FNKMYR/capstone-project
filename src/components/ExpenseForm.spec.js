import { render, screen } from '@testing-library/react';
import ExpenseForm from './ExpenseForm.js';

describe('ExpenseForm', () => {
  it('renders a form labelled "Add new expenses"', () => {
    render(<ExpenseForm />);

    const form = screen.getByRole('form', {
      name: 'Add new expenses',
    });
    expect(form).toBeInTheDocument();
  });

  it('renders a form with two text input fields and a submit button', () => {
    render(<ExpenseForm />);
    const titleInput = screen.getByLabelText('Title:');
    const amountInput = screen.getByLabelText('Amount (€):');
    const submitButton = screen.getByRole('button');

    expect(titleInput).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('requires both input fields to be filled out', () => {
    render(<ExpenseForm />);
    const titleInput = screen.getByLabelText('Title:');
    const amountInput = screen.getByLabelText('Amount (€):');

    expect(titleInput).toBeRequired();
    expect(amountInput).toBeRequired();
  });
});
