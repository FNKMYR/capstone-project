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
