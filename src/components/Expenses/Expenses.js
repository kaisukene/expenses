import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023'); // Initial year

    const yearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // Filter expenses based on the selected year
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler} selectedYear={filteredYear} />
            <ExpenseItem expenseData={filteredExpenses[0]} />
            <ExpenseItem expenseData={filteredExpenses[1]} />
        </Card>
    );
}

export default Expenses;
