import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("should have both calculator and history componenets", () => {
  render(<Home />);
  const linkElement = screen.getByText(/calculator/i);
  const linkElement2 = screen.getByText(/history/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
