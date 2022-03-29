import styled from 'styled-components';

export default function Expense({ expenses, member, expenseFormatter }) {
  const moneySpent = expenses
    .filter(expense => expense.paidBy === member)
    .map(expense => expense.amount)
    .reduce((prev, curr) => +prev + +curr, 0);

  const moneyReceived = expenses
    .filter(expense => expense.paidFor.includes(member))
    .map(expense => expense.amount / expense.paidFor.length)
    .reduce((prev, curr) => +prev + +curr, 0);
  const balance = moneySpent - moneyReceived;

  return (
    <Wrapper>
      <LeftSide>
        <StyledSpanTitle>{member}</StyledSpanTitle>
      </LeftSide>
      <Middle>
        <span>
          <StyledSpanMedium>
            Spent: {expenseFormatter(moneySpent)}
          </StyledSpanMedium>
        </span>
        <span>
          <StyledSpanMedium>
            Received: {expenseFormatter(moneyReceived)}
          </StyledSpanMedium>
        </span>
      </Middle>
      <RightSide>
        {balance === 0 ? (
          <StyledSpan18>{expenseFormatter(balance)}</StyledSpan18>
        ) : balance > 0 ? (
          <StyledSpan18Green>{expenseFormatter(balance)}</StyledSpan18Green>
        ) : (
          <StyledSpan18Red>{expenseFormatter(balance)}</StyledSpan18Red>
        )}
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 7.5rem;
  padding: 1.2rem;
  text-decoration: none;
  color: currentColor;

  display: grid;
  grid-template-columns: 8rem auto auto;

  background: ${props => props.theme.color.primaryBgLight};
  border: 1px solid ${props => props.theme.color.textPrimaryMedium};
`;

const LeftSide = styled.section`
  align-self: center;
  text-align: start;
  padding-right: 1rem;
`;

const Middle = styled.section`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const RightSide = styled.section`
  align-self: center;
  text-align: end;
`;

const StyledSpan18 = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

const StyledSpan18Green = styled(StyledSpan18)`
  color: green;
`;

const StyledSpan18Red = styled(StyledSpan18)`
  color: red;
`;

const StyledSpanTitle = styled(StyledSpan18)`
  overflow: hidden;
  word-wrap: normal;
`;

const StyledSpanMedium = styled.span`
  color: ${props => props.theme.color.textPrimaryMedium};
  font-weight: 300;
  font-size: 1.4rem;
`;
