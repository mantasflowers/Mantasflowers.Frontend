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

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      fontSize: 32,
      fontWeight: 500,
    },
    root: {
      maxWidth: 1140,
      margin: "0 auto",
      padding: 25,
      marginBottom: 30,
      backgroundColor: theme.palette.background.default,
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

function FeedbackForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    enqueueSnackbar("Ačiū!", {
      variant: "success",
    });
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Box mb={2}>
          <Typography variant="h2" component="h1" className={classes.pageTitle}>
            Atsiliepimas
          </Typography>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="el. paštas"
            name="email"
            inputRef={register({
              required: "laukas privalomas",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                message: "neteisingas el. pašto adresas",
              },
            })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="atsiliepimas"
            name="feedback"
            type="feedback"
            inputRef={register({ required: "laukas privalomas" })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.feedback && (
            <span style={{ color: "red" }}>{errors.feedback.message}</span>
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
            Siųsti atsiliepimą
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default FeedbackForm;
