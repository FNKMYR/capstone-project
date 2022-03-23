import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import EditExpensePage from './pages/EditExpensePage.js';
import SampleData from './data/sampleData.js';

export default function App() {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState(SampleData);
  const [editExpense, setEditExpense] = useState();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ExpensesPage
            expenses={expenses}
            setExpenses={setExpenses}
            setEditExpense={value => setEditExpense(value)}
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
      <Route
        path="/edit"
        element={
          <EditExpensePage
            members={members}
            editExpense={editExpense}
            setExpenses={value => setExpenses(value)}
          />
        }
      ></Route>
    </Routes>
  );
}
