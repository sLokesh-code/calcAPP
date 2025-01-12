import React from "react";

const InputValue = ({ inputValue }) => {
  return (
    <>
      {!inputValue.length && <span>0</span>}
      {inputValue.map((item, index) => {
        return item.type === "number" ? (
          <span data-testid="inputdisplay" key={index}>
            {item.label}
          </span>
        ) : (
          <span data-testid="inputdis" className="text-primary" key={index}>
            {item.label}
          </span>
        );
      })}
    </>
  );
};

export default InputValue;
