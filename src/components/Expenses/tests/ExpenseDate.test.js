import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import ExpenseDate from '../ExpenseDate'; // Ensure this path is correct

test('renders correct date format', () => {
  render(<ExpenseDate date={new Date('2023-09-15')} />);

  const monthElement = screen.getByText('September');
  const dayElement = screen.getByText('15');
  const yearElement = screen.getByText('2023');

  expect(monthElement).toBeInTheDocument(); // Corrected matcher usage
  expect(dayElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
});
