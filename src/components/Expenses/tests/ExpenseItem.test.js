import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this to use toBeInTheDocument matcher
import ExpenseItem from '../ExpenseItem'; // Ensure correct component path

test('renders expense date correctly', () => {
  render(<ExpenseItem title="Test Book" price="12.99" date={new Date(2023, 1, 1)} />);

  const dateElement = screen.getByText('February');

  expect(dateElement).toBeInTheDocument(); // The matcher will work after importing jest-dom
});
