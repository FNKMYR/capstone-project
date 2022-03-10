import styled from 'styled-components';

export default function Expense({ deleteExpense, index, title, amount }) {
  const handleClick = e => {
    e.preventDefault();
    deleteExpense(currExpenses => currExpenses.slice[index]);
  };

  return (
    <Wrapper>
      <p>{title}</p>
      <button onClick={handleClick}>DEL</button>
      <p>{amount}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
