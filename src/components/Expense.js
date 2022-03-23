import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  function handleClick() {
    setEditExpense(expense);
    navigate(`/edit`);
    console.log(expense);
  }

  return (
    <Wrapper>
      <LeftSide>
        <StyledSpan20>{title}</StyledSpan20>
        <div>
          <StyledSpanLight>Paid by: </StyledSpanLight>
          <StyledSpanMedium>{paidBy}</StyledSpanMedium>
        </div>
      </LeftSide>
      <button onClick={handleClick}>Click me</button>
      <RightSide>
        <StyledSpan20>{amount}</StyledSpan20>
        <StyledSpanMedium>{date}</StyledSpanMedium>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 7.5rem;
  padding: 1.2rem;

  display: flex;
  justify-content: space-between;

  background: ${props => props.theme.color.primaryBgLight};
  border: 1px solid ${props => props.theme.color.textPrimaryMedium};
`;

const LeftSide = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
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

const StyledSpanLight = styled.span`
  color: ${props => props.theme.color.textPrimaryLight};
  font-weight: 300;
`;

const StyledSpanMedium = styled.span`
  color: ${props => props.theme.color.textPrimaryMedium};
`;
