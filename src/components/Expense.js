import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Expense({
  expense,
  setEditExpense,
  deleteExpense,
  index,
  title,
  description,
  amount,
  date,
  paidBy,
  paidFor,
}) {
  function handleClick() {
    setEditExpense(expense);
    console.log(expense);
  }

  return (
    <Wrapper to="/edit" onClick={handleClick}>
      <LeftSide>
        <StyledSpanTitle>{title}</StyledSpanTitle>
        <div>
          <StyledSpanLight>Paid by: </StyledSpanLight>
          <StyledSpanMedium>{paidBy}</StyledSpanMedium>
        </div>
      </LeftSide>
      <RightSide>
        <StyledSpan20>{amount}</StyledSpan20>
        <StyledSpanMedium>{date}</StyledSpanMedium>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  height: 7.5rem;
  padding: 1.2rem;
  text-decoration: none;
  color: currentColor;

  display: grid;
  grid-template-columns: 1fr 12rem;

  background: ${props => props.theme.color.primaryBgLight};
  border: 1px solid ${props => props.theme.color.textPrimaryMedium};
`;

const LeftSide = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  overflow: hidden;
`;

const RightSide = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: end;
`;

const StyledSpan20 = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

const StyledSpanTitle = styled(StyledSpan20)`
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledSpanLight = styled.span`
  color: ${props => props.theme.color.textPrimaryLight};
  font-weight: 300;
`;

const StyledSpanMedium = styled.span`
  color: ${props => props.theme.color.textPrimaryMedium};
`;
