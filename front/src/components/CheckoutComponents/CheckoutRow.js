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

const CheckoutRow = ({ productAmount, productLabel, productPrice }) => {
  const classes = useStyles();

  return (
    <Box container className={classes.checkoutRow}>
      <Box style={{ display: "flex" }}>
        <Typography variant="body1" className={classes.itemCount}>
          {productAmount}
        </Typography>
        <Typography variant="body1" className={classes.checkoutX}>
          x
        </Typography>

        <Typography variant="body1" style={{ marginRight: 5 }}>
          {productLabel}
        </Typography>
      </Box>
      <Box>
        <Typography>
          {productPrice}
          {CURRENCY}
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckoutRow;
