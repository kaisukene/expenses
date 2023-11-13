import './Expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  console.log(props);

  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseData={expense} />
      ))}
    </div>
  );
}

export default Expenses;
