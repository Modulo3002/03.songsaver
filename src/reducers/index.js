import { combineReducers } from "redux";
import inputboxReducer from "./inputbox";

const allReducers = combineReducers({
  inputboxReducer,
});

export default allReducers;
