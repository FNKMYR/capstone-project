import styled from 'styled-components';

export default function Expense(props) {
  const handleClick = e => {
    e.preventDefault();
    props.onClick(currExpenses => currExpenses.slice[props.index]);
  };

  return (
    <Wrapper>
      <p>{props.title}</p>
      <button onClick={handleClick}>DEL</button>
      <p>{props.amount}</p>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
