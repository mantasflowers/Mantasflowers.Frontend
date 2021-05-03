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
} from "./CartItemStyle";

export const CartItem = ({ data, onDecrement, onIncrement, onRemove }) => {
  const { name, thumbnailPictureUrl, price, leftInStock, quantity } = data;
  const displayPrice = price;
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={thumbnailPictureUrl} />
      <Information>
        <Name>{name}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>
          {quantity} X {leftInStock}
        </Weight>
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
