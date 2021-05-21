import React from "react";

import { Dialog, Typography, Button } from "@material-ui/core";
import RegisterForm from "components/RegisterDrawer/RegisterForm";

const RegisterDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography
        variant="h2"
        style={{
          padding: 10,
          color: "#424242",
          fontSize: 25,
          textAlign: "center",
        }}
      >
        Gal norėtumėte užsiregistruoti sistemoje ir matyti užsakymus?
      </Typography>
      <RegisterForm />
      <Button
        onClick={handleClose}
        style={{ textTransform: "initial", color: "#d8a56d" }}
        variant="contained"
        color="primary"
      >
        Nenoriu
      </Button>
    </Dialog>
  );
};

export default RegisterDialog;
