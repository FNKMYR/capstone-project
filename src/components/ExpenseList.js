import styled from 'styled-components';
import Expense from './Expense.js';

export default function ExpenseList({
  expenses,
  setExpenses,
  setEditExpense,
  expenseFormatter,
}) {
  const totalExpenses = Number(
    expenses
      .map(expense => expense.amount)
      .reduce((prev, curr) => +prev + +curr, 0)
    //The unary plus operator (+prev) converts the strings to numbers
  );

  return (
    <Wrapper>
      <TotalExpenses>
        <p>Total expenses:</p>
        <p>{expenseFormatter(totalExpenses)}</p>
      </TotalExpenses>
      <Scrollarea>
        {expenses
          .map((expense, index) => (
            <Expense
              key={index}
              expense={expense}
              setEditExpense={setEditExpense}
              title={expense.title}
              description={expense.description}
              amount={expenseFormatter(expense.amount)}
              date={expense.date}
              paidBy={expense.paidBy}
              paidFor={expense.paidFor}
              deleteExpense={() =>
                //This is for the delete button
                setExpenses(
                  expenses
                    .slice(0, index)
                    .concat(expenses.slice(index + 1, expenses.length + 1))
                )
              }
            />
          ))
          .reverse()}
      </Scrollarea>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 7.5rem;
`;

const TotalExpenses = styled.section`
  height: 4rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.textSecondary};

  > * {
    margin: 0.5rem;
  }
`;

const Scrollarea = styled.section`
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  // needed this to hide the scrollbar in Responsively browser
  &::-webkit-scrollbar {
    display: none;
  }
`;
