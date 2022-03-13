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
      <label for="title">Title:</label>
      <input
        type="text"
        name="title"
        id="title"
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
      <label for="description">Description (optional):</label>

      <textarea
        type="text"
        name="description"
        id="description"
        required={false}
        autoComplete="off"
        maxLength="200"
        placeholder="Add a description or comment"
        value={inputValue.description}
        onChange={event =>
          setInputValue({ ...inputValue, description: event.target.value })
        }
      />
      <label for="amount">Amount (€):</label>
      <input
        type="text"
        name="amount"
        inputMode="numeric"
        id="amount"
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
      <label for="date">Date:</label>
      <input
        type="date"
        name="date"
        id="date"
        required={true}
        value={inputValue.date}
        onChange={event =>
          setInputValue({
            ...inputValue,
            date: event.target.value,
          })
        }
      />
      <button>Add expense</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: darkgray;
  border-top: 2px solid black;
  font-weight: bold;
  font-size: 1rem;
  height: 100%;
  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  & > input,
  textarea {
    margin-bottom: 1rem;
    line-height: 3rem;
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
