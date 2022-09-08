import { render, screen } from '@testing-library/react';
import App from './App';
import Router from './components/Router/Router';

test('renders learn react link', () => {
  render(<Router />);
  const linkElement = screen.getByText(/Привет/i);
  expect(linkElement).toBeInTheDocument();
});
