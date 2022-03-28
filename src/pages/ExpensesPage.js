import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import AddButton from '../images/addButtonBlue.svg';
import ExpenseList from '../components/ExpenseList.js';
import Header from '../components/Header.js';
import MemberForm from '../components/MemberForm.js';
import Navigation from '../components/Navigation.js';

export default function ExpensesPage({
  expenses,
  setExpenses,
  setEditExpense,
  expenseFormatter,
  members,
  setMembers,
  deleteMember,
}) {
  return (
    <Wrapper>
      <Header headerText="SplitPal" backButtonVisibility="hidden" />
      <MemberForm
        members={members}
        setMembers={setMembers}
        deleteMember={deleteMember}
      />

      <ExpenseList
        expenses={expenses}
        setExpenses={value => setExpenses(value)}
        setEditExpense={setEditExpense}
        expenseFormatter={expenseFormatter}
      />
      <StyledButton as={Link} to="/add">
        <img src={AddButton} alt="Add a new expense"></img>
      </StyledButton>
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 8.5rem;
  left: calc(50% - 3rem);
`;
