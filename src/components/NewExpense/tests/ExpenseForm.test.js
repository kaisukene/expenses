test('clears form after successful submission', () => {
  const saveExpenseDataHandler = jest.fn(); // Mock function to simulate onSaveExpenseData handler
  render(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />);

  const titleInput = screen.getByLabelText('Title');
  const amountInput = screen.getByLabelText('Amount');
  const dateInput = screen.getByLabelText('Date');

  // Simuleeri kasutaja sisestamist
  fireEvent.change(titleInput, { target: { value: 'New Book' } });
  fireEvent.change(amountInput, { target: { value: '15.99' } });
  fireEvent.change(dateInput, { target: { value: '2023-01-25' } });

  // Esita vorm
  const submitButton = screen.getByText('Add Expense');
  fireEvent.click(submitButton);

  // Kontrolli, kas vorm tühjeneb pärast esitamist
  expect(titleInput.value).toBe('');
  expect(amountInput.value).toBe('');
  expect(dateInput.value).toBe('');
});
