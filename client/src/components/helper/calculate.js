import { createHistory } from "./apiHelper";

export const handleKeyButtonPress = (btn, buttonsRef) => {
  if (btn === "=") {
    buttonsRef.current[btn].click();

    buttonsRef.current[btn].classList.add("ring-2", "ring-blue-500");

    setTimeout(() => {
      buttonsRef.current[btn].classList.remove("ring-2", "ring-blue-500");
    }, 200);
  }
};

export const handleBackspace = (inputValue, setInputValue) => {
  if (inputValue.length > 0) {
    const lastInputValue = inputValue[inputValue.length - 1];
    if (
      lastInputValue.type === "number" &&
      lastInputValue.value.toString().length > 1
    ) {
      // if last input value is number and more than 1 remove last charc
      const newInputValue = {
        ...lastInputValue,
        value: lastInputValue.value.slice(0, -1),
        label: lastInputValue.value.slice(0, -1),
      };
      // update input
      setInputValue(prev => [...prev.slice(0, -1), newInputValue]);
    } else {
      // remove whole last value
      setInputValue(prev => [...prev.slice(0, -1)]);
    }
  }
};

export const handleButtonType = (
  button,
  inputValue,
  lastInputValue,
  setInputValue,
  setResult,
  setCalculated,
  calculated
) => {
  let operation;

  switch (button.type) {
    case "number":
      handleNumber(
        button.value,
        lastInputValue,
        setInputValue,
        button,
        calculated
      );
      break;
    case "operator":
      handleOperator(inputValue, lastInputValue, setInputValue, button);
      break;
    case "plusminus":
      operation = nums => -nums;
      handleUnaryOperations(operation, lastInputValue, setInputValue);
      break;
    case "percent":
      operation = nums => nums / 100;
      handleUnaryOperations(operation, lastInputValue, setInputValue);
      break;
    case "dot":
      handleDot(lastInputValue, setInputValue);
      break;
    case "clear":
      handleClear(setInputValue, setResult, setCalculated);
      break;
    case "equal":
      handleEqual(inputValue, setInputValue, setResult, setCalculated);
      break;
    default:
      console.error(`Unhandled button type: ${button.type}`);
      break;
  }
};

//handle unanary operations
const handleUnaryOperations = (operation, lastInputValue, setInputValue) => {
  if (lastInputValue && lastInputValue.type === "number") {
    // perform the function on last value
    const newInputValue = {
      ...lastInputValue,
      value: operation(lastInputValue.value),
      label: operation(lastInputValue.value),
    };

    // update the value in inputValue array
    setInputValue(prev => [...prev.slice(0, -1), newInputValue]);
  }
};

// handle Numbers
const handleNumber = (
  value,
  lastInputValue,
  setInputValue,
  button,
  calculated
) => {
  if (lastInputValue && lastInputValue.type === "number") {
    // if last value is a number add in the last value
    let newValue = lastInputValue.value;
    if (lastInputValue.value.toString().length < 15) {
      // add a limit of 15 characters
      newValue = calculated ? value : lastInputValue.value + value;
    }
    const newInputValue = {
      ...lastInputValue,
      value: newValue,
      label: newValue,
    };

    // update new value
    setInputValue(prev => [...prev.slice(0, -1), newInputValue]);
  } else {
    // if last value is not a number then add current as a new value
    setInputValue(prev => [...prev, button]);
  }
};

const handleOperator = (inputValue, lastInputValue, setInputValue, button) => {
  if (inputValue.length > 0) {
    // only allow operator if input value not empty
    // if last value is operator replace it
    if (lastInputValue && lastInputValue.type === "operator") {
      const newInputValue = {
        ...lastInputValue,
        value: button.value,
        label: button.label,
      };
      setInputValue(prev => [...prev.slice(0, -1), newInputValue]);
    } else {
      // restrict calc to two values
      if (!(inputValue.length > 2)) {
        // add operator
        setInputValue(prev => [...prev.slice(0, -1), lastInputValue, button]);
      }
    }
  }
};

const handleDot = (lastInputValue, setInputValue) => {
  if (lastInputValue && lastInputValue.type === "number") {
    // if last value is number add dot
    let newValue = lastInputValue.value;
    if (!lastInputValue.value.includes(".")) {
      // if dot does not already exist add one
      newValue = lastInputValue.value + ".";
    }

    const newInputValue = {
      ...lastInputValue,
      value: newValue,
      label: newValue,
    };

    // update values
    setInputValue(prev => [...prev.slice(0, -1), newInputValue]);
  } else if (!lastInputValue || lastInputValue.type !== "number") {
    // if there is no last value or its not a number
    const newInputValue = { value: "0.", label: "0.", type: "number" };

    setInputValue(prev => [...prev, newInputValue]);
  }
};

const handleClear = (setInputValue, setResult, setCalculated) => {
  setInputValue([]);
  setResult(0);
  setCalculated(false);
};

const handleEqual = (inputValue, setInputValue, setResult, setCalculated) => {
  if (inputValue.length > 0) {
    calculate(inputValue, setInputValue, setResult, setCalculated);
  }
};

const calculate = async (
  inputValue,
  setInputValue,
  setResult,
  setCalculated
) => {
  const inputValueToCalculate = [...inputValue];

  const lastInputValue =
    inputValueToCalculate[inputValueToCalculate.length - 1];

  // check if last value is operator
  if (lastInputValue && lastInputValue.type === "operator") {
    inputValueToCalculate.pop();
    setInputValue(inputValueToCalculate);
  }

  // create expression from input value
  const expression = inputValueToCalculate
    .map(item => {
      // remove leading zero
      if (item.type === "number") {
        return Number(item.value);
      }
      return item.value;
    })
    .join("");
  // save the expression

  // solve expression
  try {
    const newResult = eval(expression);
    if (isNaN(newResult) || !isFinite(newResult)) {
      // if error
      setResult("NaN");
      throw new Error("invalid expression");
    }
    setResult(newResult);
    setCalculated(true);
    setInputValue([]);

    //save calculation history
    const payload = {
      expression,
      result: newResult,
    };
    await createHistory(payload);
  } catch (err) {
    console.log("err: ", err.message);
  }
};
