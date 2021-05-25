import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Box, Typography } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";

import Page from "components/Page";
import OrderInformationCard from "components/UserOrdersComponents/OrderInformationCard";

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

function UserOrdersView(props) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);

  const [ordersData, setOrdersData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://mantasflowers-backend.azurewebsites.net/order/get-user-orders`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      );

      setOrdersData(response.data.userOrders);
    };

    getData();
  }, []);

  const deviceType = props.deviceType;

  return (
    <Page>
      <Box className={classes.root}>
        {ordersData &&
          (ordersData.length < 1 ? (
            <Typography variant="h1" style={{ fontWeight: "bold" }}>
              užsakymų nėra
            </Typography>
          ) : (
            <Box>
              {ordersData.map((order) => {
                return (
                  <OrderInformationCard
                    orderData={order}
                    cardLabel={"Užsakymas"}
                  />
                );
              })}
            </Box>
          ))}
      </Box>
    </Page>
  );
}
export default UserOrdersView;
