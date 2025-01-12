import {
  Divide,
  Dot,
  Equals,
  Minus,
  Percent,
  Plus,
  PlusMinus,
  X,
} from "@phosphor-icons/react";

export const Buttons = {
  row1: [
    {
      value: "AC",
      label: "AC",
      className: "bg-light-300 dark:bg-dark-300",
      type: "clear",
    },
    {
      value: "+/-",
      label: <PlusMinus size={25} />,
      className: "bg-light-300 dark:bg-dark-300",
      type: "plusminus",
      datatestid: "plusminus",
    },
    {
      value: "%",
      label: <Percent size={25} />,
      className: "bg-light-300 dark:bg-dark-300",
      type: "percent",
      datatestid: "percent",
    },
    {
      value: "/",
      label: <Divide size={25} />,
      className: "bg-light-300 dark:bg-dark-300",
      type: "operator",
      datatestid: "divide",
    },
  ],
  row2: [
    { value: "7", label: "7", type: "number" },
    { value: "8", label: "8", type: "number" },
    { value: "9", label: "9", type: "number" },
    {
      value: "*",
      label: <X size={25} />,
      className: "!bg-primary text-white",
      type: "operator",
      datatestid: "multiply",
    },
  ],
  row3: [
    { value: "4", label: "4", type: "number" },
    { value: "5", label: "5", type: "number" },
    { value: "6", label: "6", type: "number" },
    {
      value: "-",
      label: <Minus size={25} />,
      className: "!bg-primary text-white",
      type: "operator",
      datatestid: "minus",
    },
  ],
  row4: [
    { value: "1", label: "1", type: "number" },
    { value: "2", label: "2", type: "number" },
    { value: "3", label: "3", type: "number" },
    {
      value: "+",
      label: <Plus size={25} />,
      className: "!bg-primary text-white",
      type: "operator",
      datatestid: "plus",
    },
  ],
  row5: [
    { value: "0", label: "0", className: "col-span-2", type: "number" },
    { value: ".", label: <Dot size={25} />, type: "dot" },
    {
      value: "=",
      label: <Equals size={25} />,
      className: "!bg-primary text-white",
      type: "equal",
      datatestid: "equal",
    },
  ],
};
