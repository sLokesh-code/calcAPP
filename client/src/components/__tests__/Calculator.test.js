import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculation UI", () => {
   afterAll(() => {
     cleanup();
   });

  test("should have 19 buttons in the calculator componenets", async () => {
    render(<Calculator />);
    const buttonCount = await screen.findAllByRole("button");
    expect(buttonCount).toHaveLength(19);
  });

  test("should give correct result for addition eval", () => {
    const num = 7;
    const num2 = 7;
    const expectedResult = num + num2;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const num2Button = screen.getByRole("button", { name: num2 });
    const operatorButton = screen.getByTestId("plus");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(num2Button);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });

  test("should give correct result for substraction eval", () => {
    const num = 7;
    const num2 = 5;
    const expectedResult = num - num2;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const num2Button = screen.getByRole("button", { name: num2 });
    const operatorButton = screen.getByTestId("minus");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(num2Button);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });

  test("should give correct result for multiply eval", () => {
    const num = 7;
    const num2 = 5;
    const expectedResult = num * num2;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const num2Button = screen.getByRole("button", { name: num2 });
    const operatorButton = screen.getByTestId("multiply");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(num2Button);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });

  test("should give correct result for divide eval", () => {
    const num = 4;
    const num2 = 2;
    const expectedResult = num / num2;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const num2Button = screen.getByRole("button", { name: num2 });
    const operatorButton = screen.getByTestId("divide");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(num2Button);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });

  test("should give correct result for convert to percentage eval", () => {
    const num = 7;
    const expectedResult = num / 100;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const operatorButton = screen.getByTestId("percent");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });

  test("should give correct result for convert to plusminus eval", () => {
    const num = 7;
    const expectedResult = num * -1;
    render(<Calculator />);
    const numButton = screen.getByRole("button", { name: num });
    const operatorButton = screen.getByTestId("plusminus");
    const equalButton = screen.getByTestId("equal");

    fireEvent.click(numButton);
    fireEvent.click(operatorButton);
    fireEvent.click(equalButton);
    const result = screen.getByTestId("result").textContent;
    expect(result).toEqual(expectedResult.toString());
  });
});