import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
} from "@material-ui/core";

import { Link } from "react-router-dom";

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

const AddressCard = ({ orderData, cardLabel }) => {
  const classes = useStyles();

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Box className={classes.labelContainer}>
          <Box item className={classes.firstRow}>
            <Typography className={classes.carLabel}>
              {cardLabel} {orderData.id}
            </Typography>
          </Box>
          <Box>
            <Typography>Statusas: {orderData.status}</Typography>
            <Link to={`/order/password=${orderData.uniquePassword}`}>
              <Typography>Peržiūrėti užsakymą</Typography>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
