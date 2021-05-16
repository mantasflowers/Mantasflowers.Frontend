import React from "react";
import { makeStyles, Box, SwipeableDrawer } from "@material-ui/core";

const useStyles = makeStyles({});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();

  const setIsShowing = props.setIsShowing;

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsShowing(false);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={props.anchor}
        open={props.isShowing}
        onClose={toggleDrawer(false)}
        onOpen={() => {}}
        style={{ zIndex: 1302 }}
      >
        <Box style={props.mobile ? { width: "375px" } : { width: "340px" }}>
          {props.children}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
