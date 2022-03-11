import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export default function Expense({
  deleteExpense,
  index,
  title,
  description,
  amount,
  date,
}) {
  const handleClick = e => {
    e.preventDefault();
    deleteExpense(currExpenses => currExpenses.slice[index]);
  };

  return (
    <Wrapper>
      <LeftSide>
        <h4>{title}</h4>
        <span>{description}</span>
      </LeftSide>
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
const LeftSide = styled.section`
  padding: 0;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  & > h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > span {
    color: #4c5e6b;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
