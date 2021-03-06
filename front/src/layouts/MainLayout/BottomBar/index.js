import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Hidden,
  // IconButton,
  Toolbar,
  makeStyles,
  // SvgIcon,
} from "@material-ui/core";
// import { Menu as MenuIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,

    backgroundColor: theme.palette.background.default,
    height: "128px",
    width: "100%",
    position: "relative",
  },
  toolbar: {},
}));

function BottomBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdDown>
          <RouterLink to="/">{/* <Logo /> */}</RouterLink>
        </Hidden>
        <Box ml={2} flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

BottomBar.propTypes = {
  className: PropTypes.string,
};

export default BottomBar;
