import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  PriceBox,
  NoProductMsg,
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
} from "./CartStyle";
import { Typography } from "@material-ui/core";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { ShoppingBagLarge } from "../../assets/icons/ShoppingBagLarge";
import { NoCartBag } from "../../assets/icons/NoCartBag";
import { CURRENCY } from "../../utils/constant";
// import { useLocale } from "contexts/language/language.provider";

import { Scrollbar } from "../../components/Scrollbar/Scrollbar";
import { useCart } from "../../contexts/cart/useCart";
import { CartItem } from "./CartItem/CartItem";
// import Coupon from "features/coupon/coupon";

const Cart = ({ style, className, onCloseBtnClick, scrollbarHeight }) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
  } = useCart();
  const [hasCoupon, setCoupon] = useState(false);

  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width="19px" height="24px" />
          <span>{cartItemsCount}</span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbar className="cart-scrollbar">
        <ItemWrapper className="items-wrapper">
          {!!cartItemsCount ? (
            items.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
                onRemove={() => removeItemFromCart(item)}
                data={item}
              />
            ))
          ) : (
            <>
              <NoProductImg>
                <NoCartBag />
              </NoProductImg>
              <NoProductMsg>
                <Typography>Prekių nerasta</Typography>
              </NoProductMsg>
            </>
          )}
        </ItemWrapper>
      </Scrollbar>

      <CheckoutButtonWrapper>
        {/* <PromoCode>
          {!coupon?.discountInPercent ? (
            <>
              {!hasCoupon ? (
                <button onClick={() => setCoupon((prev) => !prev)}>
                  <FormattedMessage
                    id="specialCode"
                    defaultMessage="Have a special code?"
                  />
                </button>
              ) : (
                <CouponBoxWrapper>
                  <Coupon
                    disabled={!items.length}
                    style={{
                      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.06)",
                    }}
                  />
                </CouponBoxWrapper>
              )}
            </>
          ) : (
            <CouponCode>
              <FormattedMessage
                id="couponApplied"
                defaultMessage="Coupon Applied"
              />
              <span>{coupon.code}</span>
            </CouponCode>
          )}
        </PromoCode> */}

        {cartItemsCount !== 0 ? (
          <Link href="/checkout" style={{ textDecoration: "none" }}>
            <CheckoutButton onClick={onCloseBtnClick}>
              <>
                <Title>
                  <Typography>Sumokėti</Typography>
                </Title>
                <PriceBox>
                  {CURRENCY}
                  {calculatePrice()}
                </PriceBox>
              </>
            </CheckoutButton>
          </Link>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <Typography>Sumokėti</Typography>
              </Title>
              <PriceBox>
                {CURRENCY}
                {calculatePrice()}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
