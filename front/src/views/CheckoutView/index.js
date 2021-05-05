import CheckoutCard from "components/CheckoutComponents/CheckoutCard";
import CheckoutRow from "components/CheckoutComponents/CheckoutRow";

import {
  Grid,
  makeStyles,
  createStyles,
  Divider,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "130px 60px",
      height: "100%",
      justifyContent: "center",
    },
    cardsRoot: {
      padding: "20px",
      marginRight: "20px",
    },
    orderTitle: {
      fontWeight: "bold",
      textAlign: "center",
    },
    orderRoot: {
      paddingTop: "20px",
      width: "270px",
      [theme.breakpoints.down("lg")]: {
        width: "260px",
      },
      [theme.breakpoints.down("md")]: { width: "100%" },
    },
    orderDivider: {
      backgroundColor: "Grey",
      marginTop: "10px",
      marginBottom: "10px",
      height: "1px",
    },
    checkoutWrapper: {
      flexDirection: "column",
    },
  })
);

function CheckoutView() {
  const classes = useStyles();
  var itemCount = 2;

  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.cardsRoot}>
        <CheckoutCard></CheckoutCard>
      </Grid>

      <Grid item className={classes.orderRoot}>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.checkoutWrapper}
        >
          <Box item marginBottom="20px">
            <Typography className={classes.orderTitle}>Your order</Typography>
          </Box>

          <Grid item>
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
            <Divider variant="fullWidth" className={classes.orderDivider} />
          </Grid>

          <Grid item>
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
            <CheckoutRow
              productLabel="Grazi gele"
              productPrice={5}
              productAmount={itemCount}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CheckoutView;
