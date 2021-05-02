import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

import ReusableDrawer from "../../components/ReusableDrawer";

function RegisterDrawer(props) {
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
          <h1>REGISTER</h1>
        </ReusableDrawer>
      </Box>
    </>
  );
}

export default RegisterDrawer;
