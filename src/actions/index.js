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

export const changeSelectedGenre = (item) => {
  return {
    type: "CHANGE_GENRE",
    payload: item,
  };
};

export const changeSelectedRating = (item) => {
  return {
    type: "CHANGE_RATING",
    payload: item,
  };
};

export const updateListoverview = (Artist, Song, Genre, Rating) => {
  return {
    type: "ADD_TO_LIST",
    payload: { artist: Artist, song: Song, genre: Genre, rating: Rating },
  };
};
