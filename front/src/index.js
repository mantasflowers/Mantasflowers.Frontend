import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { CartProvider } from "./contexts/cart/useCart";
import { configureStore } from "./store";
import "react-perfect-scrollbar/dist/css/styles.css";
import "overlayscrollbars/css/OverlayScrollbars.css";

const store = configureStore();

ReactDOM.render(
  <CartProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CartProvider>,
  document.getElementById("root")
);
