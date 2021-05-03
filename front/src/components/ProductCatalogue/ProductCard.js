import React from "react";
import {
  Card,
  Typography,
  makeStyles,
  Box,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import CartButton from "../../components/SingleProduct/CartButton";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    backgroundColor: "#ffffff",

    // padding: 10,
  },

  contentBox: {
    padding: 10,
  },

  productTitle: {
    fontFamily: "Noto Sans",
    textAlign: "center",
    color: theme.palette.text.primary,
  },

  productStock: {
    fontFamily: "Noto Sans",
    color: theme.palette.text.primary,
  },
  productPrice: {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  },
  productImageBox: {
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
}));

function ProductCard(props) {
  const classes = useStyles();

  let product = props.product;

  return (
    <Link
      style={{ textDecoration: "none", zIndex: 1 }}
      to={`/product-information/${product.id}`}
    >
      <Card className={classes.mainCard}>
        <CardActionArea>
          <Box className={classes.productImageBox} mb={1}>
            <img
              src={product.thumbnailPictureUrl}
              alt="rose"
              className={classes.productImage}
            />
          </Box>
          <Box className={classes.contentBox}>
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
                <CartButton product={product} />
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ProductCard;
