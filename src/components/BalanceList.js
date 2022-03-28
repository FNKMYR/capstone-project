import styled from 'styled-components';
import Balance from './Balance.js';

export default function BalanceList({
  expenses,
  setExpenses,
  setEditExpense,
  members,
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
        {members.map((member, index) => (
          <Balance
            key={index}
            member={member}
            expenses={expenses}
            expenseFormatter={expenseFormatter}
          />
        ))}
      </Scrollarea>
    </Wrapper>
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
}

const Wrapper = styled.section``;

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
