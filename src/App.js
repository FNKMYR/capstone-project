import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import SampleData from './data/sampleData.js';

export default function App() {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState(SampleData);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ExpensesPage
            expenses={expenses}
            setExpenses={setExpenses}
            members={members}
            setMembers={value => setMembers(value)}
          ></ExpensesPage>
        }
      ></Route>
      <Route
        path="/add"
        element={
          <AddExpensePage
            members={members}
            setExpenses={value => setExpenses(value)}
          />
        }
      ></Route>
    </Routes>
  );
}
