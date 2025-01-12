import { ArrowUUpLeft } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Buttons } from "./helper/buttons";
import {
  handleBackspace,
  handleButtonType,
  handleKeyButtonPress,
} from "./helper/calculate";
import InputValue from "./InputValue";

const Calculator = () => {
  const buttonsRef = useRef([]);
  const backspaceBtnRef = useRef(null);
  const [inputValue, setInputValue] = useState([]);
  const [result, setResult] = useState(0);
  const [calculated, setCalculated] = useState(false);

  const handleButtonClick = value => {
    if (calculated && value !== "=") {
      setInputValue([]);
      // setResult(0);
      setCalculated(false);
    }

    // //Get Clicked Button Details
    const button = Object.values(Buttons)
      .flat()
      .find(item => item.value === value);

    let resultValue;
    if (calculated) {
      resultValue = result.toString();
    }

    const lastInputValue = calculated
      ? { value: resultValue, label: resultValue, type: "number" }
      : inputValue[inputValue.length - 1];

    handleButtonType(
      button,
      inputValue,
      lastInputValue,
      setInputValue,
      setResult,
      setCalculated,
      calculated
    );
  };

  const handleKeyPress = e => {
    if (buttonsRef.current[e.key]) handleKeyButtonPress(e.key, buttonsRef);

    if (e.key === "Backspace")
      backspaceBtnRef.current && backspaceBtnRef.current.click();

    if (e.key === "Enter") handleKeyButtonPress("=", buttonsRef);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <div className="mb-2 px-4">
        <div className="flex min-h-[9rem] flex-col items-end justify-end py-4 text-right">
          <span
            data-testid="result"
            className="w-full text-6xl text-textDark dark:text-white"
          >
            {result}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center bg-light-100 px-4 py-2 dark:bg-dark-100">
        <span
          className="mr-3 cursor-pointer hover:text-black dark:hover:text-white"
          ref={backspaceBtnRef}
          onClick={() => handleBackspace(inputValue, setInputValue)}
        >
          <ArrowUUpLeft />
        </span>
        <div className="flex w-full items-center overflow-x-auto text-2xl font-extralight [&>*:first-child]:ml-auto">
          <InputValue inputValue={inputValue} />
        </div>
      </div>
      {/* key pads */}
      <div className="flex items-center justify-between p-4">
        <div className="flex w-full flex-col gap-1 rounded-lg">
          {Object.keys(Buttons).map(key => (
            <div className="grid grid-cols-4 gap-1" key={key}>
              {Buttons[key].map(item => (
                <Button
                  key={item.value}
                  dataid={item.datatestid}
                  className={"w-full " + item.className || ""}
                  ref={button => {
                    buttonsRef.current[item.value] = button;
                  }}
                  onClick={() => handleButtonClick(item.value)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calculator;
