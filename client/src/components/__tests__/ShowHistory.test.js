import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ShowHistory from "../ShowHistory";

describe("ShowHistory UI", () => {
  afterAll(() => {
    cleanup();
  });

  test("should give correct result for convert to percentage eval", () => {
    const history = {
      _id: "6525b0e18dd5ae3eae65cea0",
      expression: "7*9",
      result: 63,
      createdAt: "2023-10-10T20:15:29.031Z",
      updatedAt: "2023-10-10T20:15:29.031Z",
    };

    render(<ShowHistory history={history} />);
    expect(screen.getByText(`${history.expression}`)).toBeInTheDocument();
    expect(screen.getByText(`=${history.result}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${new Date(history.createdAt).toLocaleString()}`)
    ).toBeInTheDocument();
  });
});
