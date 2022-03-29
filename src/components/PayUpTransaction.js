import styled from 'styled-components';

export default function PayUpTransaction({
  expenses,
  member,
  expenseFormatter,
}) {
  return (
    <Wrapper>
      <LeftSide>Jens owes Peter 200€</LeftSide>
      <RightSide>
        <button>pay</button>
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
