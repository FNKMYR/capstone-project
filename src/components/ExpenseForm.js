import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

export default function ExpenseForm({ addToExpenses }) {
  const [inputValue, setInputValue] = useState({ title: '', amount: '' });
  const inputRef = useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    addToExpenses(prevExpenses => [
      ...prevExpenses,
      {
        title: inputValue.title,
        amount: inputValue.amount,
      },
    ]);
    setInputValue({ title: '', amount: '' });
    inputRef.current.focus(); //This sets the focus back to the title input
  };
  return (
    <Form
      onSubmit={handleSubmit}
      aria-label="Add new expenses"
      autoComplete="new-password" //Apperently this prevents auto-complete. Only using autoComplete="off" did not work
    >
      <label>
        Title:
        <input
          type="text"
          name="title"
          required={true}
          autoComplete="off"
          maxlength="30"
          placeholder="What did you spend money for?"
          value={inputValue.title}
          ref={inputRef}
          onChange={event =>
            setInputValue({ ...inputValue, title: event.target.value })
          }
        />
      </label>
      <p>
        <label>
          Amount (€):
          <input
            type="text"
            inputmode="numeric"
            name="amount"
            required={true}
            autoComplete="off"
            pattern="^\d*(\.\d{0,2})?$"
            maxlength="9"
            value={inputValue.amount}
            placeholder="Use '.' as a decimal separator, e.g. 12.45"
            onChange={event =>
              setInputValue({
                ...inputValue,
                amount: event.target.value,
              })
            }
          />
        </label>
      </p>
      <button>Add expense</button>
    </Form>
  );
}

const Form = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: darkgray;
  font-weight: bold;
  font-size: 1rem;

  & label {
    display: grid;
    margin-left: 1rem;
  }
  & label input {
    margin-right: auto;
    width: 90%;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
  & > button {
    justify-content: center;
    width: 8rem;
    position: relative;
    padding: 1rem;
    left: calc(50% - 4rem);
    bottom: 0.5rem;
    font-weight: bold;
  }
`;
