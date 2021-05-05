import { Typography, Grid, makeStyles, createStyles } from "@material-ui/core";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    checkoutRow: {
      color: "Grey",
      flexDirection: "row",
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

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    setTotalPrice((productAmount * productPrice).toFixed(2));
  }, []);

  return (
    <Grid container className={classes.checkoutRow}>
      <Grid item xs={9}>
        <Grid container>
          <Typography variant="body1" className={classes.itemCount}>
            {productAmount}
          </Typography>
          <Typography variant="body1" className={classes.checkoutX}>
            x
          </Typography>
          <Typography variant="body1">{productLabel}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography>{totalPrice}$</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutRow;
