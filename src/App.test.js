import { render, getByLabelText } from '@testing-library/react';
import App from './App';

test('renders login page', () => {
  render(<App />);

  const container = document.querySelector('#login-form')

  const usernameElement = getByLabelText(container, /Username/i);
  expect(usernameElement).toBeInTheDocument();

  const passwordElement = getByLabelText(container, /Password/i);
  expect(passwordElement).toBeInTheDocument();
});
