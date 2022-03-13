import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import SampleData from './data/sampleData.js';

export default function App() {
  const [expenses, setExpenses] = useState(SampleData);
  return (
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
  );
}
