import styled from 'styled-components';
import { useState } from 'react';
import Expense from './Expense.js';

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([
    { title: 'Chinese food', amount: 20.0 },
    { title: 'Taxi', amount: 15.74 },
  ]);
  const [inputValue, setInputValue] = useState({ title: '', amount: '' });
  const handleSubmit = e => {
    e.preventDefault();
    setExpenses(prevExpenses => [
      ...prevExpenses,
      {
        title: inputValue.title,
        amount: inputValue.amount,
      },
    ]);
    setInputValue({ title: '', amount: '' });
    console.log(inputValue.amount.type);
    console.log(totalExpenses.type);
  };
  const totalExpenses = Number(
    expenses
      .map(expense => expense.amount)
      .reduce((prev, curr) => +prev + +curr, 0)
    //The unary plus operator (+prev) converts the strings to numbers
  );
  function expenseFormatter(num) {
    let p = Number(num).toFixed(2).split('.');
    return (
      (p[0].split('')[0] === '-' ? '-' : '') +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1] +
      ' €'
    );
  }
  return (
    <Wrapper>
      <TotalExpenses>
        <p>Total expenses:</p>
        <p>{expenseFormatter(totalExpenses)}</p>
      </TotalExpenses>
      {expenses.map((expense, index) => (
        <Expense
          key={index}
          title={expense.title}
          amount={expenseFormatter(expense.amount)}
        />
      ))}
      <AddExpense onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required={true}
            placeholder="What did you spend money for?"
            value={inputValue.title}
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
              name="amount"
              pattern="^\d*(\.\d{0,2})?$"
              value={inputValue.amount}
              placeholder="Use '.' as a decimal separator, e.g. 12.45"
              onChange={event =>
                setInputValue({ ...inputValue, amount: event.target.value })
              }
            />
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
const TotalExpenses = styled.section`
  display: flex;
  justify-content: space-between;
  background: black;
  color: white;
`;

const AddExpense = styled.form.attrs(() => ({ autocomplete: 'off' }))`
  position: absolute;
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
  & > input {
    justify-content: center;
    width: 8rem;
    position: relative;
    padding: 1rem;
    left: calc(50% - 4rem);
    bottom: 0.5rem;
    font-weight: bold;
  }
`;
