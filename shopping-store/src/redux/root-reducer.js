import { combineReducers } from "redux";
import userReducerState from "./user/user.reducer";
export default combineReducers({
  user: userReducerState 
});
