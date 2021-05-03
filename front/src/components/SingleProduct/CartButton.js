import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { useCart } from "../../contexts/cart/useCart";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { CartIcon } from "../../assets/icons/CartIcon";
import { Counter } from "./Counter";

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCartBtn = styled.div`
  .card-counter {
    height: 48px;
    width: 130px;

    .control-button {
      padding: 10px 15px;
    }
  }

  .cart-button {
    padding-left: 30px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
          margin-right: 8px;
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;

export const ButtonText = styled.span`
  /* @media (max-width: 767px) {
    display: none;
  } */
`;

function CartButton(props) {
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const data = props.product;

  const handleAddClick = (e) => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeItem(data);
  };

  return (
    <>
      <ProductCartWrapper>
        <ProductCartBtn>
          {!isInCart(data.id) ? (
            <Button
              // className="cart-button"
              style={{ textTransform: "initial" }}
              color="primary"
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                handleAddClick(event);
              }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <CartIcon mr={2} />
              <ButtonText>
                <Typography>į krepšelį</Typography>
              </ButtonText>
            </Button>
          ) : (
            <Counter
              value={getItem(data.id).quantity || 0}
              onDecrement={handleRemoveClick}
              onIncrement={handleAddClick}
              // className="card-counter"
              variant="altHorizontal"
            />
          )}
        </ProductCartBtn>
      </ProductCartWrapper>
    </>
  );
}

export default CartButton;
