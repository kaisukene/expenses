import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

export const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState('2023')

  const addExpenseFilterHandler = (expenseFilter) => {
    console.log('In Expenses.js')
    console.log(expenseFilter)
    setExpenseFilter(expenseFilter)
  }

  const filteredExpenses = props.expenses.filter(
    (expense) => {
      return expense.date.getFullYear().toString() === expenseFilter
    }
  )

  return (
    <Card className='expenses'>
        <ExpensesFilter onAddExpenseFilter={addExpenseFilterHandler}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  )
}
