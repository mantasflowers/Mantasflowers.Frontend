import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    firstRow: {
      display: "flex",
      alignItems: "center",
      "&:before": {
        borderRadius: "50%",
        backgroundColor: "Green",
        color: "White",
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    carLabel: {},
    iconButtonText: {
      fontSize: "14px",
    },
    labelContainer: {
      justifyContent: "space-between",
      //direction="row"
      // justify="space-between"
      // alignItems="center"
    },
    contentCardsWrapper: {
      marginTop: "35px",
    },
  })
);

const AddressCard = ({ handleCount, orderData, cardLabel }) => {
  const classes = useStyles();
  const [order, setOrder] = useState(null);
  const account = useSelector((state) => state.account);

  const cancelOrder = async (id) => {
    const response = await axios
      .put(
        `https://mantasflowers-backend.azurewebsites.net/order/${orderData.id}`,
        { status: "canceled" },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      )

      .catch((err) => {
        console.log({ err });
      });

    handleCount();
  };

  return (
    <Card style={{ backgroundColor: "#d8a56d", marginBottom: 20 }}>
      <CardContent>
        <Box className={classes.labelContainer}>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>
              {cardLabel} {orderData.id}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography>Statusas: {orderData.status}</Typography>
              <Link to={`/order/password=${orderData.uniquePassword}`}>
                <Typography>Peržiūrėti užsakymą</Typography>
              </Link>
            </Box>

            {orderData.status === "canceled" ? null : (
              <Box>
                <Button
                  color="primary"
                  variant="contained"
                  style={{ textTransform: "initial", color: "#d8a56d" }}
                  onClick={() => cancelOrder(orderData.id)}
                >
                  Atšaukti užsakymą
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
