import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
  Button,
  Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "react-feather";
import { useSelector } from "react-redux";
import { logout } from "../../../actions/accountActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../../../components/Logo";
import LoginDrawer from "../../../components/LoginDrawer";
import RegisterDrawer from "../../../components/RegisterDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,

    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 64,
  },
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/" style={{ textDecoration: "none" }}>
          {/* <Logo /> */}
          <Typography style={{ fontSize: 45, color: "#422426" }}>MF</Typography>
        </RouterLink>

        <Box ml={2} flexGrow={1}>
          {account.user === null ? (
            <Box style={{ display: "flex" }}>
              <LoginDrawer openDrawerName={"Prisijungti"} />
              <RegisterDrawer openDrawerName={"Registruotis"} />
            </Box>
          ) : (
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box style={{ display: "flex" }}>
                <Link
                  style={{ textDecoration: "none", zIndex: 1 }}
                  to="/profile-edit"
                >
                  <Button
                    style={{
                      textTransform: "initial",
                      marginRight: 10,
                      color: "#d8a56d",
                    }}
                    color="primary"
                    variant="contained"
                  >
                    Profilis
                  </Button>
                </Link>
                <Button
                  style={{
                    textTransform: "initial",
                    color: "#d8a56d",
                    marginRight: 10,
                  }}
                  onClick={() => {
                    handleLogout();
                  }}
                  color="primary"
                  variant="contained"
                >
                  Atsijungti
                </Button>
                <Link
                  style={{ textDecoration: "none", zIndex: 1 }}
                  to="/orders"
                >
                  <Button
                    color="primary"
                    variant="contained"
                    style={{ textTransform: "initial", color: "#d8a56d" }}
                  >
                    Užsakymai
                  </Button>
                </Link>
              </Box>
              <Box>
                {account.user.role === "admin" ? (
                  <Link
                    style={{ textDecoration: "none", zIndex: 1 }}
                    to="/admin"
                  >
                    <Button
                      style={{
                        textTransform: "initial",
                        marginRight: 10,
                        color: "#d8a56d",
                      }}
                      color="primary"
                      variant="contained"
                    >
                      Valdymo skydas
                    </Button>
                  </Link>
                ) : null}
              </Box>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func,
};

export default TopBar;
