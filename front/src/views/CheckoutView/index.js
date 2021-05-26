import AddressCard from "components/CheckoutComponents/AddressCard";
import PhoneCard from "components/CheckoutComponents/PhoneCard";
import ScheduleCard from "components/CheckoutComponents/ScheduleCard";
import CheckoutRow from "components/CheckoutComponents/CheckoutRow";
import CheckoutRowPrice from "components/CheckoutComponents/CheckoutRowPrice";
import Page from "components/Page";

import React, { useState } from "react";
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
import { useSelector } from "react-redux";

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
      backgroundColor: "#b5cb9f",
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
  const account = useSelector((state) => state.account);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { items, calculatePrice } = useCart();
  const { register, handleSubmit, errors, control } = useForm();
  const classes = useStyles();

  const deviceType = props.deviceType;

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    let id = Math.random().toString(36).substring(7);
    const price = calculatePrice();

    const shippingData = {
      identifier: id,
      order_reference: id,
      sender: {
        name: "Mantas Flowers",
        street: "Gedimino pr. 1",
        house: "1",
        apartment: "1",
        city: "Vilnius",
        postal_code: "11111",
        country_code: "LT",
        phone_number: "+37061234567",
        email: "flowers@mantasflowers.lt",
      },
      receiver: {
        name: formData.firstName + " " + formData.lastName,
        street: formData.street,
        city: formData.city,
        postal_code: formData.zipcode,
        country_code: "LT",
        phone_number: formData.phone,
        email: formData.email,
      },
      pickup: {
        type: "hands",
        packages: 1,
        package_sizes: ["small"],
        weight: 1,
      },
      delivery: {
        type: "hands",
        courier: formData.shipment,
      },
      services: [
        {
          enabled: 1,
          code: "saturday",
        },
        {
          enabled: 1,
          code: "cod",
          value: 3,
          currency: "EUR",
        },
      ],
      goods: {
        description: "Gėlės",
        value: price,
        currency: "EUR",
      },
    };

    const shippingResponse = await axios
      .post("https://api.multiparcels.com/v1/shipments", shippingData, {
        headers: {
          accept: "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer PO6tEuymftFn29e5GBDgAI0oALCJpRyq",
        },
      })
      .catch((error) => {
        console.log({ error });
        setIsSubmitting(false);
      });

    if (shippingResponse) {
      const confirmResponse = await axios
        .post(
          `https://api.multiparcels.com/v1/shipments/${shippingResponse.data.data.id}/confirm`,
          shippingResponse.data.data,
          {
            headers: {
              accept: "application/json",
              // "Content-Type": "application/x-www-form-urlencoded",
              Authorization: "Bearer PO6tEuymftFn29e5GBDgAI0oALCJpRyq",
            },
          }
        )
        .catch((error) => {
          console.log({ error });
          setIsSubmitting(false);
        });

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
            email: formData.email || "",
            phone: formData.phone,
          },
          message: formData.message || "",
          orderItems,
          shipment: {
            uid: shippingResponse.data.data.id,
          },
        },
        successUrl: `http://localhost:3000/order/`,
        cancelUrl: "http://localhost:3000",
      };

      const authorization = account.user
        ? `Bearer ${account.user.idToken}`
        : null;

      const sessionResponse = await axios
        .post(
          "https://mantasflowers-backend.azurewebsites.net/payment/create-checkout-session",
          data,
          {
            headers: {
              accept: "application/json",
              Authorization: authorization,
            },
          }
        )
        .catch((error) => {
          console.log({ error });
          setIsSubmitting(false);
        });

      let session = sessionResponse.data.id;

      const stripe = await stripePromise;

      const result = await stripe.redirectToCheckout({
        sessionId: session,
      });
    }
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
            <Typography className={classes.orderTitle}>
              Jūsų užsakymas
            </Typography>
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
                address={account.user ? account.user.address : null}
                cardLabel="Siuntimo adresas"
                cardNumber={1}
              />
            </Box>
            <Box mb={4}>
              <ScheduleCard
                cardLabel="Pristatymas"
                register={register}
                errors={errors}
                control={control}
                cardNumber={2}
              />
            </Box>
            <Box>
              <PhoneCard
                contactDetails={
                  account.user ? account.user.contactDetails : null
                }
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
                disabled={isSubmitting}
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
