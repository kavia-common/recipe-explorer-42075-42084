import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with Recipe Explorer title', () => {
  render(<App />);
  const heading = screen.getByText(/Recipe Explorer/i);
  expect(heading).toBeInTheDocument();
});
