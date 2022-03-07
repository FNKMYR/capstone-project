import styled from 'styled-components';

export default function Expense({ title, amount }) {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>{amount}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
