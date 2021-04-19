import React from "react";
import {
  Card,
  Typography,
  makeStyles,
  Grid,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import classNames from "classnames";

import CartButton from "../../components/SingleProduct/CartButton";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    backgroundColor: "#ffffff",
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
    <Card className={classNames(classes.mainCard, props.className)}>
      <CardHeader
        title={
          <Typography
            variant="h4"
            component="h2"
            className={classes.productTitle}
          >
            {product.name}
          </Typography>
        }
      />
      <CardContent>
        <Grid container direction="column">
          <Grid item>
            <Typography className={classes.productStock}>
              Liko: {product.leftInStock}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" justify="space-between">
              <Typography className={classes.productPrice}>
                {product.price}€
              </Typography>
              <CartButton counter={0} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
