import { render, screen } from '@testing-library/react';
import ExpenseDate from '../ExpenseDate';

test('renders correct date format', () => {
  render(<ExpenseDate date={new Date(2023, 9, 23)} />);
  const monthElement = screen.getByText('October');
  const dayElement = screen.getByText('23');
  const yearElement = screen.getByText('2023');
  
  expect(monthElement).toBeInTheDocument();
  expect(dayElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
});
