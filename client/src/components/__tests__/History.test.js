import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import History from "../History";

describe("History UI", () => {
  afterAll(() => {
    cleanup();
  });

  test("should give display content in history page", () => {
    render(<History />);
    expect(
      screen.getByText("View calculation history here...")
    ).toBeInTheDocument();
  });
});
