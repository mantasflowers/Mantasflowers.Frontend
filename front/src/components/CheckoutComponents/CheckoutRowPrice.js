import { Typography, Box, makeStyles, createStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { CURRENCY } from "utils/constant";

const useStyles = makeStyles((theme) =>
  createStyles({
    checkoutRow: {
      color: "#422426",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "25px",
    },
    checkoutX: {
      margin: "0 12px",
    },
    itemCount: {
      fontWeight: "bold",
      color: "Black",
    },
  })
);

const CheckoutRowPrice = ({ productLabel, productPrice }) => {
  const classes = useStyles();

  return (
    <Box container className={classes.checkoutRow}>
      <Typography variant="body1" style={{ marginRight: 20 }}>
        {productLabel}
      </Typography>

      <Typography>
        {productPrice}
        {CURRENCY}
      </Typography>
    </Box>
  );
};

export default CheckoutRowPrice;
