import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The World of Disney title', () => {
  render(<App />);
  const titleElement = screen.getByText(/The World of Disney/i);
  expect(titleElement).toBeInTheDocument();
});
