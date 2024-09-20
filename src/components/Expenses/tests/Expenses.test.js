import { render, screen } from '@testing-library/react';
import { Expenses } from '../Expenses';

test('renders "No expenses found" when no expenses are available', () => {
  render(<Expenses expenses={[]} />);
  const noExpensesElement = screen.getByText(/No expenses found/i);
  expect(noExpensesElement).toBeInTheDocument();
});

test('filters expenses by year', () => {
  const dummyExpenses = [
    { id: 'e1', date: new Date(2023, 0, 10), title: 'Book', price: '30.99' },
    { id: 'e2', date: new Date(2022, 0, 10), title: 'Jeans', price: '35.99' },
  ];
  render(<Expenses expenses={dummyExpenses} />);
  
  // Simuleeri aasta valikut
  const selectElement = screen.getByLabelText(/Filter by year/i);
  selectElement.value = '2023';
  
  const filteredItem = screen.getByText(/Book/i);
  expect(filteredItem).toBeInTheDocument();
});
