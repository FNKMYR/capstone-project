import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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
  const [transactions, setTransactions] = useLocalStorage('transactions', [
    { from: 'Jane', to: 'Jens', amount: 74.28 },
    { from: 'Jane', to: 'Max', amount: 16.61 },
    { from: 'John', to: 'Max', amount: 8.57 },
    { from: 'John', to: 'Peter', amount: 51.84 },
  ]);

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
            transactions={transactions}
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
    let balances2 = [];
    const transac = [];

    members.map(member =>
      balances2.push({
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
      })
    );
    console.log(balances2[0]);

    while (balances2.filter(balance => balance.amount !== 0).length > 0) {
      console.log(balances2[0]);
      calculateTransactions(balances2);
    }
    setTransactions(transac);

    function calculateTransactions(inputArray) {
      inputArray.map(balance => balance.amount)[getMaxIndex(inputArray)] >
      -inputArray.map(balance => balance.amount)[getMinIndex(inputArray)]
        ? moveToTransactions(
            inputArray,
            getMaxIndex(inputArray),
            getMinIndex(inputArray),
            getMinIndex(inputArray),
            getMaxIndex(inputArray)
          )
        : moveToTransactions(
            inputArray,
            getMinIndex(inputArray),
            getMaxIndex(inputArray),
            getMaxIndex(inputArray),
            getMinIndex(inputArray)
          );
    }

    //filter auf amount ungleich 0
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

    function moveToTransactions(arr, indTo, indFrom, indLower, indHigher) {
      let amount = 0;

      arr[indLower.amount] > 0
        ? (amount = arr[indLower].amount)
        : (amount = arr[indLower].amount * -1);

      transac.push({
        from: arr[indFrom].name,
        to: arr[indTo].name,
        amount: amount,
      });
      balances2.splice(indLower, 1);
      arr[indHigher] &&
        (arr[indHigher.amount] > 0
          ? balances2.splice(indHigher, {
              name: arr[indHigher].name,
              amount: arr[indHigher].amount - amount,
            })
          : balances2.splice(indHigher, {
              name: arr[indHigher].name,
              amount: arr[indHigher].amount + amount,
            }));
    }
  }
}

//balances2.filter(balance => balance.amount !== 0).length > 0
