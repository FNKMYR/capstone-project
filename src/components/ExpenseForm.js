import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ExpenseForm({ addToExpenses }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
  });
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    addToExpenses(prevExpenses => [
      ...prevExpenses,
      {
        title: inputValue.title,
        amount: inputValue.amount,
        description: inputValue.description,
        date: inputValue.date,
      },
    ]);
    console.log('Expense has been added');
    navigate(`/`);
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
          autoFocus
          maxLength="30"
          placeholder="What did you spend money for?"
          value={inputValue.title}
          onChange={event =>
            setInputValue({ ...inputValue, title: event.target.value })
          }
        />
      </label>
      <label>
        Description (optional):
        <input
          type="text"
          name="description"
          required={false}
          autoComplete="off"
          maxLength="200"
          placeholder="Add a description or comment"
          value={inputValue.description}
          onChange={event =>
            setInputValue({ ...inputValue, description: event.target.value })
          }
        />
      </label>
      <p>
        <label>
          Amount (€):
          <input
            type="text"
            inputMode="numeric"
            name="amount"
            required={true}
            autoComplete="off"
            pattern="^\d*(\.\d{0,2})?$"
            maxLength="9"
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
        <label>
          Date:
          <input
            type="date"
            name="date"
            required={true}
            value={inputValue.date}
            onChange={event =>
              setInputValue({
                ...inputValue,
                date: event.target.value,
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
  width: 100%;
  background-color: darkgray;
  border-top: 2px solid black;
  font-weight: bold;
  font-size: 1rem;
  height: 100%;

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
