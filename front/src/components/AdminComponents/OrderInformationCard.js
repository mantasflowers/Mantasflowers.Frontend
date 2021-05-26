import {
  CardContent,
  Card,
  Typography,
  createStyles,
  makeStyles,
  Box,
  Button,
  Dialog,
  TextField,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";

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
  const { register, handleSubmit, errors, control } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [order, setOrder] = useState(null);
  const account = useSelector((state) => state.account);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async (data) => {
    console.log({ data });
    // const response = await axios
    //   .put(
    //     `https://mantasflowers-backend.azurewebsites.net/order/${orderData.id}`,
    //     { status: "canceled", rejectMessage: data.message },
    //     {
    //       headers: {
    //         accept: "application/json",
    //         Authorization: `Bearer ${account.user.idToken}`,
    //       },
    //     }
    //   )

    //   .catch((err) => {
    //     console.log({ err });
    //   });

    // if (response) {
    //   handleClose();
    //   handleCount();
    // }
  };

  return (
    <>
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
                    onClick={handleOpen}
                  >
                    Atšaukti užsakymą
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          style={{ padding: 20 }}
        >
          <Typography
            variant="h4"
            component="h2"
            className={classes.productTitle}
          >
            Įveskite atšaukimo priežastį
          </Typography>

          <Box mb={2} mt={2}>
            <TextField
              fullWidth
              label="priežastis"
              name="message"
              inputRef={register({
                required: "laukas privalomas",
              })}
              variant="outlined"
              control={control}
              className={classes.inputField}
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message.message}</span>
            )}
          </Box>

          <Box
            mt={2}
            style={{ display: "flex", flexWrap: "nowrap", padding: 10 }}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                color: "#d8a56d",
                textTransform: "initial",
                width: "50%",
                marginRight: 10,
              }}
            >
              Atšaukti užsakymą
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{
                color: "#d8a56d",
                textTransform: "initial",
                width: "50%",
              }}
              onClick={handleClose}
            >
              Grįžti
            </Button>
          </Box>
        </form>
      </Dialog>
    </>
  );
};

export default AddressCard;
