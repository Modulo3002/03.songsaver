import { combineReducers } from "redux";
import { inputboxArtistReducer, inputboxSongReducer } from "./inputbox";
import { dropdownGenreReducer, dropdownRatingReducer } from "./dropdown";
import { listOverviewReducer } from "./listoverview";

const allReducers = combineReducers({
  inputboxArtistReducer,
  inputboxSongReducer,
  dropdownGenreReducer,
  dropdownRatingReducer,
  listOverviewReducer,
});

export default allReducers;
