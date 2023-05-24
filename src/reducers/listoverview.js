export const listOverviewReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return [...state, action.payload];
    case "DELETE_LATEST_ENTRY":
      return [...state.slice(0, -1)]
    default:
      return state;
  }
};
 