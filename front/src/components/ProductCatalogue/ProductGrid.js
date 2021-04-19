import React from "react";
import { Grid, createStyles, makeStyles, Box } from "@material-ui/core";

// Components

import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: "20px",
      padding: "0 20px",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
    product: {
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        minWidth: "260px",
      },
    },
  })
);

function ProductGrid(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.container}>
      {props.products.map((product) => (
        <Grid item md={3}>
          <ProductCard
            className={classes.product}
            product={product}
            key={product.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductGrid;
