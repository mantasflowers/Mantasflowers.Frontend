import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Grid,
} from "@material-ui/core";

import { useState } from "react";

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

const ScheduleCard = ({ cardNumber, cardLabel }) => {
  const classes = useStyles({ cardNumber });

  return (
    <Card style={{ backgroundColor: "#d8a56d" }}>
      <CardContent>
        <Grid className={classes.labelContainer} container>
          <Grid item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
