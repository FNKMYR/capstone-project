import styled from 'styled-components';
import BalanceList from '../components/BalanceList.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function BalancesPage({
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
      <Header headerText="SplitPal - Balances" backButtonVisibility="visible" />

      <BalanceList
        expenses={expenses}
        members={members}
        setExpenses={value => setExpenses(value)}
        setEditExpense={setEditExpense}
        expenseFormatter={expenseFormatter}
      />
      <Navigation />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
