import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Theme from '../Theme.js';
import MemberForm from './MemberForm.js';

describe('MemberForm', () => {
  it('renders a form aria-labelled "Add or edit members"', () => {
    render(
      <MemoryRouter>
        <Theme>
          <MemberForm members={[]} showPopup="false" />
        </Theme>
      </MemoryRouter>
    );
    const form = screen.getByRole('button', {
      name: 'editPen.svg Add or edit members',
    });
    expect(form).toBeInTheDocument();
  });

  it('renders a text input field and a submit-button', () => {
    render(
      <MemoryRouter>
        <Theme>
          <MemberForm members={[]} showPopup={true} />
        </Theme>
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
