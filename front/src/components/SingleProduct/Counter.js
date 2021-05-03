import React from "react";
import { Plus, Minus } from "../../assets/icons/PlusMinus";
import { CounterBox, CounterButton, CounterValue } from "./CounterStyle";

export const Counter = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className,
}) => {
  return (
    <CounterBox variant={variant} className={className}>
      <CounterButton
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          onDecrement(event);
        }}
        onMouseDown={(event) => event.stopPropagation()}
        variant={variant}
        className="control-button"
      >
        <Minus />
      </CounterButton>
      <CounterValue>{value}</CounterValue>
      <CounterButton
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          onIncrement(event);
        }}
        onMouseDown={(event) => event.stopPropagation()}
        variant={variant}
        className="control-button"
      >
        <Plus />
      </CounterButton>
    </CounterBox>
  );
};
