import { render, screen } from '@testing-library/react';
import Error from '../Error'; // Veendu, et tee on õige

test('renders error message', () => {
  render(<Error title="Test Title" message="Test Message" onConfirm={() => {}} />);
  
  const titleElement = screen.getByText(/Test Title/i);
  const messageElement = screen.getByText(/Test Message/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(messageElement).toBeInTheDocument();
});
