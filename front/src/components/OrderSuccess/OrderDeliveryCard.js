import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardNumber: {
      borderRadius: "50%",
      backgroundColor: "Green",
      color: "White",
      width: "35px",
      height: "35px",
      display: "flex",
      justifyContent: "center",
    },
    firstRow: {
      display: "flex",
      alignItems: "center",
      "&:before": {
        content: (props) => `"${props.cardNumber}"`,
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
    carLabel: {
      marginLeft: "15px",
    },
    status: {
      fontSize: 30,
      color: "#422426",
      fontWeight: "bold",
      marginLeft: 10,
      marginRight: 20,
    },
    address: {
      fontSize: 20,
      color: "#422426",
      marginRight: 10,
    },
  })
);

const OrderDeliveryCard = ({ deliveryData, status, cardNumber, cardLabel }) => {
  const classes = useStyles({ cardNumber });

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Box className={classes.labelContainer}>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Box style={{ width: "100%" }}>
              <Typography className={classes.status}>
                Užsakymo statusas: {status}
              </Typography>
            </Box>
            <Box style={{ width: "100%" }}>
              <Typography className={classes.status}>
                Pristatymo statusas: Apdorojama
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                flexWrap: "nowrap",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography className={classes.status}>
                  Siuntimo adresas:
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.address}>
                  {deliveryData.country}
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.address}>
                  {deliveryData.city}
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.address}>
                  {deliveryData.street}
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.address}>
                  {deliveryData.zipcode}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box></Box>
      </CardContent>
    </Card>
  );
};

export default OrderDeliveryCard;
