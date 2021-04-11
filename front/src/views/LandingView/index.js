import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

// Components

import Hero from "../../components/LandingPage/Hero";
import ProductGrid from "../../components/ProductCatalogue/ProductGrid";

const Inner = styled.div`
  max-width: 1140;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  position: relative;
`;

const products = [
  {
    name: "Rožė",
    shortDescription: "Graži raudonos spalvos rožė tinkanti valentino dienai",
    category: "flower",
    thumbnailPictureUrl: "",
    price: 2.99,
    leftInStock: 123,
    discountPercent: 0.2,
  },
  {
    name: "Tulpė",
    shortDescription: "Graži raudonos spalvos tulpė tinkanti valentino dienai",
    category: "flower",
    thumbnailPictureUrl: "",
    price: 3.99,
    leftInStock: 123,
    discountPercent: 0.2,
  },
  {
    name: "Puokštė",
    shortDescription:
      "Graži raudonos spalvos puokštė tinkanti valentino dienai",
    category: "bouquet",
    thumbnailPictureUrl: "",
    price: 15.99,
    leftInStock: 123,
  },
  {
    name: "Rožė",
    shortDescription: "Graži raudonos spalvos rožė tinkanti valentino dienai",
    category: "flower",
    thumbnailPictureUrl: "",
    price: 2.99,
    leftInStock: 123,
    discountPercent: 0.2,
  },
  {
    name: "Rožė",
    shortDescription: "Graži raudonos spalvos rožė tinkanti valentino dienai",
    category: "flower",
    thumbnailPictureUrl: "",
    price: 2.99,
    leftInStock: 123,
    discountPercent: 0.2,
  },
  {
    name: "Rožė",
    shortDescription: "Graži raudonos spalvos rožė tinkanti valentino dienai",
    category: "flower",
    thumbnailPictureUrl: "",
    price: 2.99,
    leftInStock: 123,
    discountPercent: 0.2,
  },
];

function Index() {
  return (
    <>
      <Hero />
      <Inner>
        <Box style={{ marginTop: "600px" }}>
          <ProductGrid products={products} />
        </Box>
      </Inner>
    </>
  );
}

export default Index;
