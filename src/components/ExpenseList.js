import styled from 'styled-components';
import Expense from './Expense.js';

export default function ExpenseList({ expenses, setExpenses }) {
  const totalExpenses = Number(
    expenses
      .map(expense => expense.amount)
      .reduce((prev, curr) => +prev + +curr, 0)
    //The unary plus operator (+prev) converts the strings to numbers
  );
  function expenseFormatter(num) {
    //puts the expense into a 1,234,567.89€ format
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
          deleteExpense={() =>
            //This is for the delete button
            setExpenses(
              expenses
                .slice(0, index)
                .concat(expenses.slice(index + 1, expenses.length + 1))
            )
          }
        />
      ))}
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
