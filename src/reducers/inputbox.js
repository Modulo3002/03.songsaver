export const inputboxArtistReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_ARTIST":
      return action.payload;
    default:
      return state;
  }
};

export const inputboxSongReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SONG":
      return action.payload;
    default:
      return state;
  }
};

//hieronder voorbeeld van multi input in state.
//in de useSelector zou het dan state.inputboxReducer3.artist zijn. :) nb
// export const inputboxReducer3 = (state = { artist: "", song: "" }, action) => {
//   switch (action.type) {
//     case "CHANGE_SONG":
//       return { ...state, song: action.payload };
//     default:
//       return state;
//   }
// };
