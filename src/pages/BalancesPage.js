import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import BalanceList from '../components/BalanceList.js';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function BalancesPage({
  expenses,
  expenseFormatter,
  members,
  calculateBalances,
}) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header headerText="SplitPal - Balances" backButtonVisibility="visible" />
      <BalanceList
        expenses={expenses}
        members={members}
        expenseFormatter={expenseFormatter}
      />
      <Button onClick={handleClick}>Pay up</Button>
      <Navigation />
    </Wrapper>
  );

  function handleClick(e) {
    e.preventDefault();
    navigate(`/payup`);
    calculateBalances();
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
