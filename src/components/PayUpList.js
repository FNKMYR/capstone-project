import styled from 'styled-components';
import PayUpTransaction from './PayUpTransaction.js';

export default function PayUpList({
  expenses,
  members,
  expenseFormatter,
  transactions,
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
        {transactions.map((transaction, index) => (
          <PayUpTransaction
            key={index}
            transaction={transaction}
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
