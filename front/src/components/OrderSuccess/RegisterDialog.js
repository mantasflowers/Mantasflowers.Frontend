import React from "react";

import { Dialog, Typography } from "@material-ui/core";
import RegisterForm from "components/RegisterDrawer/RegisterForm";

const RegisterDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <Typography>Neprivaloma registracija</Typography>
      <RegisterForm />
    </Dialog>
  );
};

export default RegisterDialog;
