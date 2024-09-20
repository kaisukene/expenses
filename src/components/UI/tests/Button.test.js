import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('calls onClick handler when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);
  
  const buttonElement = screen.getByText('Click Me');
  fireEvent.click(buttonElement);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
