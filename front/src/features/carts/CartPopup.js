import React from "react";
import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Cart from "./Cart";
import CartPopupButton, {
  BoxedCartButton,
} from "../../components/CartComponents/CartPopupButton";
import { CURRENCY } from "../../utils/constant";
import { CartSlidePopup } from "./CartStyle";
import { useCart } from "../../contexts/cart/useCart";
const { openModal, closeModal } = require("@redq/reuse-modal");

const CartPopupStyle = createGlobalStyle`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: ${themeGet("shadows.big", "0 21px 36px rgba(0, 0, 0, 0.16)")};
    transform-origin: bottom right;

    @media (max-width: 580px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: ${themeGet("colors.white", "#ffffff")};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

const CartPopUp = ({ deviceType: { mobile, tablet, desktop } }) => {
  const { isOpen, cartItemsCount, toggleCart, calculatePrice } = useCart();

  const handleModal = () => {
    openModal({
      show: true,
      config: {
        className: "cartPopup",
        width: "375px",
        height: "300px",
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40,
        },
      },
      closeOnClickOutside: true,
      component: Cart,
      closeComponent: () => <div />,
      componentProps: { onCloseBtnClick: closeModal, scrollbarHeight: 330 },
    });
  };

  let cartSliderClass = isOpen === true ? "cartPopupFixed" : "";

  return (
    <>
      {mobile ? (
        <>
          <CartPopupStyle />
          <CartPopupButton
            className="product-cart"
            itemCount={cartItemsCount}
            price={calculatePrice()}
            pricePrefix="€"
            onClick={handleModal}
          />
        </>
      ) : (
        <>
          <CartSlidePopup className={cartSliderClass}>
            {isOpen && (
              <Cart onCloseBtnClick={toggleCart} scrollbarHeight="100vh" />
            )}
          </CartSlidePopup>

          <BoxedCartButton
            className="product-cart"
            itemCount={cartItemsCount}
            price={calculatePrice()}
            pricePrefix={CURRENCY}
            onClick={toggleCart}
          />
        </>
      )}
    </>
  );
};

export default CartPopUp;
