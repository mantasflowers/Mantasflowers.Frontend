import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import axios from "axios";
import { useSelector } from "react-redux";

import Page from "components/Page";
import OrderDeliveryCard from "components/OrderSuccess/OrderDeliveryCard";
import OrderInformationCard from "components/OrderSuccess/OrderInformationCard";
import RegisterDialog from "components/OrderSuccess/RegisterDialog";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "130px 60px",
      height: "100%",
      flexDirection: "row",
      minHeight: 920,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function CheckoutView(props) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);

  const [orderData, setOrderData] = useState(null);
  const [isOpen, setIsOpen] = useState(account.user ? false : true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      const [, password] = params.password.split("=");
      const response = await axios.post(
        `https://mantasflowers-backend.azurewebsites.net/order/get-order?password=${password}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      setOrderData(response.data);
    };

    getData();
  }, []);

  const deviceType = props.deviceType;

  return (
    <Page>
      {orderData && (
        <Box className={classes.root}>
          <Box mb={4}>
            <OrderDeliveryCard
              deliveryData={orderData.address}
              status="Laukiama apmokėjimo"
              cardLabel="Siuntimo informacija"
              cardNumber={1}
            />
          </Box>
          <Box mb={4}>
            <OrderInformationCard
              orderItems={orderData.orderItems}
              cardLabel="Užsakymo informacija"
              cardNumber={2}
            />
          </Box>
        </Box>
      )}

      <RegisterDialog open={isOpen} handleClose={handleClose} />
    </Page>
  );
}
export default CheckoutView;
