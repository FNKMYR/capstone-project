import styled from 'styled-components';
import { useState } from 'react';
import Expense from './Expense.js';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { title: 'Chinese food', amount: '20.00€' },
    { title: 'Taxi', amount: '15.00€' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setExpenses(prevExpenses => [
      ...prevExpenses,
      {
        title: inputValue,
        amount: '32.00€',
      },
    ]);
    setInputValue('');
  };
  return (
    <Wrapper>
      {expenses.map((expense, index) => (
        <Expense key={index} title={expense.title} amount={expense.amount} />
      ))}
      <AddExpense onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required="true"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
        </label>
        <p>
          <label>
            Amount:
            <input type="text" name="amount" />€
          </label>
        </p>
        <input type="submit" value="Add expense" />
      </AddExpense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: lightgray;
`;

const AddExpense = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  line-height: 2rem;
  border: none;
  background-color: darkgray;
  font-weight: bold;
  font-size: 1.5rem;
`;
