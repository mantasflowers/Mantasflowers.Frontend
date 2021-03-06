import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
  TextField,
} from "@material-ui/core";

import CartItem from "./Item";

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

const AddressCard = ({ orderItems, cardNumber, cardLabel }) => {
  const classes = useStyles({ cardNumber });

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Box className={classes.labelContainer}>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Box>
          <Box>
            {orderItems.map((item) => {
              return <CartItem key={`cartItem-${item.id}`} data={item} />;
            })}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
