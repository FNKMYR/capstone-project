import styled from 'styled-components';

export default function PayUpTransaction({
  expenses,
  member,
  expenseFormatter,
  transaction,
}) {
  return (
    <Wrapper>
      <LeftSide>
        <StyledSpan18Red>{transaction.from}</StyledSpan18Red>
        <StyledSpan18> owes </StyledSpan18>
        <StyledSpan18Green>{transaction.to} </StyledSpan18Green>
        <StyledSpan18Bold>
          {' '}
          {expenseFormatter(transaction.amount)}
        </StyledSpan18Bold>
      </LeftSide>
      <RightSide>
        <ButtonPaid>Mark as paid</ButtonPaid>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 7.5rem;
  padding: 2rem;
  color: currentColor;
  background: ${props => props.theme.color.primaryBgLight};
  border: 1px solid ${props => props.theme.color.textPrimaryMedium};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSide = styled.section`
  text-align: start;
  padding-right: 1rem;
`;

const RightSide = styled.section`
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

const StyledSpan18Bold = styled(StyledSpan18)`
  font-weight: bold;
  padding-top: 1rem;
`;

const ButtonPaid = styled.button`
  width: 6rem;
  height: 5rem;
  margin: 0.5rem;
  padding: 0.5rem;

  color: ${props => props.theme.color.complementaryLight};
  background: ${props => props.theme.color.secondaryDark};
  border-radius: 1rem;
  border: none;
  font-weight: bold;

  cursor: pointer;

  :active {
    transform: scale(0.8);
  }
`;
