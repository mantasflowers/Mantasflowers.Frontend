import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Dialog,
  IconButton,
  Grid,
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

import { useState } from "react";
import ContentCard from "./ContentCard";

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

const CheckoutCard = ({
  cardNumber,
  cardLabel,
  isButton,
  modalContent,
  cards,
  cardButtonLabel,
}) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ cardNumber });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <Grid className={classes.labelContainer} container>
          <Grid item className={classes.firstRow}>
            <Typography className={classes.carLabel}>{cardLabel}</Typography>
          </Grid>
          <Grid item>
            {isButton && (
              <>
                <IconButton
                  className={classes.popupButton}
                  onClick={handleOpen}
                >
                  <Add />
                  <Typography className={classes.iconButtonText}>
                    {cardButtonLabel}
                  </Typography>
                </IconButton>
                <Dialog open={open} onClose={handleClose}>
                  {modalContent}
                </Dialog>
              </>
            )}
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.contentCardsWrapper}>
          {cards?.map((config, index) => (
            <Grid item key={index} xs={4}>
              <ContentCard
                cardHeader={config.cardHeader}
                cardContent={config.cardContent}
                modalBody={config.modalBody}
                handleDelete={config.handleDelete}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CheckoutCard;
