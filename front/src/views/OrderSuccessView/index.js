import AddressCard from "components/CheckoutComponents/AddressCard";
import PhoneCard from "components/CheckoutComponents/PhoneCard";
import ScheduleCard from "components/CheckoutComponents/ScheduleCard";
import CheckoutRow from "components/CheckoutComponents/CheckoutRow";
import CheckoutRowPrice from "components/CheckoutComponents/CheckoutRowPrice";
import Page from "components/Page";

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
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import { useCart } from "contexts/cart/useCart";

const stripePromise = loadStripe(
  "pk_test_51Igv2bJFSFc1om1g2TGzizlxDxmr6yQxDXfrHjenpFWkfNcA4iI1VM1mc3rpyomh6gqXvn4DugrTX6dCFUS48plT007nejRoxe"
);

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
      maxWidth: 800,
      margin: "0 auto",
      order: 1,
      [theme.breakpoints.down("sm")]: {
        order: 2,
      },
    },
    orderTitle: {
      fontWeight: "bold",
      textAlign: "center",
    },
    orderRoot: {
      paddingTop: "20px",
      maxWidth: "270px",
      margin: "0 auto",
      order: 2,
      // [theme.breakpoints.down("lg")]: {
      //   width: "260px",
      //   justifyContent: "center",
      //   maxWidth: "unset",
      //   order: 1,
      // },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        justifyContent: "center",
        order: 1,
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
    button: {
      width: "100%",
      textTransform: "initial",
      height: 40,
      color: "#d8a56d",
    },
  })
);

function CheckoutView(props) {
  const { items, calculatePrice } = useCart();
  const { register, handleSubmit, errors, control } = useForm();
  const classes = useStyles();

  const deviceType = props.deviceType;

  const onSubmit = async (formData) => {
    const orderItems = items.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
        unitPrice: item.price,
      };
    });

    const data = {
      order: {
        address: {
          country: formData.country,
          city: formData.city,
          street: formData.street,
          zipcode: formData.zipcode,
        },
        contactDetails: {
          email: formData.email,
          phone: formData.phone,
        },
        message: "smh",
        orderItems,
      },
      successUrl: "http://localhost:3000/order-success",
      cancelUrl: "http://localhost:3000",
    };

    const sessionResponse = await axios
      .post(
        "https://mantasflowers-backend.azurewebsites.net/payment/create-checkout-session",
        data,
        {
          headers: {
            accept: "application/json",
          },
        }
      )
      .catch((error) => {
        console.log({ error });
      });

    console.log({ sessionResponse });

    let session = sessionResponse.data.id;

    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: session,
    });
  };

  return (
    <Page>
      <Grid
        container
        className={classes.root}
        direction={deviceType.mobile ? "column" : "row"}
      >
        <Grid item xs={12} sm={3} className={classes.orderRoot}>
          <Box item marginBottom="20px">
            <Typography className={classes.orderTitle}>Your order</Typography>
          </Box>

          <Box>
            {items.map((item) => {
              return (
                <CheckoutRow
                  productLabel={item.name}
                  productPrice={item.price}
                  productAmount={item.quantity}
                />
              );
            })}

            <Divider variant="fullWidth" className={classes.orderDivider} />
          </Box>

          <Box item>
            <CheckoutRowPrice
              productLabel="Kaina"
              productPrice={calculatePrice()}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={9} className={classes.cardsRoot}>
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <Box mb={4}>
              <AddressCard
                register={register}
                errors={errors}
                control={control}
                cardLabel="Siuntimo adresas"
                cardNumber={1}
              />
            </Box>
            <Box mb={4}>
              <ScheduleCard cardLabel="Pristatymas" cardNumber={2} />
            </Box>
            <Box>
              <PhoneCard
                register={register}
                errors={errors}
                control={control}
                cardLabel="Kontaktinė informacija"
                cardNumber={3}
              />
            </Box>

            <Box mt={4}>
              <Button
                variant="contained"
                id="checkout-button"
                type="submit"
                className={classes.button}
                color="primary"
              >
                Užsakyti
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
}
export default CheckoutView;
