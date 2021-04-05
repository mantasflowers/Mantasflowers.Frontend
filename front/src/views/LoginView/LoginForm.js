import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      fontSize: 32,
      fontWeight: 500,
    },
    root: {
      padding: 20,
      margin: theme.spacing(2, 0, 1, 0),
      width: "28vw",
      [theme.breakpoints.down("xs")]: {
        padding: 10,
        width: "90vw",
      },
    },

    button: {
      width: "100%",
      textTransform: "initial",
      height: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    error: {
      color: "#d9534f",
    },
  })
);

export default function LoginForm() {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    history.push("/chat");
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Paper className={classes.root}>
        <Box mb={2}>
          <Typography variant="h2" component="h1" className={classes.pageTitle}>
            SMH
          </Typography>
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            inputRef={register({
              required: "required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            variant="outlined"
            control={control}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            inputRef={register({ required: "required" })}
            variant="outlined"
            control={control}
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
            Login
          </Button>
        </Box>
      </Paper>
    </form>
  );
}
