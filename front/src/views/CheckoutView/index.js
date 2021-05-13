import CheckoutCard from "components/CheckoutComponents/CheckoutCard";
import CheckoutRow from "components/CheckoutComponents/CheckoutRow";

import {
  Grid,
  makeStyles,
  createStyles,
  Divider,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "130px 60px",
      height: "100%",
      flexDirection: "row",
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
      maxWidth: "270px",
      [theme.breakpoints.down("lg")]: {
        width: "260px",
        justifyContent: "center",
        maxWidth: "unset",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        justifyContent: "center",
      },
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
    formWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      border: 1,
      color: "White",
    },
    form: {
      flexDirection: "column",
      display: "flex",
    },
    formField: {
      width: "400px",
      marginBottom: "20px",
    },
    text: {
      textTransform: "none",
    },
    paper: {
      padding: "15px",
      width: "430px",
    },
    dialogTitle: {
      marginBottom: "20px",
    },
  })
);

function CheckoutView() {
  const classes = useStyles();
  var itemCount = 2;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.cardsRoot}>
        <Grid container spacing={6} direction="column">
          <Grid item>
            <CheckoutCard
              cards={[
                {
                  cardHeader: "Title",
                  cardContent: "Adresas",
                  modalBody: <div>osifjosifjd</div>,
                  handleDelete: () => console.log("a"),
                },
                {
                  cardHeader: "Title",
                  cardContent: "Adresas",
                  modalBody: <div>osifjosifjd</div>,
                  handleDelete: () => console.log("b"),
                },
                {
                  cardHeader: "Title",
                  cardContent: "Adresas",
                  modalBody: <div>osifjosifjd</div>,
                  handleDelete: () => console.log("c"),
                },
                {
                  cardHeader: "Title",
                  cardContent: "Adresas",
                  modalBody: <div>osifjosifjd</div>,
                  handleDelete: () => console.log("d"),
                },
              ]}
              cardLabel="Delivery Address"
              cardNumber={1}
              isButton={true}
              cardButtonLabel="Pridėti adresą"
              modalContent={
                <Box className={classes.formWrapper}>
                  <Paper className={classes.paper} color="White">
                    <Typography
                      className={classes.dialogTitle}
                      align="center"
                      variant="h4"
                    >
                      Pridėkite adresą
                    </Typography>
                    <form
                      noValidate
                      autoComplete="off"
                      className={classes.form}
                    >
                      <TextField
                        className={classes.formField}
                        id="address-title"
                        label="Pavadinimas"
                        variant="outlined"
                      />
                      <TextField
                        className={classes.formField}
                        id="address"
                        label="Adresas"
                        variant="outlined"
                        multiline="true"
                      ></TextField>
                      <Button variant="outlined">
                        <Typography className={classes.text}>
                          Pridėti
                        </Typography>
                      </Button>
                    </form>
                  </Paper>
                </Box>
              }
            />
          </Grid>
          <Grid item>
            <CheckoutCard cardLabel="Delivery Schedule" cardNumber={2} />
          </Grid>
          <Grid item>
            <CheckoutCard
              cardLabel="Phone Number"
              cardNumber={3}
              isButton={true}
              cardButtonLabel="Pridėti telefono numerį"
              modalContent={
                <Box className={classes.formWrapper}>
                  <Paper className={classes.paper} color="White">
                    <Typography
                      className={classes.dialogTitle}
                      align="center"
                      variant="h4"
                    >
                      Pridėkite telefono numerį
                    </Typography>
                    <form
                      noValidate
                      autoComplete="off"
                      className={classes.form}
                    >
                      <TextField
                        className={classes.formField}
                        id="address-title"
                        label="Numeris"
                        variant="outlined"
                      />
                      <Button variant="outlined">
                        <Typography className={classes.text}>
                          Pridėti
                        </Typography>
                      </Button>
                    </form>
                  </Paper>
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} className={classes.orderRoot}>
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
