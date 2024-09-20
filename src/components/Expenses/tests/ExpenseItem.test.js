import { render, screen } from '@testing-library/react';
import ExpenseItem from '../ExpenseItem.js';

test('renders expense title and price', () => {
  render(<ExpenseItem title="Test Book" price="12.99" date={new Date(2023, 1, 1)} />);
  const titleElement = screen.getByText('Test Book');
  const priceElement = screen.getByText('12.99');
  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});

test('renders expense date correctly', () => {
  render(<ExpenseItem title="Test Book" price="12.99" date={new Date(2023, 1, 1)} />);
  const dateElement = screen.getByText('February');
  expect(dateElement).toBeInTheDocument();
});
