import React from 'react';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 0, 10),
      title: 'New book',
      price: 30.99,
    },
    {
      id: 'e2',
      date: new Date(2023, 0, 10),
      title: 'New jeans',
      price: 99.99,
    },
  ];

  return (
    <div className="App">
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
