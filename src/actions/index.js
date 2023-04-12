export const changeArtist = (artistName) => {
  return {
    type: "CHANGE_ARTIST",
    payload: artistName,
  };
};
