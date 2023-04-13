import { combineReducers } from "redux";
import { inputboxReducer, inputboxReducer2 } from "./inputbox";

const allReducers = combineReducers({
  inputboxReducer,
  inputboxReducer2,
});

export default allReducers;
