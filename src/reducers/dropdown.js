export const dropdownReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_DD_MENU_ITEM":
      return action.payload;
    default:
      return state;
  }
};
