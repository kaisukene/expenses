import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import for toBeInTheDocument
import { Expenses } from '../Expenses'; // Ensure the correct path

test('renders "No expenses found" when no expenses are available', () => {
  render(<Expenses expenses={[]} />);
  const noExpensesElement = screen.getByText(/No expenses found/i);
  expect(noExpensesElement).toBeInTheDocument();
});

test('filters expenses by year', () => {
  // Sample props with expenses to test the filtering functionality
  const expenses = [
    { id: 'e1', title: 'Book', price: 30.99, date: new Date(2023, 0, 10) },
    { id: 'e2', title: 'Laptop', price: 799.99, date: new Date(2024, 3, 12) }
  ];

  // Render the Expenses component with the sample data
  render(<Expenses expenses={expenses} />);

  // Find the select element by its associated label
  const selectElement = screen.getByLabelText(/Filter by year/i);

  // Simulate selecting the year 2023
  fireEvent.change(selectElement, { target: { value: '2023' } });

  // Check if the filtered expense is displayed
  const filteredItem = screen.getByText(/Book/i);
  expect(filteredItem).toBeInTheDocument();

  // Simulate selecting the year 2024
  fireEvent.change(selectElement, { target: { value: '2024' } });

  // Check if the expense for 2024 is displayed
  const filteredItem2024 = screen.getByText(/Laptop/i);
  expect(filteredItem2024).toBeInTheDocument();
});
