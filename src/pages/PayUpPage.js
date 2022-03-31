import styled from 'styled-components';
import PayUpList from '../components/PayUpList.js';
import Header from '../components/Header.js';

export default function PayUpPage({
  expenses,
  setExpenses,
  expenseFormatter,
  members,
  balances,
  setBalances,
  transactions,
}) {
  return (
    <Wrapper>
      <Header headerText="Pay your debts" backButtonVisibility="visible" />

      <PayUpList
        expenses={expenses}
        members={members}
        setExpenses={value => setExpenses(value)}
        expenseFormatter={expenseFormatter}
        balances={balances}
        setBalances={setBalances}
        transactions={transactions}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
