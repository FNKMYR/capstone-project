import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import ExpenseList from '../components/ExpenseList.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function BalancesPage({
  expenses,
  setExpenses,
  setEditExpense,
  members,
  setMembers,
  deleteMember,
}) {
  return (
    <Wrapper>
      <Header headerText="SplitPal - Balances" backButtonVisibility="hidden" />

      <ExpenseList
        expenses={expenses}
        setExpenses={value => setExpenses(value)}
        setEditExpense={setEditExpense}
      />
      <Navigation expensesActive={true} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
