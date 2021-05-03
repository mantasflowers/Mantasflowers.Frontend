/**
 * @file Auth component to wrap around App.js and initiate auth check on app session open
 * @author Martynas Padarauskas
 */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setUserData, logout } from "../actions/accountActions";
import authService from "../services/authService";
import { CircularProgress } from "@material-ui/core";

function Auth({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      authService.setAxiosInterceptors({
        onLogout: () => dispatch(logout()),
      });

      authService.handleAuthentication();

      if (authService.isAuthenticated()) {
        const user = await authService.loginInWithToken();
        await dispatch(setUserData(user));
      }

      setLoading(false);
    };

    initAuth();
  }, [dispatch]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any,
};

export default Auth;
