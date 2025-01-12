import { render, screen } from '@testing-library/react';
import App from './App';

test("username input should be rendered", () => {
  render(<App />);
  const linkElement = screen.getByText(/calculator/i);
  expect(linkElement).toBeInTheDocument();
});
