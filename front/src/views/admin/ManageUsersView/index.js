import React from "react";
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import RegisterForm from "components/RegisterDrawer/RegisterForm";

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

function ManageUsers() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <RegisterForm />
    </Box>
  );
}

export default ManageUsers;
