import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    "id" : "e1",
    "date" : new Date(2023, 0, 10),
    "title" : "New Book",
    "price" : "30.99"
  },
  {
    "id" : "e2",
    "date" : new Date(2023, 0, 10),
    "title" : "New Jeans",
    "price" : "35.99"
  },
  {
    "id": "e3",
    "date": new Date(2023, 9, 23),
    "title": "New TV",
    "price": "399.99"
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
    setExpenses((previousExpenses) => {return [expense, ...previousExpenses]})
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
