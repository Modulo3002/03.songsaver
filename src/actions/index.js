export const changeArtist = (artistName) => {
  return {
    type: "CHANGE_ARTIST",
    payload: artistName,
  };
};

export const changeSong = (songName) => {
  return {
    type: "CHANGE_SONG",
    payload: songName,
  };
};
