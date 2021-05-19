import React from "react";
import { CURRENCY } from "utils/constant";
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Total,
  Weight,
} from "../../features/carts/CartItem/CartItemStyle";

const CartItem = ({ data }) => {
  const { name, thumbnailPictureUrl, unitPrice, quantity } = data;
  const displayPrice = unitPrice;
  return (
    <ItemBox>
      <Image src={thumbnailPictureUrl} />
      <Information>
        <Name>{name}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>kiekis: {quantity}</Weight>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * displayPrice).toFixed(2)}
      </Total>
    </ItemBox>
  );
};

export default CartItem;
