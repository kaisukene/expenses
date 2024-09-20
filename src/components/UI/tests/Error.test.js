import { render, screen } from '@testing-library/react';
import Error from '../Error'; // Kontrolli, et tee oleks õige

test('renders error message and title', () => {
  const div = document.createElement('div');
  document.body.appendChild(div); // Lisa DOM element

  render(<Error title="Error" message="Something went wrong" onConfirm={() => {}} />, { container: div });

  const titleElement = screen.getByText('Error');
  const messageElement = screen.getByText('Something went wrong');

  expect(titleElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();

  // Eemalda DOM element pärast testi
  document.body.removeChild(div);
});
