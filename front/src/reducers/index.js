import { combineReducers } from "redux";

import chatReducer from "./chatReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  account: accountReducer,
});

export default rootReducer;
