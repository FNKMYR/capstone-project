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
      <Header headerText="Balances" backButtonVisibility="visible" />
      <BalanceList
        expenses={expenses}
        members={members}
        expenseFormatter={expenseFormatter}
      />
      <ButtonPayUp onClick={handleClick}>Pay up</ButtonPayUp>
      <Navigation />
    </Wrapper>
  );

  function handleClick(e) {
    e.preventDefault();
    navigate(`/payup`);
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const ButtonPayUp = styled(Button)`
  width: 16rem;
  height: 6rem;

  position: absolute;
  bottom: 8.5rem;
  left: calc(50% - 8rem);

  border: none;
  border-radius: 2rem;
  background: ${props => props.theme.color.gradientComplementaryDark};
  color: ${props => props.theme.color.textSecondary};
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
