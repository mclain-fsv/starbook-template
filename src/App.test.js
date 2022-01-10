import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Starbook text logo', () => {
  render(<App />);
  const logo = screen.getByText(/Starbook/i);
  expect(logo).toBeInTheDocument();
});
