import styled from 'styled-components';
import { useState } from 'react';
import Header from './components/Header.js';
import ExpenseList from './components/ExpenseList.js';
import ExpenseForm from './components/ExpenseForm.js';

function App() {
  const [expenses, setExpenses] = useState([
    { title: 'Chinese food', amount: 20.0 },
    { title: 'Taxi', amount: 15.74 },
  ]);
  return (
    <Grid>
      <Header />
      <ExpenseList
        expenses={expenses}
        setExpenses={value => setExpenses(value)}
      />
      <ExpenseForm addToExpenses={value => setExpenses(value)} />
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
`;

export default App;
