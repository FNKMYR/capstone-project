import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MemberForm from './MemberForm.js';

describe('MemberForm', () => {
  it('renders a form aria-labelled "Set or edit members"', () => {
    render(
      <MemoryRouter>
        <MemberForm members={[]} />
      </MemoryRouter>
    );
    const form = screen.getByRole('form', {
      name: 'Set or edit members',
    });
    expect(form).toBeInTheDocument();
  });

  it('renders a text input field and a submit-button', () => {
    render(
      <MemoryRouter>
        <MemberForm members={[]} />
      </MemoryRouter>
    );
    const titleInput = screen.getByLabelText(
      'Member names, separated by a comma:'
    );
    const submitButton = screen.getByRole('button');

    expect(titleInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
