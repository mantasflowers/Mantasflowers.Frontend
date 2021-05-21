/* eslint-disable no-param-reassign */
import produce from "immer";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  LOGOUT,
  SILENT_LOGIN,
  ADMIN_SUCCESS,
} from "../actions/accountActions";

const initialState = {
  user: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return produce(state, (draft) => {
        // Ensure we clear current session
        draft.user = null;
      });
    }

    case LOGIN_SUCCESS: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      });
    }

    case REGISTER_SUCCESS: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      });
    }

    case ADMIN_SUCCESS: {
      return produce(state, () => {});
    }

    case LOGIN_FAILURE: {
      return produce(state, () => {
        // Maybe store error
      });
    }

    case LOGOUT: {
      return produce(state, (draft) => {
        draft.user = null;
      });
    }

    case SILENT_LOGIN: {
      const { user } = action.payload;

      return produce(state, (draft) => {
        draft.user = user;
      });
    }

    default: {
      return state;
    }
  }
};

export default accountReducer;
