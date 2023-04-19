export const dropdownGenreReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_GENRE":
      return action.payload;
    default:
      return state;
  }
};

export const dropdownRatingReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_RATING":
      return action.payload;
    default:
      return state;
  }
};
