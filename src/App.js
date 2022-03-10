import styled from 'styled-components';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import SampleData from './data/sampleData.js';

function App() {
  const [expenses, setExpenses] = useState(SampleData);
  return (
    <AppGrid>
      <Routes>
        <Route
          path="/"
          element={
            <ExpensesPage
              expenses={expenses}
              setExpenses={setExpenses}
            ></ExpensesPage>
          }
        ></Route>
        <Route
          path="/add"
          element={<AddExpensePage setExpenses={value => setExpenses(value)} />}
        ></Route>
      </Routes>
    </AppGrid>
  );
}

const AppGrid = styled.div`
  display: grid;
`;

export default App;
