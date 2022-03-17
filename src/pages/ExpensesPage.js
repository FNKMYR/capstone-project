import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Header from '../components/Header.js';
import ExpenseList from '../components/ExpenseList.js';
import MemberForm from '../components/MemberForm.js';

export default function ExpensesPage({
  expenses,
  setExpenses,
  members,
  setMembers,
}) {
  return (
    <Wrapper>
      <Header headerText="SplitPal" backButtonVisibility="hidden" />
      <MemberForm members={members} setMembers={setMembers} />
      <Button onClick={() => setExpenses([])}>
        For dev purposes: Delete all expense entries
      </Button>
      <ExpenseList
        expenses={expenses}
        setExpenses={value => setExpenses(value)}
      />
      <StyledButton as={Link} to="/add">
        +
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  height: 4rem;
  width: 4rem;
  border: 5px solid black;
  border-radius: 2rem;
  font-size: 4rem;
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  left: calc(50% - 2rem);
`;
