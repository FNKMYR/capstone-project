import styled from 'styled-components';
import Header from '../components/Header.js';
import ExpenseForm from '../components/ExpenseForm.js';

export default function AddExpensePage({ members, setExpenses }) {
  return (
    <Wrapper>
      <Header headerText="Add a new expense" />
      <ExpenseForm
        members={members}
        addToExpenses={value => setExpenses(value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
`;
