import styled from 'styled-components';
import Header from '../components/Header.js';
import ExpenseUseForm from '../components/ExpenseUseForm.js';

export default function AddExpensePage({ members, expenses, setExpenses }) {
  return (
    <Wrapper>
      <Header headerText="Add a new expense" />
      <ExpenseUseForm
        members={members}
        expenses={expenses}
        setExpenses={setExpenses}
        buttonContent="Add expense"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
`;
