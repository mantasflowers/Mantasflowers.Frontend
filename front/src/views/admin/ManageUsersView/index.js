import React from "react";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import RegisterForm from "components/AdminComponents/AdminRegistrationForm";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageTitle: {
      fontSize: 32,
      fontWeight: 500,
    },
    root: {
      padding: 20,
      margin: "0 auto",
      backgroundColor: theme.palette.background.paper,
      height: "100%",
      [theme.breakpoints.down("xs")]: {
        // padding: 10,
        // width: "90vw",
      },
    },
  })
);

function ManageUsers() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <RegisterForm />
    </Box>
  );
}

export default ManageUsers;
