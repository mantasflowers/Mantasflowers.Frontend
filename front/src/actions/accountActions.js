/**
 * @file Actions for everything related to user accounts
 * @author Martynas Padarauskas
 */

import authService from "../services/authService";

export const LOGIN_REQUEST = "@account/login-request";
export const LOGIN_SUCCESS = "@account/login-success";
export const LOGIN_FAILURE = "@account/login-failure";
export const SILENT_LOGIN = "@account/silent-login";
export const LOGOUT = "@account/logout";
export const REGISTER_REQUEST = "@account/register-request";
export const REGISTER_SUCCESS = "@account/register-success";
export const REGISTER_FAILURE = "@account/register-failure";
export const SET_CURRENT_USER = "@account/set-current-user";

/**
 * function to dispatch redux LOGIN_REQUEST and call the authService logic component to validate ant set UserToken to localstorage
 * @param {String} email
 * @param {String} password
 */

export function login(email, password) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const user = await authService.loginWithEmailAndPassword(email, password);

      console.log("user in actions", user);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE });
      throw error;
    }
  };
}

/**
 * function to set UserData to redux store
 * @param {Object} user
 */

export function setUserData(user) {
  return (dispatch) =>
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user,
      },
    });
}

/**
 * function which calls authService to delete the UserToken from localStorage -> logout
 */

export function logout() {
  return async (dispatch) => {
    authService.logout();

    dispatch({
      type: LOGOUT,
    });
  };
}

/**
 * function to register an user
 * @param {Object} data
 */

export function register(data) {
  return async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST });

      const user = await authService.registerUser(data);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user,
        },
      });
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE });
      throw error;
    }
  };
}
