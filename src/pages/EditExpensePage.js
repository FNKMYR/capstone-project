import styled from 'styled-components';
import Header from '../components/Header.js';
import ExpenseUseForm from '../components/ExpenseUseForm.js';

export default function EditExpensePage({
  members,
  expenses,
  setExpenses,
  editExpense,
}) {
  return (
    <Wrapper>
      <Header headerText="Edit expense" />
      <ExpenseUseForm
        members={members}
        setExpenses={setExpenses}
        editExpense={editExpense}
        buttonContent="Save & exit"
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
`;
