const inputboxReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_ARTIST":
      return action.payload;
    case "CHANGE_SONG":
      return action.payload;
    default:
      return state;
  }
};
export default inputboxReducer;
