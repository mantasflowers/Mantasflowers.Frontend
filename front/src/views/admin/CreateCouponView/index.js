import React from "react";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import axios from "axios";

import FilesDropzone from "components/AdminComponents/FilesDropzone";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      fontSize: 32,
      fontWeight: 500,
      textAlign: "center",
    },
    root: {
      padding: 20,
      margin: "0 auto",

      height: "100%",
      backgroundColor: theme.palette.background.paper,

      [theme.breakpoints.down("xs")]: {
        // padding: 10,
        // width: "90vw",
      },
    },

    button: {
      width: "100%",
      textTransform: "initial",
      height: 40,
      color: "#d8a56d",
    },
    error: {
      color: "#d9534f",
    },
    inputField: {
      border: "1px solid lightblue",
      borderRadius: 4,
    },
  })
);

function CreateCouponView() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const account = useSelector((state) => state.account);

  const onSubmit = async (data) => {
    const couponData = {
      name: data.name,
      durationInMonths: data.durationInMonths,
      redeemBy: "2021-06-28T08:51:16.494Z",
      discountPrice: data.discountPrice,
      orderOverPrice: data.orderOverPrice,
    };

    const response = await axios
      .post(
        "https://mantasflowers-backend.azurewebsites.net/payment/create-coupon",
        couponData,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${account.user.idToken}`,
          },
        }
      )
      .catch((error) => {
        enqueueSnackbar("Sistemos klaida!", {
          variant: "error",
        });
      });
  };

  return (
    <Box className={classes.root}>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        style={{ width: "50%", margin: "0 auto" }}
      >
        <Box mb={2}>
          <Typography variant="h2" component="h1" className={classes.pageTitle}>
            Sukurti kuponą prekėms (kuponą atsiimti galima dvi savaites)
          </Typography>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="pavadinimas"
            name="name"
            inputRef={register({
              required: "laukas privalomas",
            })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="trukmė (mėnesiais)"
            name="durationInMonths"
            type="durationInMonths"
            inputRef={register({ required: "laukas privalomas" })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.durationInMonths && (
            <span style={{ color: "red" }}>
              {errors.durationInMonths.message}
            </span>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="nuolaidos suma "
            name="discountPrice"
            type="discountPrice"
            inputRef={register({ required: "laukas privalomas" })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.discountPrice && (
            <span style={{ color: "red" }}>{errors.discountPrice.message}</span>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="minimali kaina nuolaidos taikymui"
            name="orderOverPrice"
            type="orderOverPrice"
            inputRef={register({ required: "laukas privalomas" })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.orderOverPrice && (
            <span style={{ color: "red" }}>
              {errors.orderOverPrice.message}
            </span>
          )}
        </Box>

        <Box>
          <Button
            variant="contained"
            id="login-button"
            type="submit"
            className={classes.button}
            color="primary"
          >
            Sukurti
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateCouponView;
