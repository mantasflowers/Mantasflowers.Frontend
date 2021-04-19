import React from "react";
import styled from "styled-components";
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  createStyles,
} from "@material-ui/core";

// Components

import Hero from "../../components/LandingPage/Hero";
import ProductGrid from "../../components/ProductCatalogue/ProductGrid";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background:
        "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%,rgba(253, 29, 29, 1) 49%,rgba(252, 176, 69, 1) 100%)",
      //height: "600px",
    },
    title: {
      margin: "80px 0",
      textAlign: "center",
    },
    content: {
      marginBottom: "80px",
      textAlign: "center",
    },
  })
);

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
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} direction="column">
        <Grid item className={classes.title}>
          <Typography variant="h3">Mantas Flowers</Typography>
        </Grid>
        <Grid item className={classes.content}>
          <Typography variant="body1">Inovative flower selling app</Typography>
        </Grid>
      </Grid>
      <ProductGrid products={products} />
    </>
  );
}

export default Index;
