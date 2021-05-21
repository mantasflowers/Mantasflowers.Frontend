import React, { useState } from "react";
import {
  Card,
  Typography,
  makeStyles,
  Box,
  CardActionArea,
  Dialog,
  Button,
} from "@material-ui/core";

import ProductUpdateContent from "./ProductUpdateContent";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    backgroundColor: theme.palette.background.default,

    // padding: 10,
  },

  contentBox: {
    padding: 10,
  },

  productTitle: {
    fontFamily: "Noto Sans",
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  productStock: {
    fontFamily: "Noto Sans",
    color: theme.palette.primary.main,
  },
  productPrice: {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    color: theme.palette.primary.main,
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
  const [isOpen, setIsOpen] = useState(false);
  let product = props.product;

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
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
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      </div>
      <Dialog open={isOpen} onClose={handleClose} maxWidth="md" fullWidth>
        <ProductUpdateContent product={product} handleClose={handleClose} />
      </Dialog>
    </>
  );
}

export default ProductCard;
