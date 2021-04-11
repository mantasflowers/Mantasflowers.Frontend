import React from "react";
import { Card, Typography, makeStyles, Box } from "@material-ui/core";

import CartButton from "../../components/SingleProduct/CartButton";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    backgroundColor: "#ffffff",

    padding: 10,
  },

  productTitle: {
    fontFamily: "Noto Sans",
    textAlign: "center",
    color: "#000",
  },
  productStock: {
    fontFamily: "Noto Sans",
    color: "#000",
  },
  productPrice: {
    fontFamily: "Noto Sans",
    color: "red",
    fontWeight: "bold",
  },
}));

function ProductCard(props) {
  const classes = useStyles();

  let product = props.product;

  return (
    <Card className={classes.mainCard}>
      <Box mb={1}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.productTitle}
        >
          {product.name}
        </Typography>
      </Box>

      <Box mb={1}>
        <Typography className={classes.productStock}>
          Liko: {product.leftInStock}
        </Typography>
      </Box>

      <Box
        mb={1}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
        }}
      >
        <Typography className={classes.productPrice}>
          {product.price}€
        </Typography>

        <Box style={{ width: "50%" }}>
          <CartButton counter={0} />
        </Box>
      </Box>
    </Card>
  );
}

export default ProductCard;
