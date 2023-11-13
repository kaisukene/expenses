import './App.css';

import ExpenseItem from './components/ExpenseItem';

function App() {
  const expanses = [
    {
      date: new Date(2023, 0, 10),
      title: "New book",
      price: 30.99
    },
    {
      date: new Date(2023, 0, 10),
      title: "New jeans",
      price: 99.99
    }
  ];

  return (
    <div className="App">
      <ExpenseItem expenseData={expanses[0]}></ExpenseItem>
      <ExpenseItem expenseData={expanses[1]}></ExpenseItem>
    </div>
  );
}

export default App;
