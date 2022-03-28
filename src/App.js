import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpensesPage from './pages/ExpensesPage.js';
import BalancesPage from './pages/BalancesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import EditExpensePage from './pages/EditExpensePage.js';

export default function App() {
  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ExpensesPage
            expenses={expenses}
            setExpenses={value => setExpenses(value)}
            setEditExpense={value => setEditExpense(value)}
            members={members}
            setMembers={value => setMembers(value)}
          ></ExpensesPage>
        }
      ></Route>
      <Route
        path="/balances"
        element={
          <BalancesPage
            expenses={expenses}
            setExpenses={value => setExpenses(value)}
            members={members}
          ></BalancesPage>
        }
      ></Route>
      <Route
        path="/add"
        element={
          <AddExpensePage
            members={members}
            expenses={expenses}
            setExpenses={value => setExpenses(value)}
          />
        }
      ></Route>
      <Route
        path="/edit"
        element={
          <EditExpensePage
            members={members}
            expenses={expenses}
            editExpense={editExpense}
            setExpenses={value => setExpenses(value)}
          />
        }
      ></Route>
    </Routes>
  );
}
