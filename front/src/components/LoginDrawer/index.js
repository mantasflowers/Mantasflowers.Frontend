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
        style={{ textTransform: "initial" }}
      >
        {props.openDrawerName}
      </Button>

      <Box>
        <ReusableDrawer
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          anchor={"left"}
        >
          <LoginForm />
        </ReusableDrawer>
      </Box>
    </>
  );
}

export default LoginDrawer;
