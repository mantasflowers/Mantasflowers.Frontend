import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Box, Typography } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";

import OrderInformationCard from "components/AdminComponents/OrderInformationCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "130px 60px",

      flexDirection: "row",

      backgroundColor: theme.palette.background.paper,
    },
  })
);

function OrdersView(props) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);

  const [ordersData, setOrdersData] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://mantasflowers-backend.azurewebsites.net//order?page=1&pageSize=25&statuses=unpaid&statuses=in_shipping&statuses=completed&statuses=canceled&statuses=rejected`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      );

      console.log({ response });

      setOrdersData(response.data.items);
    };

    getData();
  }, [count]);

  const deviceType = props.deviceType;

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <Box className={classes.root}>
      {ordersData &&
        (ordersData.length < 1 ? (
          <Box style={{ marginLeft: 100 }}>
            <Typography variant="h1" style={{ fontWeight: "bold" }}>
              užsakymų nėra
            </Typography>
          </Box>
        ) : (
          <Box style={{ marginLeft: 100 }}>
            {ordersData.map((order) => {
              return (
                <OrderInformationCard
                  orderData={order}
                  cardLabel={"Užsakymas"}
                  handleCount={handleCount}
                />
              );
            })}
          </Box>
        ))}
    </Box>
  );
}
export default OrdersView;
