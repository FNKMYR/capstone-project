import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation({ expensesActive }) {
  return (
    <Wrapper>
      <Expenses to="/">Expenses</Expenses>
      <Balances to="/balances">Balances</Balances>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 7.5rem;
  width: 100%;
  position: absolute;
  bottom: 0;

  display: grid;
  grid-template-columns: 1fr 1fr;

  color: ${props => props.theme.color.textSecondary};
  background: ${props => props.theme.color.secondaryLight};
  font-weight: bold;
  font-size: 2rem;

  cursor: pointer;

  > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${props => props.theme.color.textSecondary};
    text-decoration: none;
    color: currentColor;
  }
`;

// const Expenses = styled(NavLink)`
//   background: ${props =>
//     props.expensesActive
//       ? props.theme.color.secondaryDark
//       : props.theme.color.secondaryLight};

//   color: ${props =>
//     props.expensesActive
//       ? props.theme.color.complementaryLight
//       : props.theme.color.textSecondary};
// `;

const Balances = styled(NavLink)`
  &.active {
    color: ${props => props.theme.color.complementaryLight};
    background: ${props => props.theme.color.secondaryDark};
  }
`;

const Expenses = styled(NavLink)`
  &.active {
    color: ${props => props.theme.color.complementaryLight};
    background: ${props => props.theme.color.secondaryDark};
  }
`;
