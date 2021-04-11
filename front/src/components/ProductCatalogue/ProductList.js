import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props) {
  let products = props.products;

  return (
    <div>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}

export default ProductList;
