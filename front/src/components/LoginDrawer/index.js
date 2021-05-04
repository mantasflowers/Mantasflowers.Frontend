import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import LoginForm from "./LoginForm";
import ReusableDrawer from "../../components/ReusableDrawer";

function LoginDrawer(props) {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <Button
        onClick={(event) => {
          event.preventDefault();
          setIsShowing(true);
        }}
        style={{ textTransform: "initial", marginRight: 10, color: "#d8a56d" }}
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
          <LoginForm />
        </ReusableDrawer>
      </Box>
    </>
  );
}

export default LoginDrawer;
