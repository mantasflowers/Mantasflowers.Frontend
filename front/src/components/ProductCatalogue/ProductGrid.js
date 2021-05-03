import React from "react";
import styled from "styled-components";

// Components

import ProductCard from "./ProductCard";

const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  max-width: 1140px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductDiv = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
`;

function ProductGrid(props) {
  return (
    <ProductDiv>
      <ProductList>
        {props.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductList>
    </ProductDiv>
  );
}

export default ProductGrid;
