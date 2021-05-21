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
import { registerAdminUser } from "../../actions/accountActions";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

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
      width: "340px",
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

function RegisterForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const account = useSelector((state) => state.account);

  const onSubmit = (data) => {
    dispatch(
      registerAdminUser(data.email, data.password, account.user.idToken)
    ).catch((error) => {
      enqueueSnackbar(error, {
        variant: "error",
      });
    });
  };

  return (
    <Box className={classes.root}>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Box mb={2}>
          <Typography variant="h2" component="h1" className={classes.pageTitle}>
            Sukurti paskyrą su valdymo skydo prieiga
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
            label="slaptažodis"
            name="password"
            type="password"
            inputRef={register({ required: "laukas privalomas" })}
            variant="outlined"
            control={control}
            className={classes.inputField}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
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
            Registruotis
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default RegisterForm;
