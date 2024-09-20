import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseForm from '../ExpenseForm';

test('displays error message when form is submitted with empty inputs', () => {
  const saveExpenseDataHandler = jest.fn();
  render(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />);
  
  const submitButton = screen.getByText('Add Expense');
  fireEvent.click(submitButton);
  
  const errorMessage = screen.getByText(/Please enter a valid title, amount and date/i);
  expect(errorMessage).toBeInTheDocument();
});

test('clears form after successful submission', () => {
  const saveExpenseDataHandler = jest.fn();
  render(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />);
  
  const titleInput = screen.getByLabelText('Title');
  const amountInput = screen.getByLabelText('Amount');
  const dateInput = screen.getByLabelText('Date');
  fireEvent.change(titleInput, { target: { value: 'New Book' } });
  fireEvent.change(amountInput, { target: { value: '19.99' } });
  fireEvent.change(dateInput, { target: { value: '2023-10-10' } });
  
  const submitButton = screen.getByText('Add Expense');
  fireEvent.click(submitButton);

  expect(saveExpenseDataHandler).toHaveBeenCalled();
  expect(titleInput.value).toBe('');
  expect(amountInput.value).toBe('');
  expect(dateInput.value).toBe('');
});
