import React from "react";
import { Counter } from "../../../components/SingleProduct/Counter";
import { CloseIcon } from "../../../assets/icons/CloseIcon";
import { CURRENCY } from "../../../utils/constant";
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from "./cart-item.style";

export const TextCartItem = ({ data, onDecrement, onIncrement, onRemove }) => {
  const { name, price, salePrice, unit, quantity } = data;
  const displayPrice = salePrice ? salePrice : price;
  // const totalPrice = quantity * displayPrice;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      {/* <Image src={image} /> */}
      <Information>
        <Name>{name}</Name>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * displayPrice).toFixed(2)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
