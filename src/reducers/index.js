import { combineReducers } from "redux";
import { inputboxReducer, inputboxReducer2 } from "./inputbox";
import { dropdownReducer } from "./dropdown";

const allReducers = combineReducers({
  inputboxReducer,
  inputboxReducer2,
  dropdownReducer,
});

export default allReducers;
