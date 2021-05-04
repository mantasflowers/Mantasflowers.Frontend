import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import ReusableDrawer from "../../components/ReusableDrawer";
import RegisterForm from "./RegisterForm";

function RegisterDrawer(props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <Button
        onClick={(event) => {
          event.preventDefault();
          setIsShowing(true);
        }}
        style={{ textTransform: "initial", color: "#d8a56d" }}
        color="primary"
        variant="contained"
      >
        {props.openDrawerName}
      </Button>

      <Box>
        <ReusableDrawer
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          anchor={"left"}
          mobile={false}
        >
          <RegisterForm />
        </ReusableDrawer>
      </Box>
    </>
  );
}

export default RegisterDrawer;
