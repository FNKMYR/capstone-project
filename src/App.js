import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage.js';
import ExpensesPage from './pages/ExpensesPage.js';
import BalancesPage from './pages/BalancesPage.js';
import AddExpensePage from './pages/AddExpensePage.js';
import EditExpensePage from './pages/EditExpensePage.js';
import PayUpPage from './pages/PayUpPage.js';

export default function App() {
  const [members, setMembers] = useLocalStorage('members', []);
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [editExpense, setEditExpense] = useState();
  const [balances, setBalances] = useState([]);

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
            expenseFormatter={num => expenseFormatter(num)}
          ></ExpensesPage>
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
      <Route
        path="/balances"
        element={
          <BalancesPage
            expenses={expenses}
            members={members}
            expenseFormatter={num => expenseFormatter(num)}
            calculateBalances={calculateBalances}
          ></BalancesPage>
        }
      ></Route>
      <Route
        path="/payup"
        element={
          <PayUpPage
            members={members}
            expenses={expenses}
            setExpenses={value => setExpenses(value)}
            expenseFormatter={num => expenseFormatter(num)}
            balances={balances}
            setBalances={value => setBalances(value)}
          />
        }
      ></Route>
    </Routes>
  );

  function expenseFormatter(num) {
    //puts the expense into a 1,234,567.89€ format
    let p = Number(num).toFixed(2).split('.');
    return (
      (p[0].split('')[0] === '-' ? '-' : '') +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1] +
      ' €'
    );
  }

  function calculateBalances() {
    setBalances([]);
    members.map(member =>
      setBalances(prevBalances => [
        ...prevBalances,
        {
          name: member,
          amount:
            expenses
              .filter(expense => expense.paidBy === member)
              .map(expense => expense.amount)
              .reduce((prev, curr) => +prev + +curr, 0) -
            expenses
              .filter(expense => expense.paidFor.includes(member))
              .map(expense => expense.amount / expense.paidFor.length)
              .reduce((prev, curr) => +prev + +curr, 0),
        },
      ])
    );
    calculateTransactions();
  }

  function calculateTransactions() {
    function getMaxIndex(arr, i) {
      let maxInd = 0;
      let arrAmount = arr.map(ind => ind.amount);
      for (i = 1; i < arr.length; i++)
        if (arrAmount[i] > arrAmount[maxInd]) maxInd = i;
      return maxInd;
    }
    function getMinIndex(arr, i) {
      let minInd = 0;
      let arrAmount = arr.map(ind => ind.amount);
      for (i = 1; i < arr.length; i++)
        if (arrAmount[i] < arrAmount[minInd]) minInd = i;
      return minInd;
    }
    console.log(balances);
    console.log(balances.map(balance => balance.amount));
    console.log(getMaxIndex(balances));
    console.log(getMinIndex(balances));

    balances.map(balance => balance.amount)[getMaxIndex(balances)] >
    -balances.map(balance => balance.amount)[getMinIndex(balances)]
      ? console.log('yes')
      : console.log('no');
  }
}
