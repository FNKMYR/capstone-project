import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header.js';
import Expense from './components/Expense.js';

function App() {
  const [expenses, setExpenses] = useState([
    { title: 'Chinese food', amount: '20.00€' },
    { title: 'Taxi', amount: '15.00€' },
  ]);
  const handleAddExpense = () => {
    setExpenses(prevExpenses => [
      ...prevExpenses,
      {
        title: 'Cinema',
        amount: '32.00€',
      },
    ]);
  };

  return (
    <Grid>
      <Header />
      <Content>
        {expenses.map((expense, index) => (
          <Expense key={index} title={expense.title} amount={expense.amount} />
        ))}
      </Content>
      <AddExpense onClick={handleAddExpense}>Add Expense</AddExpense>
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
`;

const Content = styled.section`
  background: lightgray;
`;

const AddExpense = styled.button`
  position: absolute;
  bottom: 0;
  width: 20rem;
  height: 5rem;
  margin: 0.5rem;
  border-radius: 4px;
  background-color: darkgray;
  font-weight: bold;
  font-size: 1.5rem;
`;

export default App;
