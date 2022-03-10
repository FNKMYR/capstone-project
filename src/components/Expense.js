import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export default function Expense({ deleteExpense, index, title, amount, date }) {
  const handleClick = e => {
    e.preventDefault();
    deleteExpense(currExpenses => currExpenses.slice[index]);
  };

  return (
    <Wrapper>
      <p>{title}</p>
      <Button onClick={handleClick}>DEL</Button>
      <RightSide>
        <span>{amount}</span>
        <span>{date}</span>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 0.5fr 2.5fr;

  padding: 3px;
  border: 1px solid black;

  & > Button {
    margin: 10px;
  }
`;

const RightSide = styled.section`
  padding: 0;
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
